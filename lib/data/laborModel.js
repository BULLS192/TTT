// Labor classes intentionally omit hours/rates until Derek/TTT confirms operating standards.
// These classes describe work type and QA scope, not pricing.

export const laborClasses = Object.freeze([
  {id:'camera-2ch-hardwire',label:'2-channel camera hardwire',category:'vehicle-cameras',estimatedHours:null,laborRate:null,requires:['vehicle power-plan','camera placement','parking-mode validation'],qa:['camera views verified','recording verified','parking-mode behavior checked','wiring/trim rechecked','customer retrieval workflow demonstrated']},
  {id:'camera-cloud-lte',label:'Cloud/LTE camera integration',category:'vehicle-cameras',estimatedHours:null,laborRate:null,requires:['camera install','account provisioning','cellular/cloud setup'],qa:['camera views verified','cloud connection verified','alerts tested','subscription ownership documented','customer access demonstrated']},
  {id:'security-standard',label:'Security/remote-start integration',category:'security',estimatedHours:null,laborRate:null,requires:['vehicle compatibility verification','authorized product selection','pre-install baseline'],qa:['authorized functions verified','factory functions checked','customer controls demonstrated','equipment record created']},
  {id:'connected-vehicle-setup',label:'Connected vehicle / telematics setup',category:'tracking-telematics',estimatedHours:null,laborRate:null,requires:['compatible hardware','customer account','subscription selection'],qa:['account ownership confirmed','location/control features checked','privacy/access settings documented']},
  {id:'oem-interface',label:'OEM audio/data interface',category:'installation-infrastructure',estimatedHours:null,laborRate:null,requires:['exact vehicle/radio/factory-audio identification','current firmware/application verification'],qa:['factory functions retained as scoped','firmware/configuration documented','audio path validated','diagnostic check completed where applicable']},
  {id:'dsp-system-design',label:'DSP system design & tuning',category:'audio-processing',estimatedHours:null,laborRate:null,requires:['factory signal assessment','channel map','target system architecture'],qa:['input/output routing documented','gain structure checked','crossovers/EQ/delay validated','tuning file archived','customer listening handoff completed']},
  {id:'window-film',label:'Automotive window film',category:'window-film',estimatedHours:null,laborRate:null,requires:['vehicle/window inventory','film/shade selection','jurisdiction check'],qa:['film/shade recorded','glass coverage recorded','installation inspected','care/warranty handoff completed']},
  {id:'ppf',label:'Paint protection film',category:'ppf-surface-protection',estimatedHours:null,laborRate:null,requires:['coverage selection','pattern/vehicle verification','qualified installer'],qa:['coverage documented','edges/finish inspected','care/warranty handoff completed']},
]);

export const laborClassById=Object.freeze(Object.fromEntries(laborClasses.map((item)=>[item.id,item])));

export const quoteReadinessRequirements=Object.freeze([
  'vehicle year/make/model/trim/key-type where relevant',
  'fitment/compatibility verification for every vehicle-specific product',
  'TTT authorization or approved supply route for products sold as dealer-installed',
  'current product cost and sell price',
  'labor class with approved hours/rate',
  'required accessories/harnesses/materials',
  'subscription selection and owner',
  'tax/freight/merchant assumptions where applicable',
  'warranty and RMA responsibility',
]);
