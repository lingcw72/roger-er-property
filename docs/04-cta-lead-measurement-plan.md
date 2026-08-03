# CTA, Lead and Measurement Plan

Status: Awaiting client input  
Owner: [Business owner]  
Last reviewed: [Date]  
Website page: Not applicable

## Lead path

| CTA | Location | Destination | Required fields / data | Business owner | Confirmation | Tracking event |
|---|---|---|---|---|---|---|
| [Get a quote] | [Hero] | [Form / WhatsApp] | [Fields] | [Name] | [Thank-you / message] | [Event] |

## Form specification

- Purpose and lawful/business reason: [Reason]
- Required fields: [Name, contact, etc.; keep to minimum]
- Optional fields: [Fields]
- Delivery destination: [Email / CRM / Sheet]
- Spam protection and retention: [Method / period]
- Response SLA: [Only approved commitment]

## Measurement plan

| Event | Trigger | Parameters | GA4? | Ads conversion? | Validation owner |
|---|---|---|---|---|---|
| `generate_lead` | Confirmed form success | `form_type` | Yes | [Primary/secondary/no] | [Name] |
| [Event] | [Trigger] | [Parameters] | [Yes/no] | [Status] | [Name] |

Do not treat a button click as a completed lead unless it is explicitly classified as an observation event.
