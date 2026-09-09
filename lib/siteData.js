export const solutions = [
  { slug: 'premium-vehicle-experience', title: 'Premium Vehicle Experience', eyebrow: 'Experience', summary: 'Audio, comfort, privacy and connected technology engineered as one cohesive vehicle system.', points: ['Premium audio and tuning', 'Ceramic window film', 'Integrated lighting', 'OEM+ electronics'], cta: 'Build your vehicle' },
  { slug: 'vehicle-security', title: 'Vehicle Security', eyebrow: 'Protection', summary: 'Layered, discreet vehicle security designed around prevention, awareness and recovery.', points: ['Security system integration', 'Immobilization strategies', 'GPS recovery support', 'Camera and alert integration'], cta: 'Protect your vehicle' },
  { slug: 'connected-vehicle', title: 'Connected Vehicle', eyebrow: 'Connectivity', summary: 'Tracking, cameras, interfaces and vehicle data brought together in one connected experience.', points: ['GPS and geofencing', 'Dash and cabin cameras', 'Mobile connectivity', 'Vehicle electronics integration'], cta: 'Connect your vehicle' },
  { slug: 'fleet-intelligence', title: 'Fleet Intelligence', eyebrow: 'Fleet', summary: 'Standardized technology programs for commercial fleets that need visibility, consistency and serviceability.', points: ['Fleet tracking', 'Driver and vehicle cameras', 'Installation standardization', 'Lifecycle records'], cta: 'Talk to TTT' },
  { slug: 'dealership-technology', title: 'Dealership Technology', eyebrow: 'Dealership', summary: 'A technical integration partner for dealer accessories, security, tracking and customer upgrades.', points: ['Dealer-installed accessories', 'Vehicle security programs', 'Pre-delivery upgrades', 'White-label integration support'], cta: 'Build a dealer program' },
  { slug: 'custom-integration', title: 'Custom Integration', eyebrow: 'Engineering', summary: 'For projects that do not fit a catalog: design, specify, integrate, install, configure and test.', points: ['System architecture', 'Custom fabrication', 'OEM signal integration', 'Documentation and QA'], cta: 'Start a custom project' },
];

export const services = [
  { slug: 'audio', title: 'Audio & DSP', eyebrow: 'Sound', summary: 'OEM-friendly upgrades through fully tuned premium systems.', points: ['Speakers and amplification', 'DSP tuning', 'Subwoofers', 'Sound treatment'], cta: 'Plan an audio build' },
  { slug: 'window-tint', title: 'Window Tint', eyebrow: 'Glass', summary: 'Privacy, heat rejection and UV protection with a clean factory-quality finish.', points: ['Ceramic film', 'Heat rejection', 'UV protection', 'Vehicle-specific guidance'], cta: 'Explore tint' },
  { slug: 'security', title: 'Security', eyebrow: 'Protection', summary: 'Layered vehicle protection installed discreetly and documented responsibly.', points: ['Alarms', 'Immobilization', 'Alerts', 'Recovery support'], cta: 'Secure your vehicle' },
  { slug: 'tracking', title: 'GPS & Tracking', eyebrow: 'Location', summary: 'Location visibility and geofencing for personal vehicles, dealer inventory and fleets.', points: ['Real-time location', 'Geofencing', 'History', 'Fleet dashboards'], cta: 'Explore tracking' },
  { slug: 'cameras', title: 'Cameras & Driver Safety', eyebrow: 'Vision', summary: 'Dash cameras, parking visibility and commercial camera systems integrated cleanly.', points: ['Dash cameras', 'Rear and 360° cameras', 'Parking assistance', 'Fleet video'], cta: 'Add vehicle vision' },
  { slug: 'lighting', title: 'Lighting', eyebrow: 'Illumination', summary: 'Purposeful lighting systems for interiors, work vehicles and custom builds.', points: ['Ambient lighting', 'Work lighting', 'Controllers', 'Custom integration'], cta: 'Plan lighting' },
  { slug: 'electronics', title: 'Electronics & Accessories', eyebrow: 'Electronics', summary: 'Vehicle electronics selected for compatibility and integrated for long-term serviceability.', points: ['Remote start', 'Charging and power', 'Interfaces', 'Accessories'], cta: 'Explore electronics' },
  { slug: 'custom-fabrication', title: 'Custom Fabrication', eyebrow: 'Fabrication', summary: 'OEM+ mounting, panels, enclosures and integration details built around the vehicle.', points: ['Panels and trim', 'Enclosures', 'Mounting systems', 'Finish work'], cta: 'Start a custom build' },
];

export const industries = [
  { slug: 'vehicle-owners', title: 'Vehicle Owners', eyebrow: 'Consumer', summary: 'Technology upgrades that improve the way you hear, see, secure and live with your vehicle.', points: ['Daily drivers', 'Luxury vehicles', 'Performance vehicles', 'Show and specialty builds'], cta: 'Build your vehicle' },
  { slug: 'dealerships', title: 'Dealerships', eyebrow: 'B2B', summary: 'A scalable installation and consulting partner for vehicle technology programs.', points: ['Accessories', 'Security and tracking', 'Stock vehicle upgrades', 'Program documentation'], cta: 'Talk dealership solutions' },
  { slug: 'fleets', title: 'Fleets', eyebrow: 'B2B', summary: 'Standardized installations and vehicle records for organizations managing many vehicles.', points: ['Tracking', 'Cameras', 'Security', 'Installation programs'], cta: 'Build a fleet program' },
  { slug: 'commercial-vehicles', title: 'Commercial Vehicles', eyebrow: 'Business', summary: 'Technology and power integration for vehicles that work for a living.', points: ['Contractor vehicles', 'Service fleets', 'Delivery vehicles', 'Mobile workforces'], cta: 'Discuss your vehicles' },
  { slug: 'specialty-vehicles', title: 'Specialty Vehicles', eyebrow: 'Specialty', summary: 'Custom integration for projects where standard installation approaches are not enough.', points: ['Restomods', 'High-value vehicles', 'Special projects', 'Future marine and RV capability'], cta: 'Discuss a special project' },
];

export const projects = [
  { vehicle: 'Concept One', title: 'Connected vehicle demonstrator', tags: ['Audio', 'Tint', 'Security', 'Tracking'], status: 'TTT showcase' },
  { vehicle: 'Dealer Program', title: 'Technology integration framework', tags: ['Security', 'Tracking', 'Documentation'], status: 'Program template' },
  { vehicle: 'Fleet Standard', title: 'Repeatable vehicle technology package', tags: ['GPS', 'Cameras', 'QA'], status: 'Program template' },
];

export const products = [
  { category: 'Audio', name: 'DSP & amplifier systems', description: 'Signal processing, amplification and integration hardware selected around the vehicle.' },
  { category: 'Security', name: 'Layered security systems', description: 'Security, alerting and immobilization components configured as a system.' },
  { category: 'Tracking', name: 'GPS & telematics', description: 'Connected tracking hardware for individual vehicles, dealers and fleets.' },
  { category: 'Cameras', name: 'Vehicle camera systems', description: 'Dash, rear, parking and fleet camera options with clean installation.' },
  { category: 'Tint', name: 'Premium window film', description: 'Film options focused on privacy, heat rejection, UV protection and clarity.' },
  { category: 'Electronics', name: 'Vehicle accessories', description: 'Interfaces, charging, remote start, lighting and compatible electronics.' },
];

export function findItem(items, slug) {
  return items.find((item) => item.slug === slug);
}
