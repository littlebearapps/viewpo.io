# Viewpo — Purpose & Operating Principles

**Last Updated**: 2026-02-19

---

## What Viewpo Is

Viewpo is a single place to see all your preview deployments across providers, know instantly whether they succeeded, and view them at any screen resolution — from any device.

**Not:** A full browser, a design tool, a CI/CD pipeline, or a cross-browser testing platform.
**Is:** A deployment aggregation + responsive viewport viewer built for mobile-first visual verification of preview builds.

The core experience: you're on your iPhone walking the dog. You open Viewpo. You see that your latest push to `feature/new-landing` deployed successfully on Cloudflare Pages. You tap it. A viewport viewer opens showing you what that page looks like on a 27-inch desktop monitor — right there on your phone screen. You switch to the iPad view. Looks good. You switch to the phone view. The hero section is clipped. You pin that branch so you get notified when the next deploy lands.

No hunting for links. No guessing whether the build passed. No "I'll check it when I'm back at my desk."

---

## Foundational Context

- Nathan built this to scratch his own itch — checking preview deployments on his phone while walking the dog
- The critical technical insight: WKWebView (native browser engine) bypasses X-Frame-Options entirely, loading any website regardless of security headers. Web-based tools using iframes cannot do this
- The market gap: no tool combines deployment aggregation across providers + responsive viewport simulation + mobile-native experience. Competitors solve pieces but not the whole problem
- Starting as a solo developer product (Little Bear Apps), with a commercial trajectory toward teams and agencies
- Apple-first: SwiftUI shared across iPhone, iPad, Mac. Android/Windows via Tauri is a later expansion, not a near-term priority

---

## Core Value Propositions

1. **Find the right preview without hunting** — All providers in one dashboard, latest deployments surfaced automatically, build status visible at a glance
2. **See any resolution on any device** — A viewport viewer that renders the actual website (not a screenshot) at configurable device resolutions, regardless of what device you're holding
3. **Know when it's ready** — Pin branches, get notified when deploys succeed (or fail), stop refreshing dashboards manually
4. **Share easily** — Generate a link or QR code for a specific deployment or "latest for this branch" so teammates or clients can see it instantly

---

## Who It's For

| Persona | Pain | Core Feature |
|---------|------|-------------|
| **Solo developers** | Checking preview deploys on the go across multiple providers | Unified dashboard + push notifications |
| **Dev teams & tech leads** | Visual PR review blocked until someone's at a laptop | Viewport viewer + deep links from notifications |
| **Freelancers & agencies** | Managing client sites across different hosting providers (Vercel for Client A, Cloudflare for Client B, Netlify for Client C) | Multi-provider feed + share links for client approval |
| **QA testers & designers** | No mobile app exists for responsive viewport testing — all competitors are desktop-only | 6 presets + custom sizes + real CSS viewport injection |
| **iPad-first developers** | Safari's "Request Desktop Site" doesn't change CSS viewport — can't see real desktop layouts | True viewport simulation via meta tag injection |
| **Non-technical stakeholders** | Opening a preview URL on their phone shows mobile layout, not the desktop design they need to approve | Share links that open at the correct viewport preset |

---

## The Viewport Viewer

The key differentiator. Not just a list of deploy links — a viewer that loads the actual website in a native WebView and frames it at a chosen resolution.

Think of it as a viewfinder: the website is the scene, and you aim the viewfinder at the part you want to inspect. You're on a 6.7-inch iPhone screen, but looking through a window sized as a 27-inch desktop, an 11-inch iPad, or a small phone. Pan around to see different parts. Switch presets to check responsiveness.

**How it works**: Injects `<meta name="viewport" content="width=1920">` (target width, no initial-scale) via WKUserScript at document start. A MutationObserver prevents the page from overriding it. WebKit lays out at the injected width and shrink-to-fits the screen. CSS media queries, breakpoints, and responsive layouts respond to the simulated width, not the physical device width.

**What this means**: Real CSS viewport simulation. Not CSS zoom, not a screenshot, not a User Agent string change. Media queries fire at the target width.

**What this doesn't do**: This is WebKit rendering only. It does not simulate Blink (Chrome/Edge) or Gecko (Firefox). For cross-browser testing, tools like BrowserStack remain necessary. Hover and pointer media queries still reflect the touch device, not a desktop mouse.

---

## Explicit Anti-Goals

Viewpo must NOT:

