import Link from 'next/link';
import { projects } from '../../lib/siteData';

export const metadata={title:'Projects',description:'TTT project concepts, build methodology and future customer case studies for automotive technology integration.'};

const proof=[
  ['Vehicle profile','Year, make, model, trim, factory equipment and relevant prior modifications.'],
  ['System architecture','What the customer wants to improve and how each technology layer fits together.'],
  ['Installation record','Approved scope, products, mounting, photos, configuration and workmanship notes.'],
  ['Validation','Functional testing of the installed system and the factory features affected by the work.'],
  ['Handoff','Customer-facing explanation, operating guidance, warranty information and next steps.'],
  ['Lifecycle','A persistent vehicle record that can support future upgrades, service and warranty activity.'],
];

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Projects</p><h1>Every build should become proof, documentation and reusable knowledge.</h1><p className="lead">TTT is building a technical project library — not a generic gallery. The objective is to show what changed, why it changed, how it was integrated and what the finished vehicle can now do.</p></div></section>
  <section className="section"><div className="shell"><div className="project-feature"><div className="project-feature__visual"/><div className="project-feature__content"><p className="eyebrow">TTT showcase</p><h2>Concept One</h2><p>The flagship demonstration vehicle is the first example of the TTT project model: one vehicle used to explain tint, audio, security, tracking and connected technology as a coordinated system.</p><div className="tag-row"><span>Audio</span><span>Tint</span><span>Security</span><span>Tracking</span></div><div className="section-link-row"><Link className="button button--light" href="/concept-one">Explore Concept One →</Link></div></div></div></div></section>
  <section className="section section--soft"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Project framework</p><h2>What every TTT case study should contain.</h2></div><div className="section-copy"><p>As real customer work is completed, the project database will make the work searchable by vehicle, technology, solution, product family and customer type.</p><p>The same information can later support My TTT vehicle records, technician documentation, warranty support and vehicle-specific recommendations.</p></div></div><div className="project-proof-grid">{proof.map(([title,body],i)=><article className="project-proof" key={title}><span className="feature-card__index">0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
  <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Current portfolio foundation</p><h2>Showcase and program concepts</h2></div></div><div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.title}><div className="project-card__visual"><span>TTT / 00{i+1}</span></div><p className="eyebrow">{p.status}</p><h2>{p.vehicle}</h2><p>{p.title}</p><div className="tag-row">{p.tags.map(x=><span key={x}>{x}</span>)}</div></article>)}</div><div className="case-policy"><b>Case-study policy:</b> TTT will not present program templates or concept work as completed customer projects. Real customer results, vehicles, imagery and testimonials will only be published when the underlying work exists and appropriate permission has been obtained.</div></div></section>
  <section className="cta-band"><div className="shell"><h2>Your vehicle can become the next documented TTT project.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
