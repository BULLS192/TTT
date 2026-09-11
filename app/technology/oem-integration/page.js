import Link from 'next/link';
import AutoVisual from '../../../components/AutoVisual';

export const metadata={title:'OEM Vehicle Technology Integration',description:'How TTT approaches factory controls, data networks, warning tones, cameras and modern electronics when adding aftermarket technology.'};

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Technology / OEM Integration</p><h1>The vehicle is already a system before the first aftermarket part goes in.</h1><p className="lead">Screens, controls, cameras, alerts and data can all be connected. Good integration starts with what must stay working.</p></div><AutoVisual variant="technology" eyebrow="OEM / DATA / CONTROL"/></div></section>

  <section className="section"><div className="shell editorial-visual-band"><AutoVisual variant="technology" eyebrow="FACTORY FUNCTIONS"/><div className="editorial-visual-copy"><p className="eyebrow">Preserve first</p><h2>Upgrade capability without casually removing useful OEM behavior.</h2><p>Steering-wheel controls, warning tones, microphones, factory cameras, parking sensors and vehicle settings may depend on the original architecture.</p></div></div></section>

  <section className="section section--soft"><div className="shell"><div className="visual-stat-strip"><div className="visual-stat"><small>01 / CONTROLS</small><strong>Keep the interfaces that still make sense.</strong><p>Screen, steering controls and physical inputs.</p></div><div className="visual-stat"><small>02 / ALERTS</small><strong>Know what the vehicle is trying to tell you.</strong><p>Chimes, sensors, warnings and cameras.</p></div><div className="visual-stat"><small>03 / SERVICE</small><strong>Leave a path for diagnosis later.</strong><p>Access, documentation and reversibility.</p></div></div></div></section>

  <section className="section section--dark"><div className="shell"><div className="diagram-panel"><div className="diagram-panel__head"><div><p className="eyebrow">Integration path</p><h2>Retain → interface → add capability.</h2></div><p>The exact path changes by year, make, model, trim and software. The principle does not.</p></div><div className="technical-flow"><div className="flow-node"><small>01</small><strong>Factory system</strong><em>→</em></div><div className="flow-node"><small>02</small><strong>What stays</strong><em>→</em></div><div className="flow-node"><small>03</small><strong>Interface</strong><em>→</em></div><div className="flow-node"><small>04</small><strong>Added system</strong><em>→</em></div><div className="flow-node"><small>05</small><strong>Validate</strong></div></div></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Preserve what works. Improve what matters.</h2><Link className="button button--light" href="/articles/what-oem-plus-vehicle-integration-means">Read about OEM+ →</Link></div></section>
</main>}
