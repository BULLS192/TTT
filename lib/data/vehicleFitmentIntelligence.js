// Priority vehicle-platform intelligence for TTT.
// Only official application evidence is attached as verified fitment. Unknown generations/options remain research-needed.

export const vehicleFitmentIntelligence = Object.freeze([
  {
    id:'ford-f150',make:'Ford',model:'F-150',marketPriority:'P0',segments:['personal','dealer','fleet'],
    integrationWindows:[
      {years:'2018-2024',factoryContext:'B&O A2B amplified',audioInterfaceCandidates:['pac-ap4-fd31'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-fd31']},
      {years:'2025-2026',factoryContext:'varies',audioInterfaceCandidates:[],confidence:'research-needed',verifiedOn:null,sourceUrls:[]},
    ],
    cameraPolicy:'Camera products are broadly applicable, but placement, visibility, parking-power behavior and battery-management implications must be checked per vehicle.',
    filmPolicy:'Window film selection requires glass-position inventory, factory privacy-glass assessment and current Texas/legal review.',
    securityPolicy:'Use only current authorized fitment sources for the exact year/trim/key configuration; no platform-wide security fitment is assumed.',
    researchGaps:['2025-2026 factory audio architecture/options','current vehicle-specific audio interface alternatives','trim-specific speaker locations/sizes','battery/power-management notes','dealer/fleet recurring package demand'],
  },
  {
    id:'ford-bronco',make:'Ford',model:'Bronco',marketPriority:'P1',segments:['personal','dealer'],
    integrationWindows:[
      {years:'2021-2024',factoryContext:'B&O A2B amplified',audioInterfaceCandidates:['pac-ap4-fd31'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-fd31']},
      {years:'2025-2026',factoryContext:'varies',audioInterfaceCandidates:[],confidence:'research-needed',verifiedOn:null,sourceUrls:[]},
    ],
    cameraPolicy:'Verify windshield/accessory mounting and open-top/off-road use requirements.',filmPolicy:'Treat removable/open-top configurations separately where applicable.',securityPolicy:'Exact authorized fitment required.',researchGaps:['2025+ audio interface','open-top accessory/security considerations','speaker fitment by trim'],
  },
  {
    id:'ford-super-duty',make:'Ford',model:'F-250/F-350 Super Duty',marketPriority:'P0',segments:['personal','commercial','fleet'],
    integrationWindows:[
      {years:'2020-2024',factoryContext:'B&O A2B amplified',audioInterfaceCandidates:['pac-ap4-fd31'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-fd31']},
      {years:'2025-2026',factoryContext:'varies',audioInterfaceCandidates:[],confidence:'research-needed',verifiedOn:null,sourceUrls:[]},
    ],
    cameraPolicy:'Commercial/fleet use may require multi-camera or retention policies beyond consumer dashcam packages.',filmPolicy:'Check commercial/vehicle-class legal considerations where applicable.',securityPolicy:'Exact authorized fitment required.',researchGaps:['2025+ B&O/interface path','commercial camera requirements','auxiliary power/upfitter-switch opportunities','fleet telematics fit'],
  },
  {
    id:'chevrolet-silverado-1500',make:'Chevrolet',model:'Silverado 1500',marketPriority:'P0',segments:['personal','dealer','fleet'],
    integrationWindows:[
      {years:'2014-2018',factoryContext:'Bose amplified',audioInterfaceCandidates:['pac-ap4-gm61'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-gm61']},
      {years:'2019-2021',factoryContext:'supported GM factory audio applications',audioInterfaceCandidates:['metra-axdspx-eth1'],confidence:'official-product-family-needs-rpo-check',verifiedOn:'2026-09-12',sourceUrls:['https://www.metraonline.com/product/AXDSPX-ETH1']},
      {years:'2019-2025',factoryContext:'Crew Cab Bose full-system kit path',audioInterfaceCandidates:['metra-axdspx-eth1'],confidence:'official-system-kit',verifiedOn:'2026-09-12',sourceUrls:['https://www.metraonline.com/product/GM-PPKT-1']},
      {years:'2026',factoryContext:'exact Silverado application must be resolved in current Metra fit guide',audioInterfaceCandidates:[],confidence:'research-needed',verifiedOn:null,sourceUrls:['https://www.metraonline.com/vehicle-fit-guide']},
    ],
    cameraPolicy:'Plan parking power around GM battery-management behavior and customer parking duration.',filmPolicy:'Record factory rear privacy glass separately from added film.',securityPolicy:'Exact authorized fitment required.',researchGaps:['2026 Silverado exact AXDSPX application/RPO','non-Bose vs Bose path by generation','HD variants as separate platform','dealer accessory package demand'],
  },
  {
    id:'gmc-sierra-1500',make:'GMC',model:'Sierra 1500',marketPriority:'P0',segments:['personal','dealer','fleet'],
    integrationWindows:[
      {years:'2014-2018',factoryContext:'Bose amplified',audioInterfaceCandidates:['pac-ap4-gm61'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-gm61']},
      {years:'2019-2025',factoryContext:'Crew Cab Bose full-system kit path',audioInterfaceCandidates:['metra-axdspx-eth1'],confidence:'official-system-kit',verifiedOn:'2026-09-12',sourceUrls:['https://www.metraonline.com/product/GM-PPKT-1']},
      {years:'2026',factoryContext:'current supported application',audioInterfaceCandidates:['metra-axdspx-eth1'],confidence:'official-fit-guide',verifiedOn:'2026-09-12',sourceUrls:['https://www.metraonline.com/vehicle-fit-guide/2026/GMC/Sierra%201500']},
    ],
    cameraPolicy:'Plan parking power around GM battery-management behavior and fleet/consumer usage.',filmPolicy:'Record factory privacy glass and intended front/rear shade separately.',securityPolicy:'Exact authorized fitment required.',researchGaps:['trim/RPO-specific audio paths','Denali/Bose variations','HD platform mapping','fleet-specific camera/telematics package'],
  },
  {
    id:'chevrolet-tahoe-suburban',make:'Chevrolet',model:'Tahoe / Suburban',marketPriority:'P0',segments:['personal','dealer','fleet'],
    integrationWindows:[
      {years:'2015-2019',factoryContext:'Bose amplified',audioInterfaceCandidates:['pac-ap4-gm61'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-gm61']},
      {years:'2020-2026',factoryContext:'varies by generation/options',audioInterfaceCandidates:[],confidence:'research-needed',verifiedOn:null,sourceUrls:['https://www.metraonline.com/vehicle-fit-guide']},
    ],
    cameraPolicy:'SUV cabin/cargo and family/fleet use can justify front/rear/cabin coverage; privacy/access requirements should be captured.',filmPolicy:'Large glass area makes heat-rejection performance a high-value decision variable.',securityPolicy:'Exact authorized fitment required.',researchGaps:['2020+ exact interface path','rear entertainment/audio option interactions','camera/fleet executive-transport use cases'],
  },
  {
    id:'gmc-yukon',make:'GMC',model:'Yukon / Yukon XL',marketPriority:'P0',segments:['personal','dealer','fleet'],
    integrationWindows:[
      {years:'2015-2019',factoryContext:'Bose amplified',audioInterfaceCandidates:['pac-ap4-gm61'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-gm61']},
      {years:'2020-2026',factoryContext:'varies by generation/options',audioInterfaceCandidates:[],confidence:'research-needed',verifiedOn:null,sourceUrls:['https://www.metraonline.com/vehicle-fit-guide']},
    ],
    cameraPolicy:'Capture family, executive, dealer and fleet requirements separately.',filmPolicy:'Heat rejection/privacy likely high-value; legal window-by-window selection required.',securityPolicy:'Exact authorized fitment required.',researchGaps:['2020+ exact interface path','Denali audio architecture','camera/cloud package opportunities'],
  },
  {
    id:'toyota-tacoma',make:'Toyota',model:'Tacoma',marketPriority:'P0',segments:['personal','dealer','fleet'],
    integrationWindows:[
      {years:'2019-2021',factoryContext:'premium amplified',audioInterfaceCandidates:['pac-ap4-ty13'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-ty13r2']},
      {years:'2022-2023',factoryContext:'varies',audioInterfaceCandidates:[],confidence:'research-needed',verifiedOn:null,sourceUrls:[]},
      {years:'2024',factoryContext:'premium amplified',audioInterfaceCandidates:['pac-ap4-ty14'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-ty14']},
      {years:'2025-2026',factoryContext:'varies',audioInterfaceCandidates:[],confidence:'research-needed',verifiedOn:null,sourceUrls:[]},
    ],
    cameraPolicy:'Truck/outdoor use may favor parking surveillance and rear/cargo visibility options.',filmPolicy:'Record factory glass + cab configuration; verify legal shade.',securityPolicy:'Exact authorized fitment required.',researchGaps:['2022-2023 premium audio path','2025+ interface applications','cab-specific speaker/subwoofer opportunities'],
  },
  {
    id:'toyota-tundra',make:'Toyota',model:'Tundra',marketPriority:'P0',segments:['personal','dealer','fleet'],
    integrationWindows:[
      {years:'2020-2021',factoryContext:'premium amplified',audioInterfaceCandidates:['pac-ap4-ty13'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-ty13r2']},
      {years:'2022-2024',factoryContext:'premium amplified',audioInterfaceCandidates:['pac-ap4-ty14'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-ty14']},
      {years:'2025-2026',factoryContext:'varies',audioInterfaceCandidates:[],confidence:'research-needed',verifiedOn:null,sourceUrls:[]},
    ],
    cameraPolicy:'Plan for consumer, work-truck and towing/rear-visibility use separately.',filmPolicy:'Heat-rejection and factory privacy glass should be captured as separate data points.',securityPolicy:'Exact authorized fitment required.',researchGaps:['2025+ premium audio application','hybrid-specific power/integration considerations','dealer package demand'],
  },
  {
    id:'ram-1500',make:'Ram',model:'1500 / Ram Truck',marketPriority:'P0',segments:['personal','dealer','fleet'],
    integrationWindows:[
      {years:'2022-2024',factoryContext:'supported newer Chrysler/RAM architecture',audioInterfaceCandidates:['pac-ap4-ch42'],confidence:'official-application',verifiedOn:'2026-09-12',sourceUrls:['https://catalog.archive.pac-audio.com/catalog/audio-interfacing/ap4-ch42']},
      {years:'2025-2026',factoryContext:'certain factory-amplified applications',audioInterfaceCandidates:['pac-ap4-ch42'],confidence:'official-support-conditional',verifiedOn:'2026-09-12',sourceUrls:['https://support.pac-audio.com/hc/en-us/articles/42945034153997-AP4-CH42-APSUB-CH42-No-Audio-PAC-Module-Not-Working']},
    ],
    cameraPolicy:'Truck/fleet use cases may need rear/cargo and cloud options beyond standard 2-channel systems.',filmPolicy:'Record cab/window layout, factory privacy glass and legal shade requirements.',securityPolicy:'Exact authorized fitment required.',researchGaps:['2025-2026 exact trims/factory-amplifier compatibility','2019-2021 interface path','commercial work-truck packages'],
  },
]);

export const vehicleFitmentById=Object.freeze(Object.fromEntries(vehicleFitmentIntelligence.map((vehicle)=>[vehicle.id,vehicle])));
export const getPriorityVehicleFitment=(priority='P0')=>vehicleFitmentIntelligence.filter((vehicle)=>vehicle.marketPriority===priority);
export const getUnresolvedFitmentResearch=()=>vehicleFitmentIntelligence.flatMap((vehicle)=>vehicle.integrationWindows.filter((window)=>window.confidence==='research-needed').map((window)=>({vehicleId:vehicle.id,years:window.years,factoryContext:window.factoryContext})));
