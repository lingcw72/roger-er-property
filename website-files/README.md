# Website Files

This folder contains the private, Direction C website preview for Rightmann P&amp;C. It is intentionally blocked from search engines until Rightmann gives written approval for public launch.

Never commit passwords, API keys, form-provider keys, recovery codes or other secrets. Use a secure deployment configuration or GitHub Secrets when needed.

## Before first deployment

- Replace the provisional AI portrait with Roger’s approved professional photograph.
- Confirm the canonical production domain, then add it to the public metadata and sitemap as part of the approved launch.
- Publish an approved privacy notice before collecting website enquiries through a form or activating analytics.
- Remove the temporary no-index controls only after Rightmann’s written approval.
- Add a `CNAME` file only when GitHub Pages is the selected host and a custom domain is configured.
- Keep internal `docs/`, `assets/`, `runbooks/` and deployment records outside this folder.
- Run `bash website-files/tests/preflight.sh`; the GitHub Pages workflow runs the same check.
