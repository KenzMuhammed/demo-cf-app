#!/usr/bin/env bash
# Creates a Cloudflare API token scoped to specific R2 buckets for a given environment,
# reading the bucket names from iac-config.json.
# Prints the S3-compatible Access Key ID and Secret Access Key for those buckets.
#
# Usage:
#   CF_BOOTSTRAP_TOKEN=xxx ./create-nexus-token.sh <env>
#
# - CF_BOOTSTRAP_TOKEN: A token with "Account → API Tokens: Edit" permission.
#                        Same bootstrap token used by create-cf-token.sh.
#                        Used to: look up permission groups + create the new token.
# - <env>:               Environment name (e.g., dev, qa, prod) to read from iac-config.json.

set -euo pipefail

ENV_NAME="${1:-}"

if [[ -z "$ENV_NAME" ]]; then
  echo "Usage: ./create-nexus-token.sh <environment>" >&2
  exit 1
fi

if [[ -z "${CF_BOOTSTRAP_TOKEN:-}" ]]; then
  echo "Error: CF_BOOTSTRAP_TOKEN is not set" >&2
  echo "  This is the bootstrap token with 'Account → API Tokens: Edit' permission." >&2
  exit 1
fi



for cmd in curl python3 jq; do
  if ! command -v "$cmd" &>/dev/null; then
    echo "Error: '$cmd' is required but not installed" >&2
    exit 1
  fi
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/iac-config.json"

if [[ ! -f "$CONFIG_FILE" ]]; then
  echo "Error: $CONFIG_FILE not found" >&2
  exit 1
fi

CF_ACCOUNT_ID=$(jq -r '.cloudflare.account_id // empty' "$CONFIG_FILE")
if [[ -z "$CF_ACCOUNT_ID" ]]; then
  echo "Error: cloudflare.account_id not found in $CONFIG_FILE" >&2
  exit 1
fi

PROJECT_NAME=$(jq -r '.project_name // empty' "$CONFIG_FILE")
if [[ -z "$PROJECT_NAME" ]]; then
  echo "Error: top-level 'project_name' field not found in $CONFIG_FILE" >&2
  exit 1
fi



# ── Step 1: Read buckets and zone IDs from iac-config.json ──────────────────

echo "Fetching R2 buckets for environment '$ENV_NAME' from iac-config.json..."

