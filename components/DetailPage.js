import Link from 'next/link';

const process = [
  ['01','Discover','Vehicle, factory equipment, use case and the result that matters.'],
  ['02','Design','Signal path, mounting, power, controls, products and installation approach.'],
  ['03','Approve','A defined scope before the vehicle is taken apart.'],
  ['04','Integrate','Install, configure and document the work with future service in mind.'],
  ['05','Validate','Check the added system and the factory functions touched by the work.']
];

const discovery = {
  Service: [
    ['Vehicle','What is the exact year, make, model, trim and factory equipment?'],
    ['Goal','What should be noticeably better when you get the vehicle back?'],
    ['Keep','Which factory controls, screens, cameras, storage or appearance cannot be compromised?'],
    ['Later','Is this a one-time job or the first stage of a larger build?']
  ],
  Solution: [
    ['Problem','What are we actually trying to improve or prevent?'],
    ['Use','How is the vehicle used every day, and by whom?'],
    ['Priority','Which matters most: performance, convenience, discretion, scale, cost or future expansion?'],
    ['Boundary','What should remain factory and what are you comfortable changing?']
  ],
  Industry: [
    ['Workflow','Who requests the work, who approves it and how does the vehicle move through the process?'],
    ['Vehicles','How many vehicle types, trims and turnover patterns are involved?'],
    ['Standard','What needs to be identical from vehicle to vehicle?'],
    ['Support','Who owns device access, records, service and replacement after delivery?']
  ]
};

const profiles = {
  audio: { introTitle: 'Keep the factory controls. Fix the signal path. Tune the cabin.', facts: [['START WITH','Factory source and amplifier'],['KEEP WORKING','Screen, steering controls, chimes'],['MEASURE','Signal behavior and cabin response'],['FINISH WITH','A tuned system, not a pile of parts']], visual: 'signal' },
  'window-tint': { introTitle: 'Choose film for the way the car is driven, not just how dark it looks.', facts: [['DECIDE FIRST','Heat, privacy or appearance'],['CHECK','Factory glass and current VLT'],['PROTECT','Night visibility and optical clarity'],['VERIFY','Product specs and local limits']], visual: 'tint' },
  security: { introTitle: 'Security works better in layers than it does as one impressive box.', facts: [['RISK','Where and how the vehicle is parked'],['LAYERS','Detect, alert, immobilize, locate'],['DAILY USE','Protection cannot become a nuisance'],['SENSITIVE DETAILS','Installation specifics stay private']], visual: 'security' },
  tracking: { introTitle: 'A tracker for one owner and telematics for a fleet solve different problems.', facts: [['WHO NEEDS IT','Owner, dealer or fleet team'],['DATA','Location, zones, history, events'],['SERVICE','Cellular plan and platform access'],['LIFECYCLE','Activation, replacement and admin']], visual: 'tracking' },
  cameras: { introTitle: 'Start with the event you need to see, then design the coverage.', facts: [['COVERAGE','Front, rear, cabin or 360'],['PARKING','Power strategy matters'],['STORAGE','Local card or connected platform'],['RETRIEVAL','Footage must be easy to access']], visual: 'cameras' },
  lighting: { introTitle: 'Good lighting has a job to do.', facts: [['PURPOSE','Ambient, task or exterior utility'],['CONTROL','Factory trigger, switch or controller'],['POWER','Circuit load and protection'],['FINISH','No exposed add-on look']], visual: 'generic' },
  electronics: { introTitle: 'Accessories are easy. Clean electrical integration is the actual job.', facts: [['FUNCTION','What needs power or control'],['INTERFACE','How the driver uses it'],['ELECTRICAL','Load, circuit protection, sleep behavior'],['SERVICE','Accessible and understandable later']], visual: 'generic' },
  'custom-fabrication': { introTitle: 'When the right part does not exist, the mount becomes part of the engineering.', facts: [['FIT','Space, clearances and service access'],['MATERIAL','Structure, heat and finish'],['VEHICLE','Use existing geometry intelligently'],['RESULT','Looks intentional and can be serviced']], visual: 'generic' }
};

