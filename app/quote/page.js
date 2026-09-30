import QuoteForm from '../../components/QuoteForm';

export const metadata={
  title:'Request a Quote | Thompson Transportation Technologies',
  description:'Tell us about your vehicle and what you need. Our short, step-by-step form helps TTT prepare an accurate, useful response.'
};

export default function Page(){return <main>
 <section className="page-hero"><div className="shell"><p className="eyebrow">Request a Quote</p><h1>Request a quote</h1><p className="lead">A few quick steps. Vehicles differ in wiring, glass, panels and factory features, so the more we know up front, the more accurate our first reply will be. Only the essentials are required.</p></div></section>
 <section className="section section--soft"><div className="shell shell--form"><QuoteForm/></div></section>
 </main>}
