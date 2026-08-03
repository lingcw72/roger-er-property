# Content Maintenance and Reviews Decision

Status: Under consideration  
Owner: [Business owner / site maintainer]  
Last reviewed: [Date]  
Website page: Not applicable

## Content maintenance approach

This starter uses plain static HTML, CSS and JavaScript. Do not add a static-site generator unless the business has a sustained publishing need that justifies it.

| Content type | Recommended source | Update method |
|---|---|---|
| Home, About, Contact and services | Public HTML | Update the approved source copy, then ask the site maintainer to update and publish the matching HTML page. |
| Legal/policy pages | Internal approved Markdown source plus public HTML | Keep the approved source in `assets/legal/`; regenerate/update the matching public HTML page only after approval. |
| FAQ | Internal `faq.md` source plus public HTML | Update the source and matching FAQ page; preserve accessible accordion behaviour and visible FAQ content. |
| Articles and project galleries | Public HTML | Add only when there is approved content/photos; update the listing, navigation, sitemap and metadata at the same time. |

Generated or public HTML is the deployable output. Internal Markdown source files are for readable maintenance and approval, not a second public publishing system.

## Reviews: choose one method

### Option A: Test Trustindex free tier

Test a Trustindex free widget on a non-production page before selecting it. Confirm that the review count, date/rating/source display, branding, mobile layout, configuration limits and performance are acceptable. Use it only as a compact live review area if the test is satisfactory.

### Option B: Curated static review page

Use approved testimonials in a small review data file or source document, then render selected reviews as public static HTML. Keep an internal record of the source and permission/approval basis.

```yml
- name: "Approved display name"
  rating: 5
  text: "Approved testimonial text."
  reviewed_on: 2026-06-18
  visible: true
  featured: true
  priority: 1
```

- `visible: true` includes the review on the reviews page.
- `featured: true` includes it in a smaller home-page section.
- `priority` controls display order.

## Decision checklist

- [ ] Record the approved content-maintenance approach.
- [ ] Confirm the FAQ source location and review process.
- [ ] Test or reject Trustindex free tier.
- [ ] Record the selected review method and approval evidence.
