# Features & Benefits

**Last Updated**: 2026-02-19

---

## One-Line Pitch

All your preview deployments from every provider, viewable at any screen size, from any device.

---

## Who It's For

| Audience | Use Case |
|----------|----------|
| **Solo developers** | Check preview deploys on the go without logging into provider dashboards |
| **Dev teams** | Unified deployment visibility across Vercel, Netlify, Cloudflare, and GitHub |
| **Designers** | Review responsive layouts at real device resolutions on any screen |
| **Freelancers & agencies** | Share stable preview links with clients — no provider login required |
| **QA & stakeholders** | Open a link or scan a QR code to see the latest deploy, always up to date |

---

## Platforms

| Platform | Experience |
|----------|-----------|
| **iPhone** | Tab bar navigation, device orientation auto-switching, haptic feedback |
| **iPad** | Adaptive sidebar layout, pointer support, multitasking-friendly |
| **Mac** | Native macOS app (not Catalyst wrapper), sidebar navigation, keyboard shortcuts |

Single codebase (SwiftUI), 90%+ shared code across all three.

---

## Core Features

### 1. Unified Deployment Dashboard

**What it does**: Aggregates preview deployments from all connected providers into a single, live-updating feed.

**Benefit**: Stop switching between Vercel, Netlify, Cloudflare, and GitHub dashboards to find the right preview link. See everything in one place.

| Detail | Implementation |
|--------|---------------|
| Providers | Cloudflare Pages, GitHub Deployments, Vercel, Netlify |
| Auth methods | OAuth (GitHub, Vercel, Netlify) + API token paste (Cloudflare, Vercel, Netlify fallback) |
| Live updates | Supabase Realtime — new deployments appear automatically |
| Background polling | Server-side cron checks watched sources every 2-5 minutes |
| Status visibility | Build status (success/building/failed) shown per deployment |
| Branch filtering | Horizontal chip tabs to filter deployments by branch |
| Deployment details | Commit message, SHA, branch, timestamp, provider badge |

---

### 2. Responsive Viewport Viewer

**What it does**: Loads any website in a native WKWebView and renders it at a configurable device resolution — regardless of what device you're holding.

**Benefit**: See how your desktop layout looks on a phone screen (or vice versa) without switching devices. Works with sites that block iframes.

| Detail | Implementation |
|--------|---------------|
| Rendering engine | WKWebView (native browser, not an iframe) |
| X-Frame-Options | Completely bypassed — any website loads |
| CSS viewport | Real viewport width injection (not CSS zoom) — media queries trigger correctly |
| Quick-access presets | 6 presets: Phone S (375), Phone M (390), Phone L (430), Tablet (820), Laptop (1440), Desktop (1920) |
| Device library | 17 real devices across phones, tablets, laptops, and monitors (see table below) |
| Custom dimensions | Free-form width/height entry (100-3840 x 100-2160) |
| Orientation | Portrait/landscape toggle for phone and tablet presets, auto-switches with device rotation |
| Zoom | Fit-to-width, 100%, custom (25-200%), pinch-to-zoom (10-500%), double-tap reset |
| Dark/light mode testing | Override `prefers-color-scheme` on any page — cycle Auto/Light/Dark to test both themes without changing device settings |
| Page reload | One-tap refresh without leaving the viewer |
| Screenshot | Save viewport screenshot to Photos (iOS) or as PNG file (macOS) |
| Open in browser | One-tap to open in Safari or default browser |
| Copy URL | Copy preview URL to clipboard |
| Deep linking | `viewpo://preview?url=...&preset=desktop` opens directly in viewer |

**Total: 23 predefined sizes + unlimited custom dimensions.**

#### Quick-Access Presets (6)

| Preset | Width | Height | Icon |
|--------|-------|--------|------|
| Phone S | 375 | 667 | iPhone |
| Phone M | 390 | 844 | iPhone |
| Phone L | 430 | 932 | iPhone |
| Tablet | 820 | 1180 | iPad |
| Laptop | 1440 | 900 | Laptop |
| Desktop | 1920 | 1080 | Desktop |

#### Device Library (17 devices)

**Phones (6)**

| Device | Width | Height |
|--------|-------|--------|
| iPhone SE | 375 | 667 |
| iPhone 14 | 390 | 844 |
| iPhone 15 Pro | 393 | 852 |
| iPhone 16 Pro Max | 440 | 956 |
| Samsung Galaxy S24 | 360 | 780 |
| Google Pixel 9 | 412 | 915 |

