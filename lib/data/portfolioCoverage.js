// Commercial coverage strategy. HCS brands are benchmark evidence, not TTT authorization.

export const portfolioCoverage = Object.freeze([
  {
    id:'security-connected',label:'Security & Connected Vehicle',priority:'P0',
    hcsBenchmarks:['Compustar','Viper','DroneMobile','TrackhawkGPS'],
    tttPrimaryResearch:['Compustar','DroneMobile','IGLA'],
    tttSecondaryResearch:['Ravelco','Viper'],
    strategy:'Keep the proven connected/security baseline, then differentiate with dedicated anti-theft options and a documented layered-security architecture.',
    gap:'TTT needs independent authorization, a defined immobilization offering and a clear subscription/recurring-revenue model.',
  },
  {
    id:'cameras',label:'Vehicle Cameras',priority:'P0',
    hcsBenchmarks:['BlackVue','Momento','Wolfbox','Kenwood / Excelon'],
    tttPrimaryResearch:['Momento','BlackVue','Thinkware'],
    tttSecondaryResearch:['VIOFO'],
    strategy:'Offer a compact stack: dealer/integration-friendly, premium cloud, and value/performance rather than carrying many overlapping dashcam brands.',
    gap:'Define parking-power strategy, cloud/subscription economics, fleet suitability and warranty/RMA route.',
  },
  {
    id:'oem-integration',label:'OEM Integration & Installation Infrastructure',priority:'P0',
    hcsBenchmarks:['Kenwood / Excelon','Alpine'],
    tttPrimaryResearch:['iDatalink Maestro','Metra / Axxess','PAC','NAV-TV'],
    tttSecondaryResearch:['Stinger'],
    strategy:'Make integration infrastructure a named TTT competency rather than invisible install hardware.',
    gap:'Build vehicle-fitment intelligence and preferred/backup interface source by vehicle platform.',
  },
  {
    id:'audio',label:'Audio, DSP & Acoustic Treatment',priority:'P0',
    hcsBenchmarks:['JL Audio','Hertz','Alpine','Gladen','Pioneer','Kenwood / Excelon','Audison'],
    tttPrimaryResearch:['JL Audio','Hertz','AudioControl','Audison','Helix / Brax'],
    tttSecondaryResearch:['Focal','Morel','Mosconi','ResoNix','Rockford Fosgate','Kicker'],
    strategy:'Use HCS experience as the baseline but shift TTT differentiation toward system architecture, DSP/OEM integration, acoustic treatment, tuning and documentation.',
    gap:'Select one or two preferred premium signal-processing ecosystems and avoid duplicative speaker/amplifier inventory.',
  },
  {
    id:'window-film-protection',label:'Window Film & Surface Protection',priority:'P0',
    hcsBenchmarks:['XPEL','STEK','Pure PPF'],
    tttPrimaryResearch:['XPEL','LLumar','STEK'],
    tttSecondaryResearch:[],
    strategy:'Choose one primary system after territory/training review and maintain a credible alternative rather than attempting to represent every film brand.',
    gap:'Confirm Houston territory, training/certification, film costs, pattern-software access and warranty administration.',
  },
  {
    id:'radar',label:'Radar & Driver Awareness',priority:'P1',
    hcsBenchmarks:['Uniden','Escort','K40'],
    tttPrimaryResearch:['Escort','K40','Uniden'],
    tttSecondaryResearch:['Stinger'],
    strategy:'Retain premium installed-system capability while keeping portable products secondary to TTT integration work.',
    gap:'Document vehicle-specific installed-system requirements and jurisdiction/use limitations before marketing.',
  },
  {
    id:'safety-adas',label:'Safety & ADAS Add-ons',priority:'P1',
    hcsBenchmarks:[],
    tttPrimaryResearch:['Brandmotion','EchoMaster'],
    tttSecondaryResearch:[],
    strategy:'Expand beyond HCS-style entertainment/protection categories into visibility, blind-spot, parking and commercial-safety integration.',
    gap:'Validate product scope, calibration/training requirements and liability-sensitive use cases.',
  },
  {
    id:'fleet',label:'Fleet Technology',priority:'P1',
    hcsBenchmarks:['DroneMobile','BlackVue','TrackhawkGPS'],
    tttPrimaryResearch:['DroneMobile','BlackVue','Thinkware'],
    tttSecondaryResearch:['Geotab','Samsara','Verizon Connect'],
    strategy:'Do not assume consumer trackers scale to fleets; evaluate user roles, retention, API/export, subscriptions, multi-vehicle administration and lifecycle support.',
    gap:'Add true fleet-platform research and commercial account economics.',
  },
]);

export const getCoverageById=(id)=>portfolioCoverage.find((record)=>record.id===id)||null;
export const getP0Coverage=()=>portfolioCoverage.filter((record)=>record.priority==='P0');
