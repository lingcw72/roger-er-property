# Content Maintenance and Reviews Decision

Status: Awaiting client input  
Owner: [Business owner / site maintainer]  
Last reviewed: [Date]  
Website page: Not applicable

## Content maintenance approach

This starter uses plain static HTML, CSS and JavaScript. Do not add a static-site generator unless the business has a sustained publishing need that justifies it.

| Content type | Recommended source | Update method |
|---|---|---|
| Home, About, Contact and services | Public HTML | [Process] |
| Legal/policy pages | Internal approved Markdown source plus public HTML | [Process] |
| FAQ | Internal Markdown source plus public HTML | [Process] |
| Articles and project galleries | Public HTML | [Process] |

## Reviews: choose one method

### Option A: Test Trustindex free tier

Test a Trustindex free widget on a non-production page before selecting it. Confirm the review count, display, branding, mobile layout, configuration limits and performance.

### Option B: Curated static review page

Use approved testimonials in a small review data file or source document, then render selected reviews as public static HTML. Keep an internal record of the source and permission/approval basis.

```yml
- name: "Approved display name"
  rating: 5
  text: "Approved testimonial text."
  reviewed_on: [Date]
  visible: true
  featured: true
  priority: 1
```

## Decision checklist

- [ ] Record the approved content-maintenance approach.
- [ ] Confirm the FAQ source location and review process.
- [ ] Test or reject Trustindex free tier.
- [ ] Record the selected review method and approval evidence.