**Tablets (5)**

| Device | Width | Height |
|--------|-------|--------|
| iPad Mini | 744 | 1133 |
| iPad Air | 820 | 1180 |
| iPad Pro 11" | 834 | 1194 |
| iPad Pro 13" | 1024 | 1366 |
| Samsung Galaxy Tab S9 | 800 | 1280 |

**Laptops & Monitors (6)**

| Device | Width | Height |
|--------|-------|--------|
| MacBook Air 13" | 1470 | 956 |
| MacBook Pro 14" | 1512 | 982 |
| MacBook Pro 16" | 1728 | 1117 |
| Full HD (1080p) | 1920 | 1080 |
| QHD (1440p) | 2560 | 1440 |
| 4K UHD | 3840 | 2160 |

#### Dark/Light Mode Testing

Override `prefers-color-scheme` on any website without changing your device's system appearance. Uses `overrideUserInterfaceStyle` (iOS) / `NSAppearance` (macOS) to change the WKWebView's trait collection, so CSS `@media (prefers-color-scheme: dark/light)` media queries respond correctly. Cycle through Auto (follow system), Light, and Dark with a single tap on the floating control pill.

**How viewport simulation works**: Injects `<meta name="viewport" content="width=1920">` (target width, no initial-scale) at document start. A MutationObserver prevents the page from overriding it. WebKit lays out at the injected width and shrink-to-fits the screen. This means CSS media queries, breakpoints, and responsive layouts respond to the simulated width, not the physical device width.

---

### 3. Pin & Watch Branches

**What it does**: Pin important branches to the top of your dashboard. Toggle "watch" to get notified when new deployments land.

**Benefit**: Never miss a deploy on the branch you care about. No manual refreshing.

| Detail | Implementation |
|--------|---------------|
| Pin any branch | Pin from the source/branch list per project |
| Dashboard prominence | Pinned sources appear as rich cards at top of dashboard |
| One-tap open | Tap a pinned card to open latest deployment in viewer |
| Watch toggle | Bell icon on pinned sources — enables push notifications |
| Quick unpin | Swipe-to-delete on pinned cards |
| Per-project sources | View all branches for a project with latest deployment status |

---

### 4. Share Links & QR Codes

**What it does**: Generate shareable links to specific deployments or "always-latest" links for a branch. Includes QR code generation.

**Benefit**: Share a stable, updating preview link with clients or stakeholders. No provider login needed to view. QR codes for quick mobile handoff.

| Detail | Implementation |
|--------|---------------|
| Link types | **Specific deployment** (frozen to one build) or **Latest for branch** (auto-resolves to newest) |
| Expiry options | Never, 1 day, 1 week, 1 month |
| QR code | CoreImage-generated, correction level M, scannable |
| Share sheet | System share (Messages, Mail, Slack, etc.) on iOS |
| Copy to clipboard | One-tap copy of share link URL |
| Public access | Recipients don't need a Viewpo account — deep link opens the deployment |
| Deep link format | `viewpo://s/{token}` |
| Analytics | Bot-filtered hit tracking with privacy-safe IP hashing |
| Management | View, count, and delete active share links in Settings |
| Auto-cleanup | Expired links removed daily by server-side cron job |

---

### 5. Push Notifications

**What it does**: Get notified on your phone when watched branches receive new deployments.

**Benefit**: Know instantly when "the preview is ready" — stop polling dashboards or waiting for Slack bots.

| Detail | Implementation |
|--------|---------------|
| Delivery | Firebase Cloud Messaging → Apple Push Notification service |
| Trigger | Server detects new deployment on watched source → creates event → sends push |
| Notification types | `deployment_created`, `deployment_success`, `deployment_failed` |
| In-app feed | Full notification history with read/unread status |
| Badge count | Unread count on Notifications tab |
| Mark as read | Tap notification to mark read, clears badge |
| Toggleable | Enable/disable deployment alerts in Settings |
| Permission aware | Shows system permission status, links to Settings if denied |

---

### 6. Team Workspaces

**What it does**: Invite teammates to a shared workspace with role-based permissions.

**Benefit**: Everyone sees the same dashboard — designers, developers, PMs, and clients — with appropriate access levels.

