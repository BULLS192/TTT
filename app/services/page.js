import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';
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
  const core=services.slice(0,5); const secondary=services.slice(5);
  return <main>
    <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Services</p><h1>Upgrade the vehicle. Keep it feeling like a vehicle.</h1><p className="lead">Audio, glass, security, tracking and cameras all touch different systems. TTT plans the interaction before the install.</p><Link className="button" href="/start">Start a project →</Link></div><AutoVisual variant="concept" eyebrow="TTT / CORE SERVICES"/></div></section>

    <section className="section"><div className="shell"><div className="section-intro-grid"><div><span className="visual-kicker">Core work</span><h2>Five places customers usually start.</h2></div><div className="section-copy"><p>Choose the part of the vehicle you want to improve. We will deal with the systems behind it.</p></div></div>
      <div className="visual-feature-grid">{core.slice(0,3).map((x)=><Link className="visual-feature" href={`/services/${x.slug}`} key={x.slug}><AutoVisual variant={x.slug}/><div className="visual-feature__content"><small>{x.eyebrow}</small><h3>{x.title}</h3><p>{promise[x.slug]}</p></div></Link>)}</div>
    </div></section>

    <section className="section section--soft"><div className="shell media-mosaic">
      <Link href="/services/tracking"><AutoVisual variant="tracking" eyebrow="GPS / TELEMATICS" title="GPS & Tracking"/></Link>
      <Link href="/services/cameras"><AutoVisual variant="cameras" eyebrow="VISION / RECORDING" title="Cameras"/></Link>
      <div className="editorial-visual-copy"><p className="eyebrow">Tracking + Cameras</p><h2>See what happened. Know where the vehicle is.</h2><p>These systems become more useful when power, storage, connectivity and access are planned together.</p><Link className="button button--ghost" href="/solutions/connected-vehicle">Connected Vehicle →</Link></div>
    </div></section>

    <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Supporting work</p><h2>The details behind a clean build.</h2></div><div className="section-copy"><p>Lighting, electronics and fabrication often support a larger system rather than stand alone.</p></div></div><div className="secondary-service-list">{secondary.map(x=><Link href={`/services/${x.slug}`} key={x.slug}><b>{x.title}</b><span>{promise[x.slug]}</span></Link>)}</div></div></section>

    <section className="cta-band"><div className="shell"><h2>Tell us what you want the vehicle to do better.</h2><Link className="button button--light" href="/start">Start with the vehicle →</Link></div></section>
  </main>;
}
