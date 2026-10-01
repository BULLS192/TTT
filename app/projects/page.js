import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';

export const metadata={title:'Projects | TTT',description:'TTT projects document the vehicle, objective, integration work, validation and finished result. Concept One is the current reference project.'};

const record=[['01','Vehicle','What came in.'],['02','Goal','What needed to change.'],['03','Work','What was installed or modified.'],['04','Integration','What had to keep working.'],['05','Validation','What was checked.'],['06','Result','What changed for the customer.']];

export default function Page(){return <main className="production-page">
 <section className="review-hero review-hero--compact"><AssetMedia visual="projectsHero" className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">Learn / Projects</p><h1>Show the problem. Show the work. Show the result.</h1><p className="lead lead--dark">TTT case studies are built around the vehicle and the decisions behind the install, not just a finished-car photo.</p></div></section>
 <section className="section"><div className="shell editorial-media-band"><AssetMedia visual="homeHeroMinimal"/><div><p className="eyebrow">Reference project</p><h2>Concept One</h2><p>Concept One is the TTT reference build: a deliberately coordinated 3D vehicle that demonstrates how glass, audio, tracking, security, diagnostics and fabrication relate to one another.</p><Link className="text-link" href="/concept-one">Explore Concept One →</Link></div></div></section>
 <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Case-study format</p><h2>Six frames tell the story.</h2></div></div><div className="principle-grid">{record.map(([n,title,body])=><article key={title}><small>{n}</small><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
 <section className="section"><div className="shell editorial-media-band editorial-media-band--reverse"><AssetMedia visual="projectsDetail"/><div><p className="eyebrow">Real work only</p><h2>Concepts stay labeled as concepts.</h2><p>Customer vehicles, quotes and results will appear only when the work exists and permission allows it. The visual library may illustrate a capability; it will not be presented as a completed TTT customer project.</p></div></div></section>
 <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">Projects</p><h2>Have a vehicle with a problem worth solving?</h2></div><Link className="button button--light" href="/quote">Request a Quote →</Link></div></section>
 </main>}
