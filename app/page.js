import Link from 'next/link';
import ScrollCinematic from '../components/ScrollCinematic';
import AssetMedia from '../components/AssetMedia';
import ServiceIcon from '../components/ServiceIcon';
import TessaTrigger from '../components/TessaTrigger';
import { getPageCopy } from '../lib/sanityContent';

const fallbackServices=[
  {icon:'tint',title:'Window Tint',meta:'Cooler cabin. Less glare. More privacy.',body:'Film chosen for heat rejection, not just darkness.',href:'/services/window-tint'},
  {icon:'audio',title:'Automotive Audio',meta:'Better sound built around how you listen.',body:'Upgrades that keep your factory screen, controls and alerts.',href:'/services/audio'},
  {icon:'gps',title:'GPS Tracking',meta:'Know where the vehicle is.',body:'Location, alerts and history, installed out of sight.',href:'/services/gps-tracking'},
  {icon:'security',title:'Kill Switches',meta:'Make unauthorized use harder.',body:'An independent barrier to starting or driving.',href:'/services/kill-switches'},
  {icon:'signal',title:'TTT SignalTrace™',meta:'Find the cause of the electrical problem.',body:'For faults that come and go or have beaten a code reader.',href:'/services/signaltrace'},
  {icon:'fabrication',title:'Custom Fabrication',meta:'Make the part that doesn’t exist.',body:'Mounts, brackets and enclosures designed for your vehicle.',href:'/services/custom-fabrication'}
];
const fallbackSolutions=[
  {title:'Premium Vehicle Experience',body:'“I want the car to feel finished, not modified.”',href:'/solutions/premium-vehicle-experience'},
  {title:'Vehicle Security',body:'“I want it harder to take and easier to find.”',href:'/solutions/vehicle-security'},
  {title:'Connected Vehicle',body:'“I want to know what it’s doing when I’m not in it.”',href:'/solutions/connected-vehicle'},
  {title:'Fleet & Dealership',body:'“I need the same result on every vehicle.”',href:'/solutions/fleet-dealership'},
  {title:'Custom Integration',body:'“What I need doesn’t come in a kit.”',href:'/solutions/custom-integration'}
];
const fallbackProcess=[
  {title:'Tell us',body:'The vehicle and what you want, in plain language.'},
  {title:'Plan',body:'Options, trade-offs and anything specific to your vehicle.'},
  {title:'Approve',body:'A clear scope before work begins.'},
  {title:'Do the work',body:'If something unexpected turns up, we stop and talk to you.'},
  {title:'Check and hand over',body:'We test the work, recheck what it touched and show you what changed.'}
];

export async function generateMetadata(){
  const page=await getPageCopy('/');
  return {title:page?.seoTitle||'Automotive Technology & Installation in Houston | TTT',description:page?.seoDescription||'Window tint, audio, GPS tracking, kill switches, electrical diagnostics and custom parts, installed to work with the systems already in your vehicle.'};
}

