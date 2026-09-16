#!/usr/bin/env bash
set -euo pipefail
cd /home/lleche/my_portfolio

echo "Searching source (skipping node_modules / .next / .git)"
echo

patterns=(
  "Work"
  "Stack"
  "Timeline"
  "Contact"
  "heroContent"
  "Years Experience"
  "Happy Users"
  "Saved Infrastructure"
  "Daily Customer"
  "Talk is cheap"
  "Building something that needs to scale"
  "Jordan Lee"
  "jordan@company.com"
  "open to full-stack"
  "Designed for systems"
  "eyebrowRoles"
  "timeline"
  "socials"
  "techMatrix"
)

for p in "${patterns[@]}"; do
  echo "-------- $p --------"
  grep -RIn --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git --exclude-dir=dist \
    -e "$p" --include='*.tsx' --include='*.ts' --include='*.jsx' --include='*.js' --include='*.css' \
    . || echo "(no hits)"
  echo
done