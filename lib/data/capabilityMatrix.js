export const capabilities = Object.freeze([
  {
    id: 'audio-dsp',
    label: 'Audio & DSP',
    serviceSlug: 'audio',
    category: 'experience',
    customerOutcomes: ['clarity', 'soundstage', 'bass-performance', 'factory-function-retention'],
    audiences: ['vehicle-owner', 'dealership', 'specialty-vehicle-owner'],
    vehicleContexts: ['daily-driver', 'luxury', 'performance', 'specialty'],
    dependencies: ['oem-integration'],
    dataNeeded: ['factory-audio-architecture', 'speaker-layout', 'factory-amplifier', 'source-signal', 'available-space', 'customer-listening-goal'],
    proofNeeded: ['system-design', 'tuning-record', 'installation-evidence'],
  },
  {
    id: 'window-film',
    label: 'Window Film',
    serviceSlug: 'window-tint',
    category: 'experience',
    customerOutcomes: ['heat-management', 'privacy', 'uv-reduction', 'appearance'],
    audiences: ['vehicle-owner', 'dealership', 'fleet', 'commercial-operator'],
    vehicleContexts: ['daily-driver', 'luxury', 'fleet', 'commercial'],
    dependencies: [],
    dataNeeded: ['window-position', 'factory-glass', 'desired-vlt', 'jurisdiction', 'product-performance-data'],
    proofNeeded: ['manufacturer-specification', 'regulatory-source', 'installation-evidence'],
  },
  {
    id: 'security',
    label: 'Vehicle Security',
    serviceSlug: 'security',
    category: 'protection',
    customerOutcomes: ['deterrence', 'detection', 'unauthorized-operation-resistance', 'incident-awareness'],
    audiences: ['vehicle-owner', 'dealership', 'fleet', 'commercial-operator', 'specialty-vehicle-owner'],
    vehicleContexts: ['high-value', 'outdoor-parking', 'dealer-inventory', 'fleet', 'specialty'],
    dependencies: ['oem-integration', 'documentation-qa'],
    dataNeeded: ['vehicle-platform', 'risk-profile', 'parking-pattern', 'authorized-use-pattern', 'factory-security-features'],
    proofNeeded: ['security-design-rationale', 'installation-evidence', 'validation-record'],
    sensitive: true,
  },
  {
    id: 'tracking-telematics',
    label: 'Tracking & Telematics',
    serviceSlug: 'tracking',
    category: 'connectivity',
    customerOutcomes: ['location-visibility', 'geofence-alerts', 'event-history', 'fleet-visibility'],
    audiences: ['vehicle-owner', 'dealership', 'fleet', 'commercial-operator'],
    vehicleContexts: ['personal', 'dealer-inventory', 'fleet', 'commercial'],
    dependencies: ['electronics', 'documentation-qa'],
    dataNeeded: ['update-frequency', 'subscription-model', 'history-retention', 'user-roles', 'coverage', 'power-strategy'],
    proofNeeded: ['manufacturer-specification', 'subscription-details', 'platform-demo'],
    recurringCostPossible: true,
  },
  {
    id: 'cameras',
    label: 'Vehicle Cameras',
    serviceSlug: 'cameras',
    category: 'visibility',
    customerOutcomes: ['incident-documentation', 'parking-visibility', 'driver-visibility', 'operational-video'],
    audiences: ['vehicle-owner', 'dealership', 'fleet', 'commercial-operator'],
    vehicleContexts: ['daily-driver', 'high-value', 'large-vehicle', 'fleet', 'commercial'],
    dependencies: ['electronics', 'documentation-qa'],
    dataNeeded: ['required-views', 'recording-mode', 'parking-mode', 'storage-duration', 'cloud-access', 'authorized-users'],
    proofNeeded: ['manufacturer-specification', 'coverage-plan', 'retention-plan'],
  },
  {
    id: 'lighting',
    label: 'Lighting',
    serviceSlug: 'lighting',
    category: 'experience',
    customerOutcomes: ['task-visibility', 'interior-ambience', 'controlled-illumination'],
    audiences: ['vehicle-owner', 'commercial-operator', 'specialty-vehicle-owner'],
    vehicleContexts: ['premium-interior', 'show', 'work-truck', 'service-van'],
    dependencies: ['electronics'],
    dataNeeded: ['functional-vs-aesthetic', 'zones', 'control-method', 'power-behavior', 'environmental-exposure'],
    proofNeeded: ['installation-evidence', 'control-plan'],
  },
  {
    id: 'electronics',
    label: 'Electronics & Accessories',
    serviceSlug: 'electronics',
    category: 'integration',
    customerOutcomes: ['convenience', 'power-access', 'device-integration', 'factory-function-retention'],
    audiences: ['vehicle-owner', 'dealership', 'fleet', 'commercial-operator', 'specialty-vehicle-owner'],
    vehicleContexts: ['modern-vehicle', 'work-vehicle', 'specialty'],
    dependencies: ['oem-integration'],
    dataNeeded: ['vehicle-electrical-architecture', 'power-load', 'control-method', 'interface-requirements', 'service-access'],
    proofNeeded: ['technical-reference', 'installation-evidence', 'validation-record'],
  },
  {
    id: 'custom-fabrication',
    label: 'Custom Fabrication',
    serviceSlug: 'custom-fabrication',
    category: 'integration',
    customerOutcomes: ['space-efficiency', 'secure-mounting', 'serviceability', 'finished-fit'],
    audiences: ['vehicle-owner', 'commercial-operator', 'specialty-vehicle-owner'],
    vehicleContexts: ['premium-audio', 'specialty', 'commercial', 'prototype'],
    dependencies: ['documentation-qa'],
    dataNeeded: ['available-volume', 'mounting-surfaces', 'loads', 'thermal-needs', 'service-clearance', 'finish-requirement'],
    proofNeeded: ['fabrication-drawing-or-plan', 'installation-evidence'],
  },
  {
    id: 'oem-integration',
    label: 'OEM Integration',
    serviceSlug: null,
    category: 'integration',
    customerOutcomes: ['factory-function-retention', 'compatibility', 'clean-control', 'reduced-service-risk'],
    audiences: ['vehicle-owner', 'dealership', 'fleet', 'commercial-operator', 'specialty-vehicle-owner'],
    vehicleContexts: ['modern-vehicle', 'premium-vehicle', 'specialty'],
    dependencies: [],
    dataNeeded: ['factory-modules', 'data-networks', 'factory-controls', 'diagnostic-state', 'integration-interface'],
    proofNeeded: ['technical-reference', 'before-after-validation'],
  },
  {
    id: 'documentation-qa',
    label: 'Documentation & QA',
    serviceSlug: null,
    category: 'quality',
    customerOutcomes: ['repeatability', 'serviceability', 'clear-handoff', 'lifecycle-records'],
    audiences: ['vehicle-owner', 'dealership', 'fleet', 'commercial-operator', 'specialty-vehicle-owner'],
    vehicleContexts: ['all'],
    dependencies: [],
    dataNeeded: ['installed-equipment', 'configuration', 'photos', 'validation-results', 'service-notes'],
    proofNeeded: ['project-record', 'handoff-record'],
  },
]);

