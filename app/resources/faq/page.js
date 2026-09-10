import Link from 'next/link';

export const metadata={title:'Vehicle Technology FAQ | TTT',description:'Answers to common questions about TTT automotive technology projects, audio, tint, security, tracking, cameras, fitment, dealerships, fleets, support and ownership.'};

const groups=[
  ['Projects & process',[
    ['What does TTT do?','TTT consults, specifies, integrates, installs and supports vehicle technology including audio, tint, security, tracking, cameras, lighting, electronics and custom integration. The same capability can be structured for individual owners, dealerships and fleets.'],
    ['How do I start a project?','Use Start a Project to tell us about the vehicle, the result you want, the systems involved, your priorities, budget range and timing. That gives TTT enough context to begin defining the right scope.'],
    ['Do I need to know exactly what products I want?','No. TTT is designed around outcomes first. Tell us what you want the vehicle to do better and we can help translate that into an appropriate system and product category.'],
    ['Will I receive a written scope before work begins?','The TTT operating model is built around written scopes, estimates and authorization before material installation work begins. Work outside an approved scope should be separately discussed and approved.'],
    ['Can one project include several services?','Yes. In fact, that is where the TTT system approach is most useful. Audio, tint, cameras, security, tracking, lighting and electronics can be planned together so the systems do not compete for space, power, controls or future service access.'],
    ['Can a larger project be completed in phases?','Yes. A staged plan can make sense when the customer wants to spread cost or when later systems depend on decisions made in the first phase. The important part is designing the early phases so they do not need to be undone later.']
  ]],
  ['Vehicles, products & fitment',[
    ['Can TTT work with factory/OEM systems?','Yes. OEM integration is a core part of the TTT approach. Compatibility depends on the specific year, make, model, trim, factory equipment and the technology being added.'],
    ['Will aftermarket equipment void my vehicle warranty?','Warranty coverage is vehicle- and claim-specific. An aftermarket part or independent installation does not automatically determine the outcome of every unrelated warranty claim, but coverage can be disputed when a modification or installation is believed to have caused the problem. Customers should review their warranty terms and discuss specific concerns before modifying the vehicle.'],
    ['Can I bring my own parts?','TTT may evaluate customer-supplied parts case by case. Compatibility, condition, missing hardware, documentation, warranty support and extra diagnostic time can affect whether an installation is accepted and how the work is quoted.'],
    ['How does TTT decide which brands to recommend?','Recommendations should be based on system fit, performance, reliability, serviceability, manufacturer support, documentation, warranty or RMA support and value — not brand recognition alone.'],
    ['Why do you need the exact year, make, model and trim?','Modern vehicles can use different factory amplifiers, cameras, data networks, audio packages, sensors and wiring even within the same model. Exact vehicle information reduces fitment errors and helps determine which interfaces or installation strategies are appropriate.'],
    ['Does TTT only install premium products?','The goal is not to force every project into the highest price tier. TTT should recommend the level of hardware that makes sense for the outcome, reliability target and budget, then be clear about the tradeoffs between options.']
  ]],
  ['Audio, tint & everyday upgrades',[
    ['Do I need a DSP for better car audio?','Not every audio upgrade requires a DSP, but modern factory systems often benefit from the control a DSP provides. The need depends on the factory signal, system complexity, tuning goals and how much control is required over crossover, equalization, delay and channel routing.'],
    ['Is replacing speakers enough to improve factory audio?','Sometimes, but not always. Factory processing, amplifier power, speaker mounting, acoustic conditions and the signal feeding the speaker can limit the result. TTT looks at the complete system before assuming a speaker swap is the best first step.'],
    ['Is darker tint always better at rejecting heat?','No. Darkness and heat performance are related to different film characteristics. Product construction and product-specific performance data matter, so a lighter high-performance film can sometimes be a better fit than choosing darkness alone.'],
    ['How do I know what tint percentage is legal?','Tint laws vary by jurisdiction and can depend on window position, vehicle type and exemptions. TTT can provide guidance, but current rules should be checked for the jurisdiction where the vehicle will be operated.'],
    ['Can TTT make upgrades look factory?','That is the direction of the OEM+ approach. Not every modification can or should be invisible, but mounting, wiring, controls and finishing should feel deliberate and fit the vehicle rather than look temporarily added on.']
  ]],
  ['Security, tracking & cameras',[
    ['Is one anti-theft device enough?','TTT generally thinks in layers: deterrence, detection, immobilization, tracking and recovery each address different failure modes. No security system can guarantee a vehicle will never be stolen.'],
    ['Do GPS or telematics products require subscriptions?','Many connected products do. Hardware, app features, cellular connectivity, cloud storage and subscription terms vary by manufacturer and should be understood before the platform is selected.'],
    ['Does TTT monitor my vehicle location?','TTT should only access location or telematics data when needed to provide a service you requested, troubleshoot an authorized system, or as otherwise disclosed and permitted. Third-party tracking platforms may process data under their own privacy terms.'],
    ['What should I look for in a dash camera?','Coverage, low-light performance, storage, parking mode, power strategy, app usability and the way footage is retrieved often matter more than a headline resolution number by itself.'],
    ['Can cameras record while the vehicle is parked?','Many systems support some form of parking recording, but the exact behavior depends on the camera, power source, settings and vehicle. Parking-mode design should account for battery management and expected recording duration.'],
    ['Will TTT publish or explain where security devices are hidden?','No. Customer-facing documentation can identify the systems installed and how to use them without exposing sensitive device locations or bypass details that could weaken the protection.']
  ]],
  ['Dealerships, fleets & commercial programs',[
    ['Can TTT build standardized dealership packages?','Yes. Dealer programs can standardize hardware, labor assumptions, documentation, pricing logic, vehicle intake and installation quality across repeatable vehicle types.'],
    ['What could a dealership package include?','Common program categories can include tint, security, tracking, cameras, audio and selected electronics. The most useful package structure depends on the dealership’s vehicles, customers, sales process and delivery workflow.'],
    ['Can fleet customers manage multiple vehicles?','That is part of the TTT platform direction. Fleet programs are designed around vehicle records, installed devices, service history, projects and role-based access as the platform matures.'],
    ['Can TTT standardize installations across different vehicle models?','Usually the program can be standardized even when the exact installation details vary. TTT can define approved hardware, configuration, quality checks and vehicle-group-specific installation methods.'],
    ['Can TTT work with a small commercial fleet?','Yes. A small fleet can benefit from good standardization before it grows. The right starting point may be a pilot on a few vehicles followed by a repeatable standard for future additions.'],
    ['How should a fleet choose between tracking platforms?','Start with the operational requirement: update frequency, user roles, geofencing, history, reporting, camera integration, subscription structure, API needs and support. The best platform is the one that matches the organization’s workflow, not simply the one with the longest feature list.']
  ]],
  ['Support, warranties & partners',[
    ['What happens if a product fails?','The response depends on whether the issue is workmanship, configuration or a third-party product. Applicable manufacturer warranty terms and TTT service coverage should be documented with the project so responsibility is clear.'],
    ['Will TTT keep records of what was installed?','The TTT operating model is designed around vehicle-level records: installed equipment, relevant configuration, project history and service information. That makes future support and upgrades easier than starting from memory.'],
    ['Can another technician service a TTT-installed vehicle?','The goal of good documentation and serviceable installation is to make that possible. Some security details may remain intentionally restricted, but the broader system should not depend on undocumented tribal knowledge.'],
    ['Where can vendors introduce new products?','Use the Work With Us page. TTT evaluates potential products and partners against technical fit, support, reliability, channel structure, documentation and customer value.'],
    ['Does TTT accept every brand or product a vendor submits?','No. A product needs to make sense within the TTT technology portfolio and the customer use cases we serve. Product availability alone is not a reason to recommend it.']
  ]]
];

const faqEntities=groups.flatMap(([,items])=>items).map(([q,a])=>({ '@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a} }));

export default function Page(){return <main>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqEntities})}} />
  <section className="page-hero"><div className="shell"><p className="eyebrow">Resources / FAQ</p><h1>Questions worth answering before the work begins.</h1><p className="lead">Clear expectations are part of professional integration. These answers cover the questions vehicle owners, dealerships, fleets and technology partners are likely to ask before, during and after a TTT project.</p></div></section>
  <section className="section"><div className="shell faq-layout">{groups.map(([group,items])=><section className="faq-group" key={group}><div className="faq-group__title"><p className="eyebrow">{group}</p></div><div>{items.map(([q,a])=><details className="faq-item" key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>)}</div></section>
  <section className="cta-band"><div className="shell"><p className="eyebrow">Your vehicle may be different</p><h2>Still have a question?</h2><Link className="button button--light" href="/contact">Contact TTT →</Link></div></section>
</main>}
