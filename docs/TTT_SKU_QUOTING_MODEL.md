# TTT SKU Intelligence & Planning Quote Model

Updated: 2026-09-12

## What changed

TTT now has a first product-level commercial dataset instead of only manufacturer/category research.

Current seed set:

- 24 product/SKU records
- 13 with current public manufacturer/list/MSRP pricing
- 10 recurring connected-service plans
- 12 candidate TTT package recipes
- 8 labor/QA classes
- dealer cost intentionally blank for all SKUs until TTT obtains authorized commercial terms

The goal is to make the data useful for quoting without allowing incomplete research to become a misleading customer price.

## Core rule

`createPlanningBom()` produces a **planning-only BOM** until the following are resolved:

1. exact vehicle is specified
2. vehicle/product fitment is verified
3. TTT authorization or approved sourcing path is verified
4. dealer cost is known
5. labor hours/rates are approved
6. current commercial terms are verified

Only after those blockers are cleared should a future system treat the record as quote-ready.

## Initial product ecosystems

### Security / connected vehicle

Seed products:

- Compustar PRO T13
- Compustar PRO CSXP9913-AS
- Compustar CM900-AS
- Drone X1 LTE

Recurring plans:

- DroneMobile Basic — public price currently shown as low as $3.99/month
- DroneMobile Premium — public price currently shown as low as $7.99/month

These records intentionally exclude sensitive installation detail. Exact compatibility and product architecture remain authorized-installer/vehicle-specific decisions.

### Cameras

Seed products:

- Momento M7 Wi-Fi MD-7205 — MSRP $379.99
- Momento M8 Max MD-8400 — MSRP $399.99
- BlackVue DR970X-2CH LTE Plus II — manufacturer list reference $540.99; sale price observed separately
- BlackVue ELITE 10-2CH — manufacturer list reference $603.99
- THINKWARE U3000 PRO Front & Rear — starting manufacturer-store price $579.99, with higher-priced LTE bundles

Key commercial difference:

- Momento is straightforward dealer-installed hardware with no required cloud subscription in the seed configuration.
- BlackVue can include separate cloud/FLEETA and cellular-data economics.
- THINKWARE can add optional LTE hardware/Connected services.

The future quote should therefore show hardware and recurring services separately.

### Window film / protection

Seed XPEL lines:

- PRIME CS
- PRIME XR
- PRIME XR+
- ULTIMATE PLUS PPF

No public hardware price is stored because customer pricing depends heavily on vehicle, glass/coverage, shade, installer/dealer terms and selected coverage.

Current XPEL consumer comparison data is stored for heat/IR/UV positioning, but actual quote logic must be based on TTT film cost, vehicle labor and current legal requirements.

### OEM integration

Seed interfaces:

- iDatalink Maestro ADS-MRR2
- Axxess AXDSP-X
- PAC AP4-TY14
- PAC AP4-FD21
- PAC APA-TOS1

These are fitment-sensitive by design. A connector or interface being physically available is not enough to declare compatibility.

The quote workflow must identify:

- exact year/make/model/trim
- radio/display configuration
- factory premium audio system/amplifier
- required firmware/application
- required harnesses/accessories
- retained factory functions

before final BOM selection.

### DSP / premium audio

Seed products:

- AudioControl DM-810
- AudioControl D-4.800
- AudioControl D-5.1300
- AudioControl D-6.1200
- HELIX NEXT V EIGHT DSP ULTIMATE
- HELIX V EIGHTEEN DSP

Public manufacturer pricing is stored for AudioControl products where available. HELIX dealer/distributor pricing remains blank pending TTT's approved supply route.

The key selection logic is not brand-first. It is:

1. factory signal architecture
2. target channel count
3. load/power requirements
4. available space/electrical capacity
5. OEM integration requirements
6. future expansion
7. measurement/tuning workflow
8. dealer support/warranty

## Candidate TTT packages

These are product-selection frameworks, not final sellable packages.

### Cameras

- TTT Reference Camera — Momento M7 Wi-Fi candidate
- TTT Performance Camera — Momento M8 Max or THINKWARE U3000 PRO candidate
- TTT Signature Camera — BlackVue DR970X LTE / ELITE candidate with explicit cloud/LTE plan selection

### Tint

- TTT Reference Tint — XPEL PRIME CS candidate
- TTT Performance Tint — XPEL PRIME XR candidate
- TTT Signature Tint — XPEL PRIME XR+ candidate

### Connected security

- TTT Reference Connected Security — professional Compustar architecture selected by fitment
- TTT Performance Connected Security — 2-way/connected system plus GPS subscription where desired
- TTT Signature Connected Security — connected security plus camera/cloud layer and room for additional independently authorized protection layers

### Audio

- TTT OEM Audio Integration — correct factory interface + DSP architecture
- TTT Performance DSP — AudioControl integrated processing/amplification candidates
- TTT Signature DSP — high-channel-count HELIX/AudioControl architecture candidates

## Labor model

Labor rates/hours are intentionally blank until Derek/TTT confirms the real operating model.

Current labor classes capture the work/QA scope for:

- 2-channel camera hardwire
- cloud/LTE camera provisioning
- security/remote-start integration
- connected-vehicle account setup
- OEM audio/data interface work
- DSP system design/tuning
- window film
- paint-protection film

This lets TTT define standards first, then attach real hours and rates once known.

## Pricing hierarchy to implement later

Each product should eventually have:

- dealer cost
- freight/landed cost
- rebate/incentive
- MSRP
- MAP
- TTT standard sell price
- package sell price if different
- required accessories/material allowance
- labor class + hours
- merchant/tax assumptions
- recurring service revenue/share if any
- warranty reserve/RMA responsibility where relevant

From those fields TTT can calculate:

- hardware gross profit
- labor gross profit
- blended gross margin
- recurring revenue
- dealer/fleet volume price
- minimum acceptable price

## Next data acquisition priority

1. Obtain Firstech account/line-card/commercial terms.
2. Obtain OMNI12 and Texas distributor price files/line cards.
3. Obtain Metra/Axxess and PAC dealer cost for priority fitment products.
4. Obtain XPEL film/PPF dealer pricing, training requirements and pattern-software commercial terms.
5. Obtain AudioControl/HELIX supply routes and dealer pricing.
6. Obtain BlackVue/Thinkware/Momento dealer cost and RMA procedures.
7. Confirm Derek's labor-hour and labor-rate standards.
8. Start fitment intelligence with high-volume Houston platforms (F-150, Silverado/Sierra, Tahoe/Yukon, Ram 1500, Tacoma/Tundra, common luxury SUVs and dealer/fleet targets).

## Source-of-truth files

- `lib/data/productSkuCatalog.js`
- `lib/data/securityProductCatalog.js`
- `lib/data/recurringPlans.js`
- `lib/data/laborModel.js`
- `lib/data/packageCandidates.js`
- `lib/data/commercialQuoteModel.js`
- `lib/data/commercialCatalog.js`

The website, TTT OS, quoting system and dealer/fleet tools should consume these records rather than creating separate product logic.
