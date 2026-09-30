import Link from 'next/link';
import WebsiteVisual from '../components/WebsiteVisual';

export const metadata={
  title:'Automotive Technology & Installation in Houston | TTT',
  description:'Window tint, audio, GPS tracking, kill switches, electrical diagnostics and custom fabrication in Houston. Planned, installed and verified by TTT.'
};

const services=[
  ['Window Tint','Film chosen for heat, glare and privacy, not just shade. Fitted cleanly to your glass and explained so you know what you are getting.','/services/window-tint','window-tint'],
  ['Audio','Better sound from the system you have, or a new one built around how you listen. Planned to keep the factory features you rely on.','/services/audio','audio'],
  ['GPS Tracking','Know where your vehicle is and get alerts when something changes. For personal vehicles and small fleets, installed with discretion.','/services/gps-tracking','tracking'],
  ['Kill Switches','An added layer of theft deterrence that controls whether the vehicle can start. Integrated carefully so it does not create new electrical problems.','/services/kill-switches','security'],
  ['TTT SignalTrace™','Structured diagnostics for electrical problems that come and go, drain batteries or have already beaten a code reader.','/services/signaltrace','signaltrace'],
  ['Custom Fabrication','When the right bracket, mount or enclosure does not exist, we can design and make one to fit.','/services/custom-fabrication','custom-fabrication']
];

const journey=[
  ['01','Tell us about your vehicle','Share the year, make, model and what you want done or what is going wrong. Photos help.'],
  ['02','Discuss the solution','We explain the options, trade-offs and what the work involves before you approve anything.'],
  ['03','We plan and install','Routing, connections, fitment and integration are planned around the vehicle rather than improvised during the job.'],
  ['04','We verify and hand over','The finished work is tested, documented where appropriate and explained before the vehicle goes back to you.']
];

export default function HomePage(){
  return <main className="claude-home">
    <section className="asset-hero asset-hero--home">
      <WebsiteVisual variant="home" alt="Matte black premium coupe in a restrained TTT studio environment" />
      <div className="asset-hero__shade"/>
      <div className="shell asset-hero__copy">
        <p className="eyebrow">Thompson Transportation Technologies · Houston</p>
        <h1>Vehicle technology, properly integrated.</h1>
        <p className="lead lead--dark">Window tint, audio, tracking, security and electrical diagnostics from a Houston team that plans the work first and verifies it before handover.</p>
        <div className="button-row"><Link className="button" href="/quote">Request a Quote</Link><a className="button button--ghost-dark" href="#services">Explore Services</a></div>
        <button className="tessa-inline" data-tessa-open="true">Have a question first? Ask Tessa →</button>
      </div>
    </section>

    <section id="services" className="section"><div className="shell">
      <div className="section-heading"><div><p className="eyebrow">What TTT does</p><h2>What we work on</h2><p className="lead">Six services, one standard. Whether we are tinting glass or tracing a fault through a wiring harness, the job is planned around your vehicle and checked before it goes back to you.</p></div></div>
      <div className="service-visual-grid">{services.map(([title,body,href,variant])=><Link className="service-visual-card" href={href} key={title}><WebsiteVisual variant={variant} alt="" /><div><h3>{title}</h3><p>{body}</p><b>Explore →</b></div></Link>)}</div>
    </div></section>

    <section className="section section--soft"><div className="shell editorial-visual-band">
      <WebsiteVisual variant="hotspot" alt="Technical vehicle electronics architecture showing interconnected systems" />
      <div className="editorial-visual-copy"><p className="eyebrow">Vehicle technology overview</p><h2>Every system, considered together</h2><p>A modern vehicle is a network of electronics, not a set of separate parts. Glass, cabin audio, location, starting systems, wiring, modules and custom interfaces all affect the finished result.</p><Link className="button button--ghost" href="/services">Explore all services →</Link></div>
    </div></section>

    <section className="section dark-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">How we work</p><h2>Plan. Integrate. Verify.</h2></div></div>
      <div className="trust-grid">
        <article><span>01</span><h3>Quality installation</h3><p>We plan wire routing, connections and panel removal before tools come out. Connections are made to last in Houston heat, and trim goes back the way it came off.</p></article>
        <article><span>02</span><h3>Technical integration</h3><p>New equipment has to work with the systems already in your vehicle. We check how each addition affects power, modules and factory features.</p></article>
        <article><span>03</span><h3>Problem solving</h3><p>When something does not behave as expected, we investigate rather than guess. That habit is the foundation of SignalTrace.</p></article>
        <article><span>04</span><h3>Customer experience</h3><p>You will know what we recommend, why, and what it involves before you approve anything. When the work is done, we walk you through it and confirm everything functions.</p></article>
      </div>
    </div></section>

    <section className="section"><div className="shell editorial-visual-band editorial-visual-band--reverse">
      <div className="editorial-visual-copy"><p className="eyebrow">TTT SignalTrace™</p><h2>For the electrical problem nobody has pinned down</h2><p>A battery that goes flat overnight. A no-start that happens once a week. An alarm that triggers on its own. SignalTrace moves through five stages: Scan, Isolate, Trace, Verify and Resolve.</p><p>Diagnostic time is approved in stages, so you decide how far to go before more time is spent.</p><Link className="button" href="/services/signaltrace">Explore SignalTrace</Link></div>
      <WebsiteVisual variant="signaltrace" alt="SignalTrace diagnostic workflow for modern vehicle electronics" />
    </div></section>

    <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Customer journey</p><h2>What working with TTT looks like</h2></div></div><div className="journey-cards">{journey.map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div></div></section>

    <section className="section"><div className="shell editorial-visual-band">
      <WebsiteVisual variant="vehicle" alt="Real-world premium vehicle on the road" />
      <div className="editorial-visual-copy"><p className="eyebrow">Real vehicles. Real use.</p><h2>Built for daily drivers, enthusiasts and businesses.</h2><p>TTT works across cars, trucks and SUVs for personal and business use. The system changes with the vehicle and the goal; the standard does not.</p><Link className="button button--ghost" href="/fleet-dealership">Fleet & Dealership Solutions →</Link></div>
    </div></section>

    <section className="cta-band"><div className="shell"><p className="eyebrow">Start with the vehicle</p><h2>Tell us what you would like to achieve or what is going wrong.</h2><p>We will explain how we would approach it, what information we need, and what happens next.</p><Link className="button button--light" href="/quote">Request a Quote →</Link></div></section>
  </main>
}
