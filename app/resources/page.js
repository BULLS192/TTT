import Link from 'next/link';
const resources=[
  ['Articles','Original TTT writing on vehicle technology, system design, installation thinking and industry developments.','/articles','Read articles'],
  ['FAQ','Straight answers about projects, products, fitment, installation, dealerships, fleets and support.','/resources/faq','Browse FAQ'],
  ['Technology explained','Straightforward explanations of DSP, tracking, security, film and connected vehicle technology.','/technology','Explore technology'],
  ['Vehicle guides','Year, make and model-specific guidance as TTT builds its project database.','/vehicles','Explore vehicles'],
  ['Regulations','A growing home for state-level tint guidance and other relevant public rules.','/resources','Library building'],
  ['Buying guides','How to choose hardware around the desired outcome rather than just specifications.','/articles','Read guidance'],
];
export const metadata={title:'Resources',description:'TTT articles, FAQ, technology explainers, vehicle guides and practical automotive technology resources.'};
export default function Page(){return <main><section className="page-hero"><div className="shell"><p className="eyebrow">Resources</p><h1>The TTT vehicle technology knowledge center.</h1><p className="lead">Useful content should help someone make a better decision before they ever buy a product or schedule an installation.</p></div></section><section className="section"><div className="shell card-grid card-grid--3">{resources.map(([title,body,href,cta])=><article className="feature-card" key={title}><span className="feature-card__index">Knowledge</span><h2>{title}</h2><p>{body}</p><Link href={href}>{cta} →</Link></article>)}</div></section><section className="cta-band"><div className="shell"><h2>Need an answer for your specific vehicle?</h2><Link className="button button--light" href="/start">Ask TTT through a project brief →</Link></div></section></main>}
