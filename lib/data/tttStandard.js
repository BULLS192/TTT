const control = (id, title, requirement, evidence = [], appliesTo = ['all']) => ({ id, title, requirement, evidence, appliesTo });

export const tttStandardSections = Object.freeze([
  {
    id: 'intake-baseline',
    title: 'Vehicle intake & baseline',
    purpose: 'Establish vehicle condition, requested outcomes and functions that must be preserved before work begins.',
    controls: [
      control('INT-01', 'Identify the vehicle', 'Record the vehicle, customer or organization and project reference.', ['intake-record']),
      control('INT-02', 'Document existing condition', 'Record relevant cosmetic condition, warning indicators, known faults and existing aftermarket equipment before disassembly.', ['condition-notes']),
      control('INT-03', 'Define the requested outcome', 'Record what the customer or organization wants the vehicle to do differently after the project.', ['approved-scope']),
      control('INT-04', 'Identify functions to preserve', 'List factory controls, cameras, alerts, audio functions and other systems that could be affected by the work.', ['preservation-list']),
      control('INT-05', 'Capture relevant baseline diagnostics', 'For projects that interact with factory electronics, preserve enough pre-work diagnostic context to distinguish pre-existing conditions from project-related changes.', ['diagnostic-record'], ['oem-integration', 'electronics', 'audio-dsp', 'cameras', 'security']),
    ],
  },
  {
    id: 'vehicle-protection',
    title: 'Protect the vehicle',
    purpose: 'Prevent avoidable damage to trim, surfaces, wiring, customer property and surrounding systems.',
    controls: [
      control('VEH-01', 'Protect work areas', 'Use appropriate protection for the surfaces and areas involved in the work.', ['work-area-check']),
      control('VEH-02', 'Use deliberate disassembly', 'Remove trim and components using vehicle-appropriate procedures and tools.', ['technician-check']),
      control('VEH-03', 'Control removed parts', 'Store removed fasteners, clips, panels and customer items in a way that prevents loss or damage.', ['parts-accountability']),
      control('VEH-04', 'Restore the vehicle cleanly', 'Reassemble affected areas, verify fit and remove installation debris before handoff.', ['final-condition-check']),
    ],
  },
  {
    id: 'electrical-quality',
    title: 'Protect added electrical work',
    purpose: 'Design added electrical systems around the vehicle, equipment requirements and long-term supportability.',
    controls: [
      control('ELEC-01', 'Define the electrical plan', 'Document the intended power strategy, expected behavior and equipment requirements before final installation.', ['power-plan']),
      control('ELEC-02', 'Use appropriate circuit protection', 'Protect added circuits using methods appropriate to the equipment, conductors and installation environment.', ['protection-record']),
      control('ELEC-03', 'Use appropriate conductors and connections', 'Choose wiring and connection methods around load, length, environment and manufacturer guidance.', ['electrical-record']),
      control('ELEC-04', 'Respect vehicle power management', 'Account for platform-specific battery management, sleep behavior and manufacturer restrictions where relevant.', ['platform-notes'], ['electronics', 'tracking-telematics', 'cameras', 'security', 'audio-dsp']),
    ],
  },
  {
    id: 'routing-mounting',
    title: 'Route and mount deliberately',
    purpose: 'Keep added wiring and equipment protected, secure, understandable and serviceable.',
    controls: [
      control('MNT-01', 'Protect routing', 'Keep added wiring away from foreseeable heat, movement, abrasion and environmental exposure.', ['routing-check']),
      control('MNT-02', 'Secure added harnesses', 'Support added wiring so it remains controlled and serviceable.', ['routing-check']),
      control('MNT-03', 'Choose deliberate equipment locations', 'Select mounting locations around access, environment, occupant space and equipment requirements.', ['mounting-plan']),
      control('MNT-04', 'Preserve service access', 'Keep service-critical modules, media, controls and adjustment points accessible where reasonable.', ['service-access-record']),
      control('MNT-05', 'Preserve thermal needs', 'Do not locate heat-producing equipment in a way that conflicts with expected cooling or manufacturer guidance.', ['thermal-check'], ['audio-dsp', 'electronics', 'tracking-telematics', 'cameras']),
    ],
  },
  {
    id: 'oem-integration',
    title: 'Preserve what matters',
    purpose: 'Treat factory systems as part of the project rather than assuming every added device is isolated from the vehicle.',
    controls: [
      control('OEM-01', 'Map affected factory functions', 'Identify factory signals, modules, controls or behaviors the project depends on or may influence.', ['system-map'], ['oem-integration', 'audio-dsp', 'electronics', 'cameras', 'security']),
      control('OEM-02', 'Use verified compatibility information', 'Select interfaces and integration methods using current vehicle and equipment compatibility information.', ['interface-record'], ['oem-integration', 'audio-dsp', 'electronics', 'cameras', 'security']),
      control('OEM-03', 'Retain agreed factory behavior', 'Preserve the factory functions identified during intake unless the approved scope intentionally changes them.', ['validation-record']),
      control('OEM-04', 'Record intentional changes', 'Document factory behavior intentionally altered by the project and include it in customer handoff.', ['approved-deviation']),
    ],
  },
  {
    id: 'configuration',
    title: 'Configure responsibly',
    purpose: 'Treat apps, cloud access, tuning, subscriptions and configuration files as part of the supported installation.',
    controls: [
      control('CFG-01', 'Record configuration ownership', 'Define who owns apps, cloud accounts, subscriptions and administrative access.', ['account-handoff'], ['tracking-telematics', 'cameras', 'security', 'electronics']),
      control('CFG-02', 'Retain serviceable configurations', 'Save relevant configuration files or settings when the platform supports it and retention is appropriate.', ['configuration-backup'], ['audio-dsp', 'electronics', 'lighting']),
      control('CFG-03', 'Protect sensitive service information', 'Keep sensitive security and service details limited to authorized records rather than public-facing materials.', ['restricted-service-note'], ['security']),
      control('CFG-04', 'Record subscription dependencies', 'Document recurring services required for connected features and what functionality changes if service ends.', ['subscription-record'], ['tracking-telematics', 'cameras', 'security']),
    ],
  },
  {
    id: 'validation',
    title: 'Validate before handoff',
    purpose: 'Verify the added system and the factory functions affected by the work before the vehicle leaves TTT control.',
    controls: [
      control('VAL-01', 'Test the requested outcome', 'Confirm the installed system performs the agreed primary functions rather than only confirming that it powers on.', ['functional-test']),
      control('VAL-02', 'Test affected factory functions', 'Verify the factory functions identified during intake that could have been affected by the work.', ['factory-function-check']),
      control('VAL-03', 'Compare relevant diagnostic state', 'Where diagnostic checks are appropriate, compare post-work condition with the recorded baseline and resolve project-related issues before handoff.', ['diagnostic-record'], ['oem-integration', 'electronics', 'audio-dsp', 'cameras', 'security']),
      control('VAL-04', 'Check physical completion', 'Verify trim fit, equipment security, service access and final vehicle condition.', ['final-qa']),
    ],
  },
  {
    id: 'documentation-handoff',
    title: 'Document the work & hand it off clearly',
    purpose: 'Make the project understandable to the customer and supportable by TTT later.',
    controls: [
      control('DOC-01', 'Record installed equipment', 'Store manufacturer, product/model and relevant identifiers where appropriate.', ['equipment-record']),
      control('DOC-02', 'Record service notes', 'Store settings, access notes, interfaces and service information needed for future support.', ['service-record']),
      control('DOC-03', 'Capture appropriate installation evidence', 'Retain project evidence where it adds future service value and customer/privacy constraints allow it.', ['installation-evidence']),
      control('DOC-04', 'Explain operation to the customer', 'Provide practical handoff for controls, apps, subscriptions, normal behavior and known limitations.', ['handoff-check']),
      control('DOC-05', 'Clarify warranty responsibility', 'Document relevant product, installation and third-party warranty responsibility.', ['warranty-record']),
    ],
  },
]);

export const tttStandardChecklist = Object.freeze(tttStandardSections.flatMap((section) =>
  section.controls.map((item) => ({ ...item, sectionId: section.id, sectionTitle: section.title }))
));

export function getStandardControlsForCapability(capabilityId) {
  return tttStandardChecklist.filter((item) => item.appliesTo.includes('all') || item.appliesTo.includes(capabilityId));
}
