import Link from 'next/link';

export const metadata={title:'The TTT Standard',description:'The TTT standard for automotive technology integration: vehicle protection, clean installation, serviceability, documentation, validation and customer handoff.'};

const standards=[
 ['01','Vehicle protection','Protect trim, surfaces, electrical systems and customer property throughout the project.'],
 ['02','Appropriate power & protection','Use suitable circuit protection, grounding, routing and component placement for the system being installed.'],
 ['03','Clean integration','Secure mounting, deliberate wire management and an OEM+ finished appearance where practical.'],
 ['04','Factory-function awareness','Identify controls, warning tones, cameras, sensors and software functions that could be affected before work begins.'],
 ['05','Serviceability','Build so future diagnosis, upgrades and removal do not require rediscovering undocumented work.'],
 ['06','Documentation','Record the approved scope, products, configuration, photos and relevant installation notes.'],
 ['07','Functional validation','Test the new system and the affected factory functions before handoff.'],
 ['08','Customer handoff','Explain operation, subscriptions, warranties, limitations and anything the owner needs to know.'],
];

export default function Page(){return <main>
 <section className="page-hero"><div className="shell"><p className="eyebrow">The TTT Standard</p><h1>Workmanship is part of the technology.</h1><p className="lead">A good product can still become a bad project if the mounting, wiring, configuration or handoff is careless.</p></div></section>
 <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Eight principles</p><h2>The baseline, regardless of what is being installed.</h2></div><div className="section-copy"><p>The exact procedure changes by vehicle and technology. These principles do not.</p></div></div><div className="editorial-capabilities">{standards.map(([n,title,body])=><article className="editorial-capability" key={title}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
 <section className="section section--dark"><div className="shell section-intro-grid"><div><p className="eyebrow">OEM+</p><h2>Intentional, understandable and supportable.</h2></div><div className="section-copy"><p>OEM+ does not mean every modification has to be invisible. It means the work respects the vehicle, preserves useful factory behavior where practical and remains understandable to the next person who has to service it.</p><Link className="button button--ghost-dark" href="/articles/what-oem-plus-vehicle-integration-means">Read the OEM+ article →</Link></div></div></section>
 <section className="cta-band"><div className="shell"><h2>Start with the outcome. Build to the standard.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
