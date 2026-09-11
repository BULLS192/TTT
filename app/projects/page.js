import Link from 'next/link';

export const metadata={title:'Projects | TTT',description:'TTT projects document the vehicle, objective, integration work, validation and finished result.'};

const record=[
  ['Vehicle','Year, make, model, trim, factory equipment and the modifications that matter to the job.'],
  ['Goal','What the owner or organization wanted to improve, prevent or make easier.'],
  ['Work','What was installed, configured, fabricated or changed.'],
  ['Integration','Which factory functions had to be retained and how the new systems fit together.'],
  ['Validation','What was checked before the vehicle was handed back.'],
  ['Result','What changed for the customer, with images or feedback only when permission exists.'],
];

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Projects</p><h1>Show the problem, not just the finished car.</h1><p className="lead">A useful project page should explain why the vehicle came in, what changed, what had to keep working and how the result was checked.</p></div></section>

  <section className="section"><div className="shell"><div className="project-feature"><div className="project-feature__visual"/><div className="project-feature__content"><p className="eyebrow">TTT demonstrator</p><h2>Concept One</h2><p>The C1 matte-black coupe is the reference build for showing glass, audio, security, tracking, cameras and connectivity as one coordinated vehicle.</p><div className="tag-row"><span>Audio</span><span>Tint</span><span>Security</span><span>Tracking</span><span>Cameras</span></div><Link className="button button--light" href="/concept-one">Explore Concept One →</Link></div></div></div></section>

  <section className="section section--soft"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Project record</p><h2>What we document when a build is worth publishing.</h2></div><div className="section-copy"><p>This is the difference between a gallery and a case study. The finished photo matters more when the reader can understand what was solved.</p></div></div><div className="editorial-capabilities">{record.map(([title,body],i)=><article className="editorial-capability" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Publishing policy</p><h2>Real work only.</h2></div><div className="section-copy"><p>Customer vehicles, quotes, results and photography are published only when the underlying work exists and permission allows it. Concepts and program examples are labeled as concepts, not passed off as customer projects.</p></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Have a vehicle with a problem worth solving?</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
