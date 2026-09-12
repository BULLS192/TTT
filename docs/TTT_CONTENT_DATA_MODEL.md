# TTT Content & Data Model

This branch establishes a content/data workstream that is intentionally independent from page visuals. The goal is to make TTT's website, future quoting tools and TTT OS consume the same structured source of truth.

## Content architecture

TTT content is divided into three public-facing types:

- **Solutions** describe a customer outcome or business problem. They answer: “What are we trying to achieve?”
- **Services** describe work TTT performs. They answer: “What does TTT actually do?”
- **Industries** describe an operating context or customer type. They answer: “How does this change for someone like me?”

The existing detailed copy remains in `lib/siteData.js`. The semantic layer in `lib/data/contentRegistry.js` assigns each page a distinct job, audience, problem, outcome, decision stage, related capabilities, proof requirements and conversion goal.

## Standard content shape

Public content should retain these base fields:

- `slug`
- `title`
- `summary`
- `seoDescription`
- `overview`
- `points`
- `outcomes`
- `idealFor`
- `considerations`
- `cta`

The semantic profile then adds:

- `pageJob`
- `primaryProblem`
- `primaryOutcome`
- `decisionStages`
- `primaryAudiences`
- `secondaryAudiences`
- `capabilities`
- `relatedSolutions`
- `relatedServices`
- `relatedIndustries`
- `claimClasses`
- `proofNeeded`
- `conversionGoal`

`lib/data/contentCatalog.js` joins both layers without forcing a page rewrite.

## Claim governance

Claims should be classified before publication when they depend on evidence:

- `ttt-position` — TTT's stated philosophy or operating approach.
- `verified-fact` — a factual claim supported by a reliable source.
- `product-specific` — product performance, warranty, subscription or compatibility that must be sourced to a manufacturer or current vendor reference.
- `legal-regulatory` — laws or regulations that must be sourced to an authoritative current source.
- `customer-claim` — testimonials, project outcomes or customer attribution that require approval.
- `security-sensitive` — security content that should avoid publishing bypass-enabling installation details.

## Capability matrix

`lib/data/capabilityMatrix.js` defines TTT capabilities separately from marketing page names. This prevents the same underlying capability from being redefined on every page.

Current capability IDs:

- `audio-dsp`
- `window-film`
- `security`
- `tracking-telematics`
- `cameras`
- `lighting`
- `electronics`
- `custom-fabrication`
- `oem-integration`
- `documentation-qa`

Each capability records outcomes, audiences, vehicle contexts, dependencies, data required to specify the work and evidence required to support the offer.

## Vehicle intelligence

`lib/vehicles.js` is now a seed vehicle catalog rather than a flat dropdown list. Backward-compatible `vehicleMakes`, `currentYears` and `capabilityLabels` exports remain available to existing forms.

A model appearing in the seed catalog does **not** imply TTT has verified technical fitment. Every model begins with `fitmentStatus: 'research-needed'`.

Technical fitment should be stored at generation/year/trim level using fields such as:

- generation and model years
- trim and powertrain
- factory audio brand/amplifier/speaker layout
- factory screen and data-network notes
- camera architecture
- factory security features
- remote-start compatibility
- battery and power notes
- window configuration
- known integration constraints
- recommended interfaces
- supported TTT capabilities
- verification sources
- last verified date

Never convert assumptions into fitment facts. Unknown values stay `null`, empty or explicitly unverified until sourced.

## Next data layers

The next content/data phases should add:

1. TTT Standard operational specification and QA checklist.
2. Product and manufacturer intelligence database.
3. FAQ and decision-question knowledge base.
4. Dealer-program and fleet-program schemas.
5. Project/case-study records with publication permissions.
6. Testimonial approval records.
7. Service-area records and current regulatory sources where required.
8. Lead qualification/CRM schema shared with TTT OS.

## Merge discipline

Visual work should not alter these data contracts without coordinating changes. Content/data changes should avoid visual CSS, image, motion and layout files. This keeps the visual and content branches independently mergeable.
