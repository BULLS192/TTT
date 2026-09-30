import Link from 'next/link';
import AssetMedia from '../components/AssetMedia';\nimport InteractiveVehicle from '../components/InteractiveVehicle';\nimport ServiceIcon from '../components/ServiceIcon';

export const metadata = {
  title: 'Automotive Technology & Installation in Houston | TTT',
  description: 'Window tint, audio, GPS tracking, kill switches, electrical diagnostics and custom fabrication in Houston. Planned, installed and verified by TTT.'
};

const services = [
  ['Window Tint','Film chosen for heat, glare and privacy, not just shade. Fitted cleanly to your glass and explained so you know what you’re getting.','/services/window-tint','Window tint →'],
  ['Audio','Better sound from the system you have, or a new one built around how you listen. Planned to keep the factory features you rely on.','/services/audio','Audio upgrades →'],
  ['GPS Tracking','Know where your vehicle is and get alerts when something changes. For personal vehicles and small fleets, installed with discretion.','/services/gps-tracking','GPS tracking →'],
  ['Kill Switches','An added layer of theft deterrence that controls whether the vehicle can start. Integrated carefully so it doesn’t create new electrical problems.','/services/kill-switches','Kill switches →'],
  ['TTT SignalTrace™','Structured diagnostics for electrical problems that come and go, drain batteries or have already beaten a code reader.','/services/signaltrace','About SignalTrace →'],
  ['Custom Fabrication','When the right bracket, mount or enclosure doesn’t exist, we can design and make one to fit.','/services/custom-fabrication','Custom fabrication →']
];

const iconMap={\n  'Window Tint':'tint','Audio':'audio','GPS Tracking':'gps','Kill Switches':'security','TTT SignalTrace™':'signal','Custom Fabrication':'fabrication'\n};\n\nconst journey = [
  ['01','Tell us about your vehicle.','Share the year, make, model and what you want done or what’s going wrong. Photos help.'],
  ['02','Discuss the solution.','We talk through the options, what each involves and anything specific to your vehicle. If something isn’t a good fit, we’ll say so.'],
  ['03','Approve the work.','You get a clear scope before we start. Nothing is added without your agreement.'],
  ['04','Installation or diagnostics.','The work is carried out as planned. If we find something unexpected, we stop and discuss it with you first.'],
  ['05','Verification and delivery.','We test the finished work, confirm related systems still behave correctly and walk you through what was done.']
];

