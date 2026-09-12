# TTT brand assets

This directory is the stable public asset surface for Thompson Transportation Technologies (TTT).

## Canonical assets

- `ttt-logo.svg` — approved TTT master web logo. This is the canonical website/logo asset and must not be redrawn, regenerated, simplified, recolored, or substituted without explicit approval.
- `ttt-app-icon.svg` — square derivative for PWA, bookmarks, app shortcuts, and contexts where the full wordmark cannot be used.
- `ttt-vehicle-badge.svg` — web/vector derivative aligned to the approved inverted-triangle TTT vehicle badge specification: chrome lettering/frame, black center, and TTT deep-blue illuminated inner border. The previously approved generated badge master remains the visual source of truth when that original binary asset is available.
- `cinematic-fallback.svg` — local matte-black Concept One fallback used when remote cinematic media cannot load or motion is reduced.

## Brand rules

The approved TTT identity contains the stylized coupe / TTT vehicle silhouette, the first integrated `T` in black, the second and third integrated `T` characters in deep blue, `THOMPSON` in black, and `TRANSPORTATION TECHNOLOGIES` in deep blue.

Application code should reference assets through `lib/assets.js` rather than embedding base64 artwork or scattering hard-coded paths. Stable filenames are intentional so a higher-resolution approved master can replace a derivative later without changing application code.
