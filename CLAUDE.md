# viewpo.io

**Product**: Viewpo — preview deployment aggregator with viewport viewer
**Stack**: Astro v5, Tailwind CSS v4, TypeScript
**Deploy**: Cloudflare Pages (auto on push to main)
**URL**: https://viewpo.io (not yet live)

---

## Commands

```bash
cd viewpo.io/main
npm install              # Install deps
npm run dev              # Dev server (localhost:4321)
npm run build            # Build to dist/
```

---

## Brand — "Viewport Lens" Palette

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Primary | `#6366F1` | indigo-500 | Primary CTAs |
| Primary hover | `#4F46E5` | indigo-600 | Hover state |
| Secondary | `#F97316` | orange-500 | Warm accent, badges |
| Links | `#818CF8` | indigo-400 | Links, navigation |
| Success | `#10B981` | emerald-500 | Build success, active |
| Attention | `#FB923C` | orange-400 | Alerts |
| Background | `#FAFAFA` | gray-50 | Light mode bg |
| Dark bg | `#0F172A` | slate-900 | Dark mode bg |
| Text | `#1E293B` | slate-800 | Body text |
| Muted | `#F1F5F9` | slate-100 | Secondary bg |

**Typography**: Outfit (headings) + Inter (body)
**Rule**: Indigo for primary CTAs only. White text on coloured backgrounds.

---

## Key Paths

| Path | Description |
|------|-------------|
| `src/pages/index.astro` | Single-page homepage |
| `src/layouts/BaseLayout.astro` | Page layout with meta, JSON-LD |
| `src/components/` | All components |
| `src/styles/global.css` | Brand tokens and animations |
| `src/utils/constants.ts` | Device presets, pricing, FAQ data |
| `public/` | Static assets, robots.txt, _headers |
| `.github/workflows/` | CI and deploy workflows |
| `docs/viewpo-purpose.md` | Product purpose document |

---

## Status

- **Phase**: Pre-launch scaffold (no product screenshots yet)
- **Deferred**: Blog, docs, email signup, analytics, E2E tests
