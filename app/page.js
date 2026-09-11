import Link from 'next/link';
import SmoothScrollCinematic from '../components/SmoothScrollCinematic';
import VehicleStage from '../components/VehicleStage';
import TestimonialStrip from '../components/TestimonialStrip';
import { solutions, services } from '../lib/siteData';

const process = [
  ['01', 'Discover', 'Start with the vehicle, the owner or organization, and the outcome the technology needs to deliver.'],
  ['02', 'Design', 'Define the system architecture, products, interfaces, installation method and future expansion path.'],
  ['03', 'Integrate', 'Install, configure and validate the complete system with an OEM+ standard for fit, finish and serviceability.'],
  ['04', 'Support', 'Document the build and maintain a clear path for service, upgrades, replacement and fleet-scale repetition.'],
];

const bestFit = [
  ['01', 'Vehicle owners', '/solutions/premium-vehicle-experience'],
  ['02', 'Dealerships', '/solutions/dealership-technology'],
  ['03', 'Fleets & commercial operators', '/solutions/fleet-intelligence'],
];

export default function HomePage() {
  return (
    <main>
      <SmoothScrollCinematic />

      <section className="section intro-statement home-handoff"><div className="shell"><p className="eyebrow">TTT / Integration</p><h2>One vehicle. Multiple technologies. One system.</h2><p className="lead">The best automotive technology disappears into the vehicle. It works together, feels intentional and remains serviceable long after installation.</p></div></section>

      <section className="section"><div className="shell section-heading"><div><p className="eyebrow">Desired outcomes</p><h2>Start with what the vehicle needs to do.</h2></div><Link href="/solutions">View all solutions →</Link></div><div className="shell card-grid card-grid--3">{solutions.slice(0,6).map((item) => <Link className="feature-card" href={`/solutions/${item.slug}`} key={item.slug}><span className="feature-card__index">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.summary}</p><b>Explore →</b></Link>)}</div></section>

      <section className="section section--soft"><div className="shell two-col"><div><p className="eyebrow">Capabilities</p><h2>Technical depth without the generic shop experience.</h2><p className="lead">TTT combines hands-on installation with a consulting and integration mindset for consumer vehicles, dealership programs and fleets.</p></div><div className="system-list">{services.slice(0,4).map((item, i) => <Link key={item.slug} href={`/services/${item.slug}`}><span>0{i+1}</span><b>{item.title}</b><p>{item.summary}</p></Link>)}</div></div></section>

      <section className="section"><div className="shell homepage-best-fit"><div><p className="eyebrow">Best fit</p><h2>Built for projects where the system matters as much as the product.</h2><p className="lead">TTT is most valuable when several vehicle technologies need to work together, repeat cleanly or remain supportable over time.</p></div><div className="homepage-best-fit__list">{bestFit.map(([n, title, href]) => <Link href={href} key={title}><span>{n}</span><b>{title}</b><i>Explore →</i></Link>)}</div></div></section>

      <section className="section dark-section"><div className="shell section-heading"><div><p className="eyebrow">TTT process</p><h2>Define it. Engineer it. Integrate it. Support it.</h2></div><Link className="text-link" href="/start">Start a project →</Link></div><div className="shell home-process-grid">{process.map(([n,title,body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

      <TestimonialStrip />

      <section className="section dark-section concept-tease"><div className="shell two-col"><div><p className="eyebrow">Concept One</p><h2>A rolling demonstration of the TTT philosophy.</h2><p className="lead lead--dark">Concept One shows how glass, audio, security, tracking, cameras and connectivity can behave as one integrated vehicle experience.</p><Link className="button" href="/concept-one">Explore Concept One →</Link></div><VehicleStage label="TTT / 001" active="CONCEPT ONE" /></div></section>

      <section className="cta-band"><div className="shell"><p className="eyebrow">Build with TTT</p><h2>Tell us what you want your vehicle to do.</h2><p>Start with the vehicle and the outcome. TTT will help define the technology, architecture and integration path.</p><Link className="button button--light" href="/start">Start a project →</Link></div></section>
    </main>
  );
}
