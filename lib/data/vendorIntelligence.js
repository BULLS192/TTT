// TTT sourcing-channel intelligence refreshed 2026-09-12.
// Commercial terms, territory availability and account approval must be reconfirmed before purchasing or quoting.

export const vendorChannels = Object.freeze([
  {id:'firstech',name:'Firstech',type:'manufacturer-platform',coverage:'USA / TOLA rep coverage',categories:['security','remote-start','tracking-telematics','vehicle-cameras','oem-integration'],accountType:'dealer-account',priority:'A',opportunityScore:99,tttValue:'One dealer relationship can span Compustar, DroneMobile, Momento and iDatalink/Maestro-related products.',activationTiming:'launch-priority',currentFacts:{dealerOnboarding:'Firstech invites 12-volt retailers to request dealer portal access; account review determines brand eligibility.',regionalRep:'Momentum Marketing was appointed for Texas, Oklahoma, Arkansas and Louisiana in June 2025.',sourceUrls:['https://www.firstechllc.com/where-to-buy/','https://www.firstechllc.com/firstech-appoints-new-rep-in-texas-oklahoma-arkansas-and-louisiana-momentum-marketing/'],verifiedOn:'2026-09-12'}},
  {id:'omni12',name:'OMNI12',type:'distributor-manufacturer',coverage:'Houston, TX / international',categories:['lighting','installation','12v-accessories'],accountType:'dealer-wholesale',priority:'A',opportunityScore:92,tttValue:'Local Houston warehouse and wholesale/dealer route for fast accessory and installation-supply fulfillment.',activationTiming:'launch-priority',currentFacts:{dealerOnboarding:'Public dealer program advertises no minimum orders, no sales quotas, dealer portal, technical support and fast account processing.',sourceUrls:['https://www.omni12.com/pages/about-us','https://www.omni12.com/pages/become-a-dealer'],verifiedOn:'2026-09-12'}},
  {id:'ssr-distributors',name:'SSR Distributors',type:'distributor',coverage:'Texas',categories:['audio','radar','window-film','12v-accessories'],accountType:'wholesale-dealer',priority:'A',opportunityScore:90,tttValue:'Texas-based broad-line distributor that can support audio, radar, window film and general 12-volt sourcing.',activationTiming:'launch-priority',currentFacts:{location:'2880 Virgo Ln, Dallas, TX 75229',publicCategories:['radios','radar','subwoofers','window-film','speakers'],sourceUrls:['https://ssrdistributorsnorth.com/'],verifiedOn:'2026-09-12'}},
  {id:'aw-distributors',name:'A&W Distributors',type:'distributor',coverage:'Dallas, TX / nationwide',categories:['audio','video','security','lighting','window-film','accessories'],accountType:'wholesale-dealer',priority:'A',opportunityScore:88,tttValue:'Broad one-stop 12-volt distributor useful for secondary sourcing and categories that do not justify direct accounts at launch.',activationTiming:'launch-secondary',currentFacts:{location:'11035 Harry Hines Blvd. Suite 214 Dallas, TX 75229',founded:'1979',sourceUrls:['https://awdistributors.com/','https://awdistributors.com/about-us/'],verifiedOn:'2026-09-12'}},
  {id:'big5-electronics',name:'Big 5 Electronics',type:'distributor',coverage:'USA',categories:['performance-audio','oem-integration','vehicle-cameras','12v-accessories'],accountType:'wholesale-dealer',priority:'B',opportunityScore:82,tttValue:'National backup source with a broad authorized lineup including AudioControl, BlackVue, Kicker, PAC, Stinger, Sundown and others.',activationTiming:'backup-and-gap-fill',currentFacts:{location:'Cerritos, CA',authorizedBrands:['AudioControl','BlackVue','Kicker','PAC','Stinger','Sundown','EchoMaster'],sourceUrls:['https://big5electronics.com/','https://big5electronics.com/home/about/'],verifiedOn:'2026-09-12'}},
  {id:'mesa',name:'M.E.S.A.',type:'buying-group',coverage:'USA',categories:['12v-retail-purchasing','marketing-programs'],accountType:'membership',priority:'A',opportunityScore:93,tttValue:'Potential future purchasing, vendor and marketing leverage once TTT reaches the operating scale required for membership.',activationTiming:'scale-stage-not-launch',currentFacts:{membershipLevels:{gold:{minimumYearlyVolume:500000,dues:3000},platinum:{minimumYearlyVolume:2500000,dues:4500}},vendorPurchaseRequirement:'70% of yearly purchases with M.E.S.A. vendor partners as direct dealer business.',sourceUrls:['https://www.mesadealer.com/','https://www.mesadealer.com/apply-for-membership'],verifiedOn:'2026-09-12'}},
]);

