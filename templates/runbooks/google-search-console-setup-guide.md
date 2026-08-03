# Google Search Console Setup Guide

Status: Awaiting client input  
Owner: [Business owner]  
Last reviewed: [Date]  
Website page: Not applicable

## Setup

1. Use a business-owned Google account and check for an existing property.
2. Add a **Domain property** for `[example.com]` and verify it using the DNS TXT record shown by Google.
3. Keep the business as a verified owner; grant vendors delegated access only.
4. Confirm the preferred canonical domain redirects consistently.
5. Submit `[https://www.example.com/sitemap.xml]` after launch.
6. Use URL Inspection for priority pages after they are publicly accessible.

## Validate

- [ ] Public pages return 200 and are not accidentally `noindex`.
- [ ] `robots.txt` does not block public pages or required assets.
- [ ] Sitemap contains canonical, indexable URLs only.
- [ ] Redirects from retired URLs are recorded in the sitemap specification.
- [ ] Review indexing, manual actions, security issues and performance monthly.
