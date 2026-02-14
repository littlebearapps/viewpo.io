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
| **Status** | Pre-launch scaffold |

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
| `src/pages/index.astro` | Single-page homepage |
| `src/layouts/BaseLayout.astro` | Page layout with meta, JSON-LD |
| `src/components/` | All components |
| `src/styles/global.css` | Brand tokens and animations |
| `src/utils/constants.ts` | Device presets, pricing tiers, FAQ data |
| `public/` | Static assets, robots.txt, _headers |
| `.github/workflows/` | CI and deploy workflows |
| `docs/viewpo-purpose.md` | Product purpose document |

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
1. **Solo developers** — juggling multiple projects across providers
2. **Small teams** — devs, designers, stakeholders reviewing deploys
3. **Agencies** — managing client sites across hosting providers

### Pricing
- **Free**: 3 projects, 1 provider, viewport viewer
- **Starter** ($9/mo): Unlimited projects, all providers, sharing
- **Pro** ($29/mo): Team workspaces, deploy comparison, API access

---

## Deferred (Not Yet Implemented)

- Blog, docs, changelog pages
- Email signup / waitlist form
- Product screenshots (MVP UI not finalised)
- Analytics (Plausible — add once live)
- Playwright E2E tests
