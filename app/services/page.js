import Link from 'next/link';
import ServiceIcon from '../../components/ServiceIcon';
const services=[
 ['tint','Window Tint','Heat, glare, UV and privacy','/services/window-tint'],
 ['audio','Audio','Upgrades, integration and tuning','/services/audio'],
 ['gps','GPS Tracking','Location, alerts and geofencing','/services/gps-tracking'],
 ['security','Kill Switches','An added layer of theft deterrence','/services/kill-switches'],
 ['signal','SignalTrace™','Advanced vehicle electronics diagnostics','/services/signaltrace'],
 ['fabrication','Custom Fabrication','Parts designed to fit','/services/custom-fabrication']
];
export const metadata={title:'Automotive Technology Services | TTT',description:'Window tint, audio, GPS tracking, kill switches, SignalTrace diagnostics and custom fabrication from Thompson Transportation Technologies.'};
export default function Page(){return <main className="production-page"><section className="page-hero page-hero--review"><div className="shell"><p className="eyebrow">Services</p><h1>Six services, one standard.</h1><p className="lead">Plan the work around the vehicle. Integrate it with the systems already there. Verify the result before handover.</p></div></section><section className="section"><div className="shell"><div className="service-card-grid">{services.map(([icon,title,body,href])=><Link href={href} className="service-card-production" key={title}><ServiceIcon name={icon}/><h3>{title}</h3><p>{body}</p><b>View service →</b></Link>)}</div></div></section><section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">Not sure where to start?</p><h2>Tell us about the vehicle and the outcome you want.</h2></div><Link className="button button--light" href="/quote">Request a Quote →</Link></div></section></main>}
