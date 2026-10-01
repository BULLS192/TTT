// Vehicle-specific integration SKUs verified against official PAC/Metra application data on 2026-09-12.
// These records are candidates only. Exact vehicle options/factory audio must still be checked at quote time.

export const vehicleSpecificSkus = Object.freeze([
  {
    id:'pac-ap4-fd31',manufacturer:'PAC',brand:'PAC',model:'AP4-FD31',productLine:'AmpPRO 4',category:'installation-infrastructure',subcategory:'factory-amplifier-interface',status:'candidate',
    positioning:'Amplifier integration interface for select Ford vehicles equipped with factory B&O A2B amplified systems.',
    publicPrice:{amount:489.00,currency:'USD',type:'manufacturer-catalog'},mapPrice:null,dealerCost:null,
    fitmentSummary:['Ford F-150 2018-2024 with factory B&O','Ford Bronco 2021-2024 with factory B&O','Ford Explorer 2020-2024 with factory B&O','Ford F-250/F-350 2020-2024 with factory B&O'],
    fitmentPolicy:'Vehicle must be on the PAC application list and equipped with the specified factory B&O A2B system. Reverify current PAC application/firmware before quoting.',
    features:['front/rear/sub preamp outputs','factory control retention per application','optical output included'],
    sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-fd31'],lastVerified:'2026-09-12',
  },
  {
    id:'pac-ap4-gm61',manufacturer:'PAC',brand:'PAC',model:'AP4-GM61',productLine:'AmpPRO 4',category:'installation-infrastructure',subcategory:'factory-amplifier-interface',status:'candidate',
    positioning:'Amplifier integration interface for select older GM vehicles with factory Bose systems.',
    publicPrice:{amount:489.00,currency:'USD',type:'manufacturer-catalog'},mapPrice:null,dealerCost:null,
    fitmentSummary:['Chevrolet Silverado 2014-2018 Bose','Chevrolet Silverado HD 2015-2019 Bose','Chevrolet Tahoe/Suburban 2015-2019 Bose','GMC Sierra 2014-2018 Bose','GMC Sierra HD/Yukon/Yukon XL 2015-2019 Bose'],
    fitmentPolicy:'Use only on PAC-validated applications with the applicable factory Bose system; reverify exact vehicle/options before quote.',
    features:['front/rear/sub/center preamp outputs','OnStar/Bluetooth/navigation/chime retention per supported application','optical output included'],
    sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-gm61'],lastVerified:'2026-09-12',
  },
  {
    id:'pac-ap4-ty13',manufacturer:'PAC',brand:'PAC',model:'AP4-TY13',productLine:'AmpPRO 4',category:'installation-infrastructure',subcategory:'factory-amplifier-interface',status:'candidate',
    positioning:'Amplifier integration interface for select 2018+ Toyota/Lexus vehicles with premium amplified sound systems.',
    publicPrice:{amount:379.00,currency:'USD',type:'manufacturer-catalog'},mapPrice:null,dealerCost:null,
    fitmentSummary:['Toyota Tacoma 2019-2021 premium amplified','Toyota Tundra 2020-2021 premium amplified','Toyota 4Runner 2019-2020 premium amplified','Toyota Highlander 2020-2021 premium amplified'],
    fitmentPolicy:'Use only on the PAC application list with the specified premium amplified system; exact application must be rechecked.',
    features:['5V front/rear/sub preamp outputs','factory radio/control retention per application','optional optical output'],
    sourceUrls:['https://catalog.archive.pac-audio.com/catalog/amppro-amplifier-interfaces/ap4-ty13r2'],lastVerified:'2026-09-12',
  },
  {
    id:'pac-ap4-ch42',manufacturer:'PAC',brand:'PAC',model:'AP4-CH42',productLine:'AmpPRO 4',category:'installation-infrastructure',subcategory:'factory-amplifier-interface',status:'candidate',
    positioning:'Amplifier integration interface for select newer Chrysler/Dodge/Jeep/RAM vehicles.',
    publicPrice:{amount:499.00,currency:'USD',type:'current-manufacturer-store'},mapPrice:null,dealerCost:null,
    fitmentSummary:['RAM truck non-Classic 2022-2024 per current application list','RAM trucks 2025+ only where current PAC support/application data confirms compatibility'],
    fitmentPolicy:'Exact model/options and current firmware/application must be checked. PAC support notes 2025+ RAM applications require the applicable factory-amplified configuration.',
    features:['front/rear/sub preamp outputs','uConnect/Bluetooth/navigation/chime retention per supported application','optional optical output'],
    sourceUrls:['https://pac-audio.com/products/ap4-ch42','https://support.pac-audio.com/hc/en-us/articles/42945034153997-AP4-CH42-APSUB-CH42-No-Audio-PAC-Module-Not-Working'],lastVerified:'2026-09-12',
  },
  {
    id:'metra-axdspx-eth1',manufacturer:'Metra Electronics',brand:'Axxess',model:'AXDSPX-ETH1',productLine:'Axxess DSP-X',category:'installation-infrastructure',subcategory:'gm-ethernet-dsp-interface',status:'candidate',
    positioning:'GM Ethernet-amplifier integration interface with built-in DSP for current supported GM applications.',
    publicPrice:{amount:613.99,currency:'USD',type:'current-metra-fit-guide-msrp'},mapPrice:null,dealerCost:null,
    fitmentSummary:['2026 GMC Sierra 1500 confirmed in current Metra Vehicle Fit Guide','GM 2019-up product family; exact vehicle/RPO/application must be verified through current Metra Vehicle Fit Guide'],
    fitmentPolicy:'Do not infer fitment from “GM 2019-Up” alone. Resolve exact year/make/model and RPO/factory-audio configuration in the current Metra Vehicle Fit Guide.',
    features:['6 inputs','10 assignable outputs','full DSP','OnStar/voice prompt retention where equipped','factory chime retention where equipped','1-year limited warranty'],
    sourceUrls:['https://www.metraonline.com/product/AXDSPX-ETH1','https://www.metraonline.com/vehicle-fit-guide/2026/GMC/Sierra%201500'],lastVerified:'2026-09-12',
  },
]);

export const vehicleSpecificSkuById=Object.freeze(Object.fromEntries(vehicleSpecificSkus.map((sku)=>[sku.id,sku])));
