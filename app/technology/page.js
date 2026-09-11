import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';

const disciplines=[
  ['DSP & audio signal','audio','/technology/dsp'],
  ['OEM integration','technology','/technology/oem-integration'],
  ['Telematics','tracking','/technology/telematics'],
  ['Vehicle vision','cameras','/technology/vehicle-vision'],
  ['Security','security','/solutions/vehicle-security'],
  ['Brands & products','generic','/technology/brands'],
];

export const metadata={title:'Automotive Technology Library | TTT',description:'TTT explains automotive DSP, OEM integration, telematics, vehicle cameras, security and connected systems in practical terms.'};

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Technology</p><h1>The car already has a technology stack before we touch it.</h1><p className="lead">Screens, amplifiers, sensors, cameras, networks and software all change what an “accessory” install really means.</p></div><AutoVisual variant="technology" eyebrow="FACTORY / INTERFACE / ADDED SYSTEM"/></div></section>

  <section className="section"><div className="shell"><div className="diagram-panel"><div className="diagram-panel__head"><div><p className="eyebrow">Architecture</p><h2>Factory vehicle → integration layer → added system.</h2></div><p>Identify signal, power, data and controls first. Then choose the hardware that belongs in the path.</p></div><div className="technical-flow"><div className="flow-node"><small>01</small><strong>Factory vehicle</strong><em>→</em></div><div className="flow-node"><small>02</small><strong>Signal / data access</strong><em>→</em></div><div className="flow-node"><small>03</small><strong>Control layer</strong><em>→</em></div><div className="flow-node"><small>04</small><strong>Added system</strong><em>→</em></div><div className="flow-node"><small>05</small><strong>Validation</strong></div></div></div></div></section>

  <section className="section section--soft"><div className="shell"><div className="section-intro-grid"><div><span className="visual-kicker">Technology library</span><h2>See the discipline. Then go deeper.</h2></div><div className="section-copy"><p>Each page focuses on one system inside the vehicle rather than repeating generic product advice.</p></div></div><div className="visual-feature-grid">{disciplines.slice(0,3).map(([title,variant,href])=><Link className="visual-feature" href={href} key={title}><AutoVisual variant={variant}/><div className="visual-feature__content"><small>Technology</small><h3>{title}</h3></div></Link>)}</div></div></section>

  <section className="section"><div className="shell media-mosaic"><Link href="/technology/vehicle-vision"><AutoVisual variant="cameras" eyebrow="VEHICLE VISION"/></Link><Link href="/solutions/vehicle-security"><AutoVisual variant="security" eyebrow="SECURITY"/></Link><div className="editorial-visual-copy"><p className="eyebrow">Products + brands</p><h2>The feature list is only one input.</h2><p>Documentation, fitment, support, service model and long-term availability all affect whether a product belongs in the vehicle.</p><Link className="button button--ghost" href="/technology/brands">How TTT evaluates brands →</Link></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Bring us the vehicle, not just a product link.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