export default async function HomePage(){
  const cms=await getPageCopy('/');
  const c=(key,fallback)=>cms?.copy?.[key]||fallback;
  const services=cms?.collections?.services?.length?cms.collections.services:fallbackServices;
  const solutions=cms?.collections?.solutions?.length?cms.collections.solutions:fallbackSolutions;
  const process=cms?.collections?.process?.length?cms.collections.process:fallbackProcess;
  return <main className="production-page fusion-page">
    <ScrollCinematic/>
    <section id="services" className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{c('services.eyebrow','Services')}</p><h2>{c('services.title','Six kinds of work. One way of doing it.')}</h2><p className="lead">{c('services.lead','Start with the work you already know you need. Each service page gives you the essentials first, with an interactive demonstration where it genuinely helps explain the technology.')}</p></div><Link className="text-link" href="/services">See all services →</Link></div><div className="service-card-grid">{services.map(item=><Link href={item.href} className="service-card-production" key={item.title}><ServiceIcon name={item.icon}/><h3>{item.title}</h3><strong>{item.meta}</strong><p>{item.body}</p><b>See {item.title} →</b></Link>)}</div></div></section>
    <section className="section section--dark concept3s-home fusion-home-experience"><div className="shell"><div className="section-heading concept3s-home__head"><div><p className="eyebrow">{c('experience.eyebrow','Experience TTT')}</p><h2>{c('experience.title','See how the vehicle works as one system.')}</h2><p className="lead lead--dark">{c('experience.lead','Concept One is the bridge between browsing and experiencing TTT. Explore how glass, audio, tracking, security, fabrication and the hidden integration work affect one another, then go deeper only where interaction adds value.')}</p></div></div><div className="concept3s-home__preview"><AssetMedia visual="homeHeroNight" className="concept3s-home__media"/><div className="concept3s-home__shade"/><div className="concept3s-home__badge">REFERENCE CONCEPT · NOT A CUSTOMER VEHICLE</div><div className="concept3s-home__copy"><small>CONCEPT ONE · SYSTEM VIEW</small><strong>One vehicle. Multiple systems. Planned to work together.</strong><div className="concept3s-home__layers"><span>01 GLASS</span><span>02 AUDIO</span><span>03 TRACKING</span><span>04 SECURITY</span><span>05 FABRICATION</span><span>06 INTEGRATION</span></div><div className="button-row fusion-concept-actions"><Link className="button" href="/concept-one">Explore Concept One →</Link><Link className="text-link text-link--light" href="/experience">Browse interactive demos →</Link></div></div></div></div></section>
    <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{c('solutions.eyebrow','Solutions')}</p><h2>{c('solutions.title','Know the result you want, not what to buy?')}</h2><p className="lead">{c('solutions.lead','Start with the outcome. We’ll recommend the combination of work that gets you there.')}</p></div></div><div className="solution-card-grid">{solutions.map(item=><Link className="solution-card-v2" href={item.href} key={item.title}><p className="eyebrow">{item.title}</p><h3>{item.body}</h3><b>See {item.title} →</b></Link>)}</div></div></section>
    <section className="section"><div className="shell editorial-media-band"><AssetMedia visual="diagnosticReal"/><div><p className="eyebrow">{c('signal.eyebrow','TTT SignalTrace™')}</p><h2>{c('signal.title','For the electrical problem nobody has pinned down.')}</h2><p>{c('signal.body','A battery that goes flat overnight. A no-start once a week. An alarm that triggers itself. When a code reader and a new part haven’t fixed it, SignalTrace works through five stages to find the cause, and you approve each stage before it begins.')}</p><div className="method-strip"><span>Scan</span><span>Isolate</span><span>Trace</span><span>Verify</span><span>Resolve</span></div><div className="button-row"><Link className="button" href="/quote?service=signaltrace">Start a SignalTrace Intake →</Link><Link className="text-link" href="/services/signaltrace">How SignalTrace works →</Link></div></div></div></section>
    <section className="section section--dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{c('process.eyebrow','How we work')}</p><h2>{c('process.title','You approve the plan. We prove the result.')}</h2></div></div><div className="journey-grid">{process.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,'0')}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div><Link className="text-link text-link--light" href="/standards">Read The TTT Standard →</Link></div></section>
    <section className="section"><div className="shell editorial-media-band editorial-media-band--reverse"><AssetMedia visual="fleetReal"/><div><p className="eyebrow">{c('business.eyebrow','Business')}</p><h2>{c('business.title','One vehicle or a whole program.')}</h2><p>{c('business.body','Dealers need predictable delivery. Fleets need every unit to match and a record of what’s in it. Work vehicles need technology that survives the job. The same written standard makes all three repeatable.')}</p><div className="button-row"><Link className="text-link" href="/business/dealerships">Dealerships →</Link><Link className="text-link" href="/business/fleets">Fleets →</Link><Link className="text-link" href="/business/commercial-vehicles">Commercial Vehicles →</Link><Link className="text-link" href="/solutions/fleet-dealership">Fleet & Dealership program →</Link></div></div></div></section>
    <section className="section section--soft tessa-home-section"><div className="shell editorial-media-band"><AssetMedia visual="tessaPromo" className="tessa-home-media"/><div><p className="eyebrow">{c('start.eyebrow','Start here')}</p><h2>{c('start.title','Tell us what you have in mind.')}</h2><p>{c('start.body','Share the vehicle and what you want done. Plain language is perfect, and requesting a quote doesn’t commit you to anything.')}</p><div className="prompt-chips"><TessaTrigger prompt="Which tint is right for my vehicle?">Which tint is right for my vehicle?</TessaTrigger><TessaTrigger prompt="Can I keep my factory radio?">Can I keep my factory radio?</TessaTrigger><TessaTrigger prompt="My battery keeps dying.">My battery keeps dying.</TessaTrigger></div><div className="button-row"><Link className="button" href="/quote">Request a Quote →</Link><TessaTrigger className="text-link" prompt="I have a quick question about my vehicle.">Have a quick question first? Ask Tessa →</TessaTrigger></div><p className="small-note">{c('start.note','Tessa is a virtual assistant. For anything specific to your vehicle, she can pass your details to the team.')}</p></div></div></section>
  </main>;
}
