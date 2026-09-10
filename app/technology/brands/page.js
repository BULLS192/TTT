import Link from 'next/link';

export const metadata={title:'Brands & Technology Partners',description:'TTT brand and technology-partner directory foundation for automotive audio, security, tracking, cameras, film and vehicle electronics.'};

const categories=[
  ['AU','Audio & DSP','Speakers, amplifiers, processors, source integration and acoustic-control products.'],
  ['SE','Security','Alarms, immobilization, remote-control and layered vehicle-protection technologies.'],
  ['TR','Tracking & telematics','GPS, cellular connectivity, geofencing, fleet visibility and vehicle-data platforms.'],
  ['VI','Vehicle vision','Dash cameras, parking cameras, multi-channel recording and driver/fleet video systems.'],
  ['GL','Glass & film','Automotive window film focused on heat rejection, UV protection, privacy and optical quality.'],
  ['EL','Electronics & integration','Interfaces, remote start, power, charging, lighting and vehicle-specific integration hardware.'],
];
const criteria=['Technical fit','Reliability','Documentation','Installer support','Warranty / RMA','Customer value'];

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Technology / Brands</p><h1>A curated technology portfolio, not a logo wall.</h1><p className="lead">TTT's long-term brand directory will connect manufacturers and products to vehicle fitment, project history, technical documentation and the real reason each product belongs in a solution.</p></div></section>
  <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Directory structure</p><h2>Organized around what the technology does.</h2></div><div className="section-copy"><p>Brand authorization, dealer status and commercial relationships will only be published once they are verified. Until then, this page establishes the categories and evaluation system rather than implying relationships that do not yet exist.</p><p>That also gives TTT room to recommend the right product for a vehicle instead of forcing every project into one manufacturer's catalog.</p></div></div><div className="brand-directory">{categories.map(([code,title,body])=><article className="brand-category" key={title}><div className="brand-category__icon">{code}</div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
  <section className="section section--soft"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Evaluation standard</p><h2>What earns a place in the TTT portfolio.</h2></div><div className="section-copy"><p>Product performance matters, but so do installability, support and lifecycle. A product that is difficult to document, service or replace can create a poor customer experience even if its specification sheet looks strong.</p><p>TTT therefore evaluates technology across the complete ownership and installation experience.</p></div></div><div className="evaluation-strip">{criteria.map(x=><span key={x}>{x}</span>)}</div></div></section>
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Manufacturers & vendors</p><h2>Want TTT to evaluate your technology?</h2></div><div className="section-copy"><p>Manufacturers, distributors, software providers and service partners can introduce their products through the partner intake. Submission does not guarantee endorsement, stocking or a commercial relationship.</p><div className="section-link-row"><Link className="button" href="/work-with-us">Work with TTT →</Link><Link className="button button--ghost" href="/technology">Back to Technology</Link></div></div></div></section>
</main>}
