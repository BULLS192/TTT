export const researchQueue = Object.freeze([
  {
    id: 'research:ttt-contact-facts',
    priority: 'P0',
    type: 'stakeholder',
    topic: 'Company contact and operating model',
    objective: 'Confirm public phone, email, location model, service area and business hours.',
    blocks: ['final structured data', 'contact page completion', 'local SEO', 'lead routing'],
  },
  {
    id: 'research:ttt-warranty-policy',
    priority: 'P0',
    type: 'stakeholder',
    topic: 'Warranty responsibility',
    objective: 'Define TTT workmanship warranty and how manufacturer/third-party warranties are communicated.',
    blocks: ['FAQ completion', 'quotes', 'handoff standard', 'dealer programs'],
  },
  {
    id: 'research:texas-tint-law',
    priority: 'P0',
    type: 'regulatory',
    topic: 'Texas automotive window-film requirements',
    objective: 'Create a current authoritative Texas record by window position, vehicle type and relevant exemptions before publishing legal guidance.',
    blocks: ['Texas tint FAQ', 'tint recommendations', 'future 50-state tint database'],
  },
  {
    id: 'research:product-brands',
    priority: 'P1',
    type: 'vendor-product',
    topic: 'TTT product and manufacturer intelligence',
    objective: 'Populate manufacturer, product-line, warranty, pricing, subscription, distribution and support records using current sources.',
    blocks: ['approved product catalog', 'quote engine', 'dealer packages', 'shop'],
  },
  {
    id: 'research:vehicle-fitment-priority',
    priority: 'P1',
    type: 'fitment',
    topic: 'Priority vehicle platform fitment',
    objective: 'Verify generation/year/trim-specific factory systems for the highest-frequency Houston vehicle platforms before publishing vehicle-specific guidance.',
    blocks: ['vehicle guides', 'fitment recommendations', 'automated project intake'],
  },
  {
    id: 'research:testimonials',
    priority: 'P1',
    type: 'customer-proof',
    topic: 'Approved testimonials',
    objective: 'Collect exact approved quote and attribution permissions from real TTT customers as projects are completed.',
    blocks: ['testimonial modules', 'social proof'],
  },
  {
    id: 'research:case-studies',
    priority: 'P1',
    type: 'customer-proof',
    topic: 'Publishable case studies',
    objective: 'Capture project problem, scope, decisions, validation and approved results for real customer work.',
    blocks: ['projects portfolio', 'dealer/fleet proof'],
  },
  {
    id: 'research:dealer-program-pilot',
    priority: 'P1',
    type: 'commercial',
    topic: 'Dealer program economics and workflow',
    objective: 'Validate a real dealer pilot around packages, volume, turnaround, billing, warranty and records.',
    blocks: ['dealer-specific commercial claims', 'program pricing'],
  },
  {
    id: 'research:fleet-program-pilot',
    priority: 'P1',
    type: 'commercial',
    topic: 'Fleet program operating model',
    objective: 'Validate a real fleet pilot around vehicle population, downtime, access, subscriptions, lifecycle and support.',
    blocks: ['fleet-specific commercial claims', 'program pricing'],
  },
  {
    id: 'research:service-area',
    priority: 'P1',
    type: 'local-market',
    topic: 'Greater Houston service-area data',
    objective: 'Confirm normal service geography and create structured city/market records only for areas TTT truly serves.',
    blocks: ['local SEO expansion', 'location-based lead scoring'],
  },
]);

export function getResearchQueueByPriority(priority) {
  return researchQueue.filter((item) => item.priority === priority);
}

export function getResearchQueueByType(type) {
  return researchQueue.filter((item) => item.type === type);
}
