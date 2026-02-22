# viewpo.io Quick Reference

**Read this when working on the viewpo.io website.**

---

## Overview

| Item | Detail |
|------|--------|
| **Repo** | `github.com/littlebearapps/viewpo.io` |
| **Stack** | Astro v5, Node 22, Tailwind CSS v4, TypeScript |
| **Deploy** | Cloudflare Pages (auto on push to main) |
| **URL** | https://viewpo.io |
| **Alt Domains** | viewpo.app, viewpo.dev (both redirect to viewpo.io) |
| **CF Pages Project** | `viewpo-io` |
| **CF Zone** | `840ca9d145596b47b9868868e4cd7b81` |
| **Status** | Marketing site live — 30+ pages (incl. 13 use case detail pages, features, pricing, beta programme), dark mode, Plausible analytics, SEO/GEO optimised, Trello-powered roadmap with D1 voting, 43 graphics |

---

## Commands

```bash
cd viewpo.io/main
npm install              # Install deps
npm run dev              # Dev server (localhost:4321)
npm run build            # Build to dist/
```

---

## Pages

| Page | URL | File | Audience |
|------|-----|------|----------|
| Homepage | `/` | `src/pages/index.astro` | All segments — hero, features, pricing, FAQ, CTA |
| Teams | `/teams/` | `src/pages/teams.astro` | Team leads, agencies, PMs, designers |
| Creators | `/creators/` | `src/pages/creators.astro` | Vibe coders, AI builders (Cursor, v0, Bolt, Lovable, Replit) |
| Use Cases Index | `/use-cases/` | `src/pages/use-cases/index.astro` | All segments — persona + situation use case overview |
| Use Case Detail (x13) | `/use-cases/[slug]/` | `src/pages/use-cases/[slug].astro` | Per-audience deep dives (7 personas, 6 situations) |
| Roadmap | `/roadmap/` | `src/pages/roadmap.astro` | SSR — Trello-powered roadmap with D1 voting + feedback form |
| Help Centre | `/help/` | `src/pages/help/index.astro` | Help hub |
| Help Pages | `/help/[...slug]/` | `src/pages/help/[...slug].astro` | Getting started, FAQ, contact |
| Confirmed | `/confirmed/` | `src/pages/confirmed.astro` | Post-email-confirmation landing page |
| Preferences | `/preferences/` | `src/pages/preferences.astro` | Email preferences / unsubscribe |
| Privacy | `/privacy/` | `src/pages/privacy.astro` | Legal — privacy policy (ACL, GDPR, APP-compliant) |
| Features | `/features/` | `src/pages/features.astro` | All — detailed features with grouped layout and competitor comparison |
| Pricing | `/pricing/` | `src/pages/pricing.astro` | All — tier cards, feature comparison table, pricing FAQ |
| Beta Programme | `/beta/` | `src/pages/beta.astro` | Prospective testers — curated beta application form |
| EULA | `/eula/` | `src/pages/eula.astro` | Legal — end user licence agreement |
| Terms | `/terms/` | `src/pages/terms.astro` | Legal — terms of service (ACL-compliant, Lemon Squeezy MoR) |

---

## Key Paths

