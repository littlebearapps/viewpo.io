# viewpo.io

**Product**: Viewpo — preview deployment aggregator with viewport viewer
**Stack**: Astro v5, Tailwind CSS v4, TypeScript
**Deploy**: Cloudflare Pages (auto on push to main)
**URL**: https://viewpo.io

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

| Page | Path | Audience |
|------|------|----------|
| Homepage | `src/pages/index.astro` | All segments — features, pricing, FAQ, CTA |
| Teams | `src/pages/teams.astro` | Team leads, agencies, PMs, designers |
| Creators | `src/pages/creators.astro` | Vibe coders, AI builders (Cursor, v0, Bolt, Lovable, Replit) |
| Privacy | `src/pages/privacy.astro` | Legal — privacy policy |
| Terms | `src/pages/terms.astro` | Legal — terms of service |

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

## Key Paths

| Path | Description |
|------|-------------|
| `src/pages/` | All 5 pages (index, teams, creators, privacy, terms) |
| `src/layouts/BaseLayout.astro` | Shared layout — meta tags, JSON-LD schemas, fonts, analytics, theme persistence, View Transitions |
| `src/components/` | 15 components (Hero, FAQ, PricingTable, ViewportDemo, etc.) |
| `src/styles/global.css` | Brand tokens, animations, dark mode variant |
| `src/utils/constants.ts` | Device presets, pricing tiers, FAQ data |
| `public/robots.txt` | AI crawlers explicitly allowed (GPTBot, ClaudeBot, etc.) |
| `public/llms.txt` | AI-readable site index following llmstxt.org standard |
| `public/_headers` | Security headers + `/_astro/*` immutable cache |
| `public/og-default.png` | OG social share image (1200x630, 15KB) |
| `public/logo.png` | Logo for Organization schema (512x512) |
| `public/favicon.svg` | SVG favicon (indigo V mark) |
| `.github/workflows/ci.yml` | CI — build check on PRs |
| `.github/workflows/deploy-production.yml` | Deploy to CF Pages on push to main |
| `docs/viewpo-purpose.md` | Product purpose document |
| `docs/content/features-and-benefits.md` | Feature copy reference |

---

## Structured Data (JSON-LD)

All schemas in `BaseLayout.astro`:
- **Organization** — every page (name, logo, knowsAbout, parentOrganization)
- **WebPage** — every page (datePublished, dateModified — dynamic at build time)
- **SoftwareApplication** — homepage only (featureList, applicationSubCategory, operatingSystem array)
- **WebSite** — homepage only
- **FAQPage** — homepage (`FAQ.astro`), `/teams/`, `/creators/` (with dateModified)

---

## SEO / GEO

| Item | Status |
|------|--------|
| Google Search Console | Verified (DNS), sitemap submitted |
| Plausible Analytics | Live — async script, Plausible event tracking on CTAs and FAQ toggles |
| AI crawlers (robots.txt) | Explicitly allowed — GPTBot, ClaudeBot, Google-Extended, PerplexityBot, Applebot-Extended, CCBot, ChatGPT-User |
| llms.txt | Live — curated site index for AI engines |
| Cloudflare AI bot blocking | Disabled — managed robots.txt OFF, AI crawlers allowed |
| Sitemap | Auto-generated via `@astrojs/sitemap` at `/sitemap-index.xml` |
| Meta tags | Unique title + description per page, OG + Twitter cards |
| Canonical URLs | Set per page via `Astro.url` |

---

## Dark Mode

Class-based (`.dark` on `<html>`) with localStorage persistence.

- Toggle: `src/components/ThemeToggle.astro`
- Persistence: `BaseLayout.astro` inline script with `astro:after-swap` handler for View Transitions
- CSS: `@variant dark (&:where(.dark, .dark *))` in `global.css` (Tailwind v4)

---

## Deployment

Auto-deploy on push to `main` via GitHub Actions (`deploy-production.yml`).

**GitHub Actions Secrets** (from bws):
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

**No preview deploys** — CI runs build check on PRs but doesn't deploy previews.

**CF Pages project**: `viewpo-io`

---

## Content Guidelines

- **Jargon avoidance**: "deploy" → "changes go live", "OAuth" → "secure sign-in", "WebView" → "real browser engine"
- **Readability**: Grade 6 headlines, Grade 8-10 body copy
- **Progressive disclosure**: Simple headline → specific subheading → detailed body
- **Australian English**: realise, colour, organise (in content — US spelling OK in code)

---

## Pricing

- **Free**: 3 projects, 1 provider, viewport viewer
- **Starter** ($9/mo): Unlimited projects, all providers, sharing
- **Pro** ($29/mo): Team workspaces, deploy comparison, API access

---

## Deferred (Not Yet Implemented)

- Blog, docs, changelog pages
- Email signup / waitlist form (CTA buttons are placeholders)
- Product screenshots (MVP UI not finalised)
- Playwright E2E tests
- PR preview deploys
- Comparison pages (Viewpo vs Responsively, vs BrowserStack)
- Self-hosted Google Fonts (currently loaded via Google CDN)
- ABN number in Terms page (placeholder `[TBA]`)