export const solutionCapabilityMap = Object.freeze({
  'premium-vehicle-experience': ['audio-dsp', 'window-film', 'electronics', 'lighting', 'cameras', 'tracking-telematics', 'oem-integration'],
  'vehicle-security': ['security', 'tracking-telematics', 'cameras', 'oem-integration', 'documentation-qa'],
  'connected-vehicle': ['tracking-telematics', 'cameras', 'electronics', 'oem-integration', 'documentation-qa'],
  'fleet-intelligence': ['tracking-telematics', 'cameras', 'security', 'electronics', 'documentation-qa'],
  'dealership-technology': ['window-film', 'security', 'tracking-telematics', 'cameras', 'audio-dsp', 'documentation-qa'],
  'custom-integration': ['custom-fabrication', 'oem-integration', 'electronics', 'documentation-qa'],
});

export const audienceCapabilityMap = Object.freeze({
  'vehicle-owner': ['audio-dsp', 'window-film', 'security', 'tracking-telematics', 'cameras', 'lighting', 'electronics', 'custom-fabrication', 'oem-integration', 'documentation-qa'],
  dealership: ['window-film', 'security', 'tracking-telematics', 'cameras', 'audio-dsp', 'electronics', 'documentation-qa'],
  fleet: ['security', 'tracking-telematics', 'cameras', 'electronics', 'documentation-qa'],
  'commercial-operator': ['security', 'tracking-telematics', 'cameras', 'lighting', 'electronics', 'custom-fabrication', 'documentation-qa'],
  'specialty-vehicle-owner': ['audio-dsp', 'security', 'lighting', 'electronics', 'custom-fabrication', 'oem-integration', 'documentation-qa'],
});

export const customerJourneyFields = Object.freeze({
  owner: ['vehicle', 'desired-outcome', 'current-problem', 'must-retain-features', 'budget-band', 'timing', 'future-phases'],
  dealership: ['organization', 'locations', 'vehicle-mix', 'package-types', 'monthly-volume', 'turnaround-target', 'sales-handoff', 'warranty-owner', 'billing-method'],
  fleet: ['organization', 'vehicle-count', 'vehicle-types', 'operational-goal', 'user-roles', 'data-retention', 'installation-downtime', 'replacement-cycle', 'service-locations'],
});

export const capabilityById = Object.freeze(Object.fromEntries(capabilities.map((item) => [item.id, item])));

export function getCapabilitiesForSolution(solutionSlug) {
  return (solutionCapabilityMap[solutionSlug] || []).map((id) => capabilityById[id]).filter(Boolean);
}

export function getCapabilitiesForAudience(audience) {
  return (audienceCapabilityMap[audience] || []).map((id) => capabilityById[id]).filter(Boolean);
}
