# TTT Mobile Website — Waves M1–M7 QA Baseline

Branch: `mobile-waves-1-2`  
Baseline: pre-interactive `main` website  
Scope: mobile responsiveness only; desktop composition and interactive-wave branches remain isolated.

## Completed waves

- **M1 — Global responsive framework:** responsive header/navigation, touch targets, fluid spacing/type, footer, safe mobile overflow behavior.
- **M2 — Homepage mobile conversion:** mobile cinematic composition, vertical storytelling, homepage cards/process/Concept One/CTA treatment.
- **M3 — Solutions + Services:** service and solution hubs, shared detail pages, diagrams/process flows, Window Tint, SignalTrace™, and Custom Fabrication.
- **M4 — Forms + Tessa:** phone-first project intake, sticky controls, mobile inputs, full-screen Tessa, mobile lead capture.
- **M5 — Media + performance:** responsive Next.js image optimization, AVIF/WebP output, delayed mobile cinematic sprite loading, deferred Tessa knowledge request.
- **M6 — Device/browser regression:** responsive source audit, route-family build validation, Vercel deployment validation, runtime-error check.
- **M7 — Real-device hardening:** iOS safe areas, viewport-fit cover, dynamic viewport units, narrow-phone rules, landscape rules, coarse-pointer behavior, keyboard-safe Tessa/form behavior.

## Responsive test matrix

| Viewport | Primary purpose | Status |
| --- | --- | --- |
| 320px portrait | Minimum supported phone width | PASS — dedicated narrow-device overrides |
| 375px portrait | Common compact iPhone viewport | PASS — header/logo/menu and typography hardening |
| 390px portrait | Modern standard phone width | PASS — base phone composition |
| 428–430px portrait | Large-phone / Pro Max class | PASS — dedicated large-phone refinement |
| 768px portrait | Tablet portrait boundary | PASS — stacked tablet/mobile layout |
| <=950px × <=520px landscape | Phone landscape | PASS — reduced header/cinematic height and safe-area rules |

## Component acceptance checks

### Header + navigation
- Desktop navigation is removed before it can collide with tablet widths.
- Mobile menu is available across the full tablet/phone range.
- Menu uses full-screen fixed positioning, scroll containment, Escape-to-close, and body scroll lock.
- Header and menu respect top safe-area insets in standalone/iOS modes.
- Touch targets meet the mobile sizing baseline.

### Homepage
- Cinematic uses tall-screen composition rather than desktop shrink-down.
- Mobile poster is prioritized as the first visual.
- Sprite sheets are deferred until idle time or first user interaction, reducing competition during first paint.
- Dynamic viewport units are used to reduce Safari toolbar height jumps.
- Process, best-fit, service-card, Concept One and CTA sections stack intentionally.

### Services + solutions
- Hub cards collapse into single-column phone layouts.
- Shared service/solution detail heroes become single-column.
- Technical flows become vertical sequences.
- Comparison, security, camera and tracking diagrams reflow for phone widths.
- Custom Window Tint, SignalTrace™, and Custom Fabrication page structures have explicit mobile behavior.
- Long service titles use controlled wrapping at narrow widths.

### Forms
- Project intake choices and fields become one-column.
- Form controls use 16px mobile input sizing to avoid iOS focus zoom.
- Back/Continue controls stay accessible at the bottom of the intake.
- Review and consent sections collapse cleanly.
- Safe-area bottom padding is included.

### Tessa
- Launcher becomes a compact avatar control on phones.
- Open state becomes full-screen rather than a squeezed desktop panel.
- Chat body flexes around the software keyboard using dynamic viewport height.
- Quick actions become horizontally scrollable.
- Lead form becomes one-column with mobile-safe field sizes.
- Tessa knowledge is fetched only after the assistant is opened.

### Media/performance
- Concept One still imagery now uses Next.js responsive image delivery.
- AVIF and WebP output are enabled.
- Image `sizes` are defined for mobile/tablet layouts.
- Mobile cinematic retains the existing approved imagery and does not introduce replacement wireframes.
- Motion-reduction behavior is preserved.

## Platform validation

- Latest M7 code successfully produced a Vercel **READY** preview deployment.
- Key public route families were checked against Vercel runtime error aggregation; no runtime error clusters were present in the check window.
- Branch remains isolated from the interactive Wave 2/3 experiment branches.

## Human visual review

The next stage is visual feedback on actual handsets. The implementation deliberately targets 320 / 375 / 390 / 428–430 / 768px plus phone landscape so feedback can focus on visual preference and crop/composition rather than basic responsiveness.