| Path | Description |
|------|-------------|
| `src/pages/` | 15+ pages (index, features, pricing, beta, teams, creators, use-cases/index, use-cases/[slug], roadmap, help, confirmed, preferences, privacy, terms, eula) |
| `src/pages/use-cases/` | Use case index + dynamic [slug] page rendering 13 use cases from data |
| `src/data/use-cases.ts` | 13 use case definitions (7 personas, 6 situations) with full content, hero images, OG images |
| `src/content/docs/help/` | Starlight help content (getting-started, faq, contact) |
| `src/content.config.ts` | Content collection config for Starlight docs |
| `src/styles/starlight-custom.css` | Starlight brand overrides (indigo accent, Outfit/Inter fonts, slate grays) |
| `src/layouts/BaseLayout.astro` | Shared layout — meta tags, JSON-LD schemas, fonts, Plausible proxy + `plausible.init()`, Turnstile script, theme persistence, View Transitions, gclid capture (dormant) |
| `src/pages/js/script.js.ts` | Plausible script proxy (Astro API route, `prerender = false`) |
| `src/pages/api/event.ts` | Plausible event proxy (Astro API route, `prerender = false`) |
| `src/pages/api/vote.ts` | Roadmap vote API (SSR, D1 + SHA-256 fingerprint dedup) |
| `src/pages/api/feedback.ts` | Feedback form API (SSR, Turnstile + Trello card creation) |
| `src/lib/roadmap/` | Roadmap library — `types.ts`, `adapter.ts` (Trello), `cache.ts` (CF Cache SWR), `mock.ts` |
| `src/components/` | 30 top-level components + 9 use-case sub-components |
| `src/components/use-cases/` | UseCaseHeroVisual, MiniDeviceMockup, CharacterCard, StatCallout, PullQuote, LimitationsCard, AnimatedTimeline, SectionDivider, DevicePlaceholder |
| `src/styles/global.css` | Brand tokens, animations, `@variant dark` for Tailwind v4 |
| `src/utils/constants.ts` | API base URL (email.viewpo.io), Turnstile site key, feedback categories, 6 device presets, 17-device library, pricing tiers (Free/Starter/Pro), FAQ data (13 items), homepage FAQ selection, `FEATURES_DATA` (6 features with bullets/groups), `PRICING_COMPARISON` (20 comparison rows), `PRICING_FAQ_ITEMS` (7 pricing FAQs), `BETA_FAQ_ITEMS` (7 beta FAQs) |
| `public/graphics/` | All site graphics — hero phone screens (4), use case heroes (13), bento features (6), mini mockups (4), OG images (16) |
| `public/templates/` | HTML/CSS graphic templates — parameterised via URL hash, used to generate screenshots |
| `wrangler.toml` | D1 binding (`DB` → `viewpo-roadmap`) for roadmap voting |
| `migrations/0001_create_votes.sql` | D1 schema — `votes` + `voter_fingerprints` tables |
| `src/scripts/scroll-reveal.ts` | IntersectionObserver scroll animation |
| `public/robots.txt` | AI crawlers explicitly allowed (GPTBot, ClaudeBot, etc.) |
| `public/llms.txt` | AI-readable site navigation index (llmstxt.org standard) |
| `public/_headers` | CF Pages headers — security + `/_astro/*` immutable cache |
| `public/og-default.png` | OG social share image (1200x630, 15KB) |
| `public/logo.png` | Logo for Organization schema (512x512) |
| `public/favicon.svg` / `favicon.png` | Favicons (purple Vi mark) |
| `public/.well-known/microsoft-identity-association.json` | Microsoft domain verification for Entra ID OAuth — DO NOT DELETE (see Domain Verification section below) |
| `.github/workflows/ci.yml` | CI — build check on PRs and main |
| `.github/workflows/deploy-production.yml` | Deploy to CF Pages on push to main |
| `docs/viewpo-purpose.md` | Product purpose document |
| `docs/features-and-benefits.md` | Feature details and benefits reference |
| `docs/use-cases.md` | Persona and situational use cases |
| `docs/context/plausible-analytics.md` | Full Plausible setup — 32 goals, proxy config, funnels, properties |

---

## Brand — "Viewport Lens" Palette

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Primary | `#6366F1` | indigo-500 | Primary CTAs |
| Primary hover | `#4F46E5` | indigo-600 | Hover state |
| Secondary | `#F97316` | orange-500 | Warm accent, deploy badges |
| Links | `#818CF8` | indigo-400 | Links, navigation |
| Success | `#10B981` | emerald-500 | Build success, active |
| Attention | `#FB923C` | orange-400 | Alerts, notifications |
| Background | `#FAFAFA` | gray-50 | Light mode bg |
| Dark bg | `#0F172A` | slate-900 | Dark mode bg |
| Text | `#1E293B` | slate-800 | Body text |
| Muted | `#F1F5F9` | slate-100 | Secondary bg |

**Typography**: Outfit (headings) + Inter (body) — loaded via Google Fonts `<link>` in BaseLayout
**Rule**: Indigo for primary CTAs only. White text on coloured backgrounds.

---

## Structured Data (JSON-LD)

All schemas in `BaseLayout.astro`:
- **Organization** — every page (name, logo, knowsAbout, parentOrganization: Little Bear Apps)
- **WebPage** — every page (datePublished, dateModified — dynamic at build time)
- **SoftwareApplication** — homepage + `/features/` (featureList x6, applicationSubCategory, operatingSystem array)
- **WebSite** — homepage only
- **FAQPage** — homepage (`FAQ.astro`), `/teams/`, `/creators/`, `/roadmap/`, `/pricing/` (pricing FAQs), `/beta/` (beta FAQs), each use case detail page (all with dateModified)

