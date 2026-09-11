import AutoVisual from '../../components/AutoVisual';
import ProjectIntakeForm from '../../components/ProjectIntakeForm';

export const metadata={
  title:'Start a Vehicle Technology Project | TTT',
  description:'Tell TTT about your vehicle, goals, priorities and timing to begin planning an audio, tint, security, tracking, camera, electronics or custom integration project.'
};

const next=[['01','Review','Vehicle + factory equipment'],['02','Clarify','Goal + priorities'],['03','Define','System + dependencies'],['04','Approve','Scope + estimate']];

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Start a project</p><h1>Tell us what you want the vehicle to do better.</h1><p className="lead">You do not need the exact hardware. Start with the vehicle, the result and the constraints that matter.</p></div><AutoVisual variant="concept" eyebrow="VEHICLE / GOAL / SCOPE"/></div></section>

  <section className="section"><div className="shell section-intro-grid"><div><span className="visual-kicker">Project brief</span><h2>Context first. Product list second.</h2></div><div className="section-copy"><p>Tell us how the vehicle is used, what you want to change, what must stay working and whether this is one phase of a larger build.</p></div></div></section>

  <section className="section section--soft"><div className="shell shell--form"><ProjectIntakeForm/></div></section>

  <section className="section section--dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">What happens next</p><h2>From request to defined scope.</h2></div></div><div className="process-line">{next.map(([n,title,body])=><div className="process-step" key={title}><span>{n}</span><b>{title}</b><p>{body}</p></div>)}</div></div></section>
</main>}
