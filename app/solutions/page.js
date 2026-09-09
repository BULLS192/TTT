import Link from 'next/link';
import { solutions } from '../../lib/siteData';

export const metadata = { title: 'Solutions' };
export default function Page(){return <main><section className="page-hero"><div className="shell"><p className="eyebrow">Solutions</p><h1>Start with what the vehicle needs to do.</h1><p className="lead">TTT solutions combine multiple technologies around a customer outcome instead of treating every install as an isolated product.</p></div></section><section className="section"><div className="shell card-grid card-grid--3">{solutions.map((x)=><Link className="feature-card" href={`/solutions/${x.slug}`} key={x.slug}><span className="feature-card__index">{x.eyebrow}</span><h2>{x.title}</h2><p>{x.summary}</p><b>Explore solution →</b></Link>)}</div></section></main>}
