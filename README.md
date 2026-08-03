# SME Website Project Starter

## How to use this starter kit

1. Copy this entire folder into your projects location.
2. Rename it to the business’s URL-friendly name, for example `acme-painting`.
3. Keep the business-owned accounts and approved information in `docs/`.
4. Start with `docs/00-project-overview.md` and `docs/01-business-profile.md`, then complete the sitemap, CTA plan and technical register.
5. Keep reusable blank templates in `templates/`; work from the populated placeholders in `docs/`, `runbooks/` and `assets/legal/`.

## Recommended client workflow

Work in short stages with clear approvals. Do not build the full site until the business facts, page scope and visual direction are agreed.

| Stage | Client conversation / decision | Main project output |
|---|---|---|
| 1. Discovery | Confirm business services, ideal customers, service area, quotation process, differentiators, contacts, existing photos/reviews and account access. Create or confirm business-owned GTM, GA4 and Search Console access. | `docs/00-project-overview.md`, `docs/01-business-profile.md`, `docs/06-technical-and-integrations.md` |
| 2. Scope and structure | Agree the required pages, calls to action, gallery/articles/reviews approach and exclusions. Define lead events and decide whether Google Ads is in launch scope. | `docs/02-website-spec-and-sitemap.md`, `docs/04-cta-lead-measurement-plan.md` |
| 3. Visual direction | Create three comparable one-page design directions using real business content. The client chooses one direction. | `docs/12-design-direction-sheet.md` |
| 4. Content collection | Gather approved copy, project photos, contact details, policies, reviews and any articles. Record missing inputs rather than inventing them. | `assets/copy/`, `docs/13-project-photo-register.md`, legal and SEO documents |
| 5. Google services setup | Complete or explicitly mark as not required: GTM, GA4, Search Console and Google Ads. Confirm account ownership, consent approach, lead events and conversion actions. Verify Search Console when domain/DNS access is available. | `docs/04-cta-lead-measurement-plan.md`, `docs/06-technical-and-integrations.md` and relevant `runbooks/` |
| 6. Homepage first | Build and approve the homepage in the selected style before building the remaining pages. Add the GTM container to staging when GTM is in scope. | Homepage preview / staging page |
| 7. Full build | Build the approved pages, gallery, articles, FAQ, policies, forms, SEO metadata and technical files. Configure GA4 and any approved Google Ads conversions through GTM, then test them. | Deployable site in `website-files/` |
| 8. Review implementation | Test the selected review approach, such as a free Trustindex widget or curated static review page. | `docs/11-content-maintenance-and-reviews-decision.md` and approved reviews section/page |
| 9. Launch and handover | Test the staging site, obtain final business approval, deploy, verify GA4 and submit the sitemap in Search Console. Then record client ownership/access and hand over. | `docs/08-launch-qa-and-handover.md` |

### Approval gates

Obtain confirmation at these points before moving on:

1. Business facts, public claims and project scope.
2. One visual direction.
3. Homepage design and content.
4. Google services plan, including any items marked as not required.
5. Full-site content, including photos, reviews and policies.
6. Launch.

This prevents late changes caused by unapproved claims, missing assets or a visual direction the client does not want.

## Google accounts, measurement and advertising

The business should own its Google accounts. Invite the site maintainer with the minimum access needed, and record account ownership and access in `docs/06-technical-and-integrations.md` and `docs/08-launch-qa-and-handover.md`.

| Tool | Set up / access | Install or activate |
|---|---|---|
| Google Tag Manager (GTM) | Discovery and scope: create or confirm the business-owned account and container. | Full build: add the single GTM container to the shared site header on staging. |
| Google Analytics 4 (GA4) | Scope: create or confirm the business-owned property and define meaningful lead events. | Full build: configure GA4 through GTM, then test on staging and again at launch. |
| Google Search Console | Discovery and scope: create or confirm the business-owned property; verify when domain/DNS access is available. | Launch: submit the sitemap and inspect important live URLs. |
| Google Ads | Scope only when advertising is planned: define the account owner, campaign goal and conversion actions. | Full build: configure and test conversion tracking through GTM; run campaigns only after launch checks pass. |

For a static site, install one GTM container in the shared header. Manage GA4 and any later Google Ads conversion tags through GTM rather than pasting separate tracking scripts into every page.

Before activating analytics or advertising tags, confirm the privacy/cookie policy and consent approach required for the business.

## Hosting choice

Choose one production host per client and record the decision in the technical register:

- **GitHub Pages:** use `deployment/github-pages.md`; the included root GitHub Actions workflow publishes only `website-files/`.
- **Cloudflare Pages:** use `deployment/cloudflare-pages.md`; connect the repository and publish `website-files/` with no build command for this plain static starter.

Do not add Jekyll or another static-site generator by default. Maintain approved source copy in Markdown where useful, then update the matching public HTML files.

Status: Starter template  
Business/client name: Awaiting client input  
Live domain: Awaiting client input  
Repository URL: Awaiting client input  
Hosting/domain owner: Awaiting client input

Do not leave placeholder details or unapproved legal/marketing content on a published site.
