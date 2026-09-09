import Link from 'next/link';
import BrandMark from './BrandMark';

const groups = [
  ['TTT', [['About', '/about'], ['Concept One', '/concept-one'], ['Projects', '/projects'], ['Contact', '/contact']]],
  ['Solutions', [['Premium Vehicle', '/solutions/premium-vehicle-experience'], ['Security', '/solutions/vehicle-security'], ['Connected Vehicle', '/solutions/connected-vehicle'], ['Fleet Intelligence', '/solutions/fleet-intelligence']]],
  ['Services', [['Audio', '/services/audio'], ['Window Tint', '/services/window-tint'], ['Tracking', '/services/tracking'], ['Cameras', '/services/cameras']]],
  ['Business', [['Dealerships', '/industries/dealerships'], ['Fleets', '/industries/fleets'], ['Commercial', '/industries/commercial-vehicles'], ['Start a Project', '/start']]],
  ['Resources', [['Technology', '/technology'], ['Guides', '/resources'], ['Shop', '/shop'], ['My TTT', '/account']]],
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top"><BrandMark /><p>Automotive technology consulting, integration and installation for vehicle owners, dealerships and fleets.</p></div>
        <div className="footer-grid">{groups.map(([title, links]) => <div key={title}><h3>{title}</h3>{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>)}</div>
        <div className="footer-cta"><div><p className="eyebrow">Start here</p><h2>Tell us what you want your vehicle to do.</h2></div><Link className="button button--light" href="/start">Start a project →</Link></div>
        <div className="footer-bottom"><span>© 2026 Thompson Transportation Technologies</span><div><Link href="/contact">Privacy</Link><Link href="/contact">Terms</Link><Link href="/contact">Accessibility</Link></div></div>
      </div>
    </footer>
  );
}
