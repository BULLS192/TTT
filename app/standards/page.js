import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';

export const metadata={title:'The TTT Standard',description:'The TTT standard for automotive technology integration: vehicle protection, clean installation, serviceability, documentation, validation and customer handoff.'};

const principles=[
 ['01','Protect the vehicle','Trim, surfaces, electrical systems and customer property.'],
 ['02','Protect the circuit','Appropriate power, grounding, fusing and routing.'],
 ['03','Mount it properly','Secure, deliberate and serviceable.'],
 ['04','Preserve what matters','Know which factory functions could be affected.'],
 ['05','Document the work','Scope, products, settings and relevant photos.'],
 ['06','Validate before handoff','Check the new system and the factory functions touched by the work.'],
];

export default function Page(){return <main>
 <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">The TTT Standard</p><h1>Workmanship is part of the technology.</h1><p className="lead">A great product can still become a bad project if the mounting, wiring, configuration or handoff is careless.</p></div><AutoVisual variant="about" eyebrow="OEM+ / WORKMANSHIP"/></div></section>

 <section className="section"><div className="shell"><div className="visual-stat-strip">{principles.slice(0,3).map(([n,title,body])=><div className="visual-stat" key={title}><small>{n}</small><strong>{title}</strong><p>{body}</p></div>)}</div><div className="visual-stat-strip">{principles.slice(3).map(([n,title,body])=><div className="visual-stat" key={title}><small>{n}</small><strong>{title}</strong><p>{body}</p></div>)}</div></div></section>

 <section className="section section--soft"><div className="shell editorial-visual-band"><AutoVisual variant="technology" eyebrow="FACTORY + ADDED SYSTEM"/><div className="editorial-visual-copy"><p className="eyebrow">OEM+</p><h2>Intentional, understandable and supportable.</h2><p>The modification does not have to disappear. It does have to respect the vehicle, preserve useful factory behavior where practical and remain understandable later.</p><Link className="button button--ghost" href="/articles/what-oem-plus-vehicle-integration-means">What OEM+ means →</Link></div></div></section>

 <section className="section section--dark"><div className="shell"><div className="diagram-panel"><div className="diagram-panel__head"><div><p className="eyebrow">Handoff</p><h2>Installed is not finished.</h2></div><p>The project closes only after the system is checked, the affected factory functions are verified, and the customer knows what was changed.</p></div><div className="technical-flow"><div className="flow-node"><small>01</small><strong>Install</strong><em>→</em></div><div className="flow-node"><small>02</small><strong>Configure</strong><em>→</em></div><div className="flow-node"><small>03</small><strong>Test</strong><em>→</em></div><div className="flow-node"><small>04</small><strong>Document</strong><em>→</em></div><div className="flow-node"><small>05</small><strong>Handoff</strong></div></div></div></div></section>

 <section className="cta-band"><div className="shell"><h2>Start with the outcome. Build to the standard.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
