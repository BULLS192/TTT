import Link from 'next/link';

const resources=[
  ['Articles','Original TTT writing on vehicle technology, integration strategy, installation quality and the decisions that matter before a project begins.','/articles','Read articles'],
  ['FAQ','Practical answers about projects, products, fitment, installation, dealerships, fleets, subscriptions, support and ownership.','/resources/faq','Browse FAQ'],
  ['Technology explained','Plain-language explanations of DSP, tracking, security, cameras, window film and connected vehicle technology.','/technology','Explore technology'],
  ['Vehicle guides','A growing library of vehicle-specific considerations as TTT builds real project and fitment knowledge.','/vehicles','Explore vehicles'],
  ['Solutions','Outcome-based guidance for customers combining several technologies into one vehicle or commercial program.','/solutions','Explore solutions'],
  ['Project planning','A structured way to define the vehicle, desired outcome, priorities and constraints before products are selected.','/start','Start a project brief']
];

const principles=[
  ['Explain the tradeoff','Useful guidance should say what a product or approach gives you, what it does not, and what changes the recommendation.'],
  ['Separate fact from preference','Performance claims, legal requirements, platform limitations and subjective choices should not be blurred together.'],
  ['Design around the vehicle','Fitment, factory systems, electrical architecture and the actual use case matter more than a generic “best product” list.'],
  ['Keep it current','Vehicle technology, software platforms, product lines and regulations change. TTT content is intended to be updated as those inputs change.']
];

export const metadata={title:'Vehicle Technology Resources | TTT',description:'TTT articles, FAQ, technology explainers, vehicle guides and practical resources for automotive audio, tint, security, tracking and connected vehicle technology.'};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Resources</p><h1>A vehicle technology knowledge center built to help people make better decisions.</h1><p className="lead">The TTT resource library explains not only what a technology does, but when it makes sense, what it needs to work properly and what should be considered before money is spent.</p></div></section>
  <section className="section"><div className="shell card-grid card-grid--3">{resources.map(([title,body,href,cta])=><article className="feature-card" key={title}><span className="feature-card__index">Knowledge</span><h2>{title}</h2><p>{body}</p><Link href={href}>{cta} →</Link></article>)}</div></section>
  <section className="section section--dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Editorial standard</p><h2>What TTT content should do differently.</h2></div></div><div className="capability-grid">{principles.map(([title,body],i)=><article className="capability-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">For search and for customers</p><h2>Articles should answer real questions, not exist only to fill a blog.</h2></div><div className="section-copy"><p>TTT will build content around problems customers actually search for: how to choose tint, whether a DSP is worth it, how layered vehicle security works, what a fleet tracking system should include, what OEM+ integration means, and how modern factory electronics change aftermarket installation.</p><p>That gives the website long-term search value while also making the sales conversation easier because customers can arrive better informed.</p><Link className="button button--ghost" href="/articles">Browse TTT articles</Link></div></div></section>
  <section className="cta-band"><div className="shell"><h2>Need an answer for your specific vehicle?</h2><Link className="button button--light" href="/start">Ask TTT through a project brief →</Link></div></section>
</main>}
