import Link from 'next/link';
import BrandMark from './BrandMark';
import TessaTrigger from './TessaTrigger';

const groups=[
 ['Solutions',[['Premium Vehicle','/solutions/premium-vehicle-experience'],['Vehicle Security','/solutions/vehicle-security'],['Connected Vehicle','/solutions/connected-vehicle'],['Fleet & Dealership','/solutions/fleet-dealership'],['Custom Integration','/solutions/custom-integration']]],
 ['Services',[['Window Tint','/services/window-tint'],['Automotive Audio','/services/audio'],['GPS Tracking','/services/gps-tracking'],['Kill Switches','/services/kill-switches'],['SignalTrace™','/services/signaltrace'],['Custom Fabrication','/services/custom-fabrication']]],
 ['Business',[['Dealerships','/industries/dealerships'],['Fleets','/industries/fleets'],['Commercial Vehicles','/industries/commercial-vehicles'],['Greater Houston','/service-area'],['Work With Us','/work-with-us']]],
 ['Learn',[['Technology Library','/technology'],['The TTT Standard','/standards'],['Articles','/articles'],['Projects','/projects'],['FAQ','/faq'],['Vehicle Fitment','/vehicles']]],
 ['TTT',[['Concept One','/concept-one'],['About','/about'],['Contact','/contact']]]
];

export default function SiteFooter(){
 const year=new Date().getFullYear();
 return <footer className="site-footer production-footer"><div className="shell">
  <div className="footer-brand-row">
    <div className="footer-brand-card"><BrandMark/></div>
    <div className="footer-brand-message"><p className="eyebrow">Thompson Transportation Technologies</p><h2>Vehicle technology, properly integrated.</h2><p>For vehicle owners, dealerships and fleets across Greater Houston.</p></div>
    <div className="footer-brand-actions"><Link className="button button--light" href="/quote">Request a Quote →</Link><TessaTrigger className="footer-tessa" prompt="I have a question about TTT.">Ask Tessa →</TessaTrigger></div>
  </div>
  <div className="production-footer__grid">{groups.map(([title,links])=><div key={title}><h3>{title}</h3>{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div>)}</div>
  <div className="footer-bottom"><span>© {year} Thompson Transportation Technologies LLC. All rights reserved.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/accessibility">Accessibility</Link></div></div>
 </div></footer>;
}
