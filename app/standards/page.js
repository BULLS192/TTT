import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';
import StandardsXray from '../../components/wave2/StandardsXray';
export const metadata={title:'The TTT Standard: How We Install and Integrate Vehicle Technology',description:'Six principles that govern every TTT install: protect the vehicle, protect the circuit, mount it properly, preserve what matters, document the work and validate before handover.'};
const principles=[
 ['01','Protect the vehicle','Panels, trim, paint and interior surfaces are protected during the work and returned the way they came off.'],
 ['02','Protect the circuit','Added equipment gets an appropriate power source with correct fusing and wire size.'],
 ['03','Mount it properly','Equipment is secured so it does not move, rattle or rub; wiring stays away from heat, sharp edges and moving parts.'],
 ['04','Preserve what matters','Factory features you rely on are identified before the work starts and checked afterward.'],
 ['05','Document the work','Added circuits, connection points and settings are recorded so future service does not begin with guesswork.'],
 ['06','Validate before handover','The new system and the factory functions around it are checked before the vehicle is returned.']
];
const hidden=[
 ['POWER','Correct source, fuse and wire size.'],
 ['ROUTING','Protected from heat, edges and moving parts.'],
 ['MOUNTING','Secure, quiet and serviceable.'],
 ['SIGNAL','Interfaces chosen for the actual factory system.'],
 ['DOCUMENTATION','Added circuits and settings recorded.'],
 ['VALIDATION','New and affected factory functions checked.']
];
export default function Page(){return <main className="production-page standard-page">
 <section className="review-hero review-hero--compact"><AssetMedia visual="homeHeroTechnical" className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">The TTT Standard</p><h1>Installed is not finished.</h1><p className="lead lead--dark">Most of the work that decides whether an install lasts is hidden behind panels: how a circuit is powered, how a wire is protected and how a part is mounted. The TTT Standard holds that hidden work to the same level as the parts you can see.</p><div className="button-row"><Link className="button" href="/quote">Start my quote →</Link><a className="button button--ghost-dark" href="#principles">See the six principles ↓</a></div></div></section>
 <section id="principles" className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Six principles</p><h2>What the work has to protect, preserve and prove.</h2></div></div><div className="standard-principle-grid">{principles.map(([n,t,b])=><article key={t}><small>{n}</small><h3>{t}</h3><p>{b}</p></article>)}</div></div></section>
 <section className="section section--dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Show the work</p><h2>The quality of an installation is mostly hidden.</h2><p className="lead lead--dark">The finished cabin should look calm. Behind it, the system should be understandable, protected and serviceable.</p></div></div><div className="standard-hidden-grid">{hidden.map(([t,b],i)=><article key={t}><span>{String(i+1).padStart(2,'0')}</span><strong>{t}</strong><p>{b}</p></article>)}</div></div></section>
 <section id="xray" className="section wave2-section"><div className="shell"><StandardsXray/></div></section>
 <section className="section section--soft"><div className="shell editorial-media-band"><AssetMedia visual="signalNetwork"/><div><p className="eyebrow">OEM+</p><h2>A result, not a product category.</h2><p>The added system should feel like it belongs in the vehicle: intentional in placement and function, understandable to the driver and supportable by whoever services it next.</p><Link className="text-link" href="/technology/oem-integration">How OEM integration works →</Link></div></div></section>
 <section id="process" className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">From install to handover</p><h2>Install → Configure → Test → Document → Handover.</h2></div></div><div className="technical-flow technical-flow--light">{['Install','Configure','Test','Document','Handover'].map((x,i)=><div className="flow-node" key={x}><small>{String(i+1).padStart(2,'0')}</small><strong>{x}</strong>{i<4?<em>→</em>:null}</div>)}</div><p className="small-note">The TTT Standard describes how we work. It is not a certification or a promise of a specific result.</p></div></section>
 <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">The TTT Standard</p><h2>Start with the vehicle. Finish with proof.</h2></div><Link className="button button--light" href="/quote">Request a Quote →</Link></div></section>
 </main>}