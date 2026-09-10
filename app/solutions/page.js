import Link from 'next/link';
import { solutions } from '../../lib/siteData';

export const metadata={
  title:'Integrated Vehicle Solutions | TTT',
  description:'Explore integrated TTT solutions for premium vehicle experiences, security, connected vehicles, fleets, dealerships and custom automotive technology projects.'
};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Solutions</p><h1>Start with the problem you want the vehicle to solve.</h1><p className="lead">Some projects cross several product categories. TTT solutions organize the work around an outcome — better protection, a better in-car experience, useful connectivity or a repeatable commercial program.</p></div></section>
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Systems thinking</p><h2>A solution can combine several services without turning the project into a disconnected parts list.</h2></div><div className="section-copy"><p>Security may involve an alarm, immobilization, tracking and cameras. A premium vehicle experience may combine audio, tint, electronics and lighting. The solution page is where TTT defines how those pieces work together.</p><Link className="button button--ghost" href="/services">Browse individual services</Link></div></div></section>
  <section className="section section--soft"><div className="shell card-grid card-grid--3">{solutions.map((x)=><Link className="feature-card" href={`/solutions/${x.slug}`} key={x.slug}><span className="feature-card__index">{x.eyebrow}</span><h2>{x.title}</h2><p>{x.summary}</p><b>Explore solution →</b></Link>)}</div></section>
  <section className="cta-band"><div className="shell"><p className="eyebrow">Have a more complex requirement?</p><h2>We can turn a broad idea into a defined vehicle technology scope.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
