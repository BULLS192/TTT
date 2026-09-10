import Link from 'next/link';

export const metadata={
  title:'Client Stories & Testimonials',
  description:'Verified TTT client stories and testimonials from vehicle owners, dealerships and fleet customers as they become available.'
};

const categories=[
  ['Vehicle owners','Personal vehicles, premium upgrades, security, audio, tint and connected technology.'],
  ['Dealerships','Program consistency, accessory integration, vehicle turn time and documentation.'],
  ['Fleets','Standardized installs, visibility, cameras, tracking and lifecycle support.'],
];

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Client Stories</p><h1>Real feedback should come from real work.</h1><p className="lead">TTT will publish testimonials only when the underlying customer relationship exists and the customer has approved the quote, attribution and any accompanying project imagery.</p></div></section>
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Trust standard</p><h2>No fabricated reviews. No anonymous marketing filler.</h2></div><div className="section-copy"><p>As TTT completes projects, this section will connect verified customer feedback to the relevant vehicle, service and project whenever permission allows. That gives future customers useful context instead of generic praise.</p><p>When a commercial relationship, discount, incentive or other material connection could affect how a testimonial is interpreted, TTT will disclose it alongside the review.</p></div></div></section>
  <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Future client stories</p><h2>What this library will cover.</h2></div></div><div className="card-grid card-grid--3">{categories.map(([title,body],i)=><article className="feature-card" key={title}><span className="feature-card__index">0{i+1}</span><h3>{title}</h3><p>{body}</p><p><b>Verified stories will appear here as projects are completed.</b></p></article>)}</div></div></section>
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Case studies + testimonials</p><h2>The strongest proof pairs the customer’s words with the work itself.</h2></div><div className="section-copy"><p>A future testimonial can link directly to its project case study so visitors can understand the original goal, the TTT approach, the installed systems and the final customer perspective.</p><div className="section-link-row"><Link className="button" href="/projects">Explore Projects →</Link><Link className="button button--ghost" href="/start">Start a Project</Link></div></div></div></section>
</main>}
