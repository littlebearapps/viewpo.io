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
| **Status** | Marketing site live — homepage + /teams/ + /creators/ |

---

## Commands

```bash
cd viewpo.io/main
npm install              # Install deps
npm run dev              # Dev server (localhost:4321)
npm run build            # Build to dist/
```

---

## Key Paths

| Path | Description |
|------|-------------|
| `src/pages/index.astro` | Homepage — hero, features, pricing, FAQ |
| `src/pages/teams.astro` | /teams/ landing page — team leads, agencies, PMs |
| `src/pages/creators.astro` | /creators/ landing page — vibe coders, AI builders |
| `src/layouts/BaseLayout.astro` | Page layout with meta, JSON-LD |
| `src/components/` | All components (Hero, ProblemHook, HowItWorks, etc.) |
| `src/styles/global.css` | Brand tokens and animations |
| `src/utils/constants.ts` | Device presets, pricing tiers, FAQ data |
| `public/` | Static assets, robots.txt, _headers |
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

**Typography**: Outfit (headings) + Inter (body)
**Rule**: Indigo for primary CTAs only. White text on coloured backgrounds.

---

## Product Context

Viewpo is a native iOS/macOS app that aggregates preview deployments from multiple providers (Cloudflare Pages, Vercel, Netlify, GitHub Pages) into one dashboard with a viewport viewer. See `docs/viewpo-purpose.md` for full product context.

### Target Audiences
1. **Seasoned Developer** — juggling multiple projects across providers, wants unified dashboard
2. **Vibe Coder / AI Builder** — uses Cursor, v0, Bolt, Lovable, Replit; deploys via provider but lacks device preview tools
3. **Non-Technical Reviewer** — designer, PM, client, stakeholder who receives preview links and needs to check how things look

### Pages
| Page | URL | Audience | Revenue Target |
|------|-----|----------|----------------|
| Homepage | `/` | All three segments | Awareness → Free tier |
| Teams | `/teams/` | Team leads, agencies, PMs, designers | Pro tier ($29/mo) |
| Creators | `/creators/` | Vibe coders, AI builders | Free → Starter ($9/mo) |

### Pricing
- **Free**: 3 projects, 1 provider, viewport viewer
- **Starter** ($9/mo): Unlimited projects, all providers, sharing
- **Pro** ($29/mo): Team workspaces, deploy comparison, API access

---

## Deployment

Deploy to CF Pages is automatic on push to `main` via GitHub Actions (`deploy-production.yml`).

**GitHub Actions Secrets** (set via `gh secret set`):
- `CLOUDFLARE_API_TOKEN` — from bws `cloudflare-api-token`
- `CLOUDFLARE_ACCOUNT_ID` — from bws `cloudflare-account-id`

**No preview deploys** — CI runs build check on PRs but doesn't deploy previews. Only production deploys on merge to main.

**CF Pages project**: `viewpo-io`

---

## Content Guidelines

Homepage and subpages follow the multi-audience content strategy defined in the `marketing-copy` skill:
- **Jargon avoidance**: "deploy" → "changes go live", "OAuth" → "secure sign-in", "WebView" → "real browser engine"
- **Readability**: Grade 6 headlines, Grade 8-10 body copy
- **Progressive disclosure**: Simple headline → specific subheading → detailed body
- **Banned patterns**: "seamless", "leverage", "robust" without detail (see `content-writing` rule)

---

## Deferred (Not Yet Implemented)

- Blog, docs, changelog pages
- Email signup / waitlist form
- Product screenshots (MVP UI not finalised)
- Plausible analytics (tracking attributes already in markup)
- Playwright E2E tests
- PR preview deploys (CI only runs build, no CF Pages preview)
