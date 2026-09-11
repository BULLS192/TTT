import Link from 'next/link';

export const metadata={
  title:'Client Testimonials',
  description:'Verified TTT customer feedback.',
  robots:{index:false,follow:false}
};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Client feedback</p><h1>Testimonials are published only with customer permission.</h1><p className="lead">There are no public testimonials listed yet. TTT will not fill this page with anonymous or invented praise just to make the website look established.</p></div></section>
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">When feedback is published</p><h2>It should connect back to real work.</h2></div><div className="section-copy"><p>A useful testimonial has context: the vehicle, the original problem, the work performed and the customer’s actual experience. When those stories are available and approved, they can be added here and linked to the relevant project.</p><Link className="button button--ghost" href="/projects">View Projects →</Link></div></div></section>
</main>}
