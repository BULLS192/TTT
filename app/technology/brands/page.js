import Link from 'next/link';
import AutoVisual from '../../../components/AutoVisual';

export const metadata={title:'Brands & Technology Partners',description:'How TTT evaluates automotive audio, security, tracking, cameras, film and vehicle electronics.'};

const categories=[
  ['Audio & DSP','audio'],['Security','security'],['Tracking & telematics','tracking'],['Vehicle vision','cameras'],['Glass & film','window-tint'],['Electronics & integration','technology']
];
const criteria=['Vehicle fit','Reliability','Documentation','Installer support','Warranty / RMA','Customer value'];

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Technology / Brands</p><h1>Choose the product for the system—not the logo on the box.</h1><p className="lead">Fit, support, documentation and lifecycle matter as much as the feature list.</p></div><AutoVisual variant="technology" eyebrow="FIT / SUPPORT / LIFECYCLE"/></div></section>

  <section className="section"><div className="shell"><div className="section-intro-grid"><div><span className="visual-kicker">Technology categories</span><h2>Organized around what the product has to do.</h2></div><div className="section-copy"><p>TTT evaluates products against the vehicle and use case first. Brand authorization or dealer status is published only when verified.</p></div></div><div className="visual-feature-grid">{categories.map(([title,variant])=><article className="visual-feature" key={title}><AutoVisual variant={variant}/><div className="visual-feature__content"><small>Product category</small><h3>{title}</h3></div></article>)}</div></div></section>

  <section className="section section--soft"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Evaluation</p><h2>What earns a place in a TTT system.</h2></div><div className="section-copy"><p>A strong specification sheet is not enough if the product is difficult to integrate, document, support or replace.</p></div></div><div className="evaluation-strip">{criteria.map(x=><span key={x}>{x}</span>)}</div></div></section>

  <section className="section section--dark"><div className="shell editorial-visual-band editorial-visual-band--reverse"><div className="editorial-visual-copy"><p className="eyebrow">Manufacturers + vendors</p><h2>Have technology TTT should evaluate?</h2><p>Manufacturers, distributors, software providers and service partners can introduce products through the partner intake.</p><Link className="button button--ghost-dark" href="/work-with-us">Work with TTT →</Link></div><AutoVisual variant="generic" eyebrow="PRODUCT / VEHICLE / SUPPORT"/></div></section>
</main>}
