# TTT Website — Full Production Review v1

This branch is the full review build combining the Claude website copy with the approved TTT visual asset library.

## Review scope

The review covers all 13 core pages:

1. Home — `/`
2. Window Tint — `/services/window-tint`
3. Automotive Audio — `/services/audio`
4. GPS Tracking — `/services/gps-tracking`
5. Kill Switches — `/services/kill-switches`
6. TTT SignalTrace™ — `/services/signaltrace`
7. Custom Fabrication & Additive Manufacturing — `/services/custom-fabrication`
8. About TTT — `/about`
9. Our Work — `/portfolio`
10. FAQ — `/faq`
11. Contact — `/contact`
12. Request a Quote — `/quote`
13. Fleet & Dealership Solutions — `/fleet-dealership`

## Visual production system

- H01 Concept One: four approved hero directions are represented individually in `lib/visualLibrary.js`.
- H03 Interactive vehicle: implemented as a base vehicle visual plus six interactive HTML hotspot controls in `components/InteractiveVehicle.js`.
- H04 Service icons: implemented as six standalone reusable SVG components in `components/ServiceIcon.js`.
- Service pages use purpose-matched visuals through `AssetMedia` and `ClaudeServicePage`.
- Real-world imagery is used selectively for Houston, workshop, diagnostic, consultation, fleet and premium-vehicle context.
- Alt text is registered centrally with the visual library.
- The site includes responsive behavior for the production review layout and components.
- Open Graph and Twitter large-image metadata use the approved Concept One hero.

## Content controls

Claude's production copy remains the source of truth for the core website pages. Bracketed launch placeholders from the source document are not published. Unconfirmed phone, address, hours, brands, subscriptions, response windows, rates, policies and other operational facts are intentionally omitted or described as pending confirmation.

## Real-world / trademark imagery

Licensed stock vehicle imagery may show third-party vehicle brands. It is supporting imagery only and must not imply:
- OEM endorsement or partnership;
- manufacturer certification;
- that a pictured vehicle is a TTT customer vehicle;
- that the pictured workshop, people or premises belong to TTT unless separately verified.

Generated branded reference imagery from Waves 07 and 09 remains reference-only and is not part of the production website selection.

## Before production merge

- Review copy, hierarchy, imagery and responsive crops on desktop and mobile.
- Replace any temporary remote generated-image URLs with TTT-controlled immutable production files.
- Confirm launch facts currently withheld from the website.
- Add real TTT project photography to Our Work when permissions and project records are available.
- Run final accessibility, broken-link, performance and form-submission checks.
