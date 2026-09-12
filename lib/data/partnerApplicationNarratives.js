// Reusable application copy. Keep operational claims conservative until stakeholder facts are confirmed.

export const tttPartnerProfile = Object.freeze({
  shortDescription:'Thompson Transportation Technologies (TTT) is a Houston-area automotive technology integration company focused on professionally designed and installed vehicle audio, security, tracking, camera, window-film and connected-vehicle solutions for vehicle owners, dealerships and fleets.',
  positioning:'TTT approaches aftermarket technology as vehicle integration rather than isolated product installation. Product selection, OEM compatibility, electrical design, serviceability, documentation and customer handoff are treated as part of the finished system.',
  partnershipGoal:'Build a deliberately selected portfolio of professional-grade manufacturers with strong technical support, reliable supply, documented fitment and clear warranty pathways rather than carrying a large number of overlapping brands.',
  customerSegments:['vehicle owners','dealerships','commercial fleets','specialty vehicle projects'],
  geography:'Greater Houston / Texas',
  claimsRequiringConfirmation:['legal entity name','years in business','installer years of experience','technician count','weekly install capacity','physical storefront/address','current certifications','annual purchasing volume'],
});

export const partnerApplicationNarratives = Object.freeze({
  general:{
    whyPartner:'TTT is building a focused automotive technology portfolio around clean integration, technical support and long-term serviceability. We are interested in partners whose products can be specified confidently, installed professionally and supported after delivery.',
    valueToBrand:'TTT intends to support products with disciplined system design, documented installation standards, customer education and appropriate after-sales support rather than competing primarily on lowest price.',
  },
  firstech:{
    whyPartner:'Firstech aligns closely with TTT’s connected-vehicle and layered-security direction because one professional ecosystem can support remote start/security, telematics, cameras and vehicle-integration workflows. We want to understand dealer eligibility, training and the correct brand mix for a Houston-based integrator.',
    intendedUse:'Consumer security and connected-vehicle systems, dealer accessory programs and selected fleet applications where the platform fits the operational requirement.',
  },
  xpel:{
    whyPartner:'TTT wants window-film and protection offerings to be specified around performance, vehicle use, installation quality and warranty support. XPEL’s film/protection portfolio, training and pattern-software ecosystem make it a strong candidate for a primary protection platform.',
    intendedUse:'Automotive window film and, subject to capability/training, paint and surface protection for consumer and dealership programs.',
  },
  audiocontrol:{
    whyPartner:'TTT’s audio positioning emphasizes signal architecture, DSP, OEM integration, tuning and system validation rather than component-by-component selling. AudioControl is being evaluated as a core processing/amplification ecosystem for that approach.',
    intendedUse:'Factory-integrated premium audio systems, staged audio upgrades and dealership/specialty projects requiring professional signal processing.',
  },
  blackvue:{
    whyPartner:'TTT is developing a compact camera portfolio that can cover premium consumer, cloud-connected and selected business use cases. BlackVue is being evaluated as the premium cloud-oriented platform within that stack.',
    intendedUse:'Premium dash-camera systems, parking surveillance and selected connected/fleet applications where cloud features and retention requirements fit.',
  },
  igla:{
    whyPartner:'Houston vehicle-theft concerns make dedicated anti-theft technology strategically relevant to TTT’s layered-security approach. IGLA is being evaluated as a differentiated immobilization layer alongside detection, alerts, cameras and tracking.',
    intendedUse:'Professional anti-theft installations for appropriate vehicles after installer training, fitment validation and operating procedures are established.',
  },
  metra:{
    whyPartner:'TTT treats OEM integration hardware, harnessing and installation infrastructure as foundational engineering components. Reliable access to Metra/Axxess fitment data and professional installation products would support repeatable vehicle-specific work.',
    intendedUse:'OEM integration, radio/interface work, installation infrastructure, dealer programs and internal fitment/quote workflows.',
  },
});

export function getPartnerNarrative(id){return partnerApplicationNarratives[id]||partnerApplicationNarratives.general;}
