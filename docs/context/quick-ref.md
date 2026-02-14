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
| **Status** | Marketing site live — 5 pages, dark mode, Plausible analytics, SEO/GEO optimised |

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
| Homepage | `/` | `src/pages/index.astro` | All segments — hero, features, pricing, FAQ |
| Teams | `/teams/` | `src/pages/teams.astro` | Team leads, agencies, PMs, designers |
| Creators | `/creators/` | `src/pages/creators.astro` | Vibe coders, AI builders |
| Privacy | `/privacy/` | `src/pages/privacy.astro` | Legal — privacy policy |
| Terms | `/terms/` | `src/pages/terms.astro` | Legal — terms of service |

---

## Key Paths

| Path | Description |
|------|-------------|
| `src/pages/` | All 5 pages |
| `src/layouts/BaseLayout.astro` | Shared layout — meta tags, JSON-LD schemas, fonts, Plausible analytics, theme persistence, View Transitions |
| `src/components/` | 15 components (Hero, FAQ, PricingTable, ViewportDemo, Footer, Header, ThemeToggle, etc.) |
| `src/styles/global.css` | Brand tokens, animations, `@variant dark` for Tailwind v4 |
| `src/utils/constants.ts` | Device presets, pricing tiers, FAQ data |
| `src/scripts/scroll-reveal.ts` | IntersectionObserver scroll animation |
| `public/robots.txt` | AI crawlers explicitly allowed (GPTBot, ClaudeBot, etc.) |
| `public/llms.txt` | AI-readable site navigation index (llmstxt.org standard) |
| `public/_headers` | CF Pages headers — security + `/_astro/*` immutable cache |
| `public/og-default.png` | OG social share image (1200x630, 15KB) |
| `public/logo.png` | Logo for Organization schema (512x512) |
| `public/favicon.svg` / `favicon.png` | Favicons (indigo V mark) |
| `.github/workflows/ci.yml` | CI — build check on PRs and main |
| `.github/workflows/deploy-production.yml` | Deploy to CF Pages on push to main |
| `docs/viewpo-purpose.md` | Product purpose document |
| `docs/content/features-and-benefits.md` | Feature copy reference |

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
- **SoftwareApplication** — homepage only (featureList x6, applicationSubCategory, operatingSystem array)
- **WebSite** — homepage only
- **FAQPage** — homepage (`FAQ.astro`), `/teams/`, `/creators/` (all with dateModified)

---

## SEO / GEO

| Item | Status |
|------|--------|
| Google Search Console | Verified (DNS), sitemap submitted |
| Plausible Analytics | Live — async script in BaseLayout, event tracking on CTAs + FAQ toggles |
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

Viewpo is a native iOS/macOS app that aggregates preview deployments from multiple providers (Cloudflare Pages, Vercel, Netlify, GitHub Pages) into one dashboard with a viewport viewer. See `docs/viewpo-purpose.md` for full product context.

### Target Audiences
1. **Seasoned Developer** — juggling multiple projects across providers, wants unified dashboard
2. **Vibe Coder / AI Builder** — uses Cursor, v0, Bolt, Lovable, Replit; deploys via provider but lacks device preview tools
3. **Non-Technical Reviewer** — designer, PM, client, stakeholder who receives preview links and needs to check how things look

### Pricing
- **Free**: 3 projects, 1 provider, viewport viewer
- **Starter** ($9/mo): Unlimited projects, all providers, sharing
- **Pro** ($29/mo): Team workspaces, deploy comparison, API access

---

## Deployment

Auto-deploy on push to `main` via GitHub Actions (`deploy-production.yml`).

**GitHub Actions Secrets** (from bws via `gh secret set`):
- `CLOUDFLARE_API_TOKEN` — from bws `cloudflare-api-token`
- `CLOUDFLARE_ACCOUNT_ID` — from bws `cloudflare-account-id`

**No preview deploys** — CI runs build check on PRs but doesn't deploy previews. Only production deploys on merge to main.

**CF Pages project**: `viewpo-io`

---

## Content Guidelines

- **Jargon avoidance**: "deploy" → "changes go live", "OAuth" → "secure sign-in", "WebView" → "real browser engine"
- **Readability**: Grade 6 headlines, Grade 8-10 body copy
- **Progressive disclosure**: Simple headline → specific subheading → detailed body
- **Banned patterns**: "seamless", "leverage", "robust" without detail (see `content-writing` rule)
- **Australian English**: realise, colour, organise (in content — US spelling OK in code)

---

## Deferred (Not Yet Implemented)

- Blog, docs, changelog pages
- Email signup / waitlist form (CTA buttons are placeholders)
- Product screenshots (MVP UI not finalised)
- Playwright E2E tests
- PR preview deploys (CI only runs build, no CF Pages preview)
- Comparison pages (Viewpo vs Responsively, vs BrowserStack)
- Self-hosted Google Fonts (currently loaded via Google CDN)
- ABN number in Terms page (placeholder `[TBA]`)
- Dedicated OG images for /teams/ and /creators/ (currently use default)
- BreadcrumbList schema on subpages
- HowTo schema on homepage How It Works section
- hreflang tags
