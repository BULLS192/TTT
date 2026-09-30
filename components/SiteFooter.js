import Link from 'next/link';
import BrandMark from './BrandMark';

const services=[
  ['Window Tint','/services/window-tint'],['Audio','/services/audio'],['GPS Tracking','/services/gps-tracking'],['Kill Switches','/services/kill-switches'],['SignalTrace™','/services/signaltrace'],['Custom Fabrication','/services/custom-fabrication']
];
const company=[
  ['About TTT','/about'],['Our Work','/portfolio'],['FAQ','/faq'],['Fleet & Dealership Solutions','/fleet-dealership'],['Contact','/contact']
];

export default function SiteFooter(){
  const year=new Date().getFullYear();
  return <footer className="site-footer site-footer--refined"><div className="shell">
    <div className="footer-top"><BrandMark/><p>Automotive technology for Houston drivers and businesses. Window tint, audio, tracking, security, SignalTrace™ diagnostics and custom fabrication, planned carefully and verified before handover.</p></div>
    <div className="footer-grid">
      <div><h3>Services</h3>{services.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div>
      <div><h3>Company</h3>{company.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div>
      <div><h3>Get in touch</h3><Link href="/contact">Contact TTT</Link><Link href="/quote">Request a Quote</Link><span>Houston, Texas</span><span>Ask Tessa from any page</span></div>
    </div>
    <div className="footer-cta"><div><p className="eyebrow">Tell us what you have in mind.</p><h2>Start with your vehicle and what you want done.</h2></div><Link className="button button--light" href="/quote">Request a Quote</Link></div>
    <div className="footer-bottom"><span>© {year} Thompson Transportation Technologies. All rights reserved.</span><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/accessibility">Accessibility</Link></div></div>
  </div></footer>;
}