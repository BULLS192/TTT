import Link from 'next/link';

export const metadata={title:'Integrated Vehicle Solutions | TTT',description:'TTT combines vehicle technologies around practical outcomes: a better daily driver, stronger security, useful connectivity and repeatable dealership or fleet programs.'};

const scenarios=[
  ['01','I want the car to feel better every day.','Audio, glass, comfort and electronics planned as one upgrade path.','/solutions/premium-vehicle-experience'],
  ['02','I want the vehicle harder to steal and easier to locate.','Detection, immobilization, tracking and cameras have different jobs.','/solutions/vehicle-security'],
  ['03','I want useful information when I am not in the car.','Location, alerts, cameras and connected services without an app for everything.','/solutions/connected-vehicle'],
  ['04','I need the same result across many vehicles.','Standardize products, installation, records and handoff for dealership or fleet work.','/solutions/fleet-intelligence']
];

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Solutions</p><h1>Start with the sentence you would actually say.</h1><p className="lead">Most customers do not arrive asking for a “multi-system integration strategy.” They want the car to sound better, stay cooler, be harder to steal, show them where it is, or work the same way across a fleet.</p></div></section>

  <section className="section"><div className="shell"><p className="eyebrow">Pick the problem</p><div className="scenario-list">{scenarios.map(([n,title,body,href])=><Link className="scenario-row" href={href} key={title}><span>{n}</span><h2>{title}</h2><p>{body}</p><em>→</em></Link>)}</div></div></section>

  <section className="section section--dark"><div className="shell section-intro-grid"><div><p className="eyebrow">Custom integration</p><h2>Some projects do not belong in a package.</h2></div><div className="section-copy"><p>If the vehicle has unusual factory electronics, limited space, several interacting systems or a requirement that does not have a ready-made kit, treat it as an engineering problem.</p><Link className="button button--ghost-dark" href="/solutions/custom-integration">Custom Integration →</Link></div></div></section>

  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Dealership programs</p><h2>For dealers, the install is only one part of the job.</h2></div><div className="section-copy"><p>Pricing, scheduling, repeatability, vehicle handoff and documentation all have to work if an accessory program is going to survive beyond the first few installs.</p><Link className="button button--ghost" href="/solutions/dealership-technology">Dealership Technology →</Link></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Bring us the requirement. We will help define the system.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
