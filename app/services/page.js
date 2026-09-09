import Link from 'next/link';
import { services } from '../../lib/siteData';
export const metadata={title:'Services'};
export default function Page(){return <main><section className="page-hero"><div className="shell"><p className="eyebrow">Services</p><h1>Technical capabilities, integrated as one system.</h1><p className="lead">From audio and tint to tracking, cameras and security, TTT specifies each system around the vehicle and the intended result.</p></div></section><section className="section"><div className="shell card-grid card-grid--3">{services.map((x)=><Link className="feature-card" href={`/services/${x.slug}`} key={x.slug}><span className="feature-card__index">{x.eyebrow}</span><h2>{x.title}</h2><p>{x.summary}</p><b>Explore service →</b></Link>)}</div></section></main>}
