import Link from 'next/link';
import AutoVisual from '../../../components/AutoVisual';

export const metadata={title:'Vehicle Cameras & Vision Systems',description:'Understand dash cameras, rear cameras, multi-channel recording, parking visibility, event storage and fleet video systems.'};

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Technology / Vehicle Vision</p><h1>Start with the event you need to see.</h1><p className="lead">Coverage, storage, power and retrieval matter more than a resolution number on the box.</p></div><AutoVisual variant="cameras" eyebrow="FRONT / REAR / PARK"/></div></section>

  <section className="section"><div className="shell"><div className="coverage-grid"><div className="coverage-card"><span>01</span><h3>Front</h3><p>Road events and forward evidence.</p></div><div className="coverage-card"><span>02</span><h3>Rear</h3><p>Rear traffic and impact context.</p></div><div className="coverage-card"><span>03</span><h3>Cabin</h3><p>Selected commercial or rideshare use cases.</p></div><div className="coverage-card"><span>04</span><h3>Parking</h3><p>Event capture with a proper power strategy.</p></div></div></div></section>

  <section className="section section--soft"><div className="shell editorial-visual-band"><AutoVisual variant="cameras" eyebrow="COVERAGE / STORAGE / ACCESS"/><div className="editorial-visual-copy"><p className="eyebrow">Design inputs</p><h2>The camera is only one piece of the system.</h2><p>Lens placement, night performance, storage, parking-mode power management and how quickly footage can be retrieved all affect whether the video is useful.</p><Link className="button button--ghost" href="/services/cameras">Camera Service →</Link></div></div></section>

  <section className="section section--dark"><div className="shell"><div className="diagram-panel"><div className="diagram-panel__head"><div><p className="eyebrow">Recording path</p><h2>See → record → store → retrieve.</h2></div><p>The useful system is the one that captures the right event and makes the footage available when it is actually needed.</p></div><div className="technical-flow"><div className="flow-node"><small>01</small><strong>Coverage</strong><em>→</em></div><div className="flow-node"><small>02</small><strong>Trigger</strong><em>→</em></div><div className="flow-node"><small>03</small><strong>Recording</strong><em>→</em></div><div className="flow-node"><small>04</small><strong>Storage</strong><em>→</em></div><div className="flow-node"><small>05</small><strong>Retrieval</strong></div></div></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Design the camera system around the event you need to see.</h2><Link className="button button--light" href="/services/cameras">Explore Cameras →</Link></div></section>
</main>}
