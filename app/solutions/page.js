import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';

export const metadata={title:'Integrated Vehicle Solutions | TTT',description:'TTT combines vehicle technologies around practical outcomes: a better daily driver, stronger security, useful connectivity and repeatable dealership or fleet programs.'};

const scenarios=[
  ['Experience','I want the car to feel better every day.','Audio, glass and electronics planned as one upgrade path.','concept','/solutions/premium-vehicle-experience'],
  ['Protection','I want the vehicle harder to steal and easier to locate.','Different layers for deterrence, detection, immobilization and recovery.','security','/solutions/vehicle-security'],
  ['Connectivity','I want useful information when I am not in the car.','Location, alerts, cameras and connected services without clutter.','tracking','/solutions/connected-vehicle']
];

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Solutions</p><h1>Start with what you want the vehicle to do better.</h1><p className="lead">The hardware comes later. First define the experience, protection or information you actually need.</p></div><AutoVisual variant="technology" eyebrow="TTT / SYSTEM DESIGN"/></div></section>

  <section className="section"><div className="shell"><div className="section-intro-grid"><div><span className="visual-kicker">Pick the outcome</span><h2>Three common starting points.</h2></div><div className="section-copy"><p>Each path can combine several services without turning the vehicle into a collection of unrelated add-ons.</p></div></div><div className="visual-feature-grid">{scenarios.map(([label,title,body,variant,href])=><Link className="visual-feature" href={href} key={label}><AutoVisual variant={variant}/><div className="visual-feature__content"><small>{label}</small><h3>{title}</h3><p>{body}</p></div></Link>)}</div></div></section>

  <section className="section section--soft"><div className="shell editorial-visual-band"><AutoVisual variant="dealership" eyebrow="B2B / REPEATABLE WORK"/><div className="editorial-visual-copy"><p className="eyebrow">Dealers + Fleets</p><h2>When one good install has to become a repeatable program.</h2><p>Standardize products, placement, documentation and handoff so the process survives the tenth vehicle as well as the first.</p><div className="section-link-row"><Link className="button button--ghost" href="/solutions/dealership-technology">Dealerships</Link><Link className="button button--ghost" href="/solutions/fleet-intelligence">Fleets</Link></div></div></div></section>

  <section className="section section--dark"><div className="shell editorial-visual-band editorial-visual-band--reverse"><div className="editorial-visual-copy"><p className="eyebrow">Custom integration</p><h2>Some projects are engineering problems, not packages.</h2><p>Unusual factory electronics, limited space or multiple interacting systems need a defined architecture before installation.</p><Link className="button button--ghost-dark" href="/solutions/custom-integration">Custom Integration →</Link></div><AutoVisual variant="custom-fabrication" eyebrow="TTT / CUSTOM"/></div></section>

  <section className="cta-band"><div className="shell"><h2>Bring us the requirement. We will define the system.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
