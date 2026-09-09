import Link from 'next/link';
import VehicleStage from '../components/VehicleStage';
import { solutions, services } from '../lib/siteData';

const journey = [
  ['01', 'Glass', 'Privacy without disconnecting you from the road.', '/services/window-tint'],
  ['02', 'Audio', 'A sound system tuned around the cabin, not just the components.', '/services/audio'],
  ['03', 'Security', 'Layered protection designed to be discreet and serviceable.', '/solutions/vehicle-security'],
  ['04', 'Tracking', 'Location, awareness and connected vehicle intelligence.', '/services/tracking'],
];

export default function HomePage() {
  return (
    <main>
      <section className="home-hero dark-section grid-bg"><div className="shell home-hero__content"><p className="eyebrow">Thompson Transportation Technologies</p><h1>Technology,<br/><span>engineered around</span><br/>the vehicle.</h1><p className="lead lead--dark">TTT consults, designs and integrates audio, privacy, security, tracking, cameras and connected technology into one cohesive vehicle system.</p><div className="button-row"><Link className="button" href="/start">Start a project →</Link><Link className="button button--ghost-dark" href="/solutions">Explore solutions</Link></div></div><div className="shell"><VehicleStage active="SYSTEM READY" /></div><div className="scroll-cue">Scroll to explore <span>↓</span></div></section>
      <section className="section intro-statement"><div className="shell"><p className="eyebrow">TTT / Integration</p><h2>One vehicle. Multiple technologies. One system.</h2><p className="lead">The best automotive technology disappears into the vehicle. It works together, feels intentional and remains serviceable long after installation.</p></div></section>
      <section className="journey dark-section"><div className="shell journey__layout"><div className="journey__visual"><div className="journey__sticky"><VehicleStage label="CONCEPT ONE" active="LIVE SYSTEM" /></div></div><div className="journey__steps">{journey.map(([n, title, body, href]) => <article key={n} className="journey-step"><span>{n}</span><p className="eyebrow">System layer</p><h2>{title}</h2><p>{body}</p><Link href={href}>Explore {title.toLowerCase()} →</Link></article>)}</div></div></section>
      <section className="section"><div className="shell section-heading"><div><p className="eyebrow">Solutions</p><h2>Start with the outcome.</h2></div><Link href="/solutions">View all solutions →</Link></div><div className="shell card-grid card-grid--3">{solutions.slice(0,6).map((item) => <Link className="feature-card" href={`/solutions/${item.slug}`} key={item.slug}><span className="feature-card__index">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.summary}</p><b>Explore →</b></Link>)}</div></section>
      <section className="section section--soft"><div className="shell two-col"><div><p className="eyebrow">Capabilities</p><h2>Technical depth without the generic shop experience.</h2><p className="lead">TTT combines hands-on installation with a consulting and integration mindset for consumers and business customers.</p></div><div className="system-list">{services.slice(0,4).map((item, i) => <Link key={item.slug} href={`/services/${item.slug}`}><span>0{i+1}</span><b>{item.title}</b><p>{item.summary}</p></Link>)}</div></div></section>
      <section className="section dark-section concept-tease"><div className="shell two-col"><div><p className="eyebrow">Concept One</p><h2>A rolling demonstration of the TTT philosophy.</h2><p className="lead lead--dark">Concept One is designed to show how glass, audio, security, tracking, cameras and connectivity can behave as a single integrated vehicle experience.</p><Link className="button" href="/concept-one">Explore Concept One →</Link></div><VehicleStage label="TTT / 001" active="CONCEPT ONE" /></div></section>
      <section className="cta-band"><div className="shell"><p className="eyebrow">Build with TTT</p><h2>Tell us what you want your vehicle to do.</h2><p>Start with the vehicle and the outcome. TTT will help define the technology.</p><Link className="button button--light" href="/start">Start a project →</Link></div></section>
    </main>
  );
}
