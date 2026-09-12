import Link from 'next/link';
import AutoVisual from './AutoVisual';

const process = [
  ['01','Discover','Vehicle + goal'],
  ['02','Design','System + fitment'],
  ['03','Approve','Scope + estimate'],
  ['04','Integrate','Install + configure'],
  ['05','Validate','Test + handoff']
];

const visualBySlug = {
  audio:'audio',
  'window-tint':'window-tint',
  security:'security',
  tracking:'tracking',
  cameras:'cameras',
  lighting:'lighting',
  electronics:'electronics',
  'custom-fabrication':'custom-fabrication',
  'vehicle-security':'security',
  'connected-vehicle':'tracking',
  'premium-vehicle-experience':'concept',
  'fleet-intelligence':'fleets',
  'dealership-technology':'dealership',
  dealerships:'dealership',
  fleets:'fleets',
  'vehicle-owners':'concept',
  'commercial-vehicles':'fleets',
  'specialty-vehicles':'concept'
};

const headlineBySlug = {
  audio:'Keep the factory controls. Fix the signal path. Tune the cabin.',
  'window-tint':'Choose film for heat, visibility and privacy — not darkness alone.',
  security:'Security works better in layers.',
  tracking:'One vehicle and one hundred vehicles do not need the same tracking plan.',
  cameras:'Start with the event you need to see.',
  'vehicle-security':'Deter. Detect. Immobilize. Locate.',
  'connected-vehicle':'Useful information, not another app for the sake of it.',
  'premium-vehicle-experience':'Make the upgrades feel like they belong in the car.',
  'fleet-intelligence':'The fiftieth install should look like the first.',
  'dealership-technology':'The install has to fit the sales and delivery workflow.'
};

const outcomeHeadlineBySlug = {
  audio:'The hardware can disappear. The soundstage should not.',
  'window-tint':'The film should look native to the glass.',
  security:'More protection. No unnecessary friction.',
  tracking:'The right vehicle data, in the right hands, at the right time.',
  cameras:'Capture the event without cluttering the vehicle.',
  lighting:'Useful light, integrated cleanly.',
  electronics:'More capability without a dashboard full of add-ons.',
  'custom-fabrication':'The part should look designed for the vehicle, not adapted to it.',
  'vehicle-security':'Layered protection should still feel simple for the authorized driver.',
  'connected-vehicle':'More visibility without more clutter.',
  'premium-vehicle-experience':'The finished vehicle should feel more complete, not more modified.',
  'fleet-intelligence':'Repeatability is part of the product.',
  'dealership-technology':'The customer should see a finished vehicle, not the complexity behind it.',
  dealerships:'A clean handoff is part of the installation.',
  fleets:'Consistency becomes a service advantage.',
  'vehicle-owners':'The technology should fit the way the vehicle is actually used.',
  'commercial-vehicles':'Capability should support the workday, not complicate it.',
  'specialty-vehicles':'Custom work should still be understandable and serviceable later.'
};

function SignalDiagram(){return <div className="technical-flow">{['Factory source','Signal access','DSP / control','Amplification','Speakers + sub'].map((title,i)=><div className="flow-node" key={title}><small>0{i+1}</small><strong>{title}</strong>{i<4?<em>→</em>:null}</div>)}</div>}
function SecurityDiagram(){return <div className="security-stack">{[['01','Deter','Reduce opportunity.'],['02','Detect','Recognize the event.'],['03','Immobilize','Add another barrier.'],['04','Locate','Support awareness and recovery.']].map(([n,title,body])=><div className="security-layer" key={title}><span>{n}</span><strong>{title}</strong><p>{body}</p></div>)}</div>}
function TintDiagram(){return <div className="comparison-grid">{[['Shade','Visible light'],['Heat','Solar load'],['UV','Exposure'],['Clarity','Driver view']].map(([title,sub])=><div className="comparison-cell" key={title}><small>{sub}</small><strong>{title}</strong></div>)}</div>}
function TrackingDiagram(){return <div className="usecase-table">{[['Personal','Location + recovery awareness'],['Dealer','Activation + handoff'],['Fleet','Roles + reporting + lifecycle']].map(([who,need])=><div className="usecase-row" key={who}><strong>{who}</strong><span><small>Primary need</small>{need}</span><span><small>Scale</small>{who==='Fleet'?'Many vehicles / many users':'Vehicle-specific'}</span></div>)}</div>}
function CameraDiagram(){return <div className="coverage-grid">{[['01','Front'],['02','Rear'],['03','Cabin'],['04','Parking']].map(([n,title])=><div className="coverage-card" key={title}><span>{n}</span><h3>{title}</h3></div>)}</div>}

