#!/usr/bin/env bash
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

# Prefer the isolated Ruby environment prepared on this workstation.
website_ruby_prefix="${WEBSITE_RUBY_PREFIX:-/tmp/julio-website-preview-env}"
if [[ -x "$website_ruby_prefix/bin/ruby" ]]; then
  export PATH="$website_ruby_prefix/bin:$PATH"
fi

if ! command -v bundle >/dev/null 2>&1; then
  echo "Ruby and Bundler are required. See README.md for setup." >&2
  exit 1
fi

bundle check
exec bundle exec jekyll serve --host 127.0.0.1 --port 4001 "$@"
