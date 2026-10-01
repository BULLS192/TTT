import Link from 'next/link';

export const metadata={title:'TTT Digital Vehicle Lab',description:'Explore the interactive TTT service experiences for tint, audio, tracking, security, diagnostics and fabrication.'};

const experiences=[
 ['Glass Lab','Window Tint','Change shade, film family and environment.','/services/window-tint#interactive'],
 ['Listening Room','Automotive Audio','Explore factory, amplified and DSP-tuned concepts.','/services/audio#interactive'],
 ['Vehicle Journey','GPS Tracking','Run a geofence and trip-history demonstration.','/services/gps-tracking#interactive'],
 ['Security Layers','Vehicle Security','Build a layered security concept.','/services/kill-switches#interactive'],
 ['SignalTrace Case 001','Diagnostics','Work through Scan → Isolate → Trace → Verify → Resolve.','/services/signaltrace#interactive'],
 ['Fabrication Lab','Custom Fabrication','Move a part from requirement to fitted component.','/services/custom-fabrication#interactive'],
 ['X-Ray Mode','The TTT Standard','Reveal the hidden work behind a finished installation.','/standards#xray']
];

export default function Page(){return <main className="production-page wave2-hub">
 <section className="page-hero page-hero--review"><div className="shell"><p className="eyebrow">Wave 2 · TTT Digital Vehicle</p><h1>Explore the technology, not just the page.</h1><p className="lead">Six interactive service labs turn the core TTT ideas into something you can manipulate, compare and add to a build.</p></div></section>
 <section className="section"><div className="shell"><div className="wave2-hub-grid">{experiences.map(([title,kicker,body,href],i)=><Link href={href} className="wave2-hub-card" key={title}><span>{String(i+1).padStart(2,'0')}</span><p className="eyebrow">{kicker}</p><h2>{title}</h2><p>{body}</p><b>Open experience →</b></Link>)}</div></div></section>
 <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">TTT Digital Vehicle</p><h2>Selections follow you through the site.</h2><p>Use My TTT Build to collect the configurations you want to discuss.</p></div><Link className="button button--light" href="/quote?from=build">Request a Quote →</Link></div></section>
 </main>}