function TechnicalVisual({ item, kind }){
  const visual=visualBySlug[item.slug];
  if(visual==='audio') return <SignalDiagram/>;
  if(visual==='security') return <SecurityDiagram/>;
  if(visual==='window-tint') return <TintDiagram/>;
  if(visual==='tracking'||visual==='dealership'||visual==='fleets') return <TrackingDiagram/>;
  if(visual==='cameras') return <CameraDiagram/>;
  const points=(item.points||[]).slice(0,5);
  return <div className="technical-flow">{points.map((point,i)=><div className="flow-node" key={point.title||point}><small>0{i+1}</small><strong>{point.title||point}</strong>{i<points.length-1?<em>{kind==='Solution'?'+':'→'}</em>:null}</div>)}</div>;
}

export default function DetailPage({ item, kind }) {
  const visual=visualBySlug[item.slug] || (kind==='Industry'?'fleets':kind==='Solution'?'technology':'generic');
  const overview=(item.overview||[]).slice(0,2);
  const points=(item.points||[]).slice(0,3);
  const outcomes=(item.outcomes||[]).slice(0,3);
  const title=headlineBySlug[item.slug] || (kind==='Industry'?'Design the work around the way the vehicles are actually used.':kind==='Solution'?'Define the outcome first.':'Improve the vehicle without creating another problem.');
  const outcomeTitle=outcomeHeadlineBySlug[item.slug] || (kind==='Industry'?'The operating model should survive real-world use.':kind==='Solution'?'Capability should increase. Clutter should not.':'The finished work should feel native to the vehicle.');

  return <main>
    <section className="detail-hero dark-section grid-bg">
      <div className="shell visual-hero-grid">
        <div><p className="eyebrow">{kind} / {item.eyebrow}</p><h1>{item.title}</h1><p className="lead lead--dark">{item.summary}</p><div className="button-row"><Link className="button" href="/start">{item.cta} →</Link><Link className="button button--ghost-dark" href="/standards">The TTT Standard</Link></div></div>
        <AutoVisual variant={visual} eyebrow={`TTT / ${item.eyebrow}`} title={item.title}/>
      </div>
    </section>

    <section className="section"><div className="shell section-intro-grid"><div><span className="visual-kicker">Overview</span><h2>{title}</h2></div><div className="section-copy">{overview.map(p=><p key={p}>{p}</p>)}</div></div></section>

    <section className="section section--soft"><div className="shell"><div className="diagram-panel"><div className="diagram-panel__head"><div><p className="eyebrow">System view</p><h2>{kind==='Industry'?'The operating model matters.':'See the system before the parts list.'}</h2></div><p>{kind==='Industry'?'Products, installation, records and support all have to survive repetition.':kind==='Solution'?'Several technologies may contribute to one result. The dependencies matter more than the number of boxes.':'The visual below shows the relationship that most often changes the recommendation.'}</p></div><TechnicalVisual item={item} kind={kind}/></div></div></section>

    <section className="section"><div className="shell"><div className="visual-stat-strip">{points.map((point,i)=><div className="visual-stat" key={point.title||point}><small>0{i+1}</small><strong>{point.title||point}</strong><p>{typeof point==='string'?'Defined around the vehicle and scope.':point.body}</p></div>)}</div></div></section>

    <section className="section section--soft"><div className="shell editorial-visual-band"><AutoVisual variant={visual} eyebrow="TTT / INTEGRATION VIEW"/><div className="editorial-visual-copy"><p className="eyebrow">Integration standard</p><h2>{outcomeTitle}</h2>{outcomes.slice(0,2).map(x=><p key={x}>{x}</p>)}<Link className="button button--ghost" href="/start">Discuss your vehicle →</Link></div></div></section>

    <section className="section section--dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">TTT process</p><h2>Five steps. One documented vehicle.</h2></div></div><div className="process-line">{process.map(([n,title,body])=><div className="process-step" key={title}><span>{n}</span><b>{title}</b><p>{body}</p></div>)}</div></div></section>

    <section className="cta-band"><div className="shell"><h2>{item.cta}.</h2><Link className="button button--light" href="/start">Start with the vehicle →</Link></div></section>
  </main>;
}
