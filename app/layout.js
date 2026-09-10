import './globals.css';
import './phase2.css';
import './refinement.css';
import './wave2.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: { default: 'TTT — Thompson Transportation Technologies', template: '%s | TTT' },
  description: 'Automotive technology consulting, integration and installation for vehicle owners, dealerships and fleets.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ttt-alpha-gules.vercel.app'),
  icons: { icon: '/brand/ttt-logo.svg', shortcut: '/brand/ttt-logo.svg' },
  openGraph: {
    title: 'TTT — Thompson Transportation Technologies',
    description: 'Automotive technology consulting, integration and installation for vehicle owners, dealerships and fleets.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
