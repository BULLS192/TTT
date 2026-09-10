import Link from 'next/link';

const resources=[
  ['Articles','Original TTT writing on vehicle technology, system design, installation thinking, ownership and industry developments.','/articles','Read articles'],
  ['FAQ','Straight answers about projects, products, fitment, installation, dealerships, fleets and support.','/resources/faq','Browse FAQ'],
  ['The TTT Standard','Vehicle protection, clean installation, serviceability, documentation, validation and customer handoff.','/standards','Explore the standard'],
  ['Client Stories','Verified customer testimonials linked to real work as TTT projects are completed.','/testimonials','Client stories'],
  ['Technology explained','Straightforward explanations of DSP, OEM integration, tracking, security, cameras and connected vehicle technology.','/technology','Explore technology'],
  ['Vehicle guides','Year, make and model-specific guidance as TTT builds its compatibility and project database.','/vehicles','Explore vehicles'],
  ['Greater Houston','Local service-area information for owners, dealerships and fleets in the Houston metro.','/service-area','Houston service area'],
  ['Brands & partners','How TTT evaluates manufacturers, products, support and long-term fit.','/technology/brands','Explore brands'],
  ['Work With Us','A structured intake for manufacturers, distributors, software companies and service partners.','/work-with-us','Partner with TTT'],
];

export const metadata={title:'Resources',description:'TTT articles, FAQ, integration standards, client stories, technology explainers, vehicle guides and automotive technology resources.'};

export default function Page(){return <main>
 <section className="page-hero"><div className="shell"><p className="eyebrow">Resources</p><h1>The TTT vehicle technology knowledge center.</h1><p className="lead">Useful content should help someone make a better decision before they ever buy a product or schedule an installation.</p></div></section>
 <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Built for decisions</p><h2>Education, proof and standards in one place.</h2></div><div className="section-copy"><p>The resource library is designed to answer three different questions: how the technology works, how TTT approaches the work, and what other customers have actually experienced.</p></div></div></section>
 <section className="section section--soft"><div className="shell card-grid card-grid--3">{resources.map(([title,body,href,cta])=><article className="feature-card" key={title}><span className="feature-card__index">Knowledge</span><h2>{title}</h2><p>{body}</p><Link href={href}>{cta} →</Link></article>)}</div></section>
 <section className="cta-band"><div className="shell"><h2>Need an answer for your specific vehicle?</h2><Link className="button button--light" href="/start">Start with a project brief →</Link></div></section>
</main>}
