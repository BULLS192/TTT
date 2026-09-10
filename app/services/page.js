import Link from 'next/link';
import { services } from '../../lib/siteData';

export const metadata={
  title:'Vehicle Technology Services | TTT',
  description:'Explore TTT services for automotive audio and DSP, window tint, security, GPS tracking, cameras, lighting, electronics and custom fabrication.'
};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Services</p><h1>The technology is only as good as the way it is integrated.</h1><p className="lead">TTT combines product selection, system design and hands-on installation across the technologies that shape how a vehicle sounds, feels, protects itself and connects to the world around it.</p></div></section>
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">How to use this section</p><h2>Start with a capability when you already know what part of the vehicle you want to improve.</h2></div><div className="section-copy"><p>Each service page explains what the technology can do, what should be decided before hardware is selected and how TTT approaches integration. If your project combines several systems, start with Solutions instead.</p><Link className="button button--ghost" href="/solutions">Explore integrated solutions</Link></div></div></section>
  <section className="section section--soft"><div className="shell card-grid card-grid--3">{services.map((x)=><Link className="feature-card" href={`/services/${x.slug}`} key={x.slug}><span className="feature-card__index">{x.eyebrow}</span><h2>{x.title}</h2><p>{x.summary}</p><b>Explore service →</b></Link>)}</div></section>
  <section className="cta-band"><div className="shell"><p className="eyebrow">Not sure where to start?</p><h2>Describe the vehicle and the outcome. TTT can help define the system.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
