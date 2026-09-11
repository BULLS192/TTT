import Link from 'next/link';
import AutoVisual from '../../../components/AutoVisual';

export const metadata={title:'Vehicle Telematics & GPS Tracking',description:'Understand GPS tracking, cellular connectivity, geofencing, subscriptions and fleet telematics in modern connected vehicle systems.'};

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Technology / Telematics</p><h1>Tracking is one part of a connected-vehicle system.</h1><p className="lead">Location, alerts, history and access only become useful when the right people can see the right information.</p></div><AutoVisual variant="tracking" eyebrow="GPS / CELL / APP"/></div></section>

  <section className="section"><div className="shell"><div className="diagram-panel"><div className="diagram-panel__head"><div><p className="eyebrow">Connected path</p><h2>Vehicle → device → network → platform.</h2></div><p>Every layer has an owner, a subscription, an access model and a lifecycle.</p></div><div className="technical-flow"><div className="flow-node"><small>01</small><strong>Vehicle</strong><em>→</em></div><div className="flow-node"><small>02</small><strong>GPS device</strong><em>→</em></div><div className="flow-node"><small>03</small><strong>Cellular</strong><em>→</em></div><div className="flow-node"><small>04</small><strong>Cloud</strong><em>→</em></div><div className="flow-node"><small>05</small><strong>App / dashboard</strong></div></div></div></div></section>

  <section className="section section--soft"><div className="shell"><div className="usecase-table"><div className="usecase-row"><strong>Personal vehicle</strong><span><small>Need</small>Location, geofencing, recovery awareness</span><span><small>Reality</small>Simple owner access and subscription</span></div><div className="usecase-row"><strong>Dealership</strong><span><small>Need</small>Inventory or customer-program visibility</span><span><small>Reality</small>Activation, handoff and ownership</span></div><div className="usecase-row"><strong>Fleet</strong><span><small>Need</small>Operations, history and many users</span><span><small>Reality</small>Roles, reporting and device lifecycle</span></div></div></div></section>

  <section className="section"><div className="shell editorial-visual-band"><AutoVisual variant="tracking" eyebrow="LOCATION / HISTORY / ALERTS"/><div className="editorial-visual-copy"><p className="eyebrow">Right-size the platform</p><h2>One owner and one hundred vehicles are different product problems.</h2><p>TTT scopes access, subscriptions, data history and support—not just the hardware under the dash.</p><Link className="button button--ghost" href="/services/tracking">GPS & Tracking Service →</Link></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Connect the vehicle to the right level of visibility.</h2><Link className="button button--light" href="/services/tracking">Explore GPS & Tracking →</Link></div></section>
</main>}
