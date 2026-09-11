import Link from 'next/link';
import AutoVisual from '../../../components/AutoVisual';

export const metadata={title:'DSP & Automotive Audio Signal Processing',description:'Understand automotive DSP, factory audio signal processing, tuning and why modern premium audio upgrades require system-level integration.'};

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Technology / Audio</p><h1>DSP is control over the signal path.</h1><p className="lead">The factory system may already be shaping the audio. Measure it first, then decide what needs to change.</p></div><AutoVisual variant="audio" eyebrow="FACTORY SIGNAL / DSP / CABIN"/></div></section>

  <section className="section"><div className="shell"><div className="diagram-panel"><div className="diagram-panel__head"><div><p className="eyebrow">Signal path</p><h2>More power is not the same thing as a better signal.</h2></div><p>Factory EQ, crossovers, timing and level behavior can follow the signal into an aftermarket amplifier unless they are understood first.</p></div><div className="technical-flow"><div className="flow-node"><small>01</small><strong>Factory source</strong><em>→</em></div><div className="flow-node"><small>02</small><strong>Signal access</strong><em>→</em></div><div className="flow-node"><small>03</small><strong>DSP</strong><em>→</em></div><div className="flow-node"><small>04</small><strong>Amplification</strong><em>→</em></div><div className="flow-node"><small>05</small><strong>Cabin</strong></div></div></div></div></section>

  <section className="section section--soft"><div className="shell editorial-visual-band"><AutoVisual variant="audio" eyebrow="TUNE THE VEHICLE, NOT JUST THE BOX"/><div className="editorial-visual-copy"><p className="eyebrow">What DSP controls</p><h2>Crossover. Timing. Level. Equalization.</h2><p>Those tools only work well when speaker placement, acoustic behavior and the factory signal are already understood.</p><Link className="button button--ghost" href="/services/audio">Audio & DSP Service →</Link></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Planning an audio system?</h2><Link className="button button--light" href="/services/audio">Explore Audio & DSP →</Link></div></section>
</main>}
