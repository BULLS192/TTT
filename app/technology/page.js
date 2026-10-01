import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';

const disciplines=[
 ['DSP & audio signal','How factory processing, signal access and tuning shape an audio upgrade.','/technology/dsp'],
 ['OEM integration','Preserve screens, controls, chimes, cameras and serviceability.','/technology/oem-integration'],
 ['Telematics','Location, connectivity, subscriptions and user access.','/technology/telematics'],
 ['Vehicle vision','Coverage, storage, parking mode and retrieval.','/technology/vehicle-vision'],
 ['Vehicle security','Immobilization and tracking as complementary layers.','/solutions/vehicle-security'],
 ['Brands & products','How fit, documentation and support matter beyond the feature list.','/technology/brands']
];

export const metadata={title:'Automotive Technology Library | TTT',description:'TTT explains automotive DSP, OEM integration, telematics, vehicle cameras, security and connected systems in practical terms.'};

export default function Page(){return <main className="production-page">
 <section className="review-hero review-hero--compact"><AssetMedia visual="technologyHero" className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">Learn / Technology Library</p><h1>The car already has a technology stack before we touch it.</h1><p className="lead lead--dark">Screens, amplifiers, sensors, cameras, networks and software all change what an “accessory” install really means.</p></div></section>
 <section className="section"><div className="shell"><div className="diagram-panel"><div className="diagram-panel__head"><div><p className="eyebrow">Architecture</p><h2>Factory vehicle → integration layer → added system.</h2></div><p>Identify signal, power, data and controls first. Then choose the hardware that belongs in the path.</p></div><div className="technical-flow"><div className="flow-node"><small>01</small><strong>Factory vehicle</strong><em>→</em></div><div className="flow-node"><small>02</small><strong>Signal / data access</strong><em>→</em></div><div className="flow-node"><small>03</small><strong>Control layer</strong><em>→</em></div><div className="flow-node"><small>04</small><strong>Added system</strong><em>→</em></div><div className="flow-node"><small>05</small><strong>Validation</strong></div></div></div></div></section>
 <section className="section section--soft"><div className="shell"><div className="technology-card-grid">{disciplines.map(([title,body,href])=><Link className="technology-card" href={href} key={title}><h3>{title}</h3><p>{body}</p><b>Learn more →</b></Link>)}</div></div></section>
 <section className="section"><div className="shell editorial-media-band"><AssetMedia visual="technologyDetail"/><div><p className="eyebrow">Products + brands</p><h2>The feature list is only one input.</h2><p>Documentation, fitment, support, service model and long-term availability all affect whether a product belongs in the vehicle.</p><Link className="text-link" href="/technology/brands">How TTT evaluates brands →</Link></div></div></section>
 </main>}
