# TTT Vendor & Brand Intelligence

Updated: 2026-09-12

## Purpose

This dataset converts earlier Houston Car Stereo (HCS) brand and competitor research into a commercial-intelligence layer for Thompson Transportation Technologies (TTT). It is not a logo wall and it is not evidence that TTT is currently authorized to sell every brand listed.

The original TTT vendor-intelligence workbook contained 42 brand/target records, 13 HCS-confirmed brands at the time of research, six vendor-channel records, a vendor-application pipeline, and sixteen intended business uses. The repository version preserves that research while separating historical HCS evidence from TTT's own commercial relationships.

## Critical governance rule

**An HCS relationship does not transfer to TTT automatically.**

Before TTT markets a brand as an authorized relationship, the following must be independently verified for TTT:

- dealer or installer authorization status
- territory availability / exclusivity
- application and opening requirements
- approved supply route
- training or certification requirements
- warranty and RMA responsibility
- current product availability
- commercial terms where applicable

HCS data is used as useful market evidence: it shows what a mature Houston automotive electronics operator has found relevant, what customers in the market already encounter, and where TTT may have transferable installation familiarity. It does not prove TTT's own right to represent or resell the brand.

## Current HCS benchmark observations

The current public HCS site was rechecked on 2026-09-12. The repository stores dated source records rather than assuming the earlier workbook stays current.

Observed current/public evidence includes:

- audio/multimedia: JL Audio, Hertz, Alpine, Gladen, Pioneer, Kenwood / Excelon
- security: Compustar and Viper
- connected vehicle / tracking: DroneMobile and TrackhawkGPS product listings
- cameras: BlackVue, Momento, Wolfbox and Kenwood / Excelon
- radar: Uniden, Escort and K40
- window film: XPEL
- paint protection: XPEL, STEK and Pure PPF
- Audison appears in a published HCS customer-install reference

These observations are recorded in `lib/data/brandVendorIntelligence.js` with dates and source URLs.

## Commercial architecture

TTT should not attempt to open every possible manufacturer account at launch. The portfolio should be deliberate and should minimize duplicated inventory, training and support overhead.

### Wave 1 — Foundation accounts

1. **Firstech** — highest leverage relationship to investigate first because its ecosystem spans security, connected services, cameras and OEM integration. Current public material identifies Compustar, DroneMobile and Momento within the Firstech ecosystem and provides a retailer/dealer onboarding path. Firstech also appointed a representative for Texas, Oklahoma, Arkansas and Louisiana in 2025.
2. **OMNI12** — Houston-local wholesale/distribution route. Current public dealer information advertises no minimum order or sales quota, making it practical for launch-stage sourcing.
3. **SSR Distributors** — Texas broad-line distributor for audio, radar, window film and related 12-volt categories.
4. **A&W Distributors** — Dallas-based broad-line secondary source for audio, video, security, lighting, window film and accessories.

These relationships can provide coverage before TTT has enough category-specific volume to justify many direct manufacturer accounts.

### Wave 2 — Core sellable categories

**Security / connected vehicle**
- Compustar
- DroneMobile
- IGLA
- Ravelco

**Vehicle cameras**
- Momento
- BlackVue
- Thinkware

**OEM integration / installation infrastructure**
- iDatalink Maestro
- Metra / Axxess
- PAC
- NAV-TV

**Core / premium audio**
- JL Audio
- Hertz
- Alpine
- Kenwood / Excelon
- AudioControl
- Audison
- Helix / Brax
- Mosconi

**Window film / protection**
- XPEL
- LLumar
- STEK

The goal is not to stock every brand. Each line needs a defined role, an approved supply route and a reason it earns a position in the TTT portfolio.

### Wave 3 — Differentiation / expansion

- radar / driver-awareness: Escort, K40, Uniden, Stinger
- safety / ADAS: Brandmotion, EchoMaster
- sound treatment: ResoNix, Dynamat
- mainstream / performance audio: Rockford Fosgate, Kicker, DD Audio, Sundown Audio

These should follow demonstrated customer demand and operational readiness rather than being treated as launch requirements.

### Wave 4 — Scale-stage leverage

M.E.S.A. remains strategically interesting, but the current public membership thresholds make it a scale-stage decision rather than a launch dependency. Current published requirements include substantial annual-volume thresholds and a vendor-purchasing commitment. TTT should revisit membership when purchasing volume approaches eligibility.

Private-label commodity products should likewise wait until real install volume identifies repeatable demand.

## Recommended product-package structure

The portfolio should support four commercial levels rather than dozens of disconnected manufacturer packages:

- **TTT Reference** — proven, reliable and supportable; never positioned as low-quality or bargain work.
- **TTT Performance** — higher capability, stronger processing/control and more installation detail.
- **TTT Signature** — premium multi-system OEM+ architecture, tuning, fabrication, documentation and serviceability.
- **TTT Fleet** — standardized hardware, repeatable installation, access controls, records and lifecycle support.

Manufacturers and models can change over time while these customer-facing outcomes stay stable.

## Sourcing hierarchy

For each product/category, TTT should eventually store:

1. preferred authorized source
2. approved backup source
3. emergency/alternate source
4. substitute product or platform

This makes the system useful for purchasing resilience rather than just vendor research.

## Next commercial fields to collect

For every A-priority manufacturer or vendor, collect and date-stamp:

- manufacturer / distributor / representative
- Texas/Houston territory contact
- dealer application URL or process
- application status
- authorization level
- geographic restrictions / exclusivity
- opening order / MOQ
- stocking requirement
- dealer cost
- MSRP and MAP
- freight terms
- payment terms
- lead time
- rebate / incentive structure
- warranty term
- RMA workflow and responsible party
- training / certification requirement
- demo/display requirements
- supported product lines and active SKUs
- current technical documentation source
- vehicle fitment / compatibility source
- API / software / firmware dependencies
- subscription price and TTT revenue-share potential where applicable
- preferred source
- backup source
- last verified date

Commercial numbers should not be exposed publicly and should never be treated as permanent.

## Immediate business-development queue

1. Firstech / TOLA representative — determine TTT eligibility, dealer portal access, brand eligibility, training, territory and warranty handling.
2. OMNI12 — open/price wholesale account and collect current line card.
3. SSR Distributors — request current line card and dealer terms; establish freight/will-call options.
4. A&W Distributors — establish secondary account and identify portfolio gaps it can cover.
5. XPEL — verify whether TTT can hold an independent authorized installer/dealer relationship and what training/territory requirements apply.
6. Metra / Axxess, iDatalink Maestro, PAC and NAV-TV — establish preferred OEM-integration supply paths.
7. AudioControl / premium DSP ecosystem — evaluate direct/dealer/distributor routes and training requirements.
8. BlackVue / Momento / Thinkware — define the camera stack and dealer/fleet positioning.
9. IGLA / Ravelco — evaluate Houston-relevant anti-theft differentiation after authorization/training review.
10. M.E.S.A. — monitor only until TTT reaches sufficient annual purchasing volume.

## What this database should power later

- approved vendor list
- dealer-application dashboard
- Good/Better/Best-equivalent TTT packages
- quote/BOM engine
- margin calculator
- inventory planning
- alternate/substitute lookup
- warranty/RMA lookup
- dealer accessory menus
- fleet solution matrix
- website configurator
- cross-sell recommendations
- training/certification roadmap
- territory intelligence

The data is deliberately separated from the visual website so it can later serve the website, TTT OS, quoting, purchasing, dealer programs and fleet operations from one commercial source of truth.
