# TTT — Thompson Transportation Technologies

Next.js foundation for the TTT Digital Platform.

## Current build

- Responsive public website
- TTT digital design system
- Cinematic homepage with resilient local fallback media
- Solutions, Services, Industries, Concept One, Projects, Technology, Resources, About and Contact
- Shop storefront shell
- Start-a-Project intake flow
- My TTT customer portal shell
- TTT OS team workspace shell

## Run locally

```bash
npm install
npm run dev
```

## Deployment

Designed for Vercel. The repository root is the Next.js project root.

Git deployment is connected to the Vercel `ttt` project; pushes to `main` are intended to trigger production builds.

## Asset system

Canonical asset references live in `lib/assets.js`.

- Approved website logo: `/public/brand/ttt-logo.svg`
- PWA/bookmark icon: `/public/brand/ttt-app-icon.svg`
- Vehicle badge web derivative: `/public/brand/ttt-vehicle-badge.svg`
- Local cinematic fallback: `/public/brand/cinematic-fallback.svg`
- Browser favicon: `app/icon.svg`
- iPhone home-screen icon: `app/apple-icon.js`
- Social sharing image: `app/opengraph-image.js`

Do not re-embed the canonical logo as base64 in application source. Keep brand/media paths centralized so approved masters can be replaced without touching presentation components.
