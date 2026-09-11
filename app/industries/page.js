import Link from 'next/link';

export const metadata={title:'Who TTT Serves | Vehicle Owners, Dealerships & Fleets',description:'TTT serves vehicle owners, dealerships, fleets, commercial operators and specialty vehicle projects with automotive technology integration.'};

const lanes=[
  ['Vehicle owners','One vehicle. Personal priorities.','Keep the controls you like. Fix the parts you do not. Plan upgrades so they do not fight each other.','/industries/vehicle-owners'],
  ['Dealerships','A vehicle has to move through sales, install and delivery without chaos.','Packages, turnaround time, handoff, documentation and accountability matter as much as the product.','/industries/dealerships'],
  ['Fleets','The 50th install needs to look like the first.','Standard hardware, repeatable placement, user access, service records and replacement workflows.','/industries/fleets']
];

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Who we serve</p><h1>Same vehicle technology. Very different operating reality.</h1><p className="lead">A personal audio build can be tuned around one driver. A dealership needs predictable handoff. A fleet needs the same install repeated across dozens of vehicles. The hardware can overlap; the job does not.</p></div></section>

  <section className="section"><div className="shell audience-lanes">{lanes.map(([title,kicker,body,href])=><article className="audience-lane" key={title}><small>{kicker}</small><h2>{title}</h2><p>{body}</p><Link href={href}>See the operating model →</Link></article>)}</div></section>

  <section className="section section--soft"><div className="shell decision-split"><div><p className="eyebrow">Commercial vehicles</p><h3>Technology for a vehicle that earns its keep.</h3><p>Power, cameras, tracking, lighting and electronics need to support the workday without becoming another service problem.</p><Link className="button button--ghost" href="/industries/commercial-vehicles">Commercial Vehicles →</Link></div><div><p className="eyebrow">Specialty vehicles</p><h3>When factory assumptions no longer apply.</h3><p>Restomods, unusual platforms and high-value vehicles often need more planning before the first panel comes off.</p><Link className="button button--ghost" href="/industries/specialty-vehicles">Specialty Vehicles →</Link></div></div></section>

  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Houston</p><h2>Local owner work. Scalable business programs.</h2></div><div className="section-copy"><p>TTT is centered on Greater Houston, with project scope and travel requirements confirmed before scheduling.</p><Link className="button button--ghost" href="/service-area">Greater Houston service area →</Link></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Tell us who uses the vehicle and what has to happen next.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
