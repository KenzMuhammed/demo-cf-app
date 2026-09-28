#!/usr/bin/env bash
# Creates the "Valoriz IaC" Cloudflare API token directly via the Cloudflare API,
# scoped to Entire Account + All zones, using the permission groups defined in
# cloudflare-token-permissions.json. Avoids the manual dashboard step (and the
# plan/entitlement-dependent permission drops that can happen there).
#
# Requires a one-time bootstrap token, created manually in the Cloudflare
# dashboard, with permission "Account API Tokens: Edit" scoped to Entire Account.
#
# Usage:
#   CF_BOOTSTRAP_TOKEN=xxx ./create-iac-token.sh [token-name]
# Default token name: "valoriz-iac"
#
# To generate S3-compatible R2 credentials scoped to a specific environment's buckets,
# use create-nexus-token.sh instead.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PERMISSIONS_FILE="$SCRIPT_DIR/cloudflare-token-permissions.json"
TOKEN_NAME="${1:-valoriz-iac}"

if [[ -z "${CF_BOOTSTRAP_TOKEN:-}" ]]; then
  echo "Error: CF_BOOTSTRAP_TOKEN is not set" >&2
  exit 1
fi

CONFIG_FILE="$SCRIPT_DIR/iac-config.json"
if [[ ! -f "$CONFIG_FILE" ]]; then
  echo "Error: $CONFIG_FILE not found" >&2
  exit 1
fi

if ! command -v jq &>/dev/null; then
  echo "Error: jq is required" >&2
  exit 1
fi

CF_ACCOUNT_ID=$(jq -r '.cloudflare.account_id // empty' "$CONFIG_FILE")
if [[ -z "$CF_ACCOUNT_ID" ]]; then
  echo "Error: cloudflare.account_id not found in $CONFIG_FILE" >&2
  exit 1
fi

if ! command -v python3 &>/dev/null; then
  echo "Error: python3 is required" >&2
  exit 1
fi

if [[ ! -f "$PERMISSIONS_FILE" ]]; then
  echo "Error: $PERMISSIONS_FILE not found" >&2
  exit 1
fi

CREATE_BODY="$(curl -sS \
  -H "Authorization: Bearer $CF_BOOTSTRAP_TOKEN" \
  "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/tokens/permission_groups" |
PERMISSIONS_FILE="$PERMISSIONS_FILE" TOKEN_NAME="$TOKEN_NAME" CF_ACCOUNT_ID="$CF_ACCOUNT_ID" python3 -c '
import os, sys, json

permissions_file = os.environ["PERMISSIONS_FILE"]
token_name = os.environ["TOKEN_NAME"]
account_id = os.environ["CF_ACCOUNT_ID"]

with open(permissions_file) as f:
    wanted = json.load(f)

available = json.loads(sys.stdin.read())
if not available.get("success"):
    print("Error: failed to fetch permission groups:", json.dumps(available.get("errors")), file=sys.stderr)
    sys.exit(1)

by_name = {g["name"]: g["id"] for g in available["result"]}

missing = [p["name"] for p in wanted if p["name"] not in by_name]
if missing:
    print("Error: these permission groups are not available on this account:", file=sys.stderr)
    for name in missing:
        print(f"  - {name}", file=sys.stderr)
    print("\nAvailable permission groups on this account:", file=sys.stderr)
    for name in sorted(by_name):
        print(f"  - {name}", file=sys.stderr)
    sys.exit(1)

def policy(scope):
    groups = [{"id": by_name[p["name"]]} for p in wanted if p["scope"] == scope]
    if scope == "account":
        resources = {f"com.cloudflare.api.account.{account_id}": "*"}
    else:
        resources = {f"com.cloudflare.api.account.{account_id}": {"com.cloudflare.api.account.zone.*": "*"}}
    return {"effect": "allow", "permission_groups": groups, "resources": resources}

body = {
    "name": token_name,
    "policies": [policy("account"), policy("zone")],
}
print(json.dumps(body))
')"

curl -sS -X POST \
  -H "Authorization: Bearer $CF_BOOTSTRAP_TOKEN" \
  -H "Content-Type: application/json" \
  --data "$CREATE_BODY" \
  "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/tokens" | python3 -c '
import json, sys
resp = json.load(sys.stdin)
if not resp.get("success"):
    print("Error creating token:", json.dumps(resp.get("errors")), file=sys.stderr)
    sys.exit(1)
result = resp["result"]
token_value = result["value"]
print("Token created successfully. Store this value as the CF_API_TOKEN repository secret immediately — it will not be shown again:")
print()
print(token_value)
print()
print("Next: run create-nexus-token.sh to generate scoped S3 credentials for a specific environment.")
'
