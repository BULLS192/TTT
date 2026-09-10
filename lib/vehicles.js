export const vehicleMakes = {
  Ford: ['F-150','Mustang','Explorer','Bronco','Expedition'],
  Chevrolet: ['Silverado 1500','Tahoe','Suburban','Camaro','Corvette'],
  GMC: ['Sierra 1500','Yukon','Canyon'],
  Toyota: ['Camry','Corolla','Tacoma','Tundra','4Runner'],
  Honda: ['Accord','Civic','CR-V','Pilot'],
  BMW: ['3 Series','4 Series','5 Series','X3','X5'],
  Mercedes: ['C-Class','E-Class','GLC','GLE'],
  Tesla: ['Model 3','Model Y','Model S','Model X'],
  Ram: ['1500','2500','3500'],
  Jeep: ['Wrangler','Grand Cherokee','Gladiator']
};

export const currentYears = Array.from({length: 12}, (_,i) => String(2027-i));

export const capabilityLabels = [
  ['Audio & DSP','Signal integration, amplification, speakers and tuning'],
  ['Security','Layered defensive security and immobilization'],
  ['Tracking','GPS, geofencing and telematics-ready systems'],
  ['Cameras','Dash, rear, parking and multi-camera systems'],
  ['Tint','Privacy, UV and heat-rejection film options'],
  ['Electronics','OEM integration, charging and accessory electronics']
];
