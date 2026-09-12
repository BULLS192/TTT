import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';
import ConceptMedia from '../../components/ConceptMedia';

export const metadata={title:'Concept One | TTT',description:'Concept One is TTT’s matte-black coupe demonstrator for audio, tint, security, tracking, cameras and connected vehicle technology.'};

const systems=[
  ['Glass','window-tint','Heat, visibility and privacy.'],
  ['Audio','audio','Factory integration, DSP and cabin tuning.'],
  ['Security','security','Layered protection without exposed installation detail.'],
  ['Tracking','tracking','Location, geofencing and recovery awareness.'],
  ['Cameras','cameras','Coverage for driving, parking and evidence.'],
  ['Connectivity','technology','The control and data layer behind the other systems.'],
];

export default function Page(){return <main>
  <section className="detail-hero dark-section grid-bg concept-one-hero"><div className="shell visual-hero-grid"><div><p className="eyebrow">TTT / C1</p><h1>Concept One.</h1><p className="lead lead--dark">The TTT reference vehicle: matte black, cleanly integrated, and built to show six technology systems on one platform.</p><div className="button-row"><Link className="button" href="/start">Build your version →</Link><Link className="button button--ghost-dark" href="/projects">Projects</Link></div></div><ConceptMedia eyebrow="TTT / C1 / 001" caption="Concept One"/></div></section>

  <section className="section"><div className="shell editorial-visual-band concept-feature-media"><ConceptMedia compact eyebrow="C1 / EXTERIOR" caption="Matte-black reference coupe"/><div className="editorial-visual-copy"><p className="eyebrow">Why C1 exists</p><h2>The car is the demo room.</h2><p>Walk around one vehicle and compare a darker window with a better film, a louder stereo with a tuned system, and a tracker with a complete security strategy.</p></div></div></section>

  <section className="section section--soft"><div className="shell"><div className="visual-stat-strip"><div className="visual-stat"><small>BODY</small><strong>Low-slung coupe</strong><p>Matte black, no unrelated manufacturer branding.</p></div><div className="visual-stat"><small>FRONT</small><strong>Clean face</strong><p>No front license plate.</p></div><div className="visual-stat"><small>REAR</small><strong>C1 identity</strong><p>C1 plate and canonical TTT vehicle badge.</p></div></div></div></section>

  <section className="section"><div className="shell"><div className="section-intro-grid"><div><span className="visual-kicker">Walk around the car</span><h2>Six systems. Six different jobs.</h2></div><div className="section-copy"><p>The point is not to install everything everywhere. It is to show how each layer changes the vehicle and how the layers interact.</p></div></div><div className="visual-feature-grid">{systems.map(([title,variant,body])=><article className="visual-feature" key={title}><AutoVisual variant={variant}/><div className="visual-feature__content"><small>C1 system</small><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>

  <section className="section section--dark"><div className="shell"><div className="diagram-panel"><div className="diagram-panel__head"><div><p className="eyebrow">C1 architecture</p><h2>Vehicle → interface → control → system → driver.</h2></div><p>Every C1 system starts with the same question: what must stay factory, what can change, and how should the driver experience the result?</p></div><div className="technical-flow"><div className="flow-node"><small>01</small><strong>Factory vehicle</strong><em>→</em></div><div className="flow-node"><small>02</small><strong>Integration</strong><em>→</em></div><div className="flow-node"><small>03</small><strong>Control</strong><em>→</em></div><div className="flow-node"><small>04</small><strong>System</strong><em>→</em></div><div className="flow-node"><small>05</small><strong>Experience</strong></div></div></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Use C1 as the reference. Build around your vehicle.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
