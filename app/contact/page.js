import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';

export const metadata={title:'Contact',description:'Contact Thompson Transportation Technologies about vehicle projects, dealership and fleet programs, support, or vendor partnerships.'};

export default function Page(){return <main>
  <section className="page-hero page-hero--contact"><div className="shell"><p className="eyebrow">Contact</p><h1>Start the right conversation with TTT.</h1><p className="lead">Ask a question, discuss a vehicle, explore a dealership or fleet program, or introduce a product that belongs in the TTT technology portfolio.</p></div></section>
  <section className="section section--tight"><div className="shell"><InquiryForm /></div></section>
  <section className="section section--soft"><div className="shell contact-grid contact-grid--three">
    <article><p className="eyebrow">Project inquiry</p><h2>Planning a build?</h2><p>Use the structured project brief when you already know the vehicle, goals or systems you want to improve.</p><Link className="button" href="/start">Start a project →</Link></article>
    <article><p className="eyebrow">Business inquiry</p><h2>Dealership or fleet?</h2><p>Talk with TTT about standardized installation programs, vehicle technology packages and repeatable operating workflows.</p><Link className="button button--ghost" href="/industries">Explore business solutions</Link></article>
    <article><p className="eyebrow">Industry partners</p><h2>Want TTT to evaluate your products?</h2><p>Manufacturers, distributors, software providers and service partners can introduce their capabilities through our partner intake.</p><Link className="button button--ghost" href="/work-with-us">Work with us →</Link></article>
  </div></section>
</main>}
