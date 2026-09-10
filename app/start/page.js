import ProjectIntakeForm from '../../components/ProjectIntakeForm';

export const metadata={
  title:'Start a Vehicle Technology Project | TTT',
  description:'Tell TTT about your vehicle, goals, priorities and timing to begin planning an audio, tint, security, tracking, camera, electronics or custom integration project.'
};

const next=[
  ['01','Review the vehicle','TTT starts with the year, make, model, trim, factory equipment and any existing modifications that affect the project.'],
  ['02','Clarify the outcome','We separate must-haves from nice-to-haves and define what should be measurably or noticeably better when the work is complete.'],
  ['03','Define the system','Compatible technologies, integration requirements, likely product categories and project dependencies are organized into a buildable scope.'],
  ['04','Approve before install','Material work should begin only after scope, assumptions, pricing and responsibilities are clear enough for both sides to proceed.']
];

export default function Page(){return <main>
  <section className="page-hero page-hero--compact"><div className="shell"><p className="eyebrow">Start a project</p><h1>Tell TTT what you want the vehicle to do better.</h1><p className="lead">You do not need to know the exact hardware. Start with the vehicle, the result you want, your priorities and any constraints we should understand.</p></div></section>
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">A better project brief</p><h2>The more useful the context, the less guesswork goes into the recommendation.</h2></div><div className="section-copy"><p>Useful information can include how the vehicle is used, what you like or dislike about the current setup, which factory functions need to remain, whether future upgrades are planned, and the budget or timing constraints that matter.</p><p>Do not worry about writing a perfect specification. That is what the discovery process is for.</p></div></div></section>
  <section className="section section--soft"><div className="shell shell--form"><ProjectIntakeForm/></div></section>
  <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">What happens next</p><h2>From request to a defined project.</h2></div></div><div className="system-layer-grid">{next.map(([n,title,body])=><article className="system-layer" key={title}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
</main>}
