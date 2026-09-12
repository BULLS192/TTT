# TTT SKU Intelligence & Planning Quote Model

Updated: 2026-09-12

## Current seed set

TTT now has a product-level commercial and vehicle-fitment dataset instead of only manufacturer/category research.

- 29 product/SKU records
- 18 with current public manufacturer/list/MSRP pricing
- 10 recurring connected-service plans
- 12 candidate TTT package recipes
- 8 labor/QA classes
- 10 priority vehicle-platform fitment records
- dealer cost intentionally blank for all SKUs until TTT obtains authorized commercial terms

The goal is to make the data useful for planning and quoting without allowing incomplete research to become a misleading customer price.

## Core rule

`createPlanningBom()` produces a **planning-only BOM** until all of these are resolved:

1. exact vehicle is specified
2. vehicle/product fitment is verified
3. TTT authorization or approved sourcing path is verified
4. dealer cost is known
5. labor hours/rates are approved
6. current commercial terms are verified

Only after those blockers are cleared should a future system treat the record as quote-ready.

`resolveVehicleFitment()` can now suggest candidate vehicle-specific interfaces from researched platform data, but it **always** returns a manual-verification requirement. Trim, RPO/factory-audio configuration, radio/display options, firmware and current manufacturer application data still control final compatibility.

## Initial product ecosystems

### Security / connected vehicle

Seed products include Compustar PRO T13, Compustar PRO CSXP9913-AS, Compustar CM900-AS and Drone X1 LTE.

Public recurring-plan reference data currently includes DroneMobile Basic and Premium. Security records intentionally exclude sensitive installation detail. Exact compatibility and architecture remain authorized-installer and vehicle-specific decisions.

### Cameras

Seed products include Momento M7/M8, BlackVue DR970X LTE/ELITE 10 and THINKWARE U3000 PRO. Hardware price and recurring cloud/LTE costs are represented separately so connected-camera packages do not hide ongoing ownership cost.

### Window film / protection

Seed lines include XPEL PRIME CS, PRIME XR, PRIME XR+ and ULTIMATE PLUS PPF. Exact customer price is deliberately not inferred from consumer-facing product data because vehicle coverage, film quantity, labor, training/dealer terms and selected coverage materially affect the job.

### OEM integration

General/vehicle-sensitive seed interfaces include iDatalink Maestro ADS-MRR2, Axxess AXDSP-X and PAC AmpPRO products.

Verified vehicle-specific additions now include:

- PAC AP4-FD31 — selected 2018–2024 Ford B&O A2B applications including F-150; current public reference $489
- PAC AP4-GM61 — selected older GM Bose applications including Silverado/Sierra, Tahoe/Suburban/Yukon; current public reference $489
- PAC AP4-TY13 — selected Toyota premium-amplified applications including Tacoma/Tundra; current public reference $379
- PAC AP4-CH42 — selected newer Chrysler/Dodge/Jeep/RAM applications; current manufacturer-store reference $499
- Metra/Axxess AXDSPX-ETH1 — GM Ethernet-amplifier/DSP applications; 2026 GMC Sierra 1500 currently appears in Metra's fit guide at MSRP $613.99

These are never selected from vehicle name alone. The workflow must identify exact year/make/model/trim, factory audio architecture, radio/display configuration, current firmware/application and required harnesses/accessories.

### DSP / premium audio

Seed products include AudioControl DM-810, D-4.800, D-5.1300 and D-6.1200 plus HELIX NEXT V EIGHT DSP ULTIMATE and HELIX V EIGHTEEN DSP. Selection logic is based on factory signal architecture, channel count, power/load, space/electrical capacity, OEM integration, future expansion and measurement/tuning workflow—not brand name alone.

## Priority vehicle-fitment intelligence

The first platform set is intentionally concentrated on Houston-relevant trucks and SUVs:

- Ford F-150
- Ford Bronco
- Ford F-250/F-350 Super Duty
- Chevrolet Silverado 1500
- GMC Sierra 1500
- Chevrolet Tahoe/Suburban
- GMC Yukon/Yukon XL
- Toyota Tacoma
- Toyota Tundra
- Ram 1500 / Ram Truck

Each year window is tagged with a confidence state such as `official-application`, `official-fit-guide`, `official-support-conditional`, or `research-needed`.

Examples of why this matters:

- Ford F-150 2018–2024 with the relevant factory B&O A2B system has an official PAC AP4-FD31 path; 2025–2026 stays unresolved until current application data is verified.
- Older GM Bose trucks/SUVs use a different integration path from newer GM Ethernet-amplifier vehicles.
- Tacoma/Tundra support changes by generation: PAC TY13 and TY14 cover different year groups.
- RAM 2025+ AP4-CH42 support is conditional and should not be generalized across every trim/audio configuration.

This is the beginning of the fitment database, not the final catalog.

## Candidate TTT packages

Current planning recipes include:

- TTT Reference / Performance / Signature Camera
- TTT Reference / Performance / Signature Tint
- TTT Reference / Performance / Signature Connected Security
- TTT OEM Audio Integration
- TTT Performance DSP
- TTT Signature DSP

These are product-selection frameworks, not final sellable packages. Product choices remain subject to TTT authorization, supply, exact vehicle fitment, margin and installer capability.

## Labor model

Labor rates/hours remain blank until Derek/TTT confirms the operating model. Current labor classes define the scope and QA requirements for camera hardwire, cloud/LTE provisioning, security/remote-start, connected-vehicle setup, OEM audio/data interfaces, DSP design/tuning, window film and PPF.

## Pricing hierarchy to implement later

Each product should eventually carry dealer cost, freight/landed cost, rebates, MSRP/MAP, TTT standard/package sell price, required materials, labor hours/rate, taxes/fees, recurring revenue/share and warranty/RMA responsibility. Those fields enable hardware GP, labor GP, blended gross margin, recurring revenue, dealer/fleet volume pricing and a minimum acceptable price.

## Next data acquisition priority

1. Obtain Firstech account/line-card/commercial terms.
2. Obtain OMNI12 and Texas distributor price files/line cards.
3. Obtain Metra/Axxess and PAC dealer cost for priority fitment products.
4. Obtain XPEL film/PPF dealer pricing, training requirements and pattern-software commercial terms.
5. Obtain AudioControl/HELIX supply routes and dealer pricing.
6. Obtain BlackVue/Thinkware/Momento dealer cost and RMA procedures.
7. Confirm Derek's labor-hour and labor-rate standards.
8. Fill unresolved 2025–2026 truck/SUV fitment windows.
9. Expand to common Houston luxury SUVs, performance vehicles and dealer/fleet target platforms.
10. Add trim/RPO/factory-audio option data and speaker/camera/power notes only from current authoritative fitment sources.

## Source-of-truth files

- `lib/data/productSkuCatalog.js`
- `lib/data/securityProductCatalog.js`
- `lib/data/vehicleSpecificSkus.js`
- `lib/data/vehicleFitmentIntelligence.js`
- `lib/data/fitmentResolver.js`
- `lib/data/recurringPlans.js`
- `lib/data/laborModel.js`
- `lib/data/packageCandidates.js`
- `lib/data/commercialQuoteModel.js`
- `lib/data/commercialCatalog.js`

The website, TTT OS, quoting system and dealer/fleet tools should consume these records rather than creating separate product logic.