export const vendorPipeline = Object.freeze([
  {organizationId:'firstech',targetRelationship:'direct-dealer',priority:'A',status:'research',nextAction:'Contact TOLA representative / request dealer portal access; determine brand eligibility, territory rules, training and warranty process.'},
  {organizationId:'xpel',targetRelationship:'authorized-installer-dealer',priority:'A',status:'research',nextAction:'Verify independent TTT dealer/install eligibility, territory constraints, training, opening requirements and whether HCS authorization is location/entity-specific.'},
  {organizationId:'metra-axxess',targetRelationship:'dealer-distributor',priority:'A',status:'research',nextAction:'Choose preferred Texas distributor and confirm commercial terms.'},
  {organizationId:'idatalink-maestro',targetRelationship:'authorized-dealer',priority:'A',status:'research',nextAction:'Map availability through Firstech and alternate authorized distribution.'},
  {organizationId:'audiocontrol',targetRelationship:'authorized-dealer',priority:'A',status:'research',nextAction:'Identify current Texas rep/distributor and dealer requirements.'},
  {organizationId:'blackvue',targetRelationship:'dealer',priority:'A',status:'research',nextAction:'Compare direct dealer route with authorized distributor route and confirm warranty/RMA handling.'},
  {organizationId:'omni12',targetRelationship:'wholesale-account',priority:'A',status:'research',nextAction:'Open/price wholesale account and collect current line card.'},
  {organizationId:'ssr-distributors',targetRelationship:'wholesale-account',priority:'A',status:'research',nextAction:'Request current line card, dealer terms, freight/will-call options and account requirements.'},
  {organizationId:'mesa',targetRelationship:'membership',priority:'A',status:'deferred-by-scale',nextAction:'Revisit after TTT purchasing volume approaches current Gold eligibility threshold.'},
]);

export const vendorUseCases = Object.freeze([
  {id:'vendor-sourcing',priority:'P0',output:'Approved Vendor List + preferred source by SKU/category',value:'Lower COGS, faster fulfillment and backup supply.'},
  {id:'portfolio-design',priority:'P0',output:'TTT Reference / Performance / Signature / Fleet packages',value:'Simpler sales, stronger positioning and less random inventory.'},
  {id:'dealer-applications',priority:'P0',output:'Application pipeline with status, contact and next action',value:'Turns research into executable business development.'},
  {id:'competitive-intelligence',priority:'P0',output:'HCS vs TTT coverage matrix',value:'Differentiate TTT without blindly copying HCS.'},
  {id:'margin-intelligence',priority:'P0',output:'SKU/package margin calculator',value:'Know gross profit before quoting.'},
  {id:'quote-engine',priority:'P1',output:'Vehicle-specific BOM + labor quote',value:'Faster, more consistent estimates.'},
  {id:'inventory-planning',priority:'P1',output:'Min/max inventory + substitute map',value:'Reduce cash tied in stock and reduce stockouts.'},
  {id:'dealership-sales',priority:'P0',output:'Dealer menu: security, camera, tint, tracking, audio',value:'Create repeatable B2B revenue.'},
  {id:'fleet-solutions',priority:'P1',output:'Fleet technology solution matrix',value:'Expand TTT beyond consumer installs.'},
  {id:'cross-sell-engine',priority:'P1',output:'Service/product recommendation paths',value:'Increase average ticket without random upselling.'},
  {id:'territory-intelligence',priority:'P1',output:'Texas/Houston territory map',value:'Avoid wasted applications and identify protected/open opportunities.'},
  {id:'training-certification',priority:'P1',output:'TTT certification roadmap',value:'Build technical credibility and warranty eligibility.'},
  {id:'warranty-rma',priority:'P1',output:'Warranty lookup by installed product',value:'Improve customer support and reduce surprises.'},
  {id:'website-configurator',priority:'P2',output:'Vehicle → service → package → request quote',value:'Lead generation and pre-qualification.'},
  {id:'procurement-resilience',priority:'P1',output:'Primary/secondary/tertiary source map',value:'Maintain continuity when products are unavailable.'},
  {id:'private-label',priority:'P2',output:'TTT-branded commodity/accessory candidates',value:'Potential future margin and brand ownership after volume is proven.'},
]);

export const vendorChannelById = Object.freeze(Object.fromEntries(vendorChannels.map((vendor)=>[vendor.id,vendor])));

export const sourcingPrinciples = Object.freeze([
  'Prefer direct or authorized channels where warranty, training and technical support materially improve the customer outcome.',
  'Maintain primary and backup sources for commodity installation materials and frequently used accessories.',
  'Do not treat another business entity’s dealer authorization as transferable to TTT.',
  'Record dealer cost, freight, rebates, MAP/MSRP, lead time, MOQ and RMA path only from dated current commercial evidence.',
  'Use local Houston/Texas channels where they improve service speed without sacrificing authorization or warranty integrity.',
]);
