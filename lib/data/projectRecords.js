export const projectStatuses = Object.freeze([
  'planned',
  'active',
  'validation',
  'complete',
  'archived',
]);

export const publicationStatuses = Object.freeze([
  'internal-only',
  'permission-pending',
  'approved-anonymous',
  'approved-attributed',
  'ttt-owned-demonstrator',
]);

export const projectRecordFields = Object.freeze([
  'id',
  'projectNumber',
  'title',
  'status',
  'customerType',
  'customerOrOrganization',
  'vehicle',
  'problem',
  'desiredOutcomes',
  'requirements',
  'constraints',
  'capabilities',
  'products',
  'installationDecisions',
  'configuration',
  'validationResults',
  'issuesFound',
  'resolutionNotes',
  'laborHours',
  'projectValue',
  'startDate',
  'completionDate',
  'warrantyResponsibility',
  'serviceNotes',
  'publicationStatus',
  'publicationPermissions',
  'testimonialId',
  'mediaPermissions',
  'verificationSources',
  'lastUpdated',
]);

export const vehicleRecordShape = Object.freeze({
  year: null,
  make: null,
  model: null,
  generation: null,
  trim: null,
  powertrain: null,
  vin: null,
  mileage: null,
  internalVehicleId: null,
});

export const publicationPermissionFields = Object.freeze([
  'customerNameAllowed',
  'organizationNameAllowed',
  'vehicleIdentifierAllowed',
  'licensePlateAllowed',
  'locationAllowed',
  'beforePhotosAllowed',
  'afterPhotosAllowed',
  'installationPhotosAllowed',
  'quoteAllowed',
  'projectValueAllowed',
  'measuredResultsAllowed',
  'approvalDate',
  'approvedBy',
]);

export const projectSeeds = Object.freeze([
  {
    id: 'project:concept-one',
    projectNumber: 'TTT-001',
    title: 'Concept One',
    status: 'active',
    customerType: 'ttt-demonstrator',
    customerOrOrganization: 'Thompson Transportation Technologies',
    vehicle: {
      ...vehicleRecordShape,
      make: 'TTT',
      model: 'Concept One',
      internalVehicleId: 'C1',
    },
    problem: 'Demonstrate how multiple automotive technology systems can be planned as one integrated vehicle experience.',
    desiredOutcomes: ['integrated-experience', 'technical-demonstration', 'repeatable-ttt-methodology'],
    requirements: ['audio', 'window-film', 'security', 'tracking-telematics', 'cameras', 'connectivity'],
    constraints: ['maintain-cohesive-vehicle-experience', 'avoid-unrelated-manufacturer-branding'],
    capabilities: ['audio-dsp', 'window-film', 'security', 'tracking-telematics', 'cameras', 'electronics', 'oem-integration', 'documentation-qa'],
    products: [],
    installationDecisions: [],
    configuration: [],
    validationResults: [],
    issuesFound: [],
    resolutionNotes: [],
    laborHours: null,
    projectValue: null,
    startDate: null,
    completionDate: null,
    warrantyResponsibility: null,
    serviceNotes: [],
    publicationStatus: 'ttt-owned-demonstrator',
    publicationPermissions: {
      customerNameAllowed: true,
      organizationNameAllowed: true,
      vehicleIdentifierAllowed: true,
      licensePlateAllowed: false,
      locationAllowed: true,
      beforePhotosAllowed: true,
      afterPhotosAllowed: true,
      installationPhotosAllowed: true,
      quoteAllowed: false,
      projectValueAllowed: false,
      measuredResultsAllowed: true,
      approvalDate: null,
      approvedBy: 'TTT',
    },
    testimonialId: null,
    mediaPermissions: 'ttt-owned',
    verificationSources: ['TTT internal project record'],
    lastUpdated: null,
  },
]);

export function isProjectPublishable(project) {
  return ['approved-anonymous', 'approved-attributed', 'ttt-owned-demonstrator'].includes(project?.publicationStatus);
}

export function getPublishableProjects(projects = projectSeeds) {
  return projects.filter(isProjectPublishable);
}