BUCKET_NAMES=$(jq -r --arg env "$ENV_NAME" '
  .environments[$env].applications[]? | 
  select(.r2_bucket_name != null) | 
  .r2_bucket_name' "$CONFIG_FILE")

if [[ -z "$BUCKET_NAMES" ]]; then
  echo "Error: No R2 buckets found for environment '$ENV_NAME' in $CONFIG_FILE" >&2
  exit 1
fi

SELECTED_BUCKETS=()
while IFS= read -r bucket; do
  if [[ -n "$bucket" ]]; then
    SELECTED_BUCKETS+=("$bucket")
  fi
done <<< "$BUCKET_NAMES"

echo "Buckets selected for environment '$ENV_NAME':"
for b in "${SELECTED_BUCKETS[@]}"; do
  echo "  - $b"
done

# Read unique zone IDs for the environment (from worker_custom_domains and pages_custom_domain)
ZONE_IDS=$(jq -r --arg env "$ENV_NAME" '
  .environments[$env].applications[]? |
  (
    (.worker_custom_domains[]?.zone_id // empty),
    (.pages_custom_domain.zone_id // empty)
  )' "$CONFIG_FILE" | sort -u)

if [[ -z "$ZONE_IDS" ]]; then
  echo "Error: No zone IDs found for environment '$ENV_NAME' in $CONFIG_FILE" >&2
  exit 1
fi

SELECTED_ZONES=()
while IFS= read -r zone_id; do
  if [[ -n "$zone_id" ]]; then
    SELECTED_ZONES+=("$zone_id")
  fi
done <<< "$ZONE_IDS"

echo "Zones selected for environment '$ENV_NAME':"
for z in "${SELECTED_ZONES[@]}"; do
  echo "  - $z"
done

# ── Step 2: Access level ─────────────────────────────────────────────────────

ACCESS_LABEL="write"
R2_PERMISSION_FILTERS=("Workers R2 Storage Bucket Item Write" "Workers R2 Storage Bucket Item Read")
ZONE_PERMISSION_FILTERS=("Cache Purge")

# ── Step 3: Look up permission group IDs ─────────────────────────────────────

echo ""
echo "Fetching permission groups..."

PERM_GROUPS=$(curl -sS \
  -H "Authorization: Bearer $CF_BOOTSTRAP_TOKEN" \
  "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/tokens/permission_groups")

if [[ "$(echo "$PERM_GROUPS" | jq -r '.success')" != "true" ]]; then
  echo "Error: Failed to fetch permission groups." >&2
  echo "$PERM_GROUPS" | jq '.errors' >&2
  exit 1
fi

# R2 permissions (scoped to bucket resources)
R2_PERM_IDS_JSON="[]"
for filter in "${R2_PERMISSION_FILTERS[@]}"; do
  pid=$(echo "$PERM_GROUPS" | jq -r --arg name "$filter" \
    '.result[] | select(.name == $name) | .id // empty')

  if [[ -z "$pid" ]]; then
    echo "Error: Could not find permission group '$filter'." >&2
    exit 1
  fi

  echo "  Found: '$filter' (id: $pid)"
  R2_PERM_IDS_JSON=$(echo "$R2_PERM_IDS_JSON" | jq --arg id "$pid" '. + [{id: $id}]')
done

# Zone permissions (Cache Purge — must be scoped to zone resources, not R2 buckets)
ZONE_PERM_IDS_JSON="[]"
for filter in "${ZONE_PERMISSION_FILTERS[@]}"; do
  pid=$(echo "$PERM_GROUPS" | jq -r --arg name "$filter" \
    '.result[] | select(.name == $name) | .id // empty')

  if [[ -z "$pid" ]]; then
    echo "Error: Could not find permission group '$filter'." >&2
    exit 1
  fi

  echo "  Found: '$filter' (id: $pid)"
  ZONE_PERM_IDS_JSON=$(echo "$ZONE_PERM_IDS_JSON" | jq --arg id "$pid" '. + [{id: $id}]')
done

# ── Step 4: Build token payload ──────────────────────────────────────────────

BUCKET_LIST_STR=$(IFS=", "; echo "${SELECTED_BUCKETS[*]}")
TOKEN_NAME="valoriz-nexus-${PROJECT_NAME}-${ENV_NAME}"

# Build R2 bucket resources
R2_RESOURCES_JSON=$(ACCOUNT_ID="$CF_ACCOUNT_ID" \
  BUCKET_LIST="${SELECTED_BUCKETS[*]}" \
  python3 << 'PYEOF'
import json, os
account_id = os.environ["ACCOUNT_ID"]
buckets = os.environ["BUCKET_LIST"].split()
resources = {
    "com.cloudflare.edge.r2.bucket.{}_default_{}".format(account_id, b): "*"
    for b in buckets
}
print(json.dumps(resources))
PYEOF
)

# Build zone resources (one entry per unique zone ID)
ZONE_RESOURCES_JSON=$(ZONE_LIST="${SELECTED_ZONES[*]}" \
  python3 << 'PYEOF'
import json, os
zones = os.environ["ZONE_LIST"].split()
resources = {
    "com.cloudflare.api.account.zone.{}".format(z): "*"
    for z in zones
}
print(json.dumps(resources))
PYEOF
)

CREATE_BODY=$(jq -n \
  --arg name "$TOKEN_NAME" \
  --argjson r2_perm_groups "$R2_PERM_IDS_JSON" \
  --argjson r2_resources "$R2_RESOURCES_JSON" \
  --argjson zone_perm_groups "$ZONE_PERM_IDS_JSON" \
  --argjson zone_resources "$ZONE_RESOURCES_JSON" \
  '{
    name: $name,
    policies: [
      {
        effect: "allow",
        permission_groups: $r2_perm_groups,
        resources: $r2_resources
      },
      {
        effect: "allow",
        permission_groups: $zone_perm_groups,
        resources: $zone_resources
      }
    ]
  }')

# ── Step 5: Create the token ─────────────────────────────────────────────────

echo ""
echo "Creating token '$TOKEN_NAME' scoped to: $BUCKET_LIST_STR ($ACCESS_LABEL)..."
echo ""

TOKEN_RESPONSE=$(curl -sS -X POST \
  -H "Authorization: Bearer $CF_BOOTSTRAP_TOKEN" \
  -H "Content-Type: application/json" \
  --data "$CREATE_BODY" \
  "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/tokens")

CF_TOKEN_RESPONSE="$TOKEN_RESPONSE" python3 << 'PYEOF'
import hashlib, json, os, sys

resp = json.loads(os.environ["CF_TOKEN_RESPONSE"])
if not resp.get("success"):
    print("Error creating token:", json.dumps(resp.get("errors"), indent=2), file=sys.stderr)
    sys.exit(1)

result = resp["result"]
token_value = result["value"]
access_key_id = result["id"]
secret_access_key = hashlib.sha256(token_value.encode()).hexdigest()
token_name = result["name"]

print("=" * 60)
print("R2 Token created successfully!")
print("=" * 60)
print()
print(f"  Token Name       : {token_name}")
print(f"  API Token Value  : {token_value}")
print(f"  Access Key ID    : {access_key_id}")
print(f"  Secret Access Key: {secret_access_key}")
print()
print("S3 Endpoint: https://<ACCOUNT_ID>.r2.cloudflarestorage.com")
print()
print("AWS CLI example:")
print(f"  aws s3 ls s3://<your-bucket>/ \\")
print(f"    --endpoint-url https://<ACCOUNT_ID>.r2.cloudflarestorage.com \\")
print(f"    --access-key-id {access_key_id} \\")
print(f"    --secret-access-key {secret_access_key}")
print()
print("Warning: Store the Secret Access Key now — it will NOT be shown again.")
print("=" * 60)
PYEOF
