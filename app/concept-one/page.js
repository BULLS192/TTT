import Link from 'next/link';
import VehicleStage from '../../components/VehicleStage';

export const metadata={title:'Concept One | TTT Flagship Vehicle Demonstrator',description:'Explore TTT Concept One, a matte-black coupe concept used to demonstrate integrated audio, tint, security, tracking, cameras and connected vehicle technology.'};

const systems=[
 ['01','Glass','Ceramic film, privacy and heat-rejection strategy designed around the full vehicle rather than a single window.'],
 ['02','Audio','DSP-led cabin tuning, factory integration, amplification, speaker strategy and acoustic control.'],
 ['03','Security','Layered deterrence, detection and immobilization with sensitive installation details kept private.'],
 ['04','Tracking','Dedicated location, geofencing and recovery awareness separated from the security layers that prevent or detect intrusion.'],
 ['05','Cameras','Vehicle vision for event recording, parking awareness and future connected workflows.'],
 ['06','Connectivity','Mobile control, connected services and system status coordinated around the driver.'],
];

const identity=[['Body','Low-slung coupe'],['Finish','Matte black'],['Plate','C1'],['Vehicle mark','Canonical TTT vehicle badge'],['Branding','No unrelated manufacturer logos'],['Purpose','TTT flagship technology demonstrator']];

export default function Page(){return <main>
 <section className="detail-hero dark-section grid-bg"><div className="shell detail-hero__grid"><div><p className="eyebrow">TTT / Concept 001</p><h1>Concept One.</h1><p className="lead lead--dark">A matte-black coupe developed as the reference platform for how TTT wants vehicle technology to look, feel and work when it is designed as one system.</p><div className="button-row"><Link className="button" href="/start">Build your version →</Link><Link className="button button--ghost-dark" href="/projects">Project library</Link></div></div><VehicleStage label="TTT / C1" active="CONCEPT ONE"/></div></section>
 <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Purpose</p><h2>One reference vehicle. Multiple technologies. One coherent experience.</h2></div><div className="section-copy"><p>Concept One gives TTT a consistent platform for showing how glass, audio, security, tracking, cameras and connectivity interact. It is not intended to suggest that every customer needs every system.</p><p>The value is in demonstrating the integration philosophy before applying the same thinking to a customer’s actual vehicle and priorities.</p></div></div></section>
 <section className="section section--soft"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Locked identity</p><h2>The Concept One design language.</h2></div><div className="section-copy"><p>These details are the canonical reference for future Concept One visuals so the vehicle does not drift between unrelated body styles, badges or branding.</p></div></div><div className="evaluation-strip">{identity.map(([label,value])=><span key={label}><b>{label}:</b> {value}</span>)}</div></div></section>
 <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">System map</p><h2>Six technology layers.</h2></div></div><div className="project-proof-grid">{systems.map(([n,title,body])=><article className="project-proof" key={title}><span className="feature-card__index">{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
 <section className="section section--dark"><div className="shell section-intro-grid"><div><p className="eyebrow">Homepage handoff</p><h2>The cinematic story becomes a technical case study here.</h2></div><div className="section-copy"><p>The homepage can introduce Concept One through motion and progressive reveals. This dedicated page provides the deeper system explanation, project logic and eventually the real component/specification list without forcing that detail into the cinematic experience.</p><p>Future high-fidelity 3D and Higgsfield-generated material can replace the current technical visualization later without changing this page architecture.</p></div></div></section>
 <section className="cta-band"><div className="shell"><p className="eyebrow">Your vehicle</p><h2>Concept One is the reference. Your build is the outcome.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
