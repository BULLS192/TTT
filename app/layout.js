import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: { default: 'TTT — Thompson Transportation Technologies', template: '%s | TTT' },
  description: 'Automotive technology consulting, integration and installation for vehicle owners, dealerships and fleets.',
  metadataBase: new URL('https://ttt.vercel.app'),
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
