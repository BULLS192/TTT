export const factStatuses = Object.freeze([
  'project-defined',
  'verified',
  'stakeholder-confirmation-needed',
  'external-verification-needed',
  'not-for-publication',
]);

export const companyFacts = Object.freeze([
  {
    id: 'brand-name',
    label: 'Public brand name',
    value: 'Thompson Transportation Technologies',
    status: 'project-defined',
    public: true,
  },
  {
    id: 'brand-short-name',
    label: 'Short brand name',
    value: 'TTT',
    status: 'project-defined',
    public: true,
  },
  {
    id: 'positioning',
    label: 'Positioning',
    value: 'Automotive technology consulting, integration and installation for vehicle owners, dealerships and fleets.',
    status: 'project-defined',
    public: true,
  },
  {
    id: 'service-market',
    label: 'Primary service market',
    value: 'Greater Houston',
    status: 'stakeholder-confirmation-needed',
    public: true,
    note: 'This claim already appears in the website content but should be confirmed before final launch and local SEO expansion.',
  },
]);

export const stakeholderFactRequests = Object.freeze([
  {
    id: 'legal-entity',
    topic: 'Company',
    question: 'What is the exact legal business/entity name that should appear on contracts, invoices and policies?',
    neededFor: ['terms', 'privacy', 'invoices', 'contracts'],
    priority: 'P0-before-launch',
  },
  {
    id: 'founder-story',
    topic: 'Company',
    question: 'How should Derek’s role, experience and reason for creating TTT be described publicly?',
    neededFor: ['about', 'trust', 'press'],
    priority: 'P1-content',
  },
  {
    id: 'experience-claims',
    topic: 'Company',
    question: 'Which years-of-experience, certifications, training, competition results or professional credentials can TTT substantiate and publish?',
    neededFor: ['about', 'service-pages', 'dealer-materials'],
    priority: 'P1-content',
  },
  {
    id: 'phone',
    topic: 'Contact',
    question: 'What phone number should TTT publish?',
    neededFor: ['contact', 'structured-data', 'dealer-materials'],
    priority: 'P0-before-launch',
  },
  {
    id: 'email',
    topic: 'Contact',
    question: 'What public email address should TTT use?',
    neededFor: ['contact', 'lead-routing', 'policies'],
    priority: 'P0-before-launch',
  },
  {
    id: 'location-model',
    topic: 'Operations',
    question: 'Will TTT publish a physical address, operate as a service-area business, work through partner locations, or use a hybrid model?',
    neededFor: ['contact', 'local-seo', 'google-business-profile', 'scheduling'],
    priority: 'P0-before-launch',
  },
  {
    id: 'service-area',
    topic: 'Operations',
    question: 'Which cities/areas are explicitly inside TTT’s normal service area, and which require special arrangements?',
    neededFor: ['service-area', 'local-seo', 'lead-qualification'],
    priority: 'P0-before-launch',
  },
  {
    id: 'hours',
    topic: 'Operations',
    question: 'What business hours, appointment rules and after-hours contact expectations should be published?',
    neededFor: ['contact', 'structured-data', 'customer-expectations'],
    priority: 'P1-content',
  },
  {
    id: 'warranty-policy',
    topic: 'Policies',
    question: 'What installation-workmanship warranty will TTT offer, and how should manufacturer warranties be handled?',
    neededFor: ['services', 'faq', 'quotes', 'handoff'],
    priority: 'P0-before-launch',
  },
  {
    id: 'deposit-cancellation-policy',
    topic: 'Policies',
    question: 'What deposit, rescheduling and cancellation rules should apply to retail projects?',
    neededFor: ['quotes', 'booking', 'terms'],
    priority: 'P1-operations',
  },
  {
    id: 'payment-methods',
    topic: 'Commercial',
    question: 'Which payment methods or financing options will TTT accept or advertise?',
    neededFor: ['faq', 'quotes', 'checkout'],
    priority: 'P2-commerce',
  },
  {
    id: 'dealer-fleet-commercial-terms',
    topic: 'B2B',
    question: 'What billing terms, credit terms, insurance requirements and service-level commitments can TTT offer dealers and fleets?',
    neededFor: ['dealer-programs', 'fleet-programs', 'proposals'],
    priority: 'P1-b2b',
  },
]);

export function getPendingStakeholderFacts(priority) {
  return stakeholderFactRequests.filter((item) => !priority || item.priority === priority);
}
