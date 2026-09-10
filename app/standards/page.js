import Link from 'next/link';

export const metadata={
  title:'The TTT Standard',
  description:'The TTT standard for automotive technology integration: vehicle protection, clean installation, serviceability, documentation, validation and customer handoff.'
};

const standards=[
 ['01','Vehicle protection','Protect trim, surfaces, electrical systems and customer property throughout the project.'],
 ['02','Appropriate power & protection','Use suitable circuit protection, grounding, routing and component placement for the system being installed.'],
 ['03','Clean integration','Aim for secure mounting, deliberate wire management and an OEM+ finished appearance where practical.'],
 ['04','Factory-function awareness','Identify the controls, warning tones, cameras, sensors and software functions that could be affected before work begins.'],
 ['05','Serviceability','Build so future diagnosis, upgrades and removal do not require rediscovering undocumented work.'],
 ['06','Documentation','Record the approved scope, products, configuration, photos and relevant installation notes.'],
 ['07','Functional validation','Test the new system and the affected factory functions before the vehicle is handed back.'],
 ['08','Customer handoff','Explain operation, subscriptions, warranties, limitations and the next recommended step.'],
];

export default function Page(){return <main>
 <section className="page-hero"><div className="shell"><p className="eyebrow">The TTT Standard</p><h1>Workmanship is part of the technology.</h1><p className="lead">The product can be excellent and the project can still fail if the installation, documentation or handoff is poor. TTT treats those disciplines as part of the finished system.</p></div></section>
 <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Eight principles</p><h2>A repeatable baseline for every type of project.</h2></div><div className="section-copy"><p>The exact procedure will vary by vehicle and technology, but these principles define the direction TTT is building toward across consumer, dealership and fleet work.</p></div></div><div className="project-proof-grid">{standards.map(([n,title,body])=><article className="project-proof" key={title}><span className="feature-card__index">{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
 <section className="section section--dark"><div className="shell section-intro-grid"><div><p className="eyebrow">OEM+</p><h2>Intentional, understandable and supportable.</h2></div><div className="section-copy"><p>OEM+ does not mean every modification must be invisible. It means the installation respects the vehicle, preserves useful factory behavior where practical and remains understandable to the next technician who has to service it.</p><Link className="button button--ghost-dark" href="/articles/what-oem-plus-vehicle-integration-means">Read the OEM+ article →</Link></div></div></section>
 <section className="cta-band"><div className="shell"><p className="eyebrow">Your vehicle</p><h2>Start with the outcome. Build to the standard.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
