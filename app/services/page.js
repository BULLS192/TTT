import Link from 'next/link';

export const metadata={
  title:'Automotive Technology Services in Houston | TTT',
  description:'Window tint, automotive audio, GPS tracking, kill switches, SignalTrace™ electrical diagnostics and custom fabrication in Houston.'
};

const services=[
 ['Window Tint','Film chosen for heat, glare and privacy, not just shade.','/services/window-tint'],
 ['Automotive Audio','Better sound from the system you have, or a new one built around how you listen.','/services/audio'],
 ['GPS Tracking','Know where your vehicle is and get alerts when something changes.','/services/gps-tracking'],
 ['Kill Switches','An added layer of theft deterrence that controls whether the vehicle can start.','/services/kill-switches'],
 ['TTT SignalTrace™','Structured diagnostics for electrical problems that come and go, drain batteries or have already beaten a code reader.','/services/signaltrace'],
 ['Custom Fabrication & Additive Manufacturing','When the right bracket, mount or enclosure doesn’t exist, we can design and make one to fit.','/services/custom-fabrication']
];

export default function Page(){return <main>
 <section className="page-hero"><div className="shell"><p className="eyebrow">Services</p><h1>Vehicle technology, properly integrated.</h1><p className="lead">Six services, one standard. Every job is planned around your vehicle and checked before it goes back to you.</p><Link className="button" href="/quote">Request a Quote</Link></div></section>
 <section className="section"><div className="shell card-grid card-grid--3">{services.map(([title,body,href])=><Link className="feature-card" href={href} key={href}><h3>{title}</h3><p>{body}</p><b>View service →</b></Link>)}</div></section>
 <section className="section section--soft"><div className="shell two-col"><div><p className="eyebrow">One vehicle, connected systems</p><h2>Every system, considered together</h2></div><div><p className="lead">A modern vehicle is a network of electronics, not a set of separate parts. TTT considers how new equipment affects power, modules, factory features, serviceability and the way you use the vehicle.</p></div></div></section>
 <section className="cta-band"><div className="shell"><h2>Not sure which service fits?</h2><p>Tell us what you want done or what the vehicle is doing. We’ll point you in the right direction.</p><Link className="button button--light" href="/quote?service=not-sure">Request a Quote</Link></div></section>
 </main>}
