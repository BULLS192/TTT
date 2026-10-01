import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';

export const metadata={title:'Business & Vehicle Programs | TTT',description:'TTT supports vehicle owners, dealerships, fleets and commercial vehicles with automotive technology integration, repeatable installation standards and documented delivery.'};

const lanes=[
 ['Vehicle owners','One vehicle. Personal priorities.','/industries/vehicle-owners'],
 ['Dealerships','Sales, installation and delivery have to stay predictable.','/industries/dealerships'],
 ['Fleets','The twentieth install should look like the first.','/industries/fleets'],
 ['Commercial vehicles','Technology for vehicles that have to earn their keep.','/industries/commercial-vehicles']
];

export default function Page(){return <main className="production-page">
 <section className="review-hero review-hero--compact"><AssetMedia visual="industryHub" className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">Business</p><h1>Same technology. Different operating reality.</h1><p className="lead lead--dark">A personal vehicle is built around one owner. Dealers need clean handoff. Fleets need repeatability and records. The technology only works when the operating model works too.</p><div className="button-row"><Link className="button" href="/quote">Request a Quote →</Link><Link className="button button--ghost-dark" href="/solutions/fleet-dealership">Fleet & Dealership Solution</Link></div></div></section>
 <section className="section"><div className="shell"><div className="business-lane-grid">{lanes.map(([title,body,href],i)=><Link href={href} className="business-lane-card" key={title}><small>{String(i+1).padStart(2,'0')}</small><h2>{title}</h2><p>{body}</p><b>Explore →</b></Link>)}</div></div></section>
 <section className="section section--soft"><div className="shell copy-section__grid"><div><p className="eyebrow">Programs</p><h2>Standardize what should repeat. Keep flexibility where the vehicle changes.</h2></div><div className="copy-section__body"><p>Business work needs defined equipment, installation rules, records and support. TTT can start with a pilot vehicle, document the approved approach and then repeat it across matching vehicles.</p><div className="button-row"><Link className="text-link" href="/solutions/fleet-dealership">Fleet & Dealership →</Link><Link className="text-link" href="/work-with-us">Work With Us →</Link></div></div></div></section>
 <section className="section section--dark"><div className="shell copy-section__grid"><div><p className="eyebrow">Greater Houston</p><h2>Local owner work. Scalable business programs.</h2></div><div className="copy-section__body"><p>TTT is centered on Greater Houston. Project scope, location and any travel requirements are confirmed before scheduling.</p><Link className="text-link text-link--light" href="/service-area">See service area →</Link></div></div></section>
 </main>}
