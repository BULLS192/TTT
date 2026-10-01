import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';

export const metadata={title:'The TTT Standard | Thompson Transportation Technologies',description:'The TTT workmanship standard for vehicle protection, circuit integrity, mounting, factory-function preservation, documentation, validation and handover.'};

const principles=[
 ['01','Protect the vehicle','Trim, surfaces, electrical systems and customer property.'],
 ['02','Protect the circuit','Appropriate power, grounding, fusing and routing.'],
 ['03','Mount it properly','Secure, deliberate and serviceable.'],
 ['04','Preserve what matters','Know which factory functions could be affected.'],
 ['05','Document the work','Scope, products, settings and relevant records.'],
 ['06','Validate before handover','Check the new system and the factory functions touched by the work.']
];

export default function Page(){return <main className="production-page">
 <section className="review-hero review-hero--compact"><AssetMedia visual="homeHeroNight" className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">The TTT Standard</p><h1>Workmanship is part of the technology.</h1><p className="lead lead--dark">A strong product can still become a bad project if the mounting, wiring, configuration or handover is careless. The TTT Standard defines what the work has to protect, preserve and prove.</p><div className="button-row"><Link className="button" href="/quote">Request a Quote →</Link><Link className="button button--ghost-dark" href="/about">About TTT</Link></div></div></section>
 <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Six principles</p><h2>What every TTT job is expected to respect.</h2></div></div><div className="principle-grid">{principles.map(([n,title,body])=><article key={title}><small>{n}</small><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
 <section className="section section--soft"><div className="shell editorial-media-band"><AssetMedia visual="premiumVehicleReal"/><div><p className="eyebrow">OEM+</p><h2>Intentional, understandable and supportable.</h2><p>The modification does not have to disappear. It does have to respect the vehicle, preserve useful factory behavior where practical and remain understandable to whoever services it later.</p><Link className="text-link" href="/articles">Read TTT Articles →</Link></div></div></section>
 <section className="section"><div className="shell editorial-media-band editorial-media-band--reverse"><AssetMedia visual="standardsDiagnostic"/><div><p className="eyebrow">Hidden work</p><h2>The parts you do not see matter most later.</h2><p>Power, grounding, fusing, routing, connections and service access are the foundation of reliable aftermarket integration. They are also where careless work can create battery drains, intermittent faults and future diagnostic confusion.</p><Link className="text-link" href="/services/signaltrace">See SignalTrace →</Link></div></div></section>
 <section className="section section--dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Handoff</p><h2>Installed is not finished.</h2><p className="lead lead--dark">The project closes only after the new system is checked, the affected factory functions are verified and the customer understands what changed.</p></div></div><div className="technical-flow"><div className="flow-node"><small>01</small><strong>Install</strong><em>→</em></div><div className="flow-node"><small>02</small><strong>Configure</strong><em>→</em></div><div className="flow-node"><small>03</small><strong>Test</strong><em>→</em></div><div className="flow-node"><small>04</small><strong>Document</strong><em>→</em></div><div className="flow-node"><small>05</small><strong>Handoff</strong></div></div></div></section>
 <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">The TTT Standard</p><h2>Start with the outcome. Build to the standard.</h2></div><Link className="button button--light" href="/quote">Request a Quote →</Link></div></section>
 </main>}
