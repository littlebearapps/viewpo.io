# Viewpo.io — Plausible Analytics Configuration

**Quick reference for the Plausible Analytics setup on viewpo.io.**

---

## Overview

| Item | Detail |
|------|--------|
| **Dashboard** | Plausible → viewpo.io |
| **Script** | Proxied through viewpo.io via Astro API routes (was: direct hashed script) |
| **Proxy routes** | `/js/script.js` (script) + `/api/event` (events) |
| **Tracking methods** | CSS classes (`plausible-event-name=...`) + JS calls (`window.plausible()`) |
| **Tagged Events** | Must be enabled in Enhanced Measurements |
| **Custom event goals** | 22 |
| **Pageview goals** | 5 (one per page) |
| **Scroll depth goal** | 1 (75% on `/`) |
| **Site-level custom properties** | 4 (`email_domain`, `preset`, `question`, `theme`) |
| **Funnels** | 3 |
| **Default goals** | 4 (Form Submission, File Download, Outbound Click, 404) |
| **Total goals** | 32 |
| **Revenue tracking** | OFF (pre-launch, no payments) |

---

## Custom Event Goals (22)

All goals are **Custom event** type. Custom properties toggle is **OFF** on all goals (properties are registered at site level instead). Revenue tracking is **OFF** on all goals.

### Conversion Events

| # | Event Name | Source File | Props Sent | What It Tracks |
|---|-----------|------------|------------|----------------|
| 1 | `Beta+Signup+Submit` | `SignupModal.astro:360` | `email_domain` | Beta signup form submission |
| 2 | `Launch+Notify+Submit` | `SignupModal.astro:360` | `email_domain` | Launch notification signup |
| 3 | `Contact+Submit` | `ContactModal.astro:212` | — | Contact form submission |

### Primary CTA Events

| # | Event Name | Source File | What It Tracks |
|---|-----------|------------|----------------|
| 4 | `CTA+Join+Beta` | `Hero.astro:41`, `index.astro:106` | "Join the Beta" hero + bottom CTA |
| 5 | `CTA+Notify+Launch` | `index.astro:112` | "Notify Me at Launch" bottom CTA |
| 6 | `CTA+Header+Join+Beta` | `Header.astro:40,74` | Header CTA (desktop + mobile) |
| 7 | `CTA+Platforms+Notify` | `PlatformAvailability.astro:73` | "Get notified" in platforms section |

### Page-Specific CTA Events

| # | Event Name | Source File | What It Tracks |
|---|-----------|------------|----------------|
| 8 | `Teams+CTA+Join+Beta` | `teams.astro:83` | Teams page hero CTA |
| 9 | `Teams+CTA+Join+Beta+Bottom` | `teams.astro:249` | Teams page bottom CTA |
| 10 | `Creators+CTA+Join+Beta` | `creators.astro:75` | Creators page hero CTA |
| 11 | `Creators+CTA+Free` | `creators.astro:265` | Creators page free tier CTA |
| 12 | `Creators+CTA+Join+Beta+Bottom` | `creators.astro:331` | Creators page bottom CTA |

### Pricing Events

| # | Event Name | Source File | What It Tracks |
|---|-----------|------------|----------------|
| 13 | `Pricing+Free` | `PricingTable.astro:45` | Free tier CTA click |
| 14 | `Pricing+Starter` | `PricingTable.astro:81` | Starter tier CTA click |
| 15 | `Pricing+Pro` | `PricingTable.astro:45` | Pro tier CTA click |

> Pricing events are dynamic: `plausible-event-name=Pricing+${tier.name}` where tier names come from `constants.ts`.

### Navigation Events

| # | Event Name | Source File | What It Tracks |
|---|-----------|------------|----------------|
| 16 | `Nav+Features` | `Header.astro:28,67` | Features nav link (desktop + mobile) |
| 17 | `Nav+Teams` | `Header.astro:28,67` | Teams nav link |
| 18 | `Nav+Creators` | `Header.astro:28,67` | Creators nav link |
| 19 | `Nav+Pricing` | `Header.astro:28,67` | Pricing nav link |

> Navigation events are dynamic: `plausible-event-name=Nav+${label}` where labels come from the `navLinks` array in Header.astro.

### Engagement Events

| # | Event Name | Source File | Props Sent | What It Tracks |
|---|-----------|------------|------------|----------------|
| 20 | `Viewport Demo Switch` | `Hero.astro:212`, `ViewportDemo.astro:215` | `preset` | User switches device preset in viewport demo |
| 21 | `FAQ Toggle` | `FAQ.astro:51` | `question` | User opens an FAQ accordion item |
| 22 | `Theme Toggle` | `ThemeToggle.astro:29` | `theme` | User toggles dark/light mode |

---

## Site-Level Custom Properties (4)

Registered in **Settings → Custom Properties** (not on individual goals). These appear as breakdowns in the dashboard when you click into a goal that sends them.

| Property Name | Used By Events | Example Values |
|---------------|----------------|----------------|
| `email_domain` | Beta+Signup+Submit, Launch+Notify+Submit | `gmail.com`, `outlook.com`, `yahoo.com` |
| `preset` | Viewport Demo Switch | `iPhone 16 Pro 393 × 852`, `iPad Pro 1032 × 1376`, `Desktop 2560 × 1440` |
| `question` | FAQ Toggle | FAQ question text (11 items from `constants.ts`) |
| `theme` | Theme Toggle | `dark`, `light` |

**How goal-level vs site-level properties differ:**
- **Goal-level** (toggle on goal creation) = **filter** — narrows what counts as a conversion to a specific value
- **Site-level** (Settings → Custom Properties) = **tracking** — shows breakdown of ALL values in dashboard

We use site-level for all properties because we want to see all values, not filter to specific ones.

---

