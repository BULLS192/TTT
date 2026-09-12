const faq = (id, question, answer, meta = {}) => ({ id, question, answer, ...meta });

export const faqKnowledge = Object.freeze([
  faq('integration-oem-plus', 'What does OEM+ mean at TTT?', 'OEM+ means the added technology should feel intentional in the vehicle: compatible with the systems that matter, cleanly installed, understandable to use and supportable later. It does not mean every modification must be invisible or that factory equipment is always better.', {
    audiences: ['vehicle-owner', 'dealership', 'fleet', 'specialty-vehicle-owner'], services: ['audio', 'electronics', 'cameras', 'security'], solutions: ['premium-vehicle-experience', 'custom-integration'], stage: 'discover', claimClasses: ['ttt-position']
  }),
  faq('factory-functions', 'Can TTT keep my factory screen and controls?', 'Often that is the preferred direction, but the answer depends on the vehicle and the requested upgrade. TTT first identifies which factory functions matter, then selects interfaces and system architecture around verified compatibility.', {
    audiences: ['vehicle-owner', 'specialty-vehicle-owner'], services: ['audio', 'electronics', 'cameras'], stage: 'compare', claimClasses: ['product-specific'], needsFitmentResearch: true
  }),
  faq('warranty-general', 'Will aftermarket technology void my vehicle warranty?', 'Warranty questions depend on the vehicle, the modification, the failure being claimed and the applicable warranty terms or law. TTT should not promise that a modification can never affect warranty coverage; the correct approach is to document the work and review manufacturer or dealer requirements for the specific project.', {
    audiences: ['vehicle-owner', 'dealership'], services: ['audio', 'electronics', 'security', 'tracking', 'cameras'], stage: 'compare', claimClasses: ['legal-regulatory'], needsAuthoritativeSource: true
  }),
  faq('audio-dsp-needed', 'Do I need a DSP for better car audio?', 'Not every audio upgrade requires a DSP, but modern factory systems often benefit from the routing, crossover, delay, equalization and level control a DSP can provide. The decision should follow the factory signal architecture and listening goal rather than a blanket rule.', {
    audiences: ['vehicle-owner', 'specialty-vehicle-owner'], services: ['audio'], stage: 'compare', claimClasses: ['ttt-position', 'product-specific']
  }),
  faq('audio-factory-premium', 'Can factory premium audio systems still be upgraded?', 'Yes in many vehicles, but premium factory systems can be more complex because signal processing, active channels, factory amplifiers and vehicle alerts may all be integrated. TTT should verify the specific platform before defining the upgrade path.', {
    audiences: ['vehicle-owner'], services: ['audio'], stage: 'compare', claimClasses: ['product-specific'], needsFitmentResearch: true
  }),
  faq('audio-staged-build', 'Can I upgrade my audio system in stages?', 'Yes, if the architecture is planned with later phases in mind. Channel count, processing capacity, wiring, equipment locations and power strategy should be considered early so future additions do not force unnecessary replacement of earlier work.', {
    audiences: ['vehicle-owner'], services: ['audio'], stage: 'discover', claimClasses: ['ttt-position']
  }),
  faq('tint-darkness-heat', 'Is darker tint always better for heat rejection?', 'No. Visible light transmission mainly describes how much visible light passes through the glass-and-film system. Heat performance depends on the film product and construction, so TTT should compare current manufacturer performance data instead of assuming the darkest option performs best.', {
    audiences: ['vehicle-owner', 'dealership'], services: ['window-tint'], stage: 'compare', claimClasses: ['product-specific'], needsProductSource: true
  }),
  faq('tint-legal', 'What tint percentage is legal?', 'Tint requirements vary by jurisdiction, vehicle type and window position, and rules can change. TTT should verify the current authoritative rule for the vehicle location before presenting a legal recommendation.', {
    audiences: ['vehicle-owner', 'dealership', 'fleet'], services: ['window-tint'], stage: 'specify', claimClasses: ['legal-regulatory'], needsAuthoritativeSource: true
  }),
  faq('tint-factory-glass', 'Does factory privacy glass affect the final tint result?', 'Yes. Existing glass changes the final appearance and light transmission after film is added. Vehicle-specific glass configuration should be considered before recommending a film shade.', {
    audiences: ['vehicle-owner'], services: ['window-tint'], stage: 'specify', claimClasses: ['verified-fact'], needsFitmentResearch: true
  }),
  faq('security-one-device', 'Is one security device enough to protect a vehicle?', 'TTT does not treat one device as a complete theft solution. Different layers can address deterrence, detection, unauthorized operation, awareness and recovery. The appropriate combination depends on the vehicle, exposure and owner priorities.', {
    audiences: ['vehicle-owner', 'dealership', 'fleet'], services: ['security'], solutions: ['vehicle-security'], stage: 'discover', claimClasses: ['ttt-position', 'security-sensitive']
  }),
  faq('security-guarantee', 'Can TTT guarantee that a vehicle cannot be stolen?', 'No responsible security system should be presented as an absolute theft guarantee. TTT can design layered protection intended to increase resistance, improve awareness and support recovery, but real-world outcomes depend on many factors.', {
    audiences: ['vehicle-owner', 'dealership', 'fleet'], services: ['security'], stage: 'compare', claimClasses: ['ttt-position', 'security-sensitive']
  }),
  faq('security-daily-use', 'Will added security make the vehicle difficult to use every day?', 'It should not. Daily authorized use is part of the design requirement. TTT should define how the owner starts, parks, shares and services the vehicle before finalizing a protection strategy.', {
    audiences: ['vehicle-owner'], services: ['security'], stage: 'specify', claimClasses: ['ttt-position', 'security-sensitive']
  }),
  faq('tracking-subscription', 'Do GPS trackers require a subscription?', 'Many cellular-connected trackers do, because location and event data are delivered through a service platform. Hardware and service models vary, so TTT should document the recurring cost, included features and what changes if service ends before the customer commits.', {
    audiences: ['vehicle-owner', 'dealership', 'fleet'], services: ['tracking'], stage: 'compare', claimClasses: ['product-specific'], needsProductSource: true
  }),
  faq('tracking-realtime', 'What does real-time tracking actually mean?', 'Update frequency varies by platform and operating mode. TTT should use the provider’s current documented interval or behavior instead of using “real-time” as an undefined marketing claim.', {
    audiences: ['vehicle-owner', 'dealership', 'fleet'], services: ['tracking'], stage: 'compare', claimClasses: ['product-specific'], needsProductSource: true
  }),
  faq('tracking-security', 'Is a GPS tracker the same thing as a security system?', 'No. Tracking can improve location visibility and support recovery, but it solves a different problem from deterrence, detection or other protection measures. It can be one layer within a broader security strategy.', {
    audiences: ['vehicle-owner', 'dealership', 'fleet'], services: ['tracking', 'security'], solutions: ['vehicle-security', 'connected-vehicle'], stage: 'discover', claimClasses: ['ttt-position']
  }),
  faq('camera-resolution', 'Is camera resolution the most important dash-camera specification?', 'No. Coverage, low-light performance, storage, power behavior, parking mode, footage access and installation all affect whether the system is useful when an incident occurs.', {
    audiences: ['vehicle-owner', 'fleet', 'commercial-operator'], services: ['cameras'], stage: 'compare', claimClasses: ['ttt-position', 'product-specific']
  }),
  faq('camera-parking-mode', 'Can a dash camera record while the vehicle is parked?', 'Some systems support parking recording, but the behavior and power strategy vary by product. TTT should verify the selected system and design the power approach around the vehicle rather than assuming every camera behaves the same way.', {
    audiences: ['vehicle-owner', 'fleet'], services: ['cameras'], stage: 'specify', claimClasses: ['product-specific'], needsProductSource: true
  }),
  faq('camera-fleet-privacy', 'What should a fleet consider before installing driver or cabin cameras?', 'The organization should define the operational purpose, who can access footage, retention expectations and applicable employment, privacy or regulatory requirements before deployment. Hardware selection should follow that approved use case.', {
    audiences: ['fleet', 'commercial-operator'], services: ['cameras'], stage: 'discover', claimClasses: ['legal-regulatory'], needsAuthoritativeSource: true
  }),
  faq('electronics-modern-vehicles', 'Why are electronics upgrades more complicated on newer vehicles?', 'Modern vehicles can link controls, audio, cameras, power management and other functions across multiple modules and data networks. That makes compatibility, interfaces, diagnostics and configuration a larger part of the installation than on many older vehicles.', {
    audiences: ['vehicle-owner', 'dealership', 'fleet'], services: ['electronics', 'audio', 'cameras'], stage: 'discover', claimClasses: ['verified-fact']
  }),
  faq('custom-when-needed', 'When does a project need custom fabrication?', 'Fabrication becomes useful when universal mounting or enclosure options compromise space, security, cooling, service access or finish. TTT treats fabrication as a functional part of system design rather than decoration added at the end.', {
    audiences: ['vehicle-owner', 'specialty-vehicle-owner', 'commercial-operator'], services: ['custom-fabrication'], stage: 'discover', claimClasses: ['ttt-position']
  }),
  faq('project-staged', 'Can a larger TTT project be completed in phases?', 'Yes. A phased project works best when the final architecture is considered before the first phase. TTT should identify shared wiring, processing, power, mounting and integration requirements so later phases remain efficient.', {
    audiences: ['vehicle-owner', 'commercial-operator'], solutions: ['premium-vehicle-experience', 'custom-integration'], stage: 'discover', claimClasses: ['ttt-position']
  }),
  faq('dealer-program', 'How is a dealer program different from sending individual customers to an installer?', 'A dealer program defines approved packages, vehicle applicability, pricing or quoting responsibility, scheduling, installation standards, QA, warranty ownership and records. The objective is repeatability rather than treating every delivery as a new one-off project.', {
    audiences: ['dealership'], solutions: ['dealership-technology'], stage: 'discover', claimClasses: ['ttt-position']
  }),
  faq('dealer-white-label', 'Can TTT work behind the dealership customer experience?', 'TTT can structure a white-label or partner workflow where appropriate, but responsibilities for customer communication, billing, warranty, scheduling and records should be defined before the program launches.', {
    audiences: ['dealership'], solutions: ['dealership-technology'], stage: 'specify', claimClasses: ['ttt-position']
  }),
  faq('fleet-standardization', 'Why standardize installation across a fleet?', 'Standardization reduces vehicle-to-vehicle variation and makes support, replacement, training and records easier to manage. It also makes future vehicle additions more predictable when the approved package and installation rules are documented.', {
    audiences: ['fleet', 'commercial-operator'], solutions: ['fleet-intelligence'], stage: 'discover', claimClasses: ['ttt-position']
  }),
  faq('fleet-user-access', 'Who should have access to fleet tracking or camera data?', 'Access should follow the organization’s operational need and approved policy. TTT should record administrative ownership and user roles, while the organization determines who is authorized to see sensitive vehicle, location or video data.', {
    audiences: ['fleet', 'commercial-operator'], services: ['tracking', 'cameras'], stage: 'specify', claimClasses: ['legal-regulatory'], needsAuthoritativeSource: true
  }),
  faq('service-records', 'What documentation should I receive after a TTT project?', 'The appropriate handoff depends on scope, but TTT’s standard is to make the installation understandable later. That can include installed equipment, relevant configuration or subscription information, operating guidance, warranty responsibility and service notes.', {
    audiences: ['vehicle-owner', 'dealership', 'fleet', 'commercial-operator', 'specialty-vehicle-owner'], stage: 'validate', claimClasses: ['ttt-position']
  }),
  faq('fitment-verification', 'How does TTT know whether a product is compatible with my vehicle?', 'Compatibility should be verified using current vehicle-specific technical information, manufacturer or interface documentation and project-specific inspection where needed. TTT’s vehicle database intentionally distinguishes catalog identity from verified fitment.', {
    audiences: ['vehicle-owner', 'dealership', 'fleet'], stage: 'specify', claimClasses: ['ttt-position', 'product-specific'], needsFitmentResearch: true
  }),
]);

export const faqById = Object.freeze(Object.fromEntries(faqKnowledge.map((item) => [item.id, item])));

export function getFaqsForService(serviceSlug) {
  return faqKnowledge.filter((item) => item.services?.includes(serviceSlug));
}

export function getFaqsForSolution(solutionSlug) {
  return faqKnowledge.filter((item) => item.solutions?.includes(solutionSlug));
}

export function getFaqsForAudience(audience) {
  return faqKnowledge.filter((item) => item.audiences?.includes(audience));
}

export function getFaqResearchQueue() {
  return faqKnowledge.filter((item) => item.needsAuthoritativeSource || item.needsProductSource || item.needsFitmentResearch);
}
