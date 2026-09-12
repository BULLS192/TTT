// Candidate commercial package architecture. These are NOT final customer packages or pricing.
// Product selections remain subject to TTT authorization, fitment, supply, margin and installer capability.

export const packageCandidates = Object.freeze([
  {
    id:'camera-reference',label:'TTT Reference Camera',category:'vehicle-cameras',tier:'reference',status:'candidate',
    objective:'Reliable front/rear incident recording with clean hardwired integration and straightforward local video access.',
    candidateProductIds:['momento-md-7205'],laborClassIds:['camera-2ch-hardwire'],requiredCapabilities:['vehicle-cameras'],
    recurringPlanIds:[],fitmentQuestions:['vehicle type','desired parking coverage','parking duration expectations'],
  },
  {
    id:'camera-performance',label:'TTT Performance Camera',category:'vehicle-cameras',tier:'performance',status:'candidate',
    objective:'Higher-resolution front/rear recording with stronger parking surveillance and connected options.',
    candidateProductIds:['momento-md-8400','thinkware-u3000-pro-2ch'],laborClassIds:['camera-2ch-hardwire'],requiredCapabilities:['vehicle-cameras'],
    recurringPlanIds:[],fitmentQuestions:['parking-power strategy','LTE requirement','preferred app/cloud workflow'],
  },
  {
    id:'camera-signature',label:'TTT Signature Camera',category:'vehicle-cameras',tier:'signature',status:'candidate',
    objective:'Premium cloud-connected video surveillance with remote visibility and an explicit recurring-service plan.',
    candidateProductIds:['blackvue-dr970x-2ch-lte-plus-ii-na','blackvue-elite-10-2ch'],laborClassIds:['camera-2ch-hardwire','camera-cloud-lte'],requiredCapabilities:['vehicle-cameras','tracking-telematics'],
    recurringPlanIds:['blackvue-fleeta-free'],fitmentQuestions:['LTE/SIM preference','cloud retention requirement','parking-power duration','number of users'],
  },
  {
    id:'tint-reference',label:'TTT Reference Tint',category:'window-film',tier:'reference',status:'candidate',
    objective:'Quality color-stable film with UV protection and legal shade selection.',candidateProductIds:['xpel-prime-cs'],laborClassIds:['window-film'],requiredCapabilities:['window-film'],recurringPlanIds:[],fitmentQuestions:['window positions','desired shade','night visibility priority','current jurisdiction'],
  },
  {
    id:'tint-performance',label:'TTT Performance Tint',category:'window-film',tier:'performance',status:'candidate',
    objective:'Ceramic film with substantially stronger heat rejection while preserving clarity and signal compatibility.',candidateProductIds:['xpel-prime-xr'],laborClassIds:['window-film'],requiredCapabilities:['window-film'],recurringPlanIds:[],fitmentQuestions:['window positions','heat rejection priority','desired shade','factory privacy glass'],
  },
  {
    id:'tint-signature',label:'TTT Signature Tint',category:'window-film',tier:'signature',status:'candidate',
    objective:'Top-tier ceramic film for customers prioritizing maximum heat performance and premium finish.',candidateProductIds:['xpel-prime-xr-plus'],laborClassIds:['window-film'],requiredCapabilities:['window-film'],recurringPlanIds:[],fitmentQuestions:['window positions','heat rejection priority','desired shade','factory privacy glass'],
  },
  {
    id:'connected-security-reference',label:'TTT Reference Connected Security',category:'security',tier:'reference',status:'candidate',
    objective:'Professionally integrated security/remote-start platform with optional smartphone control.',candidateProductIds:['compustar-cm900-as'],laborClassIds:['security-standard'],requiredCapabilities:['security'],recurringPlanIds:[],fitmentQuestions:['year/make/model/trim/key type','remote-start requirement','smartphone control requirement'],
  },
  {
    id:'connected-security-performance',label:'TTT Performance Connected Security',category:'security',tier:'performance',status:'candidate',
    objective:'Two-way remote security plus connected control/tracking for customers who want stronger awareness and range.',candidateProductIds:['compustar-csxp9913-as'],laborClassIds:['security-standard','connected-vehicle-setup'],requiredCapabilities:['security','tracking-telematics'],recurringPlanIds:['dronemobile-premium'],fitmentQuestions:['year/make/model/trim/key type','GPS tracking requirement','authorized users','subscription preference'],
  },
  {
    id:'connected-security-signature',label:'TTT Signature Connected Security',category:'security',tier:'signature',status:'candidate',
    objective:'Premium connected security foundation designed to combine remote alerts/tracking with separate camera and additional protection layers as appropriate.',candidateProductIds:['compustar-csxp9913-as','blackvue-dr970x-2ch-lte-plus-ii-na'],laborClassIds:['security-standard','connected-vehicle-setup','camera-2ch-hardwire','camera-cloud-lte'],requiredCapabilities:['security','tracking-telematics','vehicle-cameras'],recurringPlanIds:['dronemobile-premium','blackvue-fleeta-free'],fitmentQuestions:['vehicle risk profile','parking environment','GPS/cloud retention needs','authorized users'],
  },
  {
    id:'audio-oem-integration',label:'TTT OEM Audio Integration',category:'audio-processing',tier:'reference',status:'candidate',
    objective:'Preserve the factory interface while creating a clean signal path for aftermarket amplification/DSP.',candidateProductIds:['idatalink-ads-mrr2','metra-axdsp-x','pac-ap4-ty14','pac-ap4-fd21'],laborClassIds:['oem-interface','dsp-system-design'],requiredCapabilities:['audio-dsp','oem-integration'],recurringPlanIds:[],fitmentQuestions:['year/make/model/trim','factory audio system','factory amplifier','radio/display configuration','target channel count'],
  },
  {
    id:'audio-performance-dsp',label:'TTT Performance DSP',category:'audio-processing',tier:'performance',status:'candidate',
    objective:'Integrated processing/amplification for a measured and tuned premium audio upgrade.',candidateProductIds:['audiocontrol-d-4-800','audiocontrol-d-5-1300','audiocontrol-d-6-1200'],laborClassIds:['oem-interface','dsp-system-design'],requiredCapabilities:['audio-dsp','oem-integration'],recurringPlanIds:[],fitmentQuestions:['factory signal','speaker/channel architecture','subwoofer requirement','electrical capacity','future expansion'],
  },
  {
    id:'audio-signature-dsp',label:'TTT Signature DSP',category:'audio-processing',tier:'signature',status:'candidate',
    objective:'High-channel-count DSP architecture for complex premium factory systems and custom multi-channel builds.',candidateProductIds:['helix-next-v-eight-dsp-ultimate','helix-v-eighteen-dsp','audiocontrol-dm-810'],laborClassIds:['oem-interface','dsp-system-design'],requiredCapabilities:['audio-dsp','oem-integration','documentation-qa'],recurringPlanIds:[],fitmentQuestions:['measured factory channel map','target channel count','high-level input voltage','expansion plan','tuning/measurement workflow'],
  },
]);

export const packageCandidateById=Object.freeze(Object.fromEntries(packageCandidates.map((pkg)=>[pkg.id,pkg])));
export const getPackagesByCategory=(category)=>packageCandidates.filter((pkg)=>pkg.category===category);
