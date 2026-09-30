import Link from 'next/link';

export const metadata={
  title:'Our Work: Tint, Audio, Security & Diagnostics | TTT',
  description:'Real TTT projects documented from goal to result: window tint, audio systems, tracking, security, SignalTrace diagnostics and custom fabrication.'
};

const filters=['All','Tint','Audio','Tracking','Security','SignalTrace','Fabrication'];

export default function Page(){return <main>
 <section className="page-hero"><div className="shell"><p className="eyebrow">Our Work</p><h1>Our work</h1><p className="lead">Every project here is a real vehicle with a real goal or problem. We document what the customer needed, what we did and how it turned out, so you can see how we approach work like yours.</p><Link className="button" href="/quote">Request a Quote</Link></div></section>
 <section className="section"><div className="shell"><div className="button-row" aria-label="Project filters">{filters.map(x=><span className="button button--ghost" key={x}>{x}</span>)}</div><div className="section section--tight"><p className="eyebrow">Project library</p><h2>Real projects only.</h2><p className="lead">We’re documenting our first projects now. Check back soon, or tell us about your vehicle and we’ll explain how we’d approach it.</p><p>Security projects will be shared without installation details to protect our customers.</p></div></div></section>
 <section className="section section--soft"><div className="shell"><p className="eyebrow">Case-study standard</p><h2>From goal to verified result</h2><div className="home-process-grid"><article><span>01</span><h3>The goal or problem</h3><p>What the customer wanted or what was going wrong, in their terms.</p></article><article><span>02</span><h3>Our solution</h3><p>What we recommended and why, including options considered.</p></article><article><span>03</span><h3>Work performed</h3><p>The main tasks, documented clearly.</p></article><article><span>04</span><h3>The result</h3><p>What changed and how it was verified.</p></article></div></div></section>
 <section className="cta-band"><div className="shell"><h2>Your vehicle could be next.</h2><p>Tell us what you’d like to achieve or what’s going wrong, and we’ll explain how we’d approach it.</p><Link className="button button--light" href="/quote">Request a Quote</Link></div></section>
 </main>}
