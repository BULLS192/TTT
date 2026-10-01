export const contentTypes = Object.freeze({
  solution: 'solution',
  service: 'service',
  industry: 'industry',
});

export const decisionStages = Object.freeze({
  discover: 'discover',
  compare: 'compare',
  specify: 'specify',
  validate: 'validate',
  convert: 'convert',
});

export const audiences = Object.freeze({
  vehicleOwner: 'vehicle-owner',
  dealership: 'dealership',
  fleet: 'fleet',
  commercial: 'commercial-operator',
  specialty: 'specialty-vehicle-owner',
});

export const claimClasses = Object.freeze({
  tttPosition: 'ttt-position',
  verifiedFact: 'verified-fact',
  productSpecific: 'product-specific',
  legalRegulatory: 'legal-regulatory',
  customerClaim: 'customer-claim',
  securitySensitive: 'security-sensitive',
});

export const proofTypes = Object.freeze({
  process: 'process-evidence',
  installation: 'installation-evidence',
  documentation: 'documentation-example',
  technical: 'technical-reference',
  customer: 'approved-customer-proof',
  product: 'manufacturer-specification',
  regulatory: 'authoritative-regulatory-source',
});

export const requiredContentFields = Object.freeze([
  'slug',
  'title',
  'summary',
  'seoDescription',
  'overview',
  'points',
  'outcomes',
  'idealFor',
  'considerations',
  'cta',
]);

export const normalizedContentShape = Object.freeze({
  identity: ['id', 'type', 'slug', 'title'],
  intent: ['pageJob', 'primaryProblem', 'primaryOutcome', 'decisionStages'],
  audience: ['primaryAudiences', 'secondaryAudiences'],
  relationships: ['capabilities', 'relatedSolutions', 'relatedServices', 'relatedIndustries'],
  trust: ['claimClasses', 'proofNeeded'],
  conversion: ['conversionGoal'],
});
