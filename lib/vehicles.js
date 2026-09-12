const model = (name, bodyStyles, segments = [], aliases = []) => ({
  name,
  bodyStyles,
  segments,
  aliases,
  fitmentStatus: 'research-needed',
});

export const vehicleCatalog = Object.freeze([
  {
    make: 'Ford',
    models: [
      model('F-150', ['crew-cab', 'supercab', 'regular-cab'], ['pickup', 'commercial']),
      model('F-250 Super Duty', ['crew-cab', 'supercab', 'regular-cab'], ['heavy-duty-pickup', 'commercial']),
      model('F-350 Super Duty', ['crew-cab', 'supercab', 'regular-cab'], ['heavy-duty-pickup', 'commercial']),
      model('Mustang', ['coupe', 'convertible'], ['performance']),
      model('Bronco', ['suv'], ['off-road', 'lifestyle']),
      model('Explorer', ['suv'], ['family']),
      model('Expedition', ['suv'], ['full-size-suv']),
      model('Transit', ['cargo-van', 'passenger-van'], ['commercial', 'fleet']),
    ],
  },
  {
    make: 'Chevrolet',
    models: [
      model('Silverado 1500', ['crew-cab', 'double-cab', 'regular-cab'], ['pickup', 'commercial']),
      model('Silverado HD', ['crew-cab', 'double-cab', 'regular-cab'], ['heavy-duty-pickup', 'commercial']),
      model('Tahoe', ['suv'], ['full-size-suv']),
      model('Suburban', ['suv'], ['full-size-suv']),
      model('Corvette', ['coupe', 'convertible'], ['performance', 'specialty']),
      model('Traverse', ['suv'], ['family']),
    ],
  },
  {
    make: 'GMC',
    models: [
      model('Sierra 1500', ['crew-cab', 'double-cab', 'regular-cab'], ['pickup', 'commercial']),
      model('Sierra HD', ['crew-cab', 'double-cab', 'regular-cab'], ['heavy-duty-pickup', 'commercial']),
      model('Yukon', ['suv'], ['full-size-suv']),
      model('Canyon', ['crew-cab'], ['midsize-pickup']),
    ],
  },
  {
    make: 'Ram',
    models: [
      model('1500', ['crew-cab', 'quad-cab'], ['pickup', 'commercial']),
      model('2500', ['crew-cab', 'mega-cab', 'regular-cab'], ['heavy-duty-pickup', 'commercial']),
      model('3500', ['crew-cab', 'mega-cab', 'regular-cab'], ['heavy-duty-pickup', 'commercial']),
      model('ProMaster', ['cargo-van', 'passenger-van'], ['commercial', 'fleet']),
    ],
  },
  {
    make: 'Toyota',
    models: [
      model('Camry', ['sedan'], ['daily-driver']),
      model('Corolla', ['sedan', 'hatchback'], ['daily-driver']),
      model('Tacoma', ['crew-cab', 'extended-cab'], ['midsize-pickup', 'lifestyle']),
      model('Tundra', ['crew-cab', 'extended-cab'], ['pickup']),
      model('4Runner', ['suv'], ['off-road', 'lifestyle']),
      model('Land Cruiser', ['suv'], ['off-road', 'premium']),
      model('RAV4', ['suv'], ['daily-driver', 'family']),
      model('Highlander', ['suv'], ['family']),
    ],
  },
  {
    make: 'Lexus',
    models: [
      model('IS', ['sedan'], ['premium', 'performance']),
      model('ES', ['sedan'], ['premium']),
      model('LS', ['sedan'], ['luxury']),
      model('RX', ['suv'], ['premium']),
      model('GX', ['suv'], ['premium', 'off-road']),
      model('LX', ['suv'], ['luxury', 'off-road']),
    ],
  },
  {
    make: 'Honda',
    models: [
      model('Accord', ['sedan'], ['daily-driver']),
      model('Civic', ['sedan', 'hatchback'], ['daily-driver', 'performance']),
      model('CR-V', ['suv'], ['daily-driver', 'family']),
      model('Pilot', ['suv'], ['family']),
      model('Ridgeline', ['crew-cab'], ['midsize-pickup']),
    ],
  },
  {
    make: 'Nissan',
    models: [
      model('Altima', ['sedan'], ['daily-driver']),
      model('Frontier', ['crew-cab', 'extended-cab'], ['midsize-pickup']),
      model('Titan', ['crew-cab', 'extended-cab'], ['pickup']),
      model('Pathfinder', ['suv'], ['family']),
      model('Armada', ['suv'], ['full-size-suv']),
      model('Z', ['coupe'], ['performance']),
    ],
  },
  {
    make: 'Jeep',
    models: [
      model('Wrangler', ['suv'], ['off-road', 'lifestyle']),
      model('Grand Cherokee', ['suv'], ['premium', 'family']),
      model('Gladiator', ['crew-cab'], ['midsize-pickup', 'off-road']),
      model('Wagoneer', ['suv'], ['full-size-suv', 'premium']),
    ],
  },
  {
    make: 'Tesla',
    models: [
      model('Model 3', ['sedan'], ['ev', 'daily-driver']),
      model('Model Y', ['suv'], ['ev', 'daily-driver']),
      model('Model S', ['sedan'], ['ev', 'premium', 'performance']),
      model('Model X', ['suv'], ['ev', 'premium']),
      model('Cybertruck', ['crew-cab'], ['ev', 'pickup', 'specialty']),
    ],
  },
  {
    make: 'BMW',
    models: [
      model('3 Series', ['sedan'], ['premium', 'performance']),
      model('4 Series', ['coupe', 'convertible', 'gran-coupe'], ['premium', 'performance']),
      model('5 Series', ['sedan'], ['premium']),
      model('7 Series', ['sedan'], ['luxury']),
      model('X3', ['suv'], ['premium']),
      model('X5', ['suv'], ['premium']),
      model('X7', ['suv'], ['luxury']),
    ],
  },
  {
    make: 'Mercedes-Benz',
    models: [
      model('C-Class', ['sedan'], ['premium']),
      model('E-Class', ['sedan'], ['premium']),
      model('S-Class', ['sedan'], ['luxury']),
      model('GLC', ['suv'], ['premium']),
      model('GLE', ['suv'], ['premium']),
      model('GLS', ['suv'], ['luxury']),
      model('Sprinter', ['cargo-van', 'passenger-van'], ['commercial', 'fleet']),
    ],
  },
  {
    make: 'Audi',
    models: [
      model('A4', ['sedan'], ['premium']),
      model('A5', ['coupe', 'sportback'], ['premium', 'performance']),
      model('A6', ['sedan'], ['premium']),
      model('A8', ['sedan'], ['luxury']),
      model('Q5', ['suv'], ['premium']),
      model('Q7', ['suv'], ['premium']),
      model('Q8', ['suv'], ['luxury']),
    ],
  },
  {
    make: 'Porsche',
    models: [
      model('911', ['coupe', 'convertible'], ['performance', 'specialty']),
      model('718', ['coupe', 'convertible'], ['performance', 'specialty'], ['Cayman', 'Boxster']),
      model('Panamera', ['sedan'], ['premium', 'performance']),
      model('Macan', ['suv'], ['premium', 'performance']),
      model('Cayenne', ['suv'], ['premium', 'performance']),
      model('Taycan', ['sedan'], ['ev', 'premium', 'performance']),
    ],
  },
  {
    make: 'Cadillac',
    models: [
      model('CT4', ['sedan'], ['premium']),
      model('CT5', ['sedan'], ['premium', 'performance']),
      model('Escalade', ['suv'], ['luxury', 'full-size-suv']),
      model('XT5', ['suv'], ['premium']),
      model('XT6', ['suv'], ['premium']),
      model('Lyriq', ['suv'], ['ev', 'premium']),
    ],
  },
  {
    make: 'Hyundai',
    models: [
      model('Elantra', ['sedan'], ['daily-driver']),
      model('Sonata', ['sedan'], ['daily-driver']),
      model('Tucson', ['suv'], ['daily-driver', 'family']),
      model('Santa Fe', ['suv'], ['family']),
      model('Palisade', ['suv'], ['family']),
      model('Ioniq 5', ['suv'], ['ev']),
    ],
  },
  {
    make: 'Kia',
    models: [
      model('K5', ['sedan'], ['daily-driver']),
      model('Sportage', ['suv'], ['daily-driver', 'family']),
      model('Sorento', ['suv'], ['family']),
      model('Telluride', ['suv'], ['family']),
      model('EV6', ['suv'], ['ev', 'performance']),
      model('EV9', ['suv'], ['ev', 'family']),
    ],
  },
  {
    make: 'Rivian',
    models: [
      model('R1T', ['crew-cab'], ['ev', 'pickup', 'premium']),
      model('R1S', ['suv'], ['ev', 'premium', 'off-road']),
    ],
  },
]);

