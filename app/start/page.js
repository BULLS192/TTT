import ProjectIntakeForm from '../../components/ProjectIntakeForm';
export const metadata={title:'Start a Project'};
export default function Page(){return <main><section className="page-hero page-hero--compact"><div className="shell"><p className="eyebrow">Start a project</p><h1>Tell TTT what you want the vehicle to do.</h1><p className="lead">You do not need to know the exact hardware. Start with the vehicle, desired systems and priorities.</p></div></section><section className="section section--soft"><div className="shell shell--form"><ProjectIntakeForm/></div></section></main>}