---

## SEO / GEO

| Item | Status |
|------|--------|
| Google Search Console | Verified (DNS), sitemap submitted |
| Plausible Analytics | Live — self-managed proxy via Astro API routes (`/js/script.js` + `/api/event/`), 32 goals, 3 funnels. See `docs/context/plausible-analytics.md` |
| AI crawlers (robots.txt) | Explicitly allowed — GPTBot, ClaudeBot, Google-Extended, PerplexityBot, Applebot-Extended, CCBot, ChatGPT-User |
| llms.txt | Live at `/llms.txt` — curated site index for AI engines |
| CF AI bot blocking | Disabled — managed robots.txt OFF, all AI crawlers set to "Allow" in CF Dashboard |
| Sitemap | Auto-generated via `@astrojs/sitemap` at `/sitemap-index.xml` |
| Meta tags | Unique title + description per page, OG + Twitter cards |
| Canonical URLs | Set per page via `Astro.url` |
| Content signals | Conversational headings, FAQ sections, comparison content, definition-first paragraphs |

---

## Dark Mode

Class-based (`.dark` on `<html>`) with localStorage persistence.

- **Toggle**: `src/components/ThemeToggle.astro`
- **Persistence**: `BaseLayout.astro` inline script with `astro:after-swap` handler for View Transitions
- **CSS**: `@variant dark (&:where(.dark, .dark *))` in `global.css` (Tailwind v4 class-based dark mode)
- **Key**: All pages use dark mode tokens consistently — backgrounds, text, cards, borders

---

## Product Context

Viewpo is a native iOS/macOS app that aggregates preview deployments from multiple providers (Cloudflare Pages, Vercel, Netlify, GitHub) into one dashboard with a viewport viewer. 6 presets, 17-device library, and custom sizes. See `docs/viewpo-purpose.md` for full product context and `docs/features-and-benefits.md` for feature details.

### Target Audiences
1. **Seasoned Developer** — juggling multiple projects across providers, wants unified dashboard + push notifications
2. **Vibe Coder / AI Builder** — uses Cursor, v0, Bolt, Lovable, Replit; deploys via provider but lacks device preview tools
3. **Non-Technical Reviewer** — designer, PM, client, stakeholder who receives preview links and needs to check how things look
4. **Agency Juggler** — manages multiple client projects across different providers, needs share links for client sign-off
5. **Team Lead** — needs team workspaces with role-based access (Owner/Member/Viewer)

### Pricing
- **Free** ($0): Up to 3 projects, 1 provider connection, viewport viewer (6 presets), build status notifications, pin 1 branch
- **Starter** ($9/mo): Unlimited projects, all provider connections, branch pinning & notifications, share links & QR codes, custom viewport sizes, 17-device library
- **Pro** ($29/mo): Everything in Starter + team workspaces (up to 10 members), role-based access, deploy comparison view, priority support, API access
- **Payment**: Lemon Squeezy (Merchant of Record) — handles tax/VAT/GST, refunds, chargebacks
- **Currency**: USD base. "Prices exclude tax" disclosure on pricing page. Lemon Squeezy handles currency conversion

---

## Domain Verification

### Microsoft Entra ID (OAuth)

The Viewpo app uses Microsoft OAuth for user login (Microsoft account sign-in). Microsoft requires domain verification via a `.well-known` file:

- **File**: `public/.well-known/microsoft-identity-association.json`
- **URL**: `https://viewpo.io/.well-known/microsoft-identity-association.json`
- **App ID**: `8d0f3b24-9b66-4f9a-82d5-a9244ac1cdc3`
- **Purpose**: Proves viewpo.io ownership to Microsoft Entra ID so the OAuth consent screen shows a verified publisher

**DO NOT DELETE this file.** Removing it will break Microsoft OAuth domain verification and may cause the app's Microsoft login to show "unverified publisher" warnings to users.

---

## Roadmap & Feedback System

Trello-powered public roadmap at `/roadmap/` with anonymous voting and a feedback form.

| Component | Detail |
|-----------|--------|
| **Data source** | Trello board `69942bf614bc8d8dacf69f52` |
| **Lists** | Ideas (hidden), Planned, In Progress, Testing, Shipped |
| **Voting** | D1 database `viewpo-roadmap` (`204cba78-763c-43f6-a525-f2ab918f0f5b`), SHA-256 fingerprint dedup |
| **Feedback** | Turnstile-protected form → creates Trello card in Ideas list |
| **Caching** | CF Cache API, stale-while-revalidate (10min fresh, 1hr stale) |
| **Bot protection** | Cloudflare Turnstile (site key in constants.ts) + honeypot field |
| **Labels** | Feature, Enhancement, Bug Fix, Integration, UI/UX, Other |

