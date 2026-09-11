import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';

export const metadata={title:'Projects | TTT',description:'TTT projects document the vehicle, objective, integration work, validation and finished result.'};

const record=[
  ['01','Vehicle','What came in.'],
  ['02','Goal','What needed to change.'],
  ['03','Work','What was installed or modified.'],
  ['04','Integration','What had to keep working.'],
  ['05','Validation','What was checked.'],
  ['06','Result','What changed for the customer.'],
];

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Projects</p><h1>Show the problem. Show the work. Show the result.</h1><p className="lead">TTT case studies are built around the vehicle and the decisions behind the install—not just a finished-car photo.</p></div><AutoVisual variant="concept" eyebrow="TTT / PROJECT RECORD"/></div></section>

  <section className="section"><div className="shell editorial-visual-band"><AutoVisual variant="concept" eyebrow="TTT / C1"/><div className="editorial-visual-copy"><p className="eyebrow">Flagship demonstrator</p><h2>Concept One</h2><p>The C1 matte-black coupe shows glass, audio, security, tracking, cameras and connectivity on one coordinated platform.</p><Link className="button button--ghost" href="/concept-one">Explore Concept One →</Link></div></div></section>

  <section className="section section--soft"><div className="shell"><div className="section-intro-grid"><div><span className="visual-kicker">Case-study format</span><h2>Six frames tell the story.</h2></div><div className="section-copy"><p>The finished photo matters more when the reader can see what was solved and how the vehicle was affected.</p></div></div><div className="visual-stat-strip">{record.slice(0,3).map(([n,title,body])=><div className="visual-stat" key={title}><small>{n}</small><strong>{title}</strong><p>{body}</p></div>)}</div><div className="visual-stat-strip">{record.slice(3).map(([n,title,body])=><div className="visual-stat" key={title}><small>{n}</small><strong>{title}</strong><p>{body}</p></div>)}</div></div></section>

  <section className="section"><div className="shell media-mosaic"><AutoVisual variant="audio" eyebrow="DETAIL / AUDIO"/><AutoVisual variant="security" eyebrow="DETAIL / SECURITY"/><div className="editorial-visual-copy"><p className="eyebrow">Real work only</p><h2>Concepts stay labeled as concepts.</h2><p>Customer vehicles, quotes and results appear only when the work exists and permission allows it.</p></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Have a vehicle with a problem worth solving?</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