| Detail | Implementation |
|--------|---------------|
| Roles | **Owner** (full control), **Member** (pin, share, view), **Viewer** (view only) |
| Invites | Token-based invite links — share via any channel |
| Role selection | Choose Member or Viewer role when creating invite |
| Workspace rename | Inline editing in workspace settings |
| Member list | View all members with role badges |
| Provider sharing | All connected integrations visible to workspace members |
| Security | Row-Level Security enforces permissions at the database level |

---

### 7. Multi-Provider Integration

**What it does**: Connect all your deployment providers with secure OAuth or API tokens.

**Benefit**: One-time setup per provider. Viewpo handles token refresh, health monitoring, and error recovery.

| Provider | Auth Method | What It Fetches |
|----------|------------|-----------------|
| **Cloudflare Pages** | API token paste | Preview deployments per project, branch aliases |
| **GitHub** | GitHub App install (OAuth) | Deployment statuses with `environment_url` extraction |
| **Vercel** | OAuth (preferred) or API token | Preview deployments with team-scoped API support |
| **Netlify** | OAuth (preferred) or API token | Deploy previews with SSL URLs |

| Health Feature | Detail |
|----------------|--------|
| Status tracking | Active / Error / Revoked per integration |
| Error visibility | Last error message shown on integration card |
| Reconnect | One-tap re-authentication if token expires |
| Health check | Manual "Check Now" validates token against provider API |
| Auto-monitoring | Status updated on every deployment refresh |

---

### 8. Authentication

**What it does**: Sign in with your preferred identity provider. Apple Sign-In mandatory per App Store guidelines.

**Benefit**: No new account to create. Use your existing Apple, Google, GitHub, or Microsoft identity.

| Provider | Method |
|----------|--------|
| Apple | Native Sign in with Apple button |
| Google | OAuth via Supabase Auth |
| Microsoft / Azure AD | OAuth via Supabase Auth |
| GitHub | OAuth via Supabase Auth |
| Email/password | Sign up + sign in with validation |

---

## Viewer Control Details

### Floating Control Pill

A compact vertical pill floats in the bottom corner of the viewer (left or right, user-configurable).

| Segment | Action |
|---------|--------|
| **Preset selector** | Menu with all 6 presets + custom size + zoom options |
| **Rotation toggle** | Portrait/landscape (phones and tablet only) |
| **Theme override** | Cycle Auto → Light → Dark |
| **Reload** | Refresh current page |

### Toolbar Actions (Top Bar)

| Action | iOS | macOS |
|--------|-----|-------|
| Screenshot | Save to Photos | Save as PNG via file picker |
| Open in browser | Opens in Safari | Opens in default browser |
| Copy URL | Copies to clipboard | Copies to clipboard |
| Create share link | Opens share link sheet | Opens share link sheet |
| System share | System share sheet | N/A |

---

## Settings & Preferences

| Setting | Options | Persisted |
|---------|---------|-----------|
| Default device preset | Phone S/M/L, Tablet, Laptop, Desktop | UserDefaults |
| Link open behaviour | Viewpo Viewer or Safari | UserDefaults |
| Viewer controls position | Left or Right | UserDefaults |
| Appearance | System, Light, Dark | UserDefaults |
| Display name | Editable text | Database |
| Deployment alerts | On/Off | UserDefaults |
| Clear web cache | Clears all WKWebView data | Action |

---

## Security & Privacy

| Concern | Approach |
|---------|----------|
| Provider secrets | Encrypted at rest in Supabase Vault, never exposed to client |
| API keys | Publishable key in app, secret key server-only |
| Share links | Token-based, read-only — no auth token exposure |
| Network | All traffic over HTTPS |
| Rate limiting | Per-user (10/min refresh) and per-IP (30/min share resolution) |
| Token redaction | API keys stripped from error messages before logging |
| Column-level security | `encrypted_secret` column inaccessible to app-level queries |
| OAuth tokens | Stored server-side only — app receives integration IDs, not tokens |
| RLS | Row-Level Security on all 12 database tables |
| Push tokens | FCM token stored per-user, self-update only |

---

## Analytics & Observability