- **Become a full browser or DevTools replacement** — It's a viewport viewer for visual verification, not a debugging environment. Don't add network inspectors, console panels, or element pickers
- **Chase pixel-perfect device emulation** — The value is "does my responsive layout work at this breakpoint," not "does this render identically to a specific iPhone model." Close enough is good enough
- **Attempt cross-browser testing** — WebKit only. Don't build Blink/Gecko rendering. BrowserStack exists for that. Acknowledge the limitation, don't try to solve it
- **Proxy or modify preview content** — WKWebView loads directly from the deployment URL. Never man-in-the-middle, rewrite, or cache page content server-side
- **Compete with Polypane on desktop features** — Polypane is excellent for desktop responsive development. Viewpo's advantage is mobile-first and deployment-aware. Don't replicate desktop-centric features (CSS debugging, accessibility auditing, element inspection)
- **Build features for every provider's edge cases** — Support the common deployment patterns well. Don't deep-integrate provider-specific features (Vercel's serverless function logs, Netlify's form handling, etc.)
- **Add complexity that slows down the core loop** — The goal is "notification → tap → see deploy → verify in 10 seconds." Every feature should make this faster or should not be added
- **Optimise engagement over usefulness** — No gamification, no streaks, no "you haven't opened Viewpo in 3 days" nudges. The app should be useful when needed and invisible when not

**When uncertain about scope: prefer doing fewer things well over more things adequately.**

---

## Commercial Goals

Viewpo is intended to generate revenue as a commercial product:

- **Target**: Several thousand dollars per month in recurring income
- **Model**: Freemium — free tier for solo use, paid tiers for teams and advanced features
- **Distribution**: App Store (iOS/iPadOS/macOS), expanding to Android/Windows later via Tauri
- **Growth path**: Start with the core viewer + deployment aggregation, expand features over time

This isn't a side project that stays free forever. It's a product with a commercial trajectory, even if modest initially.

Income is a downstream effect of building a tool that genuinely saves developers time and frustration.

---

## Long-Term Outcomes

1. **The default mobile tool for checking preview deployments** — When someone pushes code and wants to see the result on their phone, they open Viewpo
2. **A credible Little Bear Apps product** — Demonstrates ability to ship, support, and iterate on a commercial iOS app
3. **A platform for expansion** — Visual regression testing, commenting, and the MCP server (giving AI tools "eyes") are high-value features that build on the core deployment + viewport foundation

These are directional, not commitments. The product will evolve based on real usage data and user feedback.

---

## Feature Status

**Shipped (current state):**
- Unified dashboard across Cloudflare Pages, GitHub, Vercel, and Netlify
- Responsive viewport viewer with 6 presets + custom sizes + real CSS viewport injection
- Pin & watch branches with push notifications (Firebase Cloud Messaging)
- Share links (specific deployment or "latest for branch") with QR codes
- Team workspaces with Owner/Member/Viewer roles
- OAuth flows for GitHub, Vercel, Netlify + API token paste for all providers
- Integration health monitoring (active/error/revoked status per provider)
- Dark/light theme override, orientation toggle, pinch-to-zoom, screenshot capture
- Deep linking (`viewpo://preview`, `viewpo://s/{token}`, `viewpo://invite/{token}`)
- Firebase Analytics + Crashlytics observability

**Next (expanding value):**
- Visual regression testing — Auto-compare screenshots across viewports on each deploy. Competes with Percy ($399/mo) at a fraction of the cost
- Commenting/annotation — Pin feedback directly on preview pages
- MCP server — Give AI coding assistants "eyes" to see viewport previews, read human comments, verify responsive changes
- More providers — Railway, Render, DigitalOcean

---

## Guiding Principles

1. **Mobile-first** — The phone experience is primary, not an afterthought. Every feature must work well on a 6.1-inch screen before considering larger displays
2. **Speed to insight** — Minimise taps between "I wonder how that deploy looks" and actually seeing it. The target is under 10 seconds from notification to verified
3. **Multi-provider, not provider-locked** — The unified view is the value. No single provider can replicate this. Breadth across providers matters more than depth into any one provider
4. **Native quality** — SwiftUI, not a web wrapper. Feels like it belongs on the platform. Follow Apple HIG, support Dynamic Type, VoiceOver, dark mode
5. **Ship and iterate** — Prove the core value fast, expand features based on real usage. Don't speculate about what users want — ship, observe, adjust

### Decision Heuristics

When making product or technical decisions and the right choice isn't obvious:

- **Mobile experience over desktop** — If a feature works great on desktop but poorly on phone, rethink it
- **Speed over completeness** — A fast, focused tool beats a slow, comprehensive one
- **Fewer features done well over many features done okay** — Don't add a feature unless it's clearly useful. Three things that work perfectly beat ten things that work adequately
- **Multi-provider breadth over single-provider depth** — Supporting the common 80% across all providers is more valuable than the full 100% for one provider
- **Prefer restraint over misalignment** — When unsure whether a feature belongs, don't add it. Removing features is harder than not adding them

---

## Temporal Awareness

Viewpo is pre-GA. Priorities will shift as real users provide feedback. Early assumptions about what matters most may prove wrong. Weight recent user signals more than initial planning. The feature roadmap is directional, not fixed.