## Default Goals (4)

These are enhanced measurements that should remain enabled:

| Goal | What It Tracks |
|------|----------------|
| Form Submission | Any `<form>` submit |
| File Download | Downloads (PDF, ZIP, etc.) |
| Outbound Click | Clicks to external sites |
| 404 | Page-not-found errors |

---

## Pageview Goals (5)

Created as **Pageview** type goals (not Custom event). Provide conversion rates, source attribution, and are required for funnel steps.

| # | Page Path | Display Name |
|---|-----------|-------------|
| 23 | `/` | Homepage |
| 24 | `/teams/` | Teams |
| 25 | `/creators/` | Creators |
| 26 | `/privacy/` | Privacy |
| 27 | `/terms/` | Terms |

> **Note**: Match trailing slash format to what Plausible shows in Top Pages.

---

## Scroll Depth Goal

| Goal | Config |
|------|--------|
| Scroll depth: 75% on `/` | Pageview goal, page path `/`, scroll depth toggle ON at 75% |

Tracks how many homepage visitors scroll past 75% — useful for seeing if people reach pricing and FAQ.

---

## Funnels (3)

### Funnel 1: Beta Signup

| Step | Goal |
|------|------|
| 1 | Homepage (pageview `/`) |
| 2 | `CTA+Join+Beta` |
| 3 | `Beta+Signup+Submit` |

### Funnel 2: Pricing to Beta

| Step | Goal |
|------|------|
| 1 | `Nav+Pricing` |
| 2 | `Pricing+Starter` |
| 3 | `CTA+Join+Beta` |

### Funnel 3: Launch Notify

| Step | Goal |
|------|------|
| 1 | `CTA+Notify+Launch` |
| 2 | `Launch+Notify+Submit` |

---

## How Tracking Works

### CSS Class Method (17 events)

Used for click tracking on links, buttons, and navigation:

```html
<button class="... plausible-event-name=CTA+Join+Beta">Join the Beta</button>
```

The `+` in event names maps to spaces in the Plausible dashboard display, but enter them with `+` signs when creating goals.

**Requires**: "Tagged Events" enabled in Enhanced Measurements.

### JavaScript Method (5 events)

Used for form submissions and interactive events that need custom properties:

```javascript
window.plausible('Beta+Signup+Submit', {
  props: { email_domain: email.split('@')[1] }
});
```

### Queue Stub

`BaseLayout.astro` includes a queue stub so `window.plausible()` calls never fail even if the script hasn't loaded yet:

```javascript
window.plausible = window.plausible || function() {
  (window.plausible.q = window.plausible.q || []).push(arguments)
}
```

---

## Self-Managed Proxy

As of 2026-02-16, Plausible is proxied through viewpo.io for ~85% adblocker bypass (vs ~40% with direct hashed script). This is critical for the developer audience, which has 50-70% adblocker usage.

### How It Works

| Component | Path | Source File | What It Does |
|-----------|------|------------|--------------|
| Script proxy | `/js/script.js` | `src/pages/js/script.js.ts` | Fetches `pa-XnY0rOrxQvpStF2a1FD0y.js` from plausible.io, serves with 24h cache |
| Event proxy | `/api/event` | `src/pages/api/event.ts` | Forwards event POSTs to plausible.io, strips cookies, preserves client IP |

### BaseLayout.astro Script Tag

```html
<script defer data-domain="viewpo.io" data-api="/api/event" src="/js/script.js"></script>
<script>
  window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};
</script>
```

- `data-domain="viewpo.io"` — tells the Plausible script which site to track (replaces `plausible.init()`)
- `data-api="/api/event"` — routes events through the proxy instead of direct to plausible.io
- `src="/js/script.js"` — loads the script from the proxy instead of plausible.io

### Why Proxy?

- **Developer audience**: 50-70% adblocker usage — highest of any demographic
- **Domain blocking**: EasyPrivacy and similar blocklists block `plausible.io` domain, regardless of hashed filename
- **First-party requests**: All analytics requests come from viewpo.io, invisible to domain-based blockers
- **IP anonymisation**: CF Worker IP reaches Plausible, not the user's direct IP
- **Privacy-first**: Plausible collects no PII, uses no cookies — proxy doesn't enable invasive tracking

### Naming Rules

Proxy paths use generic names to avoid adblocker pattern matching:
- `/js/script.js` (not `/analytics/plausible.js`)
- `/api/event` (not `/tracking/event`)
- Never use `plausible`, `analytics`, `tracking`, `stats` in proxy paths

---

## Key Notes

- Events sent without matching goals ARE collected by Plausible — creating the goal makes them visible retroactively
- Custom events count towards the monthly pageview quota for billing
- The Plausible script is proxied through viewpo.io — original hashed filename: `pa-XnY0rOrxQvpStF2a1FD0y.js`
- SignupModal event names are dynamic via `config.plausibleEvent` — mode `beta` sends `Beta+Signup+Submit`, mode `notify` sends `Launch+Notify+Submit`
- PricingTable and Header events are dynamic via template literals (`Pricing+${tier.name}`, `Nav+${label}`)

---

## Configuration Status

All dashboard configuration is complete as of 2026-02-16:
- ✅ 22 custom event goals created
- ✅ 5 pageview goals created
- ✅ 1 scroll depth goal (75% on `/`)
- ✅ 4 site-level custom properties registered
- ✅ 3 funnels created
- ✅ 4 default goals kept
- ✅ Tagged Events enhanced measurement enabled
- ✅ Self-managed proxy via Astro API routes
- ✅ GSC integration activated
- ✅ Weekly email reports enabled
- ⏳ Property breakdowns — will populate once real traffic sends events with props
- ⏳ Stats API key — create and store in BWS when needed

---

**Last Updated**: 2026-02-16