| Layer | Tool | What It Captures |
|-------|------|-----------------|
| Screen views | Firebase Analytics | Auto-collected |
| Custom events | Firebase Analytics | deployment_viewed, share_link_created, source_pinned, preset_switched, integration_connected |
| Crashes | Firebase Crashlytics | Auto-captured with workspace context |
| Non-fatal errors | Firebase Crashlytics | Logged from 25+ catch blocks across the app |
| Share link hits | Supabase | Bot-filtered, privacy-safe IP hashing, timestamp + user agent |

---

## Deep Link Reference

| Scheme | Purpose | Auth Required |
|--------|---------|---------------|
| `viewpo://s/{token}` | Open shared deployment | No |
| `viewpo://invite/{token}` | Accept workspace invite | Yes |
| `viewpo://preview?url=...&preset=...` | Open URL in viewer at preset | No |
| `viewpo://github/callback?installation_id=...` | GitHub App install callback | Yes |
| `viewpo://vercel/callback?integration_id=...` | Vercel OAuth callback | Yes |
| `viewpo://netlify/callback?integration_id=...` | Netlify OAuth callback | Yes |

---

## Accessibility

| Feature | Detail |
|---------|--------|
| VoiceOver | Labels on all interactive elements (buttons, presets, status badges) |
| Dynamic Type | Semantic fonts (`.body`, `.caption`) — no hardcoded sizes |
| Dark Mode | Full support via semantic colours |
| Touch targets | 44pt minimum on all interactive elements |
| Haptic feedback | Light (preset/theme changes), Medium (reload), Success (screenshot) |
| Gesture hints | First-launch overlay teaches pinch-to-zoom and double-tap |

---

## What Makes Viewpo Different

| Differentiator | Detail |
|----------------|--------|
| **No iframe restrictions** | WKWebView bypasses X-Frame-Options — any website loads. Web-based tools (Responsively, browser extensions) can't do this |
| **Real CSS viewport simulation** | Injects actual viewport meta tags so media queries fire at the target width. Not CSS zoom, not a screenshot |
| **Multi-provider** | Cloudflare + GitHub + Vercel + Netlify in one dashboard. Provider-specific tools (Vercel Comments) only work with their own platform |
| **Mobile-first** | Native iOS app purpose-built for checking previews on the go. All competitors (Polypane, Responsively, Sizzy) are desktop-only |
| **"Latest for branch" links** | Share links that auto-resolve to the newest deployment. No re-sharing after each push |
| **Push notifications** | Know when deploys land without watching dashboards or configuring Slack bots |
| **Dark/light mode testing** | Override `prefers-color-scheme` per page without changing device settings. No competitor offers this on mobile |
| **23 device presets + custom** | 6 quick-access presets, 17-device library (iPhone SE through 4K UHD), plus free-form custom dimensions |
| **Native quality** | SwiftUI across iPhone, iPad, Mac — not an Electron wrapper or web app |

### Competitor Comparison

| Capability | Viewpo | Polypane | Responsively | Vercel Comments | BugHerd |
|------------|--------|----------|-------------|-----------------|---------|
| Multi-viewport | Yes | Yes | Yes | No | No |
| Bypasses X-Frame-Options | Yes | Yes | Yes | Yes | No |
| Multi-provider dashboard | **Yes** | No | No | No (Vercel only) | No |
| Mobile app | **Yes** | No | No | No | No |
| Dark/light mode override | **Yes** | Yes | No | No | No |
| Device presets + library | **23 + custom** | Custom | 30+ | N/A | N/A |
| Share links (latest for branch) | **Yes** | No | No | No | No |
| QR code sharing | **Yes** | No | No | No | No |
| Push notifications | **Yes** | No | No | No | No |
| Team workspaces | **Yes** | No | No | Yes (Vercel only) | Yes |
| Price | TBD | $9-17/mo | Free | $20+/mo (Vercel Pro) | $33-69/mo |

---

## Planned Features (Post-GA)

| Feature | Value |
|---------|-------|
| **Visual regression testing** | Auto-compare screenshots across viewports on each deploy. Competes with Percy ($399/mo) |
| **Commenting / annotation** | Pin feedback directly on preview pages. Replaces BugHerd/Marker.io workflow |
| **MCP Server** | Give AI coding assistants "eyes" — screenshot viewports, read comments, verify responsive changes |
| **More providers** | Railway, Render, DigitalOcean |
| **Multi-viewport side-by-side** | View phone + tablet + desktop simultaneously |
| **Device frame overlays** | iPhone/iPad bezels for presentation-quality screenshots |
