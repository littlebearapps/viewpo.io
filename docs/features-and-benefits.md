# Viewpo — Features & Benefits

**Last Reviewed**: 14/02/2026

---

## Core Value Proposition

Viewpo is the only app that lets you preview your website at **any screen resolution**, from **any device** — combined with a unified dashboard for all your deployment providers. No more hunting for preview links. No more "I'll check it when I'm back at my desk."

---

## Features & Benefits (Priority Order)

### 1. Responsive Viewport Viewer (Key Differentiator)

| Feature | Benefit |
|---------|---------|
| View any screen resolution on any device | Check the desktop layout on your iPhone during your morning walk — no need to wait until you're at your desk |
| Native WebView rendering (not screenshots or iframes) | See the actual live site, interact with it, scroll through it — works with every website, even those that block iframes |
| Device presets (iPhone, iPad, MacBook, Desktop 27") | Instantly switch between common viewports to check responsiveness |
| Custom viewport sizes | Test any resolution, not just presets — useful for unusual screen sizes or specific breakpoints |
| Pan and scroll within the viewport | Navigate around a desktop-sized layout on a small phone screen, like a viewfinder |

**Why it matters**: Every other deployment tool shows you the preview at whatever screen size you're currently on. Viewpo lets you see what the site looks like at *any* resolution, from *any* device. That's the difference between "I'll check it later" and "I can check it right now."

---

### 2. Instant Preview Notifications

| Feature | Benefit |
|---------|---------|
| Real-time deploy status (success, failure, in progress) | Know immediately whether a build passed — no more refreshing provider dashboards |
| Push notifications on deploy events | Get alerted on your phone when a preview is ready or when a push to production lands |
| Branch pinning | Pin the branches you care about and ignore the noise |
| Build failure details | See why a build failed at a glance, saving the trip to the provider dashboard entirely |

**Why it matters**: Preview links are only useful if you know they exist. Viewpo tells you when a deploy lands and whether it worked, so you can review it the moment it's ready.

---

### 3. Seamless OAuth Connection

| Feature | Benefit |
|---------|---------|
| OAuth sign-in for all providers | No API keys, no tokens, no configuration files — just sign in and authorise |
| Automatic project discovery | Once connected, Viewpo finds all your projects and branches automatically |
| Multi-provider in one app | Connect Cloudflare Pages, GitHub Pages, Vercel, and Netlify from a single place |
| Secure, revocable access | Standard OAuth means you can revoke Viewpo's access at any time from your provider settings |

**Why it matters**: Most developer tools require API keys, webhook configuration, or CLI setup. Viewpo works the moment you sign in — you connect your account and you're off. That's it.

---

### 4. Team Collaboration (Starter & Pro Tiers)

| Feature | Benefit |
|---------|---------|
| Shareable preview links | Generate a link for any deployment and send it to a team member, client, or stakeholder — they don't need provider dashboard access |
| QR codes for deployments | Share a QR code in a meeting or Slack channel for instant mobile preview access |
| "Latest for this branch" links | Share a link that always shows the newest deployment on a branch, not a stale snapshot |
| Team workspaces (Pro) | Organise projects by team or client with shared access and roles |
| Feedback on previews (Pro) | Team members can provide feedback on the look and feel directly within the preview context |

**Why it matters**: Reviewing deploys is often a team activity — designers, stakeholders, and clients need to see previews too. Viewpo makes sharing instant and doesn't require anyone to have provider credentials.

---

### 5. Multi-Provider Dashboard

| Feature | Benefit |
|---------|---------|
| Unified view across Cloudflare Pages, GitHub Pages, Vercel, Netlify | One dashboard instead of four — all your projects and their deploy status in one place |
| Provider-agnostic interface | Same experience regardless of which provider hosts the project |
| More providers coming (Railway, etc.) | As your stack evolves, Viewpo grows with you |

**Why it matters**: Most developers and teams use multiple hosting providers. Switching between dashboards wastes time and context. Viewpo unifies them.

---

## Platform Availability

| Platform | Status |
|----------|--------|
| iOS | Launching first |
| iPadOS | Launching first |
| macOS | Launching first (Mac Catalyst) |
| Android | Coming later |
| Windows | Coming later |
| Linux | Coming later |

---

## Pricing Tiers

| | Free | Starter ($9/mo) | Pro ($29/mo) |
|---|---|---|---|
| Projects | Up to 3 | Unlimited | Unlimited |
| Providers | 1 connection | All providers | All providers |
| Viewport viewer | Full (any resolution) | Full + custom sizes | Full + custom sizes |
| Notifications | Build status | Branch pinning + push | Branch pinning + push |
| Sharing | — | Links + QR codes | Links + QR codes |
| Team workspaces | — | — | Up to 10 members |
| Deploy comparison | — | — | Side-by-side comparison |
| API access | — | — | REST API |
| Support | Community | Email | Priority |

---

## Target Audiences

| Audience | Key Pain Point | Key Benefit |
|----------|---------------|-------------|
| Solo developers | Juggling multiple projects across providers, checking previews on the go | One app, all providers, any viewport — check everything from your phone |
| Small teams | Sharing preview links, getting design feedback without granting dashboard access | Instant shareable links and QR codes, team workspaces |
| Agencies | Managing client sites across different providers | Multi-provider dashboard, client-friendly sharing, team organisation |
| Mobile-first reviewers | Can only see the mobile layout when reviewing on a phone | Viewport viewer — see any resolution, from any device |

---

## Competitive Differentiators

1. **Viewport viewer**: No other deployment tool lets you view arbitrary resolutions from any device
2. **Multi-provider**: Provider dashboards only show their own projects; Viewpo unifies them all
3. **Mobile-first**: Built as a native app (SwiftUI), not a web wrapper — designed for phone-first review
4. **OAuth simplicity**: No API keys or config — just sign in and go
5. **Native rendering**: Uses WKWebView (real browser engine), not screenshots or iframes — works with every website

---

## Post-MVP Roadmap (Directional)

- Visual regression testing (auto-compare screenshots across viewports per deploy)
- Commenting and annotation on previews
- More providers (Railway, etc.)
- MCP server integration (give AI coding tools "eyes" to see viewport previews)
- Deploy comparison view (side-by-side before/after)
