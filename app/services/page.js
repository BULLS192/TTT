import Link from 'next/link';
import { services } from '../../lib/siteData';

export const metadata={title:'Vehicle Technology Services | TTT',description:'Automotive audio, tint, security, GPS tracking, cameras, electronics and fabrication, planned around the vehicle and installed as complete systems.'};

const promise={
  audio:'Keep the factory screen. Rebuild the signal path. Tune the cabin.',
  'window-tint':'Choose film for heat, visibility and privacy — not darkness alone.',
  security:'Use layers: deter, detect, immobilize and locate.',
  tracking:'Know where the vehicle is and who actually needs that data.',
  cameras:'Design coverage around the event you need to see.',
  lighting:'Add light where it serves a purpose.',
  electronics:'Integrate power, controls and accessories cleanly.',
  'custom-fabrication':'Build the mount, panel or enclosure the vehicle actually needs.'
};

export default function Page(){
  const primary=services.slice(0,5); const secondary=services.slice(5);
  return <main>
    <section className="page-hero"><div className="shell"><p className="eyebrow">Services</p><h1>Work on the vehicle, not around it.</h1><p className="lead">Audio, tint, security, tracking and cameras all touch a different part of the car. The job is to improve that part without creating a new problem somewhere else.</p></div></section>

    <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Core work</p><h2>Five places customers usually start.</h2></div><div className="section-copy"><p>If you already know what part of the vehicle you want to change, start here. If several systems need to work together, use <Link href="/solutions">Solutions</Link> instead.</p></div></div>
      <div className="service-index">{primary.map((x,i)=><Link className={`service-index__card ${i===0?'service-index__card--lead':''}`} href={`/services/${x.slug}`} key={x.slug}><small>{x.eyebrow}</small><h2>{x.title}</h2><p>{promise[x.slug]}</p><b>See how we approach it →</b></Link>)}</div>
    </div></section>

    <section className="section section--soft"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Supporting work</p><h2>The pieces that make a clean build possible.</h2></div><div className="section-copy"><p>Lighting, electrical accessories and fabrication are often part of a larger project rather than the reason the vehicle came in.</p></div></div><div className="secondary-service-list">{secondary.map(x=><Link href={`/services/${x.slug}`} key={x.slug}><b>{x.title}</b><span>{promise[x.slug]}</span></Link>)}</div></div></section>

    <section className="cta-band"><div className="shell"><p className="eyebrow">Not sure which page fits?</p><h2>Tell us what is wrong, annoying, missing or at risk.</h2><Link className="button button--light" href="/start">Start with the vehicle →</Link></div></section>
  </main>;
}
