import Link from 'next/link';
import BrandMark from './BrandMark';

const services=[['Window Tint','/services/window-tint'],['Audio','/services/audio'],['GPS Tracking','/services/gps-tracking'],['Kill Switches','/services/kill-switches'],['SignalTrace™','/services/signaltrace'],['Custom Fabrication','/services/custom-fabrication']];
const solutions=[['Premium Vehicle','/solutions/premium-vehicle-experience'],['Vehicle Security','/solutions/vehicle-security'],['Connected Vehicle','/solutions/connected-vehicle'],['Fleet & Dealership','/fleet-dealership'],['Custom Integration','/solutions/custom-integration'],['Concept One','/concept-one']];
const company=[['About TTT','/about'],['Articles','/articles'],['Contact','/contact'],['FAQ','/faq'],['Request a Quote','/quote']];

export default function SiteFooter(){
  const year=new Date().getFullYear();
  return <footer className="site-footer production-footer"><div className="shell">
    <div className="footer-top"><BrandMark/><p>Automotive technology for Houston drivers and businesses: planned carefully, integrated properly and verified before handover.</p><Link className="button button--light" href="/quote">Request a Quote</Link></div>
    <div className="production-footer__grid">
      <div><h3>Services</h3>{services.map(([l,h])=><Link href={h} key={h}>{l}</Link>)}</div>
      <div><h3>Solutions</h3>{solutions.map(([l,h])=><Link href={h} key={h}>{l}</Link>)}</div>
      <div><h3>Company</h3>{company.map(([l,h])=><Link href={h} key={h}>{l}</Link>)}</div>
      <div><h3>Houston</h3><p>Serving vehicle owners, dealerships and fleets across Greater Houston.</p><Link href="/contact">Contact TTT →</Link></div>
    </div>
    <div className="footer-bottom"><span>© {year} Thompson Transportation Technologies LLC. All rights reserved.</span><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/accessibility">Accessibility</Link></div></div>
  </div></footer>;
}
