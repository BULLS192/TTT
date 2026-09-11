import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';
import InquiryForm from '../../components/InquiryForm';

export const metadata={title:'Contact',description:'Contact Thompson Transportation Technologies about vehicle projects, dealership and fleet programs, support, or vendor partnerships.'};

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Contact</p><h1>Start the right conversation.</h1><p className="lead">Vehicle project, dealership program, fleet requirement or technology partnership—we will route the conversation from there.</p></div><AutoVisual variant="concept" eyebrow="TTT / CONTACT"/></div></section>

  <section className="section section--tight"><div className="shell"><InquiryForm /></div></section>

  <section className="section section--soft"><div className="shell"><div className="visual-feature-grid"><Link className="visual-feature" href="/start"><AutoVisual variant="concept"/><div className="visual-feature__content"><small>Project</small><h3>Planning a build?</h3><p>Start with the vehicle, goal and timing.</p></div></Link><Link className="visual-feature" href="/industries"><AutoVisual variant="dealership"/><div className="visual-feature__content"><small>Business</small><h3>Dealer or fleet?</h3><p>Discuss repeatable vehicle technology programs.</p></div></Link><Link className="visual-feature" href="/work-with-us"><AutoVisual variant="technology"/><div className="visual-feature__content"><small>Partners</small><h3>Technology provider?</h3><p>Introduce products, software or services for evaluation.</p></div></Link></div></div></section>
</main>}
