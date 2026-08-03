# Cloudflare Pages Deployment

Status: Awaiting client input  
Owner: [Business owner]  
Last reviewed: [Date]  
Website page: Not applicable

## Ownership and configuration

| Item | Approved detail |
|---|---|
| Cloudflare account owner / admins | [Business-owned account and names] |
| GitHub repository and branch | [Repository / `main`] |
| Build command | [None for plain static HTML] |
| Build output directory | `website-files` |
| Production domain | [Domain] |
| DNS / nameserver decision | [Existing provider / move zone to Cloudflare] |
| Preview deployment access | [Public / restricted] |

## Initial setup

1. The business creates or owns the Cloudflare account and invites the site maintainer.
2. Connect the business-owned GitHub repository and select the deployment branch.
3. For this plain static starter, use no build command and publish the `website-files` directory.
4. Add the production custom domain in Cloudflare Pages before changing DNS.
5. Follow the chosen DNS method, test HTTPS and the canonical-domain redirect, then record the final configuration in `docs/06-technical-and-integrations.md`.

## Release process

1. Run `bash website-files/tests/preflight.sh` and test the site/forms before merging to the production branch.
2. Confirm the Cloudflare deployment succeeds and verify the live URL.
3. Validate redirects, sitemap, consent, tracking and key CTAs.
4. Record the release and rollback commit below.

### Rightmann branch mapping

The local GitHub repository currently uses `master`, but the `rightmann-casa` Cloudflare Pages project uses `main` as its production branch. A direct deployment run from local `master` is therefore created as a **preview** deployment and does not update `https://rightmann-casa.pages.dev/`.

For a production release, deploy the validated `website-files` directory explicitly to Cloudflare's `main` branch:

```bash
npx --yes wrangler pages deploy website-files --project-name rightmann-casa --branch main
```

Verify that the deployment list marks the result as `Production` on branch `main`, then check the public URL. A deployment on branch `master` is for preview only.

| Date | Version/commit | Change | Deployed by | Validation | Rollback point |
|---|---|---|---|---|---|
| 2026-08-02 | `f194d30` | Added Rightmann's 1990 history, the rightmann.casa home message and Roger's 15-year PropertyGuru experience | Codex | Production deployment `7587e00f` on Cloudflare branch `main`; public URL checked | `671b89b` |
| [Date] | [ID] | [Change] | [Name] | [Result] | [ID] |