export const fitmentResearchFields = Object.freeze([
  'generation',
  'modelYears',
  'trim',
  'powertrain',
  'factoryAudioBrand',
  'factoryAmplifier',
  'speakerLayout',
  'factoryScreen',
  'dataNetworkNotes',
  'cameraArchitecture',
  'factorySecurityFeatures',
  'remoteStartCompatibility',
  'batteryAndPowerNotes',
  'windowConfiguration',
  'knownIntegrationConstraints',
  'recommendedInterfaces',
  'supportedCapabilities',
  'verificationSources',
  'lastVerified',
]);

export const fitmentRecordTemplate = Object.freeze({
  generation: null,
  modelYears: [],
  trim: null,
  powertrain: null,
  factoryAudioBrand: null,
  factoryAmplifier: null,
  speakerLayout: null,
  factoryScreen: null,
  dataNetworkNotes: null,
  cameraArchitecture: null,
  factorySecurityFeatures: null,
  remoteStartCompatibility: null,
  batteryAndPowerNotes: null,
  windowConfiguration: null,
  knownIntegrationConstraints: [],
  recommendedInterfaces: [],
  supportedCapabilities: [],
  verificationSources: [],
  lastVerified: null,
  verificationStatus: 'unverified',
});

export const vehicleMakes = Object.freeze(Object.fromEntries(
  vehicleCatalog.map(({ make, models }) => [make, models.map(({ name }) => name)])
));

const currentYear = new Date().getFullYear();
export const currentYears = Array.from({ length: 15 }, (_, i) => String(currentYear + 1 - i));

export const capabilityLabels = [
  ['Audio & DSP', 'Signal integration, amplification, speakers and tuning'],
  ['Security', 'Layered defensive security and immobilization'],
  ['Tracking', 'GPS, geofencing and telematics-ready systems'],
  ['Cameras', 'Dash, rear, parking and multi-camera systems'],
  ['Tint', 'Privacy, UV and heat-rejection film options'],
  ['Electronics', 'OEM integration, charging and accessory electronics'],
];

export function findVehicleMake(make) {
  return vehicleCatalog.find((entry) => entry.make.toLowerCase() === String(make || '').toLowerCase()) || null;
}

export function findVehicleModel(make, modelName) {
  const makeEntry = findVehicleMake(make);
  if (!makeEntry) return null;
  const target = String(modelName || '').toLowerCase();
  return makeEntry.models.find((entry) => entry.name.toLowerCase() === target || entry.aliases.some((alias) => alias.toLowerCase() === target)) || null;
}
