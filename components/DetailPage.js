import Link from 'next/link';
import VehicleStage from './VehicleStage';

export default function DetailPage({ item, kind }) {
  return (
    <main>
      <section className="detail-hero dark-section grid-bg">
        <div className="shell detail-hero__grid">
          <div><p className="eyebrow">{kind} / {item.eyebrow}</p><h1>{item.title}</h1><p className="lead lead--dark">{item.summary}</p><div className="button-row"><Link className="button" href="/start">{item.cta} →</Link><Link className="button button--ghost-dark" href="/projects">See TTT projects</Link></div></div>
          <VehicleStage active={item.eyebrow.toUpperCase()} />
        </div>
      </section>
      <section className="section"><div className="shell two-col"><div><p className="eyebrow">TTT approach</p><h2>Integrated around the vehicle, not bolted on as an afterthought.</h2></div><div><p className="lead">TTT starts with the vehicle, the intended outcome and the systems already present. Components are selected for compatibility, serviceability and the way they work together.</p></div></div></section>
      <section className="section section--soft"><div className="shell"><p className="eyebrow">Capabilities</p><div className="capability-grid">{item.points.map((point, i) => <article className="capability-card" key={point}><span>0{i + 1}</span><h3>{point}</h3><p>Specified, installed and validated as part of the complete TTT system.</p></article>)}</div></div></section>
      <section className="section"><div className="shell two-col"><div><p className="eyebrow">OEM+</p><h2>Technology should feel like it belonged there from the factory.</h2></div><div className="system-list"><div><span>01</span><b>Consult</b><p>Define goals and constraints.</p></div><div><span>02</span><b>Design</b><p>Specify the system and integration plan.</p></div><div><span>03</span><b>Install</b><p>Execute with clean, serviceable workmanship.</p></div><div><span>04</span><b>Validate</b><p>Configure, test and document the finished vehicle.</p></div></div></div></section>
      <section className="cta-band"><div className="shell"><p className="eyebrow">Ready when you are</p><h2>{item.cta}.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
    </main>
  );
}