**CF Pages Secrets** (set via `wrangler pages secret put`):
- `TRELLO_API_KEY`, `TRELLO_API_TOKEN`, `TRELLO_BOARD_ID`, `TRELLO_IDEAS_LIST_ID`, `TURNSTILE_SECRET_KEY`

**Turnstile allowed domains**: `viewpo.io`, `www.viewpo.io`, `viewpo-io.pages.dev`

---

## Deployment

Auto-deploy on push to `main` via GitHub Actions (`deploy-production.yml`).

**GitHub Actions Secrets** (from bws via `gh secret set`):
- `CLOUDFLARE_API_TOKEN` — from bws `cloudflare-api-token`
- `CLOUDFLARE_ACCOUNT_ID` — from bws `cloudflare-account-id`

**CF Pages Secrets** (from bws via `wrangler pages secret put`):
- `TRELLO_API_KEY`, `TRELLO_API_TOKEN`, `TRELLO_BOARD_ID`, `TRELLO_IDEAS_LIST_ID`, `TURNSTILE_SECRET_KEY`

**No preview deploys** — CI runs build check on PRs but doesn't deploy previews. Manual preview via `wrangler pages deploy dist/ --project-name viewpo-io --branch <branch-name>`.

**CF Pages project**: `viewpo-io`

---

## Content Guidelines

- **Jargon avoidance**: "deploy" → "changes go live", "OAuth" → "secure sign-in", "WebView" → "real browser engine"
- **Readability**: Grade 6 headlines, Grade 8-10 body copy
- **Progressive disclosure**: Simple headline → specific subheading → detailed body
- **Banned patterns**: "seamless", "leverage", "robust" without detail (see `content-writing` rule)
- **Australian English**: realise, colour, organise (in content — US spelling OK in code)

---

## Email Signup & Confirmation Flow

SignupModal and ContactModal both POST to `email.viewpo.io`. The full email confirmation flow:

1. User signs up via SignupModal → POST to Platform API
2. Platform API sends confirmation email with link to `email.viewpo.io/api/confirm-email?token=xxx`
3. Platform API confirms the email, then redirects to `viewpo.io/confirmed`
4. User sees the `/confirmed/` landing page

**Error handling**: SignupModal handles both `data.errors` (plural array from validation) and `data.error` (singular string).

**Ad click tracking (dormant)**: BaseLayout captures `gclid` parameter from URL into `sessionStorage`. SignupModal includes gclid in the form POST body if present. This is for future Google Ads Offline Conversion Import (OCI) — the code is a no-op until Google Ads campaigns are running and the Platform API is updated to store the gclid. Privacy page discloses ad measurement. Trello card: https://trello.com/c/Uy1PTo1E

---

## Graphics & Figma

43 graphics across 6 categories, generated from parameterised HTML/CSS templates in `public/templates/`.

| Category | Count | Location |
|----------|-------|----------|
| Hero phone screens | 4 | `public/graphics/hero/` |
| Use case heroes | 13 | `public/graphics/use-cases/hero-*.png` |
| Bento feature cards | 6 | `public/graphics/features/` |
| Mini mockups | 4 | `public/graphics/use-cases/mini-*.png` |
| OG images (per-page) | 16 | `public/graphics/og/` |

**Figma file**: https://www.figma.com/design/3eiSLxMkmfVAH4keyMMicr (all OG images captured)

**Graphic generation workflow**: Edit HTML template → serve via `python3 -m http.server` → screenshot via chrome-devtools → optimise with `pngquant` → optionally push to Figma via MCP

---

## Deferred (Not Yet Implemented)

- Blog, changelog pages
- Playwright E2E tests
- Comparison pages (Viewpo vs Responsively, vs BrowserStack)
- Self-hosted Google Fonts (currently loaded via Google CDN)
- Register "Viewpo" as additional business name on ABN via ASIC
- Dedicated OG images for /teams/, /creators/, /features/, /pricing/, /beta/ (currently use default)
- BreadcrumbList schema on subpages
- HowTo schema on homepage How It Works section
- hreflang tags
- Roadmap vote rate limiting (currently dedup only, no rate limit)
