import Link from 'next/link';
import ScrollCinematic from '../components/ScrollCinematic';
import ConceptMedia from '../components/ConceptMedia';
import TestimonialStrip from '../components/TestimonialStrip';
import { solutions, services } from '../lib/siteData';

const process = [
  ['01', 'Discover', 'Start with the vehicle, how it is used, and what needs to improve.'],
  ['02', 'Architect', 'Map the signal, power, controls, mounting, products and service path before installation begins.'],
  ['03', 'Integrate', 'Install, configure and tune the complete system with OEM+ fit, finish and serviceability.'],
  ['04', 'Validate', 'Test the finished vehicle, document the build and hand over a system that can be supported later.'],
];

const bestFit = [
  ['01', 'Vehicle owners', '/solutions/premium-vehicle-experience'],
  ['02', 'Dealerships', '/solutions/dealership-technology'],
  ['03', 'Fleets & commercial operators', '/solutions/fleet-intelligence'],
];

const principles = ['Consult', 'Architect', 'Integrate', 'Validate', 'Support'];

export default function HomePage() {
  return (
    <main>
      <ScrollCinematic />

      <section className="section intro-statement home-handoff home-handoff--cinematic">
        <div className="shell">
          <p className="eyebrow">The TTT Standard</p>
          <h2>The install should disappear. The capability should not.</h2>
          <p className="lead">A finished vehicle should feel as though the technology belonged there from day one: clean fitment, preserved controls, deliberate wiring, documented systems and a clear path for future service.</p>
          <div className="home-principles" aria-label="TTT integration process">
            {principles.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell section-heading"><div><p className="eyebrow">Start with the outcome</p><h2>What should the vehicle do better?</h2></div><Link href="/solutions">View all solutions →</Link></div>
        <div className="shell card-grid card-grid--3">{solutions.slice(0,3).map((item) => <Link className="feature-card" href={`/solutions/${item.slug}`} key={item.slug}><span className="feature-card__index">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.summary}</p><b>Explore →</b></Link>)}</div>
      </section>

      <section className="section section--soft"><div className="shell two-col"><div><p className="eyebrow">Capabilities</p><h2>One integration partner. Not a pile of disconnected installs.</h2><p className="lead">Audio, tint, security, tracking, cameras and electronics all compete for space, power, controls and attention. TTT plans those interactions before the first panel comes off.</p></div><div className="system-list">{services.slice(0,4).map((item, i) => <Link key={item.slug} href={`/services/${item.slug}`}><span>0{i+1}</span><b>{item.title}</b><p>{item.summary}</p></Link>)}</div></div></section>

      <section className="section"><div className="shell homepage-best-fit"><div><p className="eyebrow">Best fit</p><h2>Some projects need more than an installer.</h2><p className="lead">TTT is built for vehicles where several technologies must share power, controls, space, data and service expectations — or where one successful install needs to become a repeatable program.</p></div><div className="homepage-best-fit__list">{bestFit.map(([n, title, href]) => <Link href={href} key={title}><span>{n}</span><b>{title}</b><i>Explore →</i></Link>)}</div></div></section>

      <section className="section dark-section"><div className="shell section-heading"><div><p className="eyebrow">TTT process</p><h2>From requirement to documented vehicle.</h2></div><Link className="text-link" href="/start">Start a project →</Link></div><div className="shell home-process-grid">{process.map(([n,title,body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

      <TestimonialStrip />

      <section className="section dark-section concept-tease"><div className="shell two-col"><div><p className="eyebrow">Concept One</p><h2>A rolling proof of the TTT standard.</h2><p className="lead lead--dark">Concept One is our reference vehicle: glass, audio, security, tracking and connected systems planned as a single architecture rather than separate upgrades.</p><Link className="button" href="/concept-one">Explore Concept One →</Link></div><ConceptMedia compact eyebrow="TTT / C1 / 001" caption="Concept One"/></div></section>

      <section className="cta-band"><div className="shell"><p className="eyebrow">Build with TTT</p><h2>Start with the vehicle. We will design the system.</h2><p>Tell us the year, make, model and what you want to improve. TTT will define the technology, architecture and integration path from there.</p><Link className="button button--light" href="/start">Start a project →</Link></div></section>
    </main>
  );
}
