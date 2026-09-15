import Link from 'next/link';
import AutoVisual from '../../../components/AutoVisual';

export const metadata = {
  title: 'SignalTrace™ Advanced Vehicle Electronics Diagnostics | TTT',
  description: 'TTT SignalTrace™ diagnoses difficult automotive electrical and electronic faults, intermittent issues, aftermarket integration problems, battery drains, no-starts and module communication issues.'
};

const problems = [
  ['No-start & intermittent faults', 'When the vehicle fails unpredictably, the goal is to reproduce the condition and isolate the actual electrical, network or integration cause.'],
  ['Aftermarket integration conflicts', 'Third-party alarms, remote start, powered steps, audio, trackers, lighting and other accessories can interact with factory systems in ways that require disciplined fault isolation.'],
  ['Battery drain & power problems', 'Parasitic draw, poor grounds, charging issues, wiring faults and module sleep problems can all create symptoms that are easy to misdiagnose.'],
  ['CAN / module communication', 'Modern vehicles depend on networks of modules and signals. Communication faults can create multiple symptoms that do not point neatly to one component.'],
  ['Wiring, connectors & grounds', 'Open circuits, shorts, terminal problems, damaged harnesses and bad grounds often require tracing and measurement rather than parts replacement.'],
  ['Problems other shops avoid', 'SignalTrace™ is built for the difficult cases where the answer cannot simply be “remove the aftermarket equipment and see what happens.”']
];

const stages = [
  ['01', 'SCAN', 'Capture symptoms, codes, live data, voltage, current draw and available vehicle information.'],
  ['02', 'ISOLATE', 'Divide the system into testable sections and narrow the fault to power, ground, signal, network, module, component or integration.'],
  ['03', 'TRACE', 'Follow the circuit, signal, data path or installation while documenting what each test proves or eliminates.'],
  ['04', 'VERIFY', 'Confirm the suspected root cause with evidence instead of stopping at the first suspicious component.'],
  ['05', 'RESOLVE', 'Repair or recommend the correction, then repeat the relevant test and confirm the original symptom is gone.']
];

export default function Page() {
  return <main>
    <section className="detail-hero dark-section grid-bg">
      <div className="shell visual-hero-grid">
        <div>
          <p className="eyebrow">SERVICE / ADVANCED DIAGNOSTICS</p>
          <h1>TTT SignalTrace™</h1>
          <p className="lead lead--dark">Advanced Vehicle Electronics Diagnostics for the faults other shops struggle to isolate.</p>
          <div className="button-row"><Link className="button" href="/start">Book a SignalTrace™ assessment →</Link><Link className="button button--ghost-dark" href="/services">All services</Link></div>
        </div>
        <AutoVisual variant="electronics" eyebrow="TTT / SIGNALTRACE™" title="Find the root cause." />
      </div>
    </section>

    <section className="section"><div className="shell section-intro-grid">
      <div><span className="visual-kicker">Root-cause diagnostics</span><h2>Do not guess. Do not automatically blame the aftermarket hardware.</h2></div>
      <div className="section-copy"><p>Modern vehicles are networks of modules, sensors, power distribution systems, grounds, data buses and third-party electronics. SignalTrace™ is TTT’s structured process for difficult electrical and electronic problems where replacing parts or removing accessories is not a real diagnosis.</p><p>We trace the symptom through the vehicle, isolate the failure, verify the cause and document what the evidence supports before a repair is recommended.</p></div>
    </div></section>

    <section className="section section--soft"><div className="shell">
      <div className="section-heading"><div><p className="eyebrow">Where SignalTrace™ fits</p><h2>Built for difficult, intermittent and integration-related problems.</h2></div></div>
      <div className="visual-stat-strip">{problems.slice(0,3).map(([title,body],i)=><div className="visual-stat" key={title}><small>0{i+1}</small><strong>{title}</strong><p>{body}</p></div>)}</div>
      <div className="visual-stat-strip">{problems.slice(3).map(([title,body],i)=><div className="visual-stat" key={title}><small>0{i+4}</small><strong>{title}</strong><p>{body}</p></div>)}</div>
    </div></section>

    <section className="section section--dark"><div className="shell">
      <div className="section-heading"><div><p className="eyebrow">SignalTrace™ process</p><h2>SCAN → ISOLATE → TRACE → VERIFY → RESOLVE</h2></div></div>
      <div className="process-line">{stages.map(([n,title,body])=><div className="process-step" key={title}><span>{n}</span><b>{title}</b><p>{body}</p></div>)}</div>
    </div></section>

    <section className="section"><div className="shell editorial-visual-band">
      <AutoVisual variant="electronics" eyebrow="TTT / DIAGNOSTIC RECORD" title="Evidence before replacement." />
      <div className="editorial-visual-copy"><p className="eyebrow">What you receive</p><h2>A diagnosis you can understand and act on.</h2><p>SignalTrace™ jobs are designed to document the complaint, relevant aftermarket equipment, tests performed, findings, confirmed root cause or current conclusion, recommended correction and post-repair verification where applicable.</p><p>If more investigation is required, the work can proceed in authorized diagnostic blocks instead of becoming open-ended labor.</p><Link className="button button--ghost" href="/start">Start with an initial assessment →</Link></div>
    </div></section>

    <section className="section section--soft"><div className="shell section-intro-grid">
      <div><p className="eyebrow">Examples</p><h2>The vehicle does not care who installed the hardware. The diagnosis still has to prove what failed.</h2></div>
      <div className="section-copy"><p>SignalTrace™ can be appropriate for powered running boards that malfunction, unexplained no-starts, parasitic battery drain, repeated fuse failures, alarms or remote starts that behave intermittently, GPS or immobilizer integration issues, accessory wiring faults, grounding problems, warning messages, and module communication symptoms.</p><p>When third-party equipment is involved, the objective is to determine whether it actually caused the problem—and if so, exactly how—rather than treating its presence as the diagnosis.</p></div>
    </div></section>

    <section className="cta-band"><div className="shell"><h2>Electrical problem nobody can figure out?</h2><Link className="button button--light" href="/start">Book SignalTrace™ →</Link></div></section>
  </main>;
}
