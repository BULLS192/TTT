import Link from 'next/link';
import BrandMark from './BrandMark';
const serviceLinks=[['Window Tint','/services/window-tint'],['Audio','/services/audio'],['GPS Tracking','/services/gps-tracking'],['Kill Switches','/services/kill-switches'],['SignalTrace™','/services/signaltrace'],['Custom Fabrication','/services/custom-fabrication']];
const companyLinks=[['About TTT','/about'],['FAQ','/faq'],['Fleet & Dealership Solutions','/fleet-dealership'],['Contact','/contact']];
export default function SiteFooter(){const year=new Date().getFullYear();return <footer className="site-footer production-footer"><div className="shell">
 <div className="footer-top"><BrandMark/><p>Automotive technology for Houston drivers and businesses. Window tint, audio, tracking, security, SignalTrace™ diagnostics and custom fabrication, planned carefully and verified before handover.</p><Link className="button button--light" href="/quote">Request a Quote</Link></div>
 <div className="production-footer__grid"><div><h3>Services</h3>{serviceLinks.map(([l,h])=><Link href={h} key={h}>{l}</Link>)}</div><div><h3>Company</h3>{companyLinks.map(([l,h])=><Link href={h} key={h}>{l}</Link>)}</div><div><h3>Start here</h3><Link href="/quote">Request a Quote</Link><Link href="/contact">Send a Message</Link><p className="small-note">Phone, text, address and hours will appear here once confirmed.</p></div></div>
 <div className="footer-bottom"><span>© {year} Thompson Transportation Technologies LLC. All rights reserved.</span><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/accessibility">Accessibility</Link></div></div>
 </div></footer>}
