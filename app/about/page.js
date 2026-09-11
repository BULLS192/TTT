import Link from 'next/link';

export const metadata={title:'About Thompson Transportation Technologies',description:'TTT is an automotive technology consulting and integration company serving vehicle owners, dealerships and fleets.'};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">About TTT</p><h1>Somewhere between a parts counter and an engineering firm is the work TTT wants to own.</h1><p className="lead">The product matters. So do the wiring, signal path, mounting, software, factory controls, documentation and the person who has to live with the vehicle afterward.</p></div></section>

  <section className="section"><div className="shell positioning-split">
    <article className="positioning-panel"><p className="eyebrow">What TTT does</p><h2>Start with the vehicle. Define the result. Build the system around both.</h2><ul className="plain-list"><li>Automotive technology consulting and product selection</li><li>Hands-on integration and installation</li><li>Consumer, dealership and fleet programs</li><li>Documentation, validation and handoff</li></ul></article>
    <article className="positioning-panel positioning-panel--dark"><p className="eyebrow">What TTT avoids</p><h2>Parts-first decisions that create problems later.</h2><ul className="plain-list"><li>Replacing factory functions without understanding what they do</li><li>Selling extra hardware because it looks impressive on a quote</li><li>Hiding installation choices that make future service harder</li><li>Publishing work, reviews or claims that cannot be verified</li></ul></article>
  </div></section>

  <section className="section section--soft"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">A simple filter</p><h2>Before a product earns a place in the vehicle, four things should be true.</h2></div><div className="section-copy"><p>Most bad installations start earlier than the install. They start when fitment, factory behavior or ownership is ignored during product selection.</p></div></div><div className="editorial-capabilities">
    <article className="editorial-capability"><span>01</span><h3>It fits the vehicle.</h3><p>Physically, electrically and electronically — not just according to a universal product description.</p></article>
    <article className="editorial-capability"><span>02</span><h3>It solves the right problem.</h3><p>The feature list should match the reason the customer is spending money.</p></article>
    <article className="editorial-capability"><span>03</span><h3>It plays well with what stays.</h3><p>Factory screens, controls, cameras, alerts and data can be more valuable than the part being replaced.</p></article>
    <article className="editorial-capability"><span>04</span><h3>It can be supported later.</h3><p>Documentation, access, replacement parts and a service path are part of the design.</p></article>
  </div></div></section>

  <section className="section section--dark"><div className="shell section-intro-grid"><div><p className="eyebrow">The TTT Standard</p><h2>Clean work should still make sense after the trim panels go back on.</h2></div><div className="section-copy"><p>Vehicle protection, appropriate circuit protection, disciplined routing, serviceable mounting, functional checks and clear handoff are not premium extras. They are the baseline.</p><Link className="button button--ghost-dark" href="/standards">Read The TTT Standard →</Link></div></div></section>

  <section className="section"><div className="shell decision-split"><div><p className="eyebrow">Vehicle owners</p><h3>Improve the car without making it feel less like your car.</h3><Link className="button button--ghost" href="/industries/vehicle-owners">For Vehicle Owners →</Link></div><div><p className="eyebrow">Dealers & fleets</p><h3>Make the work repeatable enough that the process survives scale.</h3><div className="section-link-row"><Link className="button button--ghost" href="/industries/dealerships">Dealerships</Link><Link className="button button--ghost" href="/industries/fleets">Fleets</Link></div></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Bring us the vehicle and the problem you want solved.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
