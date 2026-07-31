# One-Page Design Direction Sheet

Status: Selected — Direction C approved by Roger
Owner: Roger Er / site maintainer
Last reviewed: 2026-07-31
Website page: Private build in `website-files/`

## Purpose

Prepare three one-page visual directions for client review before building the website. The client selects a direction first; only the chosen direction is refined into the final site design.

This is not a full design-system specification. It is a focused comparison sheet that makes the visual decision easy without spending time designing every page or state upfront.

## Comparison rule

Every direction must show the same components and use the same representative content. This ensures that the client is comparing visual choices, not different page content.

## Required content for each direction

### 1. Brand feel

- A short direction name.
- Three to five descriptive keywords.
- One sentence on the intended customer impression.

### 2. Colour palette

Show actual colour swatches and hexadecimal values for:

- Primary brand colour
- Accent / call-to-action colour
- Main text colour
- Light page background
- Neutral / border colour

### 3. Typography

Show the intended heading and body typefaces with real sample content:

- H1 using the business/service headline
- H2 using a relevant section heading
- Body paragraph
- Small label or eyebrow text

Do not use placeholder text for this comparison.

### 4. Hero preview

Include a compact desktop hero mock-up containing:

- Logo area and navigation
- Headline and supporting copy
- Primary and secondary call to action
- Intended image treatment

### 5. Core components

Show one example of each:

- Primary and secondary buttons
- Service card
- Review card or Trustindex-widget placement
- Project / before-and-after gallery card
- FAQ accordion row
- Contact / quotation form fields

### 6. Layout treatment

State or demonstrate:

- Content width and general spacing feel
- Corner-radius style
- Border and shadow treatment
- Image treatment: full-bleed or contained

### 7. Mobile preview

Show a narrow mobile version of the hero and one content card. This is required because the site will commonly be reviewed and used on a phone.

### 8. Image direction

Describe the intended use of photography:

- Real project photographs versus stock imagery
- Bright / warm / dark / neutral image grading
- People visible or project-only images
- Before-and-after presentation

### 9. Decision area

For each direction, include:

- Best for: one concise sentence
- Strength and trade-off
- Client choice field: `A / B / C`

## Client directions

### A — [Direction name]

- Keywords: [Keywords]
- Palette: [Palette]
- Style: [Style]
- Best for: [Customer/business fit]

### B — [Direction name]

- Keywords: [Keywords]
- Palette: [Palette]
- Style: [Style]
- Best for: [Customer/business fit]

### C — Grounded Perspective — SELECTED

- Keywords: Calm, local, thoughtful, organic, reassuring.
- Palette: Evergreen `#3B786E`, Leaf `#7FA99B`, Deep green `#16342E`, Mist `#DCE4DA`, Sage `#B7C7B7`.
- Style: Soft editorial serif, natural green palette, generous spacing and quiet proof points.
- Best for: A thoughtful, calm and locally relevant experience for Singapore property owners and leasing clients.

Selection recorded: Roger chose Direction C on 2026-07-31. The three direction concept files remain in `cloudflare-pages-demo/` as review artefacts; the production build is in `website-files/`.

## Exclusions before a direction is chosen

Do not spend time creating these until the client has selected a direction:

- Complete page designs
- Every responsive breakpoint
- Hover and animation states
- Full icon library
- Full component catalogue
- Final copy for every page
- Detailed review/gallery implementation

## After client selection

1. Record the chosen direction and client feedback.
2. Turn its colours, typography, spacing and components into reusable site styles.
3. Apply the selected direction to the homepage first.
4. Build remaining pages only after the homepage visual system is approved.
