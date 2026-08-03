# Consent and Cookie Implementation Guide

Status: Awaiting client input  
Owner: [Business owner]  
Last reviewed: [Date]  
Website page: [URL, if published]

Use this runbook when the site includes cookies or similar technologies beyond essential site operation. Confirm the actual legal/business requirements for the client and jurisdiction; this is an implementation checklist, not legal advice.

## Select one approach

| Setup | Decision | Required action |
|---|---|---|
| Essential-only | [Yes/no] | Confirm no analytics, advertising, review or other non-essential scripts run. |
| GA4 only | [Yes/no] | Define the consent/default behaviour and prevent analytics from running until the approved condition is met. |
| GA4 and Google Ads | [Yes/no] | Define analytics and marketing choices separately where required; test each consent path. |
| Third-party review/widget | [Yes/no] | Record the vendor, data sent, consent treatment and performance impact. |

## Implementation and validation

1. Complete `assets/legal/cookie-policy.md`, `assets/legal/privacy-policy.md` and the integration inventory before launch.
2. Configure consent defaults in GTM before analytics/advertising tags can fire.
3. Give visitors a clear way to accept, reject and later change non-essential choices where required.
4. Test accept, reject and change-preference paths using Tag Assistant/browser developer tools.
5. Confirm that essential forms and core site functions still work when non-essential choices are rejected.
6. Record the configuration, validation date and review trigger in `docs/06-technical-and-integrations.md` and `docs/09-change-log.md`.
