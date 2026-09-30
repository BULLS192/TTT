import Link from 'next/link';

export const metadata={
  title:'Fleet & Dealership Vehicle Technology in Houston | TTT',
  description:'Consistent tracking, security and electronics installation for dealerships, fleets and automotive businesses in Houston. Talk to TTT about your vehicles.'
};

const audiences=[
 ['Dealerships','Accessory and security installations on inventory or sold units, with consistent results you can offer customers with confidence.'],
 ['Independent automotive businesses','A technical partner for specialized work such as tracking, immobilization, electronics integration or difficult electrical faults you’d rather refer out.'],
 ['Commercial vehicle operators','Contractors, service companies and delivery operators who need to know where vehicles are and protect the tools and equipment inside them.'],
 ['Small fleets','Groups of vehicles that need tracking, security or upgrades installed consistently, without taking the whole fleet off the road at once.']
];

const services=[
 ['GPS tracking','Location, alerts and multi-vehicle visibility, installed discreetly and verified.','/services/gps-tracking'],
 ['Security and immobilization','Added theft deterrence for vehicles and the equipment they carry.','/services/kill-switches'],
 ['Repeat installations','The same equipment installed to the same standard across many vehicles.',null],
 ['Electronics integration','Accessories, lighting, upfit electronics and controls wired correctly.',null],
 ['Diagnostics support','SignalTrace for electrical problems affecting vehicles in service, where appropriate.','/services/signaltrace'],
 ['Custom fabrication','Mounts, brackets and enclosures made once, then reproduced for every vehicle, where appropriate.','/services/custom-fabrication']
];

export default function Page(){return <main>
 <section className="page-hero"><div className="shell"><p className="eyebrow">Fleet & Dealership Solutions</p><h1>Vehicle technology for fleets and dealerships</h1><p className="lead">Tracking, security and electronics work installed the same way on every vehicle, documented, and handled through one point of contact.</p><div className="button-row"><a className="button" href="#business-inquiry">Start a Business Inquiry</a><Link className="button button--ghost" href="/contact">Contact TTT</Link></div></div></section>
 <section className="section"><div className="shell"><p className="eyebrow">Who we can support</p><h2>Built for businesses that depend on vehicles</h2><div className="card-grid card-grid--2">{audiences.map(([title,body])=><article className="feature-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
 <section className="section section--soft"><div className="shell"><p className="eyebrow">Services for business customers</p><h2>What we can help with</h2><div className="card-grid card-grid--3">{services.map(([title,body,href])=>href?<Link className="feature-card" href={href} key={title}><h3>{title}</h3><p>{body}</p><b>Learn more →</b></Link>:<article className="feature-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
 <section className="section dark-section"><div className="shell two-col"><div><p className="eyebrow">Repeatability and consistency</p><h2>The tenth vehicle should match the first</h2></div><div><p className="lead lead--dark">When you’re equipping more than one vehicle, consistency matters. It affects reliability, maintenance and how easily your team can use what’s installed.</p><ul><li><strong>Agree a standard.</strong> Define equipment, placement approach and connections for each vehicle type before work starts.</li><li><strong>Document each vehicle.</strong> Keep records of what was installed on which vehicle.</li><li><strong>Verify every unit.</strong> Each vehicle is tested before it goes back into service.</li><li><strong>Keep one point of contact.</strong> One conversation for scheduling, questions and records.</li></ul><p>Fabricated parts help here too. Once a bracket or enclosure is designed for one vehicle, identical parts can be produced for the rest.</p></div></div></section>
 <section className="section"><div className="shell two-col"><div><p className="eyebrow">Tracking and security</p><h2>Visibility and protection across your vehicles</h2></div><div><p className="lead">Tracking shows where your vehicles are and how they’re used. Immobilization adds a barrier to unauthorized use. Together they help protect vehicles and the equipment they carry.</p><p>We’ll help you decide what each vehicle needs, not just apply the same answer to all of them. Installation details stay confidential, and tracking is installed only on vehicles your business owns or is authorized to manage.</p></div></div></section>
 <section className="section section--soft"><div className="shell two-col"><div><p className="eyebrow">Custom requirements</p><h2>Have something specific in mind?</h2></div><div><p className="lead">Some projects don’t fit a standard service: a control panel for a work truck, a mounting solution for specialist equipment, or an integration problem across a mixed fleet. Tell us what you’re trying to achieve and we’ll tell you honestly whether we can help.</p></div></div></section>
 <section id="business-inquiry" className="section"><div className="shell"><p className="eyebrow">Business inquiry</p><h2>Start a conversation about your vehicles</h2><p className="lead">Share your company, approximate number of vehicles, vehicle types, services you’re interested in, where the vehicles are based and your timeline. We’ll follow up to discuss scope, scheduling and next steps.</p><Link className="button" href="/quote?service=fleet">Send Business Inquiry</Link></div></section>
 <section className="section section--soft"><div className="shell"><p className="eyebrow">FAQ</p><div className="faq-layout"><section className="faq-group"><div>
   <details className="faq-item"><summary>Do you offer volume pricing?<span>+</span></summary><p>We’ll discuss pricing once we understand scope, vehicle mix and repeatability.</p></details>
   <details className="faq-item"><summary>How do you keep installations consistent?<span>+</span></summary><p>We agree a standard for each vehicle type, document each installation and verify every vehicle before it’s returned.</p></details>
   <details className="faq-item"><summary>Can you help with electrical problems on vehicles already in our fleet?<span>+</span></summary><p>Yes, through SignalTrace, including faults related to previously installed equipment.</p></details>
   <details className="faq-item"><summary>Do you work with dealerships on customer-facing accessory programs?<span>+</span></summary><p>We’re open to discussing it. Tell us what you have in mind.</p></details>
   <details className="faq-item"><summary>How do we get started?<span>+</span></summary><p>Send a business inquiry or contact us. We’ll start with a conversation about your vehicles and goals.</p></details>
 </div></section></div></div></section>
 <section className="cta-band"><div className="shell"><h2>Let’s talk about your vehicles.</h2><p>One vehicle type or several, a single project or ongoing work, start with a conversation.</p><Link className="button button--light" href="/quote?service=fleet">Start a Business Inquiry</Link></div></section>
 </main>}
