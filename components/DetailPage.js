import Link from 'next/link';
import VehicleStage from './VehicleStage';

const discovery = {
  Service: [
    ['Vehicle context','Year, make, model, trim, factory equipment and existing modifications.'],
    ['Desired result','What should sound, look, feel or function differently when the work is complete?'],
    ['Integration constraints','Which factory functions, controls, appearance and serviceability need to be preserved?'],
    ['Future plan','Will this system need to expand, transfer, integrate with other technology or support later upgrades?']
  ],
  Solution: [
    ['Primary outcome','Define the problem or improvement first, before choosing products.'],
    ['System scope','Identify every vehicle system that may need to work together to deliver the outcome.'],
    ['Priorities','Balance capability, factory appearance, security, convenience, reliability and budget.'],
    ['Lifecycle','Consider support, subscriptions, future upgrades, warranty and long-term serviceability.']
  ],
  Industry: [
    ['Operating model','How vehicles enter the workflow, who approves work and how completion is documented.'],
    ['Vehicle population','Makes, models, trims, fleet size, turnover and the degree of standardization possible.'],
    ['Program requirements','Installation consistency, reporting, pricing, turnaround time, user roles and support.'],
    ['Scale & lifecycle','How the program expands across locations, vehicles, technicians and future technology.']
  ]
};

const process = [
  ['01','Discover','Vehicle, use case, priorities, constraints and existing systems.'],
  ['02','Design','Architecture, product selection, scope, integration strategy and expected outcome.'],
  ['03','Approve','Clear estimate or commercial scope before material work begins.'],
  ['04','Integrate','Install, configure and document the system with serviceability in mind.'],
  ['05','Validate','Test affected functions, capture records and hand off the completed vehicle.']
];

function CapabilityCard({ point, index }) {
  const title = typeof point === 'string' ? point : point.title;
  const body = typeof point === 'string' ? 'Specified, installed and validated as part of the complete TTT system.' : point.body;
  return <article className="capability-card"><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>;
}

export default function DetailPage({ item, kind }) {
  const questions = discovery[kind] || discovery.Solution;
  const overview = item.overview || [
    'TTT starts with the vehicle, the intended outcome and the systems already present. Components are selected for compatibility, serviceability and the way they work together.',
    'The finished result depends on architecture, wiring, configuration, mounting, tuning, testing and how clearly the system can be supported later.'
  ];

  return (
    <main>
      <section className="detail-hero dark-section grid-bg">
        <div className="shell detail-hero__grid">
          <div>
            <p className="eyebrow">{kind} / {item.eyebrow}</p>
            <h1>{item.title}</h1>
            <p className="lead lead--dark">{item.summary}</p>
            <div className="button-row">
              <Link className="button" href="/start">{item.cta} →</Link>
              <Link className="button button--ghost-dark" href="/projects">See TTT projects</Link>
            </div>
          </div>
          <VehicleStage active={item.eyebrow.toUpperCase()} />
        </div>
      </section>

      <section className="section">
        <div className="shell section-intro-grid">
          <div><p className="eyebrow">The opportunity</p><h2>Start with the result. Engineer the system around it.</h2></div>
          <div className="section-copy">{overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Capabilities</p><h2>What this TTT {kind.toLowerCase()} can include.</h2></div></div>
          <div className="capability-grid">{item.points.map((point, index) => <CapabilityCard point={point} index={index} key={typeof point === 'string' ? point : point.title} />)}</div>
        </div>
      </section>

      {item.outcomes?.length ? <section className="section">
        <div className="shell">
          <div className="section-intro-grid"><div><p className="eyebrow">Desired outcomes</p><h2>What a well-designed project should improve.</h2></div><div className="section-copy"><p>The exact hardware can change by vehicle. The useful outcome should remain clear before the product list is finalized.</p></div></div>
          <div className="system-layer-grid">{item.outcomes.map((outcome, index) => <article className="system-layer" key={outcome}><span>0{index + 1}</span><h3>{outcome}</h3></article>)}</div>
        </div>
      </section> : null}

      {item.idealFor?.length ? <section className="section section--dark">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Best fit</p><h2>Where this approach makes the most sense.</h2></div></div>
          <div className="catalog-rail">{item.idealFor.map((entry, index) => <div className="catalog-chip" key={entry}><span>0{index + 1}</span><b>{entry}</b></div>)}</div>
        </div>
      </section> : null}

      <section className="section">
        <div className="shell">
          <div className="section-intro-grid">
            <div><p className="eyebrow">Before the scope</p><h2>Questions worth answering before hardware is chosen.</h2></div>
            <div className="section-copy"><p>A useful consultation should narrow the system before it expands the parts list. These are the four areas TTT uses to turn a broad request into a buildable scope.</p></div>
          </div>
          <div className="system-layer-grid">{questions.map(([title, body], index) => <article className="system-layer" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      {item.considerations?.length ? <section className="section section--soft">
        <div className="shell">
          <div className="section-intro-grid"><div><p className="eyebrow">Project decisions</p><h2>What we should decide together.</h2></div><div className="section-copy"><p>These are not sales objections. They are design inputs that help prevent overbuying, compatibility mistakes and future rework.</p></div></div>
          <div className="capability-grid">{item.considerations.map((entry, index) => <article className="capability-card" key={entry}><span>0{index + 1}</span><h3>{entry}</h3></article>)}</div>
        </div>
      </section> : null}

      <section className="section section--dark">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Project lifecycle</p><h2>From idea to documented vehicle.</h2></div></div>
          <div className="catalog-rail detail-process">{process.map(([number, title, body]) => <div className="catalog-chip" key={title}><span>{number}</span><b>{title}</b><small>{body}</small></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="shell section-intro-grid">
          <div><p className="eyebrow">OEM+</p><h2>Technology should feel intentional when the vehicle comes back together.</h2></div>
          <div className="section-copy">
            <p>TTT's OEM+ standard is not a promise that every modification will be invisible. It means controls should make sense, workmanship should be disciplined, affected vehicle functions should be checked and future service should not require rediscovering how the system was built.</p>
            <div className="section-link-row"><Link className="button button--ghost" href="/articles/what-oem-plus-vehicle-integration-means">Read the OEM+ article</Link><Link className="button button--ghost" href="/resources/faq">Common questions</Link><Link className="button button--ghost" href="/technology">Technology library</Link></div>
          </div>
        </div>
      </section>

      <section className="cta-band"><div className="shell"><p className="eyebrow">Ready when you are</p><h2>{item.cta}.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
    </main>
  );
}
