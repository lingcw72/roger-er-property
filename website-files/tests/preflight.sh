#!/usr/bin/env bash
set -euo pipefail

site_dir="website-files"
issues=0

require_no_placeholder() {
  local file="$1"
  local pattern="$2"
  if rg -q "$pattern" "$file"; then
    echo "Placeholder configuration remains in $file"
    issues=1
  fi
}

require_no_placeholder "$site_dir/index.html" 'Replace with Business Name|Replace this description'
require_no_placeholder "$site_dir/robots.txt" 'example\.com|example\.invalid'
require_no_placeholder "$site_dir/sitemap.xml" 'example\.com|example\.invalid'

if ! rg -q 'noindex, nofollow' "$site_dir/index.html"; then
  echo "The site must remain non-indexable until Rightmann approval is recorded."
  issues=1
fi

if ! rg -q '^Disallow: /$' "$site_dir/robots.txt"; then
  echo "robots.txt must block crawlers until Rightmann approval is recorded."
  issues=1
fi

if [ -f "$site_dir/CNAME" ] && rg -q 'example\.com|example\.invalid' "$site_dir/CNAME"; then
  echo "Placeholder custom domain remains in $site_dir/CNAME"
  issues=1
fi

if [ "$issues" -ne 0 ]; then
  echo "Fix the release configuration before deploying. See website-files/README.md."
  exit 1
fi
