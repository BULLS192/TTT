# TTT — Thompson Transportation Technologies

Next.js foundation for the TTT public website and future digital platform.

## Current build

- Responsive public marketing website
- Canonical TTT brand/logo and asset system
- Cinematic Concept One homepage with resilient local fallback media, scrub-optimized desktop/mobile encodes and mobile Safari handling
- Solutions, Services, Industries, Concept One, Projects, Technology, Resources, About and Contact
- TTT Journal / article library
- Start-a-Project intake flow
- Public inquiry flow
- Shop storefront shell (prelaunch / noindex)
- My TTT customer portal shell (prelaunch / noindex)
- TTT OS team workspace shell (prelaunch / noindex)
- Sitemap, robots controls and organization structured data
- Vercel Web Analytics and Speed Insights instrumentation
- Launch-aware lead delivery through Supabase and/or an automation webhook

## Run locally

```bash
npm install
npm run dev
```

## Production launch requirements

Before the public site is considered launch-ready:

1. Set `NEXT_PUBLIC_SITE_URL` to the final custom production domain.
2. Configure at least one server-side lead delivery route:
   - `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`, after applying `supabase/project_requests.sql` and `supabase/inquiries.sql`, and/or
   - `INQUIRY_WEBHOOK_URL` for the approved notification/automation endpoint.
3. Test both `/contact` and `/start` end-to-end with real submissions.
4. Keep Shop, My TTT and TTT OS out of public launch navigation until those systems are production-ready.
5. Verify desktop/mobile cinematic behavior, keyboard navigation, sitemap/robots output, analytics and production metadata.

## Deployment

Designed for Vercel. The repository root is the Next.js project root.

Git deployment is connected to the Vercel `ttt` project; pushes to `main` are intended to trigger production builds and non-main branches may create preview deployments.

## Asset system

Canonical asset references live in `lib/assets.js`.

- Approved website logo: `/public/brand/ttt-logo.svg`
- PWA/bookmark icon: `/public/brand/ttt-app-icon.svg`
- Vehicle badge web derivative: `/public/brand/ttt-vehicle-badge.svg`
- Local cinematic fallback: `/public/brand/cinematic-fallback.svg`
- Browser favicon: `app/icon.svg`
- iPhone home-screen icon: `app/apple-icon.js`
- Social sharing image: `app/opengraph-image.js`
- Optimized cinematic video sources: `lib/assets.js` → `lib/cinematicMedia.js`

Do not re-embed the canonical logo as base64 in application source. Keep brand/media paths centralized so approved masters can be replaced without touching presentation components.
