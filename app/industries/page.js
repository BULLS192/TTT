import Link from 'next/link';
import { industries } from '../../lib/siteData';
export const metadata={title:'Industries'};
export default function Page(){return <main><section className="page-hero"><div className="shell"><p className="eyebrow">Industries</p><h1>One integration discipline. Different operating realities.</h1><p className="lead">TTT adapts the same technical rigor for personal vehicles, dealerships, fleets and commercial operations.</p></div></section><section className="section"><div className="shell card-grid card-grid--3">{industries.map((x)=><Link className="feature-card" href={`/industries/${x.slug}`} key={x.slug}><span className="feature-card__index">{x.eyebrow}</span><h2>{x.title}</h2><p>{x.summary}</p><b>Explore industry →</b></Link>)}</div></section></main>}
