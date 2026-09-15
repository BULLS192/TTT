import Link from 'next/link';
import AutoVisual from '../../../components/AutoVisual';

export const metadata = {
  title: 'Custom Fabrication & Additive Manufacturing',
  description: 'Custom automotive fabrication, CAD and 3D printing for vehicle-specific mounts, brackets, panels, enclosures, jigs, fixtures and integration components.'
};

const applications = [
  ['Custom mounts & brackets', 'Vehicle-specific mounting solutions for electronics, displays, cameras, sensors, amplifiers, DSPs, trackers and other equipment.'],
  ['Panels & interfaces', 'Switch panels, trim adapters, controller panels and interface pieces designed around the surrounding vehicle geometry.'],
  ['Enclosures & protection', 'Purpose-built housings for electronics that account for access, retention, ventilation, vibration and the installation environment.'],
  ['Jigs & fixtures', 'Reusable installation aids for drilling, alignment, positioning, assembly and repeatable dealer or fleet work.'],
  ['Replacement & hard-to-find parts', 'Low-volume non-safety-critical plastic components when an original piece is unavailable or an off-the-shelf part does not solve the problem.'],
  ['Repeatable digital parts', 'Validated designs can become reusable TTT parts so future vehicles do not pay for the same engineering work again.']
];

const stages = [
  ['01','DEFINE','Identify the problem, loading, space, access, finish and serviceability requirements.'],
  ['02','DESIGN','Create the CAD model around the vehicle and the equipment that must be integrated.'],
  ['03','PROTOTYPE','Produce an economical first article to test fit, orientation, clearances and installation logic.'],
  ['04','FIT','Validate the part in the actual vehicle and revise only what the fitment evidence requires.'],
  ['05','PRODUCE','Manufacture the validated part using the appropriate material and process.'],
  ['06','INSTALL','Integrate the finished component into the vehicle and verify retention, access and function.'],
  ['07','CATALOG','Save reusable geometry, revision history and fitment notes to the TTT digital parts library.']
];

export default function Page() {
  return <main>
    <section className="detail-hero dark-section grid-bg">
      <div className="shell visual-hero-grid">
        <div>
          <p className="eyebrow">SERVICE / ENGINEERING & FABRICATION</p>
          <h1>Custom Fabrication & Additive Manufacturing</h1>
          <p className="lead lead--dark">When the correct part does not exist, design the part the vehicle actually needs.</p>
          <div className="button-row"><Link className="button" href="/start">Start a custom project →</Link><Link className="button button--ghost-dark" href="/services">All services</Link></div>
        </div>
        <AutoVisual variant="custom-fabrication" eyebrow="TTT / DIGITAL FABRICATION" title="Design. Fit. Validate." />
      </div>
    </section>

    <section className="section"><div className="shell section-intro-grid">
      <div><span className="visual-kicker">Vehicle-specific solutions</span><h2>Fabrication should solve an integration problem—not just fill space.</h2></div>
      <div className="section-copy"><p>Off-the-shelf brackets and universal mounts are useful when they fit. When they do not, TTT can design the missing mechanical interface around the vehicle, the electronics and the way the finished installation needs to be serviced.</p><p>CAD and 3D printing are especially useful for low-volume parts where the value comes from fit, function and repeatability rather than from the raw material itself.</p></div>
    </div></section>

    <section className="section section--soft"><div className="shell">
      <div className="section-heading"><div><p className="eyebrow">Applications</p><h2>Small parts can solve expensive installation problems.</h2></div></div>
      <div className="visual-stat-strip">{applications.slice(0,3).map(([title,body],i)=><div className="visual-stat" key={title}><small>0{i+1}</small><strong>{title}</strong><p>{body}</p></div>)}</div>
      <div className="visual-stat-strip">{applications.slice(3).map(([title,body],i)=><div className="visual-stat" key={title}><small>0{i+4}</small><strong>{title}</strong><p>{body}</p></div>)}</div>
    </div></section>

    <section className="section section--dark"><div className="shell">
      <div className="section-heading"><div><p className="eyebrow">TTT fabrication workflow</p><h2>DEFINE → DESIGN → PROTOTYPE → FIT → PRODUCE → INSTALL → CATALOG</h2></div></div>
      <div className="process-line">{stages.map(([n,title,body])=><div className="process-step" key={title}><span>{n}</span><b>{title}</b><p>{body}</p></div>)}</div>
    </div></section>

    <section className="section"><div className="shell editorial-visual-band">
      <AutoVisual variant="custom-fabrication" eyebrow="TTT / ADDITIVE MANUFACTURING" title="Print the solution, not the commodity." />
      <div className="editorial-visual-copy"><p className="eyebrow">3D printing</p><h2>The value is in engineering, fitment and repeatability.</h2><p>A printed mount may use very little material while eliminating hours of adaptation or enabling an installation that otherwise has no clean solution. Pricing should therefore reflect design effort, validation, production time and the value of the finished component—not filament cost alone.</p><p>Once a design is validated, it can become a reusable TTT digital part with a part number, revision and vehicle-fitment record.</p></div>
    </div></section>

    <section className="section section--soft"><div className="shell section-intro-grid">
      <div><p className="eyebrow">3D scanning</p><h2>Use scanning when it saves engineering time—not because a scanner is available.</h2></div>
      <div className="section-copy"><p>3D scanning can be valuable for complex geometry, but capture is only one part of the job. Mesh cleanup, reverse engineering, CAD reconstruction, prototype iterations and fit validation can consume substantial time.</p><p>TTT should therefore use scanning selectively. Calipers, templates, photographs and direct CAD measurement are often faster for simpler brackets and mounts. Scanning becomes appropriate when the geometry is complex enough to justify the additional workflow.</p></div>
    </div></section>

    <section className="cta-band"><div className="shell"><h2>Need a part that does not exist?</h2><Link className="button button--light" href="/start">Build it with TTT →</Link></div></section>
  </main>;
}
