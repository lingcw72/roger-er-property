# GA4 Setup Guide

Status: Awaiting client input  
Owner: [Business owner]  
Last reviewed: [Date]  
Website page: [URL, if published]

1. Use an existing business-owned GA4 property where appropriate; otherwise create one with the correct time zone and currency.
2. Create/confirm the web data stream and record its Measurement ID in `docs/06`—never in public source files unless that is the approved deployment design.
3. Install via the approved GTM container, with consent behaviour agreed first.
4. Configure only meaningful events in `docs/04`, such as confirmed form leads and contact-CTA clicks, with `cta_location` and `cta_label` where useful.
5. Test using DebugView and Realtime; distinguish debug/internal traffic before activating exclusions.
6. Add a launch annotation and review traffic, lead events and data quality monthly.
