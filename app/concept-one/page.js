import Link from 'next/link';
import VehicleStage from '../../components/VehicleStage';

export const metadata={title:'Concept One | TTT',description:'Concept One is TTT’s matte-black coupe demonstrator for audio, tint, security, tracking, cameras and connected vehicle technology.'};

const systems=[
  ['Glass','Ceramic film and privacy choices framed around heat, visibility and the full exterior look.'],
  ['Audio','Factory signal integration, DSP, amplification, speakers, sub-bass and cabin tuning.'],
  ['Security','Multiple protection layers with sensitive installation details kept private.'],
  ['Tracking','A separate location layer for geofencing, awareness and recovery support.'],
  ['Cameras','Coverage for driving events, parking and vehicle awareness.'],
  ['Connectivity','The apps, services and controls that make the other systems useful outside the cabin.'],
];

export default function Page(){return <main>
  <section className="detail-hero dark-section grid-bg"><div className="shell detail-hero__grid"><div><p className="eyebrow">TTT / C1</p><h1>Concept One.</h1><p className="lead lead--dark">One matte-black coupe used to show what happens when audio, glass, security, tracking and cameras are planned together instead of installed as unrelated add-ons.</p><div className="button-row"><Link className="button" href="/start">Build your version →</Link><Link className="button button--ghost-dark" href="/projects">Projects</Link></div></div><VehicleStage label="TTT / C1" active="CONCEPT ONE"/></div></section>

  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Why C1 exists</p><h2>The car is the demo room.</h2></div><div className="section-copy"><p>A customer should be able to walk around one vehicle and understand the difference between a darker window and a better film, a louder stereo and a tuned system, a tracker and a security strategy.</p><p>Concept One gives those conversations a common reference point.</p></div></div></section>

  <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">The vehicle</p><h2>Clean front. C1 at the rear. TTT badge on the car.</h2></div></div><div className="evaluation-strip"><span><b>Body:</b> low-slung coupe</span><span><b>Finish:</b> matte black</span><span><b>Front:</b> no license plate</span><span><b>Rear:</b> C1 plate</span><span><b>Badge:</b> canonical TTT vehicle badge</span></div></div></section>

  <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Walk around the car</p><h2>Six systems. Six different jobs.</h2></div></div><div className="editorial-capabilities">{systems.map(([title,body],i)=><article className="editorial-capability" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

  <section className="section section--dark"><div className="shell section-intro-grid"><div><p className="eyebrow">The point</p><h2>Not every customer needs Concept One. Every project benefits from the same thinking.</h2></div><div className="section-copy"><p>Define what matters, understand the factory vehicle, decide what stays, and make the new systems work together. C1 is simply the clearest way to show that philosophy in one place.</p><Link className="button button--ghost-dark" href="/standards">The TTT Standard →</Link></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Use C1 as the reference. Build around your vehicle.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
