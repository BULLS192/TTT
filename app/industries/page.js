import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';

export const metadata={title:'Who TTT Serves | Vehicle Owners, Dealerships & Fleets',description:'TTT serves vehicle owners, dealerships, fleets, commercial operators and specialty vehicle projects with automotive technology integration.'};

const lanes=[
  ['Vehicle owners','One vehicle. Personal priorities.','concept','/industries/vehicle-owners'],
  ['Dealerships','Sales, install and delivery have to stay predictable.','dealership','/industries/dealerships'],
  ['Fleets','The fiftieth install should look like the first.','fleets','/industries/fleets']
];

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Who we serve</p><h1>Same technology. Different operating reality.</h1><p className="lead">A personal vehicle is built around one owner. Dealers need clean handoff. Fleets need repeatability and records.</p></div><AutoVisual variant="dealership" eyebrow="TTT / CUSTOMER ENVIRONMENTS"/></div></section>

  <section className="section"><div className="shell"><div className="visual-feature-grid">{lanes.map(([title,body,variant,href])=><Link className="visual-feature" href={href} key={title}><AutoVisual variant={variant}/><div className="visual-feature__content"><small>TTT / INDUSTRY</small><h3>{title}</h3><p>{body}</p></div></Link>)}</div></div></section>

  <section className="section section--soft"><div className="shell editorial-visual-band"><AutoVisual variant="fleets" eyebrow="COMMERCIAL / FIELD VEHICLES"/><div className="editorial-visual-copy"><p className="eyebrow">Commercial vehicles</p><h2>Technology for a vehicle that earns its keep.</h2><p>Power, cameras, tracking, lighting and electronics should support the workday without becoming another service problem.</p><Link className="button button--ghost" href="/industries/commercial-vehicles">Commercial Vehicles →</Link></div></div></section>

  <section className="section"><div className="shell editorial-visual-band editorial-visual-band--reverse"><div className="editorial-visual-copy"><p className="eyebrow">Specialty vehicles</p><h2>When factory assumptions no longer apply.</h2><p>Restomods, unusual platforms and high-value vehicles need more planning before the first panel comes off.</p><Link className="button button--ghost" href="/industries/specialty-vehicles">Specialty Vehicles →</Link></div><AutoVisual variant="concept" eyebrow="SPECIALTY / CUSTOM"/></div></section>

  <section className="section section--dark"><div className="shell section-intro-grid"><div><p className="eyebrow">Greater Houston</p><h2>Local owner work. Scalable business programs.</h2></div><div className="section-copy"><p>TTT is centered on Greater Houston, with project scope and travel requirements confirmed before scheduling.</p><Link className="button button--ghost-dark" href="/service-area">Service area →</Link></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Tell us who uses the vehicle and what has to happen next.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