function HeroPanel({ item, kind }) {
  const profile = profiles[item.slug];
  const fallback = kind === 'Industry'
    ? [['VEHICLES','Population and turnover'],['WORKFLOW','Who owns each handoff'],['STANDARD','What repeats every time'],['SUPPORT','Records, access and service']]
    : kind === 'Solution'
      ? [['OUTCOME','What should change'],['VEHICLE','What is already there'],['PRIORITY','What matters most'],['BOUNDARY','What stays factory']]
      : [['VEHICLE','Year, make, model, trim'],['FACTORY','What must stay working'],['RESULT','What should improve'],['SCOPE','What belongs in this phase']];
  const facts = profile?.facts || fallback;
  return <div className="editorial-hero__panel" aria-label="Project scope snapshot">{facts.map(([label,value])=><div className="scope-fact" key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>;
}

function TechnicalVisual({ item, kind }) {
  const visual = profiles[item.slug]?.visual;
  if (visual === 'signal') return <div className="technical-flow">{[['01','Factory source'],['02','Signal access'],['03','DSP / control'],['04','Amplification'],['05','Speakers + sub']].map(([n,title],i)=><div className="flow-node" key={title}><small>{n}</small><strong>{title}</strong>{i<4?<em>→</em>:null}</div>)}</div>;
  if (visual === 'tint') return <div className="comparison-grid">{[
    ['Shade','Visible light','How dark the glass appears. It does not tell the whole performance story.'],
    ['Heat','Solar load','Film construction and product performance matter more than shade alone.'],
    ['UV','Exposure','Verify the actual published specification for the film being quoted.'],
    ['Clarity','Driver view','Night visibility, haze and color matter every time the vehicle is driven.']
  ].map(([title,sub,body])=><div className="comparison-cell" key={title}><small>{sub}</small><strong>{title}</strong><p>{body}</p></div>)}</div>;
  if (visual === 'security') return <div className="security-stack">{[
    ['01','Deter','Reduce obvious opportunity and make the vehicle a less attractive target.'],
    ['02','Detect','Recognize intrusion, impact, tilt or other relevant events.'],
    ['03','Immobilize','Add another barrier to unauthorized operation without publishing sensitive details.'],
    ['04','Locate','Use a separate location layer to support awareness and recovery.']
  ].map(([n,title,body])=><div className="security-layer" key={title}><span>{n}</span><strong>{title}</strong><p>{body}</p></div>)}</div>;
  if (visual === 'tracking') return <div className="usecase-table">{[
    ['Personal vehicle','Location, geofencing, recovery awareness','Simple owner access; subscription and privacy understood'],
    ['Dealership','Inventory visibility or value-added customer programs','Activation, handoff, device ownership and repeatability'],
    ['Fleet','Operations, history, events and many users','Roles, reporting, device lifecycle and standard installation']
  ].map(([who,need,ops])=><div className="usecase-row" key={who}><strong>{who}</strong><span><small>Primary need</small>{need}</span><span><small>Operational reality</small>{ops}</span></div>)}</div>;
  if (visual === 'cameras') return <div className="coverage-grid">{[
    ['01','Front','Road events and forward evidence.'],['02','Rear','Rear impact and traffic context.'],['03','Cabin','Selected commercial or rideshare use cases.'],['04','Parking','Event capture when parked, with a proper power strategy.']
  ].map(([n,title,body])=><div className="coverage-card" key={title}><span>{n}</span><h3>{title}</h3><p>{body}</p></div>)}</div>;
  if (kind === 'Solution') return <div className="technical-flow">{item.points.slice(0,5).map((point,i)=><div className="flow-node" key={point.title || point}><small>0{i+1}</small><strong>{point.title || point}</strong>{i<Math.min(item.points.length,5)-1?<em>+</em>:null}</div>)}</div>;
  if (kind === 'Industry') return <div className="usecase-table">{item.points.slice(0,4).map((point,i)=><div className="usecase-row" key={point.title || point}><strong>{point.title || point}</strong><span><small>Program concern</small>{typeof point === 'string' ? 'Define the repeatable requirement.' : point.body}</span><span><small>Question</small>{item.considerations?.[i] || 'What must be standardized?'}</span></div>)}</div>;
  return <div className="outcome-list">{item.outcomes?.slice(0,4).map((outcome,i)=><div key={outcome}><span>0{i+1}</span>{outcome}</div>)}</div>;
}

export default function DetailPage({ item, kind }) {
  const profile = profiles[item.slug];
  const questions = discovery[kind] || discovery.Solution;
  const overview = item.overview || [];
  const introTitle = profile?.introTitle || (kind === 'Industry' ? 'The hardware may repeat. The operating model does not.' : kind === 'Solution' ? 'Define the result before the parts list.' : `What ${item.title.toLowerCase()} should change in the vehicle.`);

  return <main>
    <section className="detail-hero dark-section grid-bg"><div className="shell detail-hero__grid"><div><p className="eyebrow">{kind} / {item.eyebrow}</p><h1>{item.title}</h1><p className="lead lead--dark">{item.summary}</p><div className="button-row"><Link className="button" href="/start">{item.cta} →</Link><Link className="button button--ghost-dark" href="/resources/faq">Questions first</Link></div></div><HeroPanel item={item} kind={kind}/></div></section>
    <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Overview</p><h2>{introTitle}</h2></div><div className="section-copy">{overview.map(p=><p key={p}>{p}</p>)}</div></div></section>
    <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">What is involved</p><h2>The work, in practical terms.</h2></div></div><div className="editorial-capabilities">{item.points.map((point,i)=><article className="editorial-capability" key={point.title || point}><span>0{i+1}</span><h3>{point.title || point}</h3><p>{typeof point === 'string' ? 'Defined around the vehicle and the approved scope.' : point.body}</p></article>)}</div></div></section>
    <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">How to think about it</p><h2>{kind === 'Industry' ? 'Design the program around the workflow.' : kind === 'Solution' ? 'The pieces have to work together.' : 'The detail that usually changes the recommendation.'}</h2></div><div className="section-copy"><p>{kind === 'Industry' ? 'Vehicle technology becomes an operations problem once the same work has to be quoted, installed, recorded and supported repeatedly.' : kind === 'Solution' ? 'A solution is useful only when the dependencies between its parts are understood before installation.' : 'The right recommendation depends on the vehicle, the factory equipment and what the customer actually wants to improve.'}</p></div></div><TechnicalVisual item={item} kind={kind}/></div></section>
    {item.outcomes?.length ? <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">What good looks like</p><h2>Judge the finished work by the result.</h2></div></div><div className="outcome-list">{item.outcomes.map((outcome,i)=><div key={outcome}><span>0{i+1}</span>{outcome}</div>)}</div></div></section> : null}
    <section className="section"><div className="shell decision-split"><div><p className="eyebrow">Good fit when</p><h3>This approach makes sense if...</h3><ul className="plain-list">{(item.idealFor || []).map(x=><li key={x}>{x}</li>)}</ul></div><div><p className="eyebrow">Decide before the quote</p><h3>Questions that change the scope.</h3><ul className="plain-list">{(item.considerations || []).map(x=><li key={x}>{x}</li>)}</ul></div></div></section>
    <section className="section section--dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">First conversation</p><h2>Four things we need to know.</h2></div></div><div className="question-list">{questions.map(([title,body],i)=><div className="question-row" key={title}><span>0{i+1}</span><b>{title}</b><p>{body}</p></div>)}</div></div></section>
    <section className="section section--dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">TTT process</p><h2>Clear scope in. Documented vehicle out.</h2></div></div><div className="process-line">{process.map(([n,title,body])=><div className="process-step" key={title}><span>{n}</span><b>{title}</b><p>{body}</p></div>)}</div><div className="section-link-row" style={{marginTop:'28px'}}><Link className="button button--ghost-dark" href="/standards">The TTT Standard</Link><Link className="button button--ghost-dark" href="/articles/what-oem-plus-vehicle-integration-means">What OEM+ means</Link></div></div></section>
    <section className="cta-band"><div className="shell"><p className="eyebrow">Start with the vehicle</p><h2>{item.cta}.</h2><Link className="button button--light" href="/start">Tell us about the project →</Link></div></section>
  </main>;
}
