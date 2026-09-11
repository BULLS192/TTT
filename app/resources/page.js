import Link from 'next/link';

const resources=[
  ['Articles','Audio, security, tint, tracking, cameras and vehicle integration explained without the sales pitch.','/articles','Read articles'],
  ['FAQ','Direct answers about projects, fitment, installation, dealerships, fleets and support.','/resources/faq','Browse FAQ'],
  ['The TTT Standard','How TTT thinks about vehicle protection, wiring, mounting, documentation, validation and handoff.','/standards','Read the standard'],
  ['Technology','DSP, OEM electronics, telematics, cameras and the systems behind a modern vehicle.','/technology','Explore technology'],
  ['Vehicle Fitment','Start with year, make, model and trim before assuming a product belongs in the car.','/vehicles','Start with the vehicle'],
  ['Greater Houston','Service-area information for vehicle owners, dealerships and fleets.','/service-area','Houston service area'],
  ['Brands & Partners','The criteria TTT uses to judge products, support and long-term fit.','/technology/brands','Explore brands'],
  ['Work With Us','A route for manufacturers, distributors, software providers and service partners.','/work-with-us','Partner with TTT'],
];

export const metadata={title:'Vehicle Technology Resources | TTT',description:'TTT articles, FAQ, integration standards, technology explainers, vehicle fitment guidance and automotive technology resources.'};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Resources</p><h1>Read this before you buy the wrong thing for the car.</h1><p className="lead">Good technical content should make the quote easier to understand, not create more jargon. These pages explain the decisions that change an installation.</p></div></section>
  <section className="section"><div className="shell"><div className="scenario-list">{resources.map(([title,body,href,cta],i)=><Link className="scenario-row" href={href} key={title}><span>{String(i+1).padStart(2,'0')}</span><h2>{title}</h2><p>{body}</p><em>→</em></Link>)}</div></div></section>
  <section className="cta-band"><div className="shell"><h2>Have a question that depends on your vehicle?</h2><Link className="button button--light" href="/start">Tell us about the vehicle →</Link></div></section>
</main>}
