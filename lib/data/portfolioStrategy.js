// Research and activation priorities; not statements that TTT is already authorized for every brand.

export const tttPortfolioStrategy = Object.freeze({
  launchPrinciple:'Start with categories that reinforce TTT integration positioning and can share supplier/training infrastructure; avoid opening too many direct accounts before real demand is established.',
  waves:[
    {id:'wave-1-foundation',label:'Foundation accounts',objective:'Enable security, connected vehicle, cameras, OEM integration and day-to-day installation sourcing with the fewest high-leverage relationships.',targets:[
      {organization:'Firstech',reason:'High leverage across Compustar, DroneMobile, Momento and iDatalink/Maestro-related integration; current TOLA representation exists.',status:'apply-first'},
      {organization:'OMNI12',reason:'Houston-local wholesale source for installation supplies, lighting and 12-volt accessories; public dealer program has no minimum order or sales quota.',status:'apply-first'},
      {organization:'SSR Distributors',reason:'Texas broad-line backup/secondary distributor across audio, radar and window film.',status:'apply-first'},
      {organization:'A&W Distributors',reason:'Broad Dallas/national 12-volt assortment for secondary sourcing and category gaps.',status:'secondary'},
    ]},
    {id:'wave-2-core-categories',label:'Core sellable categories',objective:'Build a deliberate TTT assortment using HCS experience as a benchmark while creating independent TTT supply relationships.',targets:[
      {category:'security-connected',preferredResearch:['Compustar','DroneMobile','IGLA','Ravelco'],portfolioIntent:'Layered protection plus connected recovery/alerting; do not rely on one security mechanism.'},
      {category:'camera',preferredResearch:['Momento','BlackVue','Thinkware'],portfolioIntent:'One dealer-oriented integrated option, one premium cloud option and one strong alternative.'},
      {category:'oem-integration',preferredResearch:['iDatalink Maestro','Metra / Axxess','PAC','NAV-TV'],portfolioIntent:'Treat integration infrastructure as core engineering inventory, not an afterthought.'},
      {category:'audio',preferredResearch:['JL Audio','Hertz','Alpine','Kenwood / Excelon','AudioControl','Audison','Helix / Brax','Mosconi'],portfolioIntent:'Use HCS familiarity for baseline benchmarking, but differentiate TTT through system design, DSP/OEM integration and premium architecture.'},
      {category:'window-film-protection',preferredResearch:['XPEL','LLumar','STEK'],portfolioIntent:'Establish one primary film/protection system and at least one viable alternative after territory and training review.'},
    ]},
    {id:'wave-3-expansion',label:'Expansion and differentiation',objective:'Add categories once core operations, demand and installation standards are proven.',targets:[
      {category:'radar-driver-awareness',preferredResearch:['Escort','K40','Uniden','Stinger'],portfolioIntent:'Premium installed systems plus portable/consumer options where the legal and use context is appropriate.'},
      {category:'safety-adas',preferredResearch:['Brandmotion','EchoMaster'],portfolioIntent:'Expand TTT beyond entertainment into visibility and safety integration.'},
      {category:'sound-treatment',preferredResearch:['ResoNix','Dynamat'],portfolioIntent:'Turn acoustic treatment into a workmanship differentiator and documented installation step.'},
      {category:'performance-audio',preferredResearch:['Rockford Fosgate','Kicker','DD Audio','Sundown Audio'],portfolioIntent:'Serve mainstream/performance demand without letting SPL-oriented inventory define the premium TTT brand.'},
    ]},
    {id:'wave-4-scale',label:'Scale-stage commercial leverage',objective:'Add purchasing structures that only make sense after meaningful annual volume exists.',targets:[
      {organization:'M.E.S.A.',reason:'Current membership thresholds make this a scale-stage decision rather than a launch dependency.',status:'defer-until-volume'},
      {capability:'private-label',reason:'Consider commodity harness/accessory/private-label opportunities only after install volume identifies stable repeat demand.',status:'future'},
    ]},
  ],
  packageFramework:[
    {id:'reference',label:'TTT Reference',purpose:'Reliable, supportable system using proven products and clean integration; avoid positioning as cheap/basic.'},
    {id:'performance',label:'TTT Performance',purpose:'Higher capability, better processing/control and stronger installation detail for customers prioritizing measurable performance.'},
    {id:'signature',label:'TTT Signature',purpose:'Premium multi-system/OEM+ build emphasizing integration, tuning, fabrication, documentation and future serviceability.'},
    {id:'fleet',label:'TTT Fleet',purpose:'Repeatable hardware, standardized installation, user access, records and lifecycle support rather than luxury customization.'},
  ],
  crossSellPaths:[
    ['window-film','vehicle-cameras','security','tracking-telematics'],
    ['audio','sound-treatment','audio-processing','oem-integration'],
    ['security','tracking-telematics','vehicle-cameras'],
    ['dealer-program','window-film','security','tracking-telematics','vehicle-cameras'],
    ['fleet-program','tracking-telematics','vehicle-cameras','safety-adas','documentation-qa'],
  ],
});

export const getPortfolioWave=(id)=>tttPortfolioStrategy.waves.find((wave)=>wave.id===id)||null;
