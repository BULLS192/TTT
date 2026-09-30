import Link from 'next/link';
import BrandMark from './BrandMark';

export default function SiteFooter(){
 const year=new Date().getFullYear();
 return <footer className="site-footer"><div className="shell">
   <div className="footer-top"><BrandMark/><p>Houston automotive technology: window tint, audio, GPS tracking, kill switches, SignalTrace™ diagnostics and custom fabrication. Planned and verified.</p></div>
   <div className="footer-grid">
     <div><h3>Services</h3><Link href="/services/window-tint">Window Tint</Link><Link href="/services/audio">Audio</Link><Link href="/services/gps-tracking">GPS Tracking</Link><Link href="/services/kill-switches">Kill Switches</Link><Link href="/services/signaltrace">SignalTrace™</Link><Link href="/services/custom-fabrication">Custom Fabrication</Link></div>
     <div><h3>TTT</h3><Link href="/about">About</Link><Link href="/portfolio">Our Work</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div>
     <div><h3>Business</h3><Link href="/fleet-dealership">Fleet & Dealership Solutions</Link><Link href="/quote?service=fleet">Business Inquiry</Link></div>
     <div><h3>Start</h3><Link href="/quote">Request a Quote</Link><Link href="/services/signaltrace">SignalTrace Intake</Link></div>
   </div>
   <div className="footer-cta"><div><p className="eyebrow">Start with the vehicle</p><h2>Tell us what you want done or what is going wrong.</h2></div><Link className="button button--light" href="/quote">Request a Quote →</Link></div>
   <div className="footer-bottom"><span>© {year} Thompson Transportation Technologies LLC. All Rights Reserved.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/accessibility">Accessibility</Link></div></div>
 </div></footer>
}
