import Link from 'next/link';

export const metadata={title:'Frequently Asked Questions',description:'Frequently asked questions about TTT vehicle technology services, installations, fitment, projects, dealership programs and support.'};

const groups=[
  ['Projects & process',[
    ['What does TTT do?','TTT consults, specifies, integrates, installs and supports vehicle technology including audio, tint, security, tracking, cameras, electronics and custom integration. The same capability can be structured for individual owners, dealerships and fleets.'],
    ['How do I start a project?','Use Start a Project to tell us about the vehicle, desired systems, priorities, budget range and timing. That creates a better starting point than a generic request for a price.'],
    ['Do I need to know exactly what products I want?','No. TTT is designed around outcomes first. Tell us what you want the vehicle to do better and we can help translate that into an appropriate system.'],
    ['Will I receive a written scope before work begins?','The operating model is built around written scopes, estimates and authorization before installation. Additional work outside an approved scope should be separately approved.'],
  ]],
  ['Vehicles, products & fitment',[
    ['Can TTT work with factory/OEM systems?','Yes. OEM integration is a core part of the TTT approach. Compatibility depends on the specific year, make, model, trim and factory equipment.'],
    ['Can aftermarket equipment automatically void my vehicle warranty?','Not simply because it is aftermarket or installed by an independent shop. However, a manufacturer may deny coverage for damage it can show was caused by an aftermarket part or improper installation. Warranty questions are vehicle- and claim-specific.'],
    ['Can I bring my own parts?','TTT may evaluate customer-supplied parts case by case. Compatibility, condition, documentation, warranty support and additional diagnostic time can affect whether an installation is accepted.'],
    ['How does TTT decide which brands to recommend?','Recommendations should be based on system fit, product performance, reliability, serviceability, manufacturer support, documentation, warranty/RMA support and value — not simply brand recognition.'],
  ]],
  ['Tint, security & connected technology',[
    ['How do I know what tint percentage is legal?','Tint laws vary by state and can depend on the window position, vehicle type and exemptions. TTT intends to provide guidance, but the customer remains responsible for compliance with current law in the jurisdiction where the vehicle is operated.'],
    ['Is one anti-theft device enough?','TTT generally thinks in layers: deterrence, detection, immobilization, tracking and recovery each address different failure modes. No security system can guarantee a vehicle will never be stolen.'],
    ['Do GPS or telematics products require subscriptions?','Some do. Hardware, app features, cellular connectivity, cloud storage and subscription terms vary by manufacturer and should be disclosed in the project scope before purchase.'],
    ['Does TTT monitor my vehicle location?','TTT should only access location or telematics data when needed to provide a service you requested, troubleshoot an authorized system, or as otherwise disclosed and permitted. Third-party tracking platforms may process data under their own privacy terms.'],
  ]],
  ['Dealerships, fleets & support',[
    ['Can TTT build standardized dealership packages?','Yes. Dealer programs can standardize hardware, labor, documentation, pricing logic, vehicle intake and installation quality across repeatable vehicle types.'],
    ['Can fleet customers manage multiple vehicles?','That is part of the TTT platform roadmap. Fleet accounts are being designed around vehicle records, installed devices, service history, projects and role-based access.'],
    ['What happens if a product fails?','The response depends on whether the issue is workmanship, configuration or a third-party product. TTT intends to document applicable manufacturer warranties and its own service coverage with the project.'],
    ['Where can vendors introduce new products?','Use the Work With Us page. TTT evaluates potential products and partners against technical fit, support, reliability, channel structure and customer value.'],
  ]],
];

const faqEntities=groups.flatMap(([,items])=>items).map(([q,a])=>({ '@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a} }));

export default function Page(){return <main>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqEntities})}} />
  <section className="page-hero"><div className="shell"><p className="eyebrow">Resources / FAQ</p><h1>Questions worth answering before the work begins.</h1><p className="lead">Clear expectations are part of professional integration. These answers cover the questions TTT expects customers, dealerships, fleets and partners to ask most often.</p></div></section>
  <section className="section"><div className="shell faq-layout">{groups.map(([group,items])=><section className="faq-group" key={group}><div className="faq-group__title"><p className="eyebrow">{group}</p></div><div>{items.map(([q,a])=><details className="faq-item" key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>)}</div></section>
  <section className="cta-band"><div className="shell"><h2>Still have a question?</h2><Link className="button button--light" href="/contact">Contact TTT →</Link></div></section>
</main>}
