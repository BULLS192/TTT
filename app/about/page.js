import Link from 'next/link';

export const metadata={
  title:'About Thompson Transportation Technologies',
  description:'Learn how Thompson Transportation Technologies combines automotive technology consulting, system design and hands-on integration for vehicle owners, dealerships and fleets.'
};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell">
    <p className="eyebrow">About TTT</p>
    <h1>Vehicle technology deserves the same discipline as any other engineered system.</h1>
    <p className="lead">Thompson Transportation Technologies combines automotive technology consulting, system design and hands-on integration so the finished vehicle works as one coherent system.</p>
  </div></section>

  <section className="section"><div className="shell section-intro-grid">
    <div><p className="eyebrow">Why TTT exists</p><h2>There is a gap between selling accessories and engineering a complete vehicle experience.</h2></div>
    <div className="section-copy">
      <p>Vehicle owners are surrounded by products: speakers, amplifiers, cameras, trackers, alarms, window film, lighting and connected devices. The difficult part is deciding what belongs in the vehicle, what works with the factory systems and how everything should be installed, configured and supported together.</p>
      <p>TTT exists to close that gap. We begin with the vehicle and the outcome, then work backward into the right technology, architecture and installation approach.</p>
    </div>
  </div></section>

  <section className="section section--soft"><div className="shell mission-grid">
    <article className="mission-card"><p className="eyebrow">Mission</p><h2>Make advanced vehicle technology useful, cleanly integrated and easier to trust.</h2><p>TTT consults, specifies, integrates, installs and supports technology around the result the customer needs — whether that means better sound, greater comfort, stronger security, more visibility, useful connectivity or a repeatable commercial program.</p></article>
    <article className="mission-card mission-card--dark"><p className="eyebrow">Vision</p><h2>Build a modern vehicle-technology platform that connects the project, the vehicle and the customer for the long term.</h2><p>The long-term TTT model extends beyond a traditional accessory shop: one connected experience for vehicle projects, service records, technology recommendations, dealership programs, fleet systems and technical knowledge.</p></article>
  </div></section>

  <section className="section"><div className="shell founder-grid">
    <div className="founder-mark" aria-hidden="true"><span>DT</span><small>Founder / Owner</small></div>
    <div><p className="eyebrow">Founder & Owner</p><h2>Derek Thompson</h2>
      <p className="lead">Derek Thompson brings hands-on automotive technology installation experience together with dealership-facing consulting and a practical understanding of how customers use their vehicles every day.</p>
      <p>His work spans vehicle audio, window tint, tracking systems, security and immobilization solutions, electronics and dealership technology needs. TTT takes that field experience and adds stronger system design, project documentation, technology evaluation and repeatable operating processes.</p>
      <p>The result is a company designed to serve a single enthusiast vehicle with the same care that it can eventually apply to a dealership program or a growing commercial fleet.</p>
      <div className="founder-facts"><span><b>Hands-on</b> installation</span><span><b>Dealer-facing</b> consulting</span><span><b>Multi-system</b> integration</span></div>
    </div>
  </div></section>

  <section className="section section--dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Who TTT serves</p><h2>One integration philosophy. Three very different operating needs.</h2></div></div>
    <div className="capability-grid">
      <article className="capability-card"><span>01</span><h3>Vehicle owners</h3><p>Thoughtful upgrades for daily drivers, premium vehicles, performance cars and specialty builds.</p><Link href="/industries/vehicle-owners">Explore owner solutions →</Link></article>
      <article className="capability-card"><span>02</span><h3>Dealerships</h3><p>Repeatable accessory, security, tracking and customer-upgrade programs designed around sales and delivery workflows.</p><Link href="/industries/dealerships">Explore dealership solutions →</Link></article>
      <article className="capability-card"><span>03</span><h3>Fleets & commercial vehicles</h3><p>Standardized tracking, cameras, security, electronics and installation records across multiple vehicles.</p><Link href="/industries/fleets">Explore fleet solutions →</Link></article>
      <article className="capability-card"><span>04</span><h3>Special projects</h3><p>Custom integration when the vehicle, system architecture or intended outcome does not fit a standard package.</p><Link href="/solutions/custom-integration">Explore custom integration →</Link></article>
    </div>
  </div></section>

  <section className="section"><div className="shell two-col">
    <div><p className="eyebrow">The TTT method</p><h2>Consult. Design. Integrate. Install. Validate. Support.</h2></div>
    <div><p className="lead">TTT uses an OEM+ philosophy: preserve what works, improve what matters, keep systems clean and serviceable, document the finished result and make the technology feel intentional rather than added on.</p><Link className="button button--ghost" href="/articles/what-oem-plus-vehicle-integration-means">What OEM+ means at TTT</Link></div>
  </div></section>

  <section className="section section--soft"><div className="shell capability-grid">
    <article className="capability-card"><span>01</span><h3>Outcome first</h3><p>Start with what the vehicle needs to do better before selecting hardware.</p></article>
    <article className="capability-card"><span>02</span><h3>Integrated thinking</h3><p>Audio, security, tracking, cameras and electronics should be planned as interacting systems.</p></article>
    <article className="capability-card"><span>03</span><h3>OEM+ execution</h3><p>Controls, fitment and finishing should feel deliberate and respect the original vehicle.</p></article>
    <article className="capability-card"><span>04</span><h3>Documented work</h3><p>Clear scopes, approvals, testing and service records make the finished project easier to own.</p></article>
  </div></section>

  <section className="cta-band"><div className="shell"><p className="eyebrow">Technology. Integrated.</p><h2>Tell us what you want the vehicle to do better.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
