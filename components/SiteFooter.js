import Link from 'next/link';
import BrandMark from './BrandMark';

const groups = [
  ['TTT', [['About', '/about'], ['Concept One', '/concept-one'], ['Projects', '/projects'], ['Contact', '/contact'], ['Work With Us', '/work-with-us']]],
  ['Solutions', [['Premium Vehicle', '/solutions/premium-vehicle-experience'], ['Security', '/solutions/vehicle-security'], ['Connected Vehicle', '/solutions/connected-vehicle'], ['Fleet Intelligence', '/solutions/fleet-intelligence']]],
  ['Services', [['Audio', '/services/audio'], ['Window Tint', '/services/window-tint'], ['Tracking', '/services/tracking'], ['Cameras', '/services/cameras']]],
  ['Business', [['Dealerships', '/industries/dealerships'], ['Fleets', '/industries/fleets'], ['Commercial', '/industries/commercial-vehicles'], ['Start a Project', '/start']]],
  ['Resources', [['Articles', '/articles'], ['FAQ', '/resources/faq'], ['Technology', '/technology'], ['Brands & Partners', '/technology/brands'], ['Vehicle Compatibility', '/vehicles'], ['Shop', '/shop']]],
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer site-footer--refined">
      <div className="shell">
        <div className="footer-top"><BrandMark /><p>Automotive technology consulting, integration and installation for vehicle owners, dealerships and fleets.</p></div>
        <div className="footer-grid">{groups.map(([title, links]) => <div key={title}><h3>{title}</h3>{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>)}</div>
        <div className="footer-cta"><div><p className="eyebrow">Start here</p><h2>Tell us what you want your vehicle to do.</h2></div><Link className="button button--light" href="/start">Start a project →</Link></div>
        <div className="footer-bottom"><span>© {year} Thompson Transportation Technologies LLC. All Rights Reserved.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/accessibility">Accessibility</Link></div></div>
      </div>
    </footer>
  );
}