export default function HomePage() {
  return <main>
    <section className="home-asset-hero">
      <AssetMedia visual="homeHero" className="home-asset-hero__media" priority />
      <div className="home-asset-hero__shade"/>
      <div className="shell home-asset-hero__copy">
        <p className="eyebrow">Thompson Transportation Technologies · Houston</p>
        <h1>Vehicle technology, properly integrated.</h1>
        <p className="lead">Window tint, audio, tracking, security and electrical diagnostics from a Houston team that plans the work first and verifies it before handover.</p>
        <div className="button-row"><Link className="button" href="/quote">Request a Quote</Link><a className="button button--ghost-dark" href="#services">Explore Services</a></div>
        <p><button className="button-link" data-tessa-open="true">Have a question first? Ask Tessa →</button></p>
      </div>
    </section>

    <section className="section">
      <div className="shell section-heading">
        <div><p className="eyebrow">What TTT does</p><h2>What we work on</h2><p className="lead">Six services, one standard. Whether we’re tinting glass or tracing a fault through a wiring harness, the job is planned around your vehicle and checked before it goes back to you.</p></div>
        <Link href="/services">Explore Services →</Link>
      </div>
      <div className="shell card-grid card-grid--3">
        {services.map(([title,body,href,label])=><Link className="feature-card" href={href} key={href}><ServiceIcon name={iconMap[title]}/><h3>{title}</h3><p>{body}</p><b>{label}</b></Link>)}
      </div>
    </section>

    <section className="section section--soft">
      <div className="shell two-col">
        <div><p className="eyebrow">Vehicle technology overview</p><h2>Every system, considered together</h2><p className="lead">A modern vehicle is a network of electronics, not a set of separate parts. Every TTT service is planned with the rest of the vehicle in mind.</p></div>
        <div className="system-list">
          <div><span>01</span><b>Glass</b><p>Window film for heat, UV and glare control.</p></div>
          <div><span>02</span><b>Cabin audio</b><p>Speakers, amplification and tuning for the space you sit in.</p></div>
          <div><span>03</span><b>Location + starting system</b><p>GPS tracking and immobilization planned as complementary layers.</p></div>
          <div><span>04</span><b>Wiring + modules</b><p>SignalTrace diagnostics for faults that are hard to find.</p></div>
        </div>
        <InteractiveVehicle/>
      </div>
    </section>

    <section className="section">
      <div className="shell"><p className="eyebrow">Why TTT</p><h2>How we work</h2></div>
      <div className="shell card-grid card-grid--2">
        <article className="feature-card"><h3>Quality installation</h3><p>We plan wire routing, connections and panel removal before tools come out. Connections are made to last in Houston heat, and trim goes back the way it came off.</p></article>
        <article className="feature-card"><h3>Technical integration</h3><p>New equipment has to work with the systems already in your vehicle. We check how each addition affects power, modules and factory features.</p></article>
        <article className="feature-card"><h3>Problem solving</h3><p>When something doesn’t behave as expected, we investigate rather than guess. That habit is the foundation of SignalTrace.</p></article>
        <article className="feature-card"><h3>Customer experience</h3><p>You’ll know what we recommend, why, and what it involves before you approve anything. When the work is done, we walk you through it and confirm everything functions.</p></article>
      </div>
    </section>

    <section className="section dark-section">
      <div className="shell two-col">
        <div><p className="eyebrow">TTT SignalTrace™</p><h2>For the electrical problem nobody has pinned down</h2></div>
        <div><AssetMedia visual="signalProcess" className="copy-visual"/><p className="lead lead--dark">A battery that goes flat overnight. A no-start that happens once a week. An alarm that triggers on its own. SignalTrace moves through five stages: Scan, Isolate, Trace, Verify and Resolve, narrowing the problem until the evidence points to a cause.</p><p>Diagnostic time is approved in stages, so you decide how far to go before more time is spent. You receive a written summary of what we tested, what we found and what we recommend.</p><div className="button-row"><Link className="button" href="/services/signaltrace">Explore SignalTrace</Link><Link className="button button--ghost-dark" href="/quote?service=signaltrace">Start an Intake</Link></div></div>
      </div>
    </section>

    <section className="section">
      <div className="shell section-heading"><div><p className="eyebrow">Our Work</p><h2>Recent work</h2><p className="lead">Real vehicles, real problems, documented from start to finish. Project write-ups are on the way; in the meantime, ask us about work similar to yours and we’ll describe how we’d approach it.</p></div><Link href="/portfolio">View Our Work →</Link></div>
    </section>

    <section className="section section--soft">
      <div className="shell"><p className="eyebrow">Customer journey</p><h2>What working with TTT looks like</h2></div>
      <div className="shell home-process-grid">{journey.map(([n,title,body])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="section">
      <div className="shell two-col">
        <div><p className="eyebrow">Tessa</p><h2>Questions before you call? Ask Tessa.</h2></div>
        <div><p className="lead">Tessa is TTT’s virtual service assistant. She can explain our services, answer common questions, help you work out whether we’re likely to be able to help, and start a quote with the right details.</p><p>Tessa is a virtual assistant. For anything specific to your vehicle, she can pass your details to our team.</p><button className="button" data-tessa-open="true">Ask Tessa</button></div>
      </div>
    </section>

    <section className="cta-band"><div className="shell"><p className="eyebrow">Tell us what you have in mind.</p><h2>Share your vehicle and what you want done.</h2><p>We’ll come back with options that fit it, not a one-size answer.</p><Link className="button button--light" href="/quote">Request a Quote</Link></div></section>
  </main>;
}