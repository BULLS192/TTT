export const editorialClusters = Object.freeze([
  {
    id: 'integration',
    label: 'Vehicle Integration',
    purpose: 'Explain the TTT integration philosophy, OEM+ execution, compatibility and serviceability.',
    pillarTopics: ['OEM+ integration', 'modern factory electronics', 'vehicle interfaces', 'diagnostics', 'documentation'],
    primaryCapabilities: ['oem-integration', 'documentation-qa', 'electronics'],
  },
  {
    id: 'audio',
    label: 'Audio & DSP',
    purpose: 'Help customers make better system-level audio decisions before they shop for components.',
    pillarTopics: ['factory signal', 'DSP', 'amplification', 'speakers', 'subwoofers', 'acoustics', 'tuning'],
    primaryCapabilities: ['audio-dsp', 'oem-integration', 'custom-fabrication'],
  },
  {
    id: 'tint',
    label: 'Window Tint',
    purpose: 'Separate appearance, comfort, product performance and legal considerations.',
    pillarTopics: ['VLT', 'heat rejection', 'UV', 'factory privacy glass', 'night visibility', 'legal limits'],
    primaryCapabilities: ['window-film'],
  },
  {
    id: 'security',
    label: 'Vehicle Security',
    purpose: 'Educate around layered risk reduction without publishing sensitive service details or absolute guarantees.',
    pillarTopics: ['risk assessment', 'layered security', 'alerts', 'recovery', 'security limitations'],
    primaryCapabilities: ['security', 'tracking-telematics', 'cameras'],
  },
  {
    id: 'tracking',
    label: 'Tracking & Telematics',
    purpose: 'Help customers compare tracking platforms around real use cases, data and recurring service.',
    pillarTopics: ['update frequency', 'geofencing', 'subscriptions', 'history', 'user roles', 'fleet telematics'],
    primaryCapabilities: ['tracking-telematics'],
  },
  {
    id: 'cameras',
    label: 'Vehicle Cameras',
    purpose: 'Help customers define coverage, retention, power and access before selecting camera hardware.',
    pillarTopics: ['coverage', 'low light', 'parking mode', 'storage', 'cloud access', 'fleet video governance'],
    primaryCapabilities: ['cameras'],
  },
  {
    id: 'dealerships',
    label: 'Dealership Programs',
    purpose: 'Explain how accessory programs become repeatable sales and operations systems.',
    pillarTopics: ['package design', 'sales handoff', 'pre-delivery installation', 'warranty ownership', 'white-label workflows'],
    primaryCapabilities: ['documentation-qa', 'window-film', 'security', 'tracking-telematics', 'cameras'],
  },
  {
    id: 'fleets',
    label: 'Fleet Programs',
    purpose: 'Explain standardization, lifecycle, access and support across multiple vehicles.',
    pillarTopics: ['standard packages', 'vehicle onboarding', 'tracking', 'camera governance', 'replacement cycles', 'service records'],
    primaryCapabilities: ['tracking-telematics', 'cameras', 'security', 'documentation-qa'],
  },
  {
    id: 'vehicle-guides',
    label: 'Vehicle-Specific Guides',
    purpose: 'Connect TTT capabilities to verified generation/year/trim-specific vehicle information.',
    pillarTopics: ['factory audio', 'interface compatibility', 'camera architecture', 'power notes', 'window configuration'],
    primaryCapabilities: ['oem-integration'],
    requiresVerifiedFitment: true,
  },
]);

export const editorialFormats = Object.freeze([
  'pillar-guide',
  'buying-guide',
  'comparison',
  'vehicle-guide',
  'technical-explainer',
  'faq-deep-dive',
  'case-study',
  'program-guide',
]);

export const publicationStatuses = Object.freeze([
  'idea',
  'research',
  'draft',
  'technical-review',
  'stakeholder-review',
  'scheduled',
  'published',
  'refresh-required',
  'retired',
]);

export const articleGovernanceFields = Object.freeze([
  'cluster',
  'format',
  'primaryAudience',
  'secondaryAudiences',
  'primaryCapability',
  'relatedServices',
  'relatedSolutions',
  'targetQueries',
  'searchIntent',
  'author',
  'reviewer',
  'sources',
  'claimClasses',
  'publicationStatus',
  'publishDate',
  'lastReviewed',
  'nextReview',
  'conversionGoal',
]);

export const launchEditorialPolicy = Object.freeze({
  initialFeaturedArticleTarget: 5,
  principle: 'Publish fewer, stronger pieces rather than launching a large undifferentiated article dump.',
  requirements: [
    'Every featured article belongs to a defined content cluster and audience.',
    'Product performance claims use current product sources.',
    'Legal or regulatory claims use authoritative current sources.',
    'Vehicle-specific claims use verified fitment data rather than assumptions.',
    'Customer results are published only with the appropriate project and testimonial permissions.',
    'Security content avoids sensitive service information.',
    'Articles include a useful next step into a service, solution, FAQ or project pathway.',
  ],
});

const categoryClusterMap = Object.freeze({
  Integration: 'integration',
  'Audio & DSP': 'audio',
  'Window Tint': 'tint',
  'Vehicle Security': 'security',
  'GPS & Tracking': 'tracking',
  Cameras: 'cameras',
  Dealerships: 'dealerships',
  Fleets: 'fleets',
});

export function inferEditorialCluster(article) {
  return categoryClusterMap[article?.category] || null;
}
