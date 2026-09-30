import Link from 'next/link';

export const metadata={
  title:'Frequently Asked Questions | Thompson Transportation Technologies',
  description:'Answers about window tint, audio, GPS tracking, kill switches, SignalTrace™ diagnostics, custom fabrication, quotes and appointments at TTT.'
};

const groups=[
 ['General',[
   ['What does TTT do?','We install, integrate and diagnose vehicle technology: window tint, audio, GPS tracking, kill switches, SignalTrace™ electronics diagnostics and custom-fabricated parts.'],
   ['Who is Tessa?','Tessa is TTT’s virtual service assistant. She answers common questions, explains services and can start a quote. She’s not a person, and she’ll hand you to our team for anything specific.'],
   ['Can I combine several services on one visit?','Often, yes. Combining related work, like audio and fabrication or tracking and a kill switch, can make planning simpler. Mention everything in your quote request.']
 ]],
 ['Window Tint',[
   ['How do I choose between film types?','Start with what matters most: heat, privacy or appearance. Ceramic film leads on heat control; other films focus more on shade. The Window Tint page goes into the full comparison.'],
   ['Does darker tint block more heat?','Not necessarily. Heat rejection depends mainly on film technology, not darkness. A lighter ceramic film can outperform a darker basic film.'],
   ['What does the tint percentage mean?','It’s VLT, the share of visible light that passes through. Lower numbers are darker.'],
   ['How should I clean tinted windows?','Use a soft microfiber cloth and ammonia-free glass cleaner. Avoid blades and abrasive pads.'],
   ['Can tint be applied to a leased vehicle?','Check your lease terms first. Some leases restrict modifications.']
 ]],
 ['Audio',[
   ['Where should I start if my factory system sounds poor?','Usually with speakers and sound treatment, sometimes with a compact amplifier or processor. We’ll recommend a first step based on your vehicle.'],
   ['Is it possible to add a subwoofer and keep the stock radio?','In most vehicles, yes. We integrate with the factory system rather than replacing it where possible.'],
   ['What is system tuning?','Adjusting timing, balance and frequency response so the system sounds right from the driver’s seat. It’s where much of the improvement comes from.'],
   ['Will my audio upgrade rattle?','Sound treatment and secure mounting are part of our planning to reduce rattles and panel noise.']
 ]],
 ['Tracking',[
   ['What can I see with a GPS tracker?','Typically location, trip history and alerts you configure. Features depend on the device and plan.'],
   ['Can I set alerts for when my vehicle leaves an area?','Yes, with geofencing, where the platform supports it.'],
   ['Do you install trackers on company vehicles?','Yes. See Fleet & Dealership Solutions for multi-vehicle work.'],
   ['Can I have a tracker installed on someone else’s vehicle?','Only if you own it or are authorized to act for the owner.']
 ]],
 ['Vehicle Security',[
   ['What’s the difference between a tracker and a kill switch?','A tracker helps you locate the vehicle. A kill switch makes it harder to start or drive without authorization. They work well together.'],
   ['Will you tell me where my security devices are installed?','Yes, you’ll know. We don’t share those details with anyone else or publish them.'],
   ['Can you check a security system someone else installed?','Yes. If it’s causing problems, SignalTrace can diagnose aftermarket integration faults.'],
   ['Can a kill switch prevent all theft?','No device can. It adds a meaningful barrier as part of a layered approach.']
 ]],
 ['SignalTrace',[
   ['What kinds of problems is SignalTrace for?','Intermittent electrical faults, battery drain, no-starts, module communication problems and aftermarket integration issues.'],
   ['Is SignalTrace just a code scan?','No. A scan is the first stage. SignalTrace continues with isolation, tracing and verification to find the physical cause.'],
   ['How is SignalTrace billed?','Diagnostic time is approved in stages, so you control how much time is spent. Commercial rates and authorization blocks are confirmed before work begins.'],
   ['What do I receive at the end?','A findings summary of tests, observations, the cause identified and our recommendation.'],
   ['What should I tell you when I book?','When the problem started, how often it happens, what triggers it and what has already been tried or replaced.']
 ]],
 ['Fabrication',[
   ['What kinds of parts can you make?','Brackets, mounts, adapters, switch panels, enclosures and other non-safety-critical integration parts.'],
   ['What do you need to start a project?','A description of what the part should do, photos and any measurements you have.'],
   ['Do you make safety-critical parts?','No. Braking, steering, suspension, restraint and structural components are outside our fabrication scope.']
 ]],
 ['Quotes and Appointments',[
   ['How do I get a quote?','Use the Request a Quote form or ask Tessa. The form collects the details we need to respond accurately.'],
   ['Why do you ask for so much vehicle information?','Parts, film patterns, wiring and factory features vary by year, make and model. Accurate details mean a more useful quote.'],
   ['Do I have to give my license plate number?','No, it’s optional. It helps us match records if you’ve visited before.']
 ]]
];

const faqEntities=groups.flatMap(([,items])=>items).map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}));

export default function Page(){return <main>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqEntities})}}/>
 <section className="page-hero"><div className="shell"><p className="eyebrow">FAQ</p><h1>Frequently asked questions</h1><p className="lead">Short answers to common questions. Each service page goes into more detail, and Tessa can help with anything not covered here.</p></div></section>
 <section className="section"><div className="shell faq-layout">{groups.map(([group,items])=><section id={group.toLowerCase().replaceAll(' ','-')} className="faq-group" key={group}><div className="faq-group__title"><p className="eyebrow">{group}</p></div><div>{items.map(([q,a])=><details className="faq-item" key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>)}</div></section>
 <section className="cta-band"><div className="shell"><h2>Didn’t find your answer?</h2><p>Ask Tessa, or contact our team directly.</p><div className="button-row"><Link className="button button--light" href="/contact">Contact TTT</Link><Link className="button button--ghost-dark" href="/quote">Request a Quote</Link></div></div></section>
 </main>}
