import './globals.css';
import './phase2.css';
import './refinement.css';
import './wave2.css';
import './logo-fix.css';
import './logo-polish.css';
import './editorial.css';
import './visuals.css';
import './premium.css';
import './cinematic.css';
import './cinematic-mobile.css';
import './launch-hardening.css';
import './agency-pass.css';
import './home-refinement.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import SiteTelemetry from '../components/SiteTelemetry';
import { organizationSchema, siteDescription, siteName, siteUrl } from '../lib/siteConfig';

export const metadata = {
  applicationName: 'TTT',
  title: { default: `TTT — ${siteName}`, template: '%s | TTT' },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  appleWebApp: {
    capable: true,
    title: 'TTT',
    statusBarStyle: 'default',
  },
  openGraph: {
    title: `TTT — ${siteName}`,
    description: siteDescription,
    url: siteUrl,
    type: 'website',
    siteName,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `TTT — ${siteName}`,
    description: siteDescription,
  },
};

export const viewport = { themeColor: '#0d0f14' };

export default function RootLayout({ children }) {
  return <html lang="en"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}} />
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <SiteHeader />
    <div id="main-content">{children}</div>
    <SiteFooter />
    <SiteTelemetry />
  </body></html>;
}
