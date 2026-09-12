export const leadStages = Object.freeze([
  'new',
  'contacted',
  'qualified',
  'discovery',
  'proposal',
  'approved',
  'scheduled',
  'won',
  'lost',
  'nurture',
]);

export const leadCustomerTypes = Object.freeze([
  'vehicle-owner',
  'dealership',
  'fleet',
  'commercial-operator',
  'specialty-vehicle-owner',
]);

export const leadRecordFields = Object.freeze([
  'id',
  'createdAt',
  'updatedAt',
  'source',
  'sourceDetail',
  'campaign',
  'customerType',
  'firstName',
  'lastName',
  'organization',
  'email',
  'phone',
  'preferredContactMethod',
  'location',
  'vehicle',
  'vehicleCount',
  'desiredOutcomes',
  'services',
  'solutions',
  'problemDescription',
  'mustRetainFeatures',
  'budgetBand',
  'urgency',
  'targetDate',
  'decisionMaker',
  'qualificationScore',
  'stage',
  'assignedOwner',
  'nextAction',
  'nextActionDate',
  'consent',
  'notes',
]);

export const qualificationDimensions = Object.freeze([
  {
    id: 'fit',
    label: 'TTT fit',
    weight: 30,
    guidance: 'Does the request match TTT capabilities, operating model and supported vehicle context?',
  },
  {
    id: 'clarity',
    label: 'Problem clarity',
    weight: 15,
    guidance: 'Is the desired outcome clear enough to define a useful next step?',
  },
  {
    id: 'vehicle-readiness',
    label: 'Vehicle readiness',
    weight: 15,
    guidance: 'Is the vehicle identified and available enough for compatibility or project planning?',
  },
  {
    id: 'budget-alignment',
    label: 'Budget alignment',
    weight: 15,
    guidance: 'Is there enough budget context to avoid proposing an unrealistic scope?',
  },
  {
    id: 'timing',
    label: 'Timing',
    weight: 10,
    guidance: 'Is the requested timing realistic for discovery, sourcing and installation?',
  },
  {
    id: 'decision-access',
    label: 'Decision access',
    weight: 15,
    guidance: 'For B2B opportunities, is the relevant decision maker or operating owner identified?',
  },
]);

export const budgetBands = Object.freeze([
  'not-specified',
  'under-500',
  '500-1500',
  '1500-3000',
  '3000-7500',
  '7500-plus',
  'b2b-program-budget',
]);

export const urgencyLevels = Object.freeze([
  'researching',
  'within-90-days',
  'within-30-days',
  'within-14-days',
  'date-critical',
]);

export const sourceTaxonomy = Object.freeze([
  'website-contact',
  'website-project-intake',
  'phone',
  'email',
  'referral',
  'dealer-partner',
  'fleet-partner',
  'social',
  'event',
  'organic-search',
  'paid-campaign',
  'other',
]);
