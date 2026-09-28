#!/usr/bin/env bash
# Lists Cloudflare API tokens on the account that have NEVER been used
# (last_used_on is null) and deletes them, e.g. to clean up the pile of
# test tokens created while iterating on create-iac-token.sh /
# create-nexus-token.sh.
#
# Requires the same bootstrap token used by those scripts, with permission
# "Account API Tokens: Edit" scoped to Entire Account.
#
# Usage:
#   CF_BOOTSTRAP_TOKEN=xxx ./delete-unused-tokens.sh [name-filter] [--yes] [--account-id=xxx]
#
#   [name-filter]     Only consider tokens whose name contains this substring
#                     (default: "valoriz-", to avoid touching unrelated tokens).
#   --yes             Skip the confirmation prompt and delete immediately.
#   --account-id=xxx  Override the Cloudflare account ID instead of reading it
#                     from iac-config.json (useful if that file isn't filled
#                     in yet, or you want to target a different account).
#
# By default the script only PRINTS the tokens it would delete. Nothing is
# deleted unless you confirm (or pass --yes).
#
# The bootstrap token itself, and any token without a "never used" status,
# are never touched.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/iac-config.json"

AUTO_YES=false
NAME_FILTER="valoriz-"
ACCOUNT_ID_OVERRIDE=""
for arg in "$@"; do
  case "$arg" in
    --yes) AUTO_YES=true ;;
    --account-id=*) ACCOUNT_ID_OVERRIDE="${arg#--account-id=}" ;;
    *) NAME_FILTER="$arg" ;;
  esac
done

if [[ -z "${CF_BOOTSTRAP_TOKEN:-}" ]]; then
  echo "Error: CF_BOOTSTRAP_TOKEN is not set" >&2
  echo "  This is the bootstrap token with 'Account → API Tokens: Edit' permission." >&2
  exit 1
fi

for cmd in curl jq python3; do
  if ! command -v "$cmd" &>/dev/null; then
    echo "Error: '$cmd' is required but not installed" >&2
    exit 1
  fi
done

if [[ -n "$ACCOUNT_ID_OVERRIDE" ]]; then
  CF_ACCOUNT_ID="$ACCOUNT_ID_OVERRIDE"
else
  if [[ ! -f "$CONFIG_FILE" ]]; then
    echo "Error: $CONFIG_FILE not found" >&2
    exit 1
  fi

  CF_ACCOUNT_ID=$(jq -r '.cloudflare.account_id // empty' "$CONFIG_FILE")
  if [[ -z "$CF_ACCOUNT_ID" ]]; then
    echo "Error: cloudflare.account_id not found in $CONFIG_FILE" >&2
    exit 1
  fi
fi

# ── Step 1: Identify the bootstrap token itself, so we never delete it ──────

SELF_ID=$(curl -sS \
  -H "Authorization: Bearer $CF_BOOTSTRAP_TOKEN" \
  "https://api.cloudflare.com/client/v4/user/tokens/verify" | jq -r '.result.id // empty')

# ── Step 2: List all account tokens ─────────────────────────────────────────

echo "Fetching tokens for account $CF_ACCOUNT_ID..."

TOKENS_RESPONSE=$(curl -sS \
  -H "Authorization: Bearer $CF_BOOTSTRAP_TOKEN" \
  "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/tokens")

if [[ "$(echo "$TOKENS_RESPONSE" | jq -r '.success')" != "true" ]]; then
  echo "Error: Failed to fetch tokens." >&2
  echo "$TOKENS_RESPONSE" | jq '.errors' >&2
  exit 1
fi

UNUSED_JSON=$(echo "$TOKENS_RESPONSE" | jq --arg self "$SELF_ID" --arg filter "$NAME_FILTER" '
  [.result[] |
    select(.last_used_on == null) |
    select($filter == "" or (.name | contains($filter))) |
    select(.id != $self)]
')

COUNT=$(echo "$UNUSED_JSON" | jq 'length')

if [[ "$COUNT" -eq 0 ]]; then
  echo "No never-used tokens found matching filter '$NAME_FILTER'."
  exit 0
fi

echo ""
echo "Found $COUNT never-used token(s) matching '$NAME_FILTER':"
echo "$UNUSED_JSON" | jq -r '.[] | "  - \(.name)  (id: \(.id), created: \(.issued_on))"'
echo ""

# ── Step 3: Confirm and delete, one token at a time ─────────────────────────

while IFS=$'\t' read -r TOKEN_ID TOKEN_NAME TOKEN_ISSUED <&3; do
  if [[ "$AUTO_YES" != true ]]; then
    read -r -p "Delete '$TOKEN_NAME' (id: $TOKEN_ID, created: $TOKEN_ISSUED)? [y/N] " CONFIRM
    if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
      echo "Skipped $TOKEN_NAME"
      continue
    fi
  fi

  RESULT=$(curl -sS -X DELETE \
    -H "Authorization: Bearer $CF_BOOTSTRAP_TOKEN" \
    "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/tokens/$TOKEN_ID")

  if [[ "$(echo "$RESULT" | jq -r '.success')" == "true" ]]; then
    echo "Deleted $TOKEN_NAME ($TOKEN_ID)"
  else
    echo "Failed to delete $TOKEN_NAME ($TOKEN_ID):" >&2
    echo "$RESULT" | jq '.errors' >&2
  fi
done 3< <(echo "$UNUSED_JSON" | jq -r '.[] | [.id, .name, .issued_on] | @tsv')

echo ""
echo "Done."
