# Google Tag Manager Setup Guide

Status: Awaiting client input  
Owner: [Business owner]  
Last reviewed: [Date]  
Website page: [URL, if published]

## Setup

1. Create/confirm a business-owned GTM account and Web container; record the container ID in `docs/06`.
2. Add the GTM snippet to every production page using the approved implementation method.
3. Configure consent defaults before analytics/advertising tags run.
4. Add a Google tag for GA4 and only approved tags/integrations.
5. Define stable CTA attributes or data-layer events; document triggers and parameters in `docs/04`.
6. Use Preview/Tag Assistant to test each logical change, then publish a clearly named version.

## Rules and validation

- Never place secrets in the website or GTM configuration notes.
- Form conversions fire only after confirmed successful submission.
- Do not duplicate GA4/Ads tags or fire tags against the visitor’s consent choice.
- Record version, date, owner, purpose and test result in the change log.
