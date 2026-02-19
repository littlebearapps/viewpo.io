# Use Cases

**Last Updated**: 2026-02-19

---

## Overview

This document maps Viewpo's features to real-world personas and situations. Each use case identifies **who** the user is, **what pain** they experience, **how Viewpo solves it**, and **which features** they rely on most.

Research sources: DORA 2024 State of DevOps (32,000 professionals), Runway 2025 Mobile Release Management (300 senior engineers), LinearB analysis of 1M PRs, developer community discussions (Reddit r/webdev, r/frontend, Indie Hackers, HN).

---

## Persona Use Cases

### 1. The Anxious Architect ("The Dog Walker")

**Role**: Remote Developer / Full-Stack Engineer

**Pain**: You pushed to `main` and left the house. Now you're wondering: did the CSS grid break on mobile? Is the hero section clipped on desktop? Slack tells you "deploy succeeded" but there's no mobile-native way to actually *see* the deployment at the correct resolution.

**How Viewpo solves it**: Push notification arrives → tap → deep link opens viewer at 1920px desktop → verify in 10 seconds → switch to Phone M (390px) → done.

**Key features**: Push notifications, deep linking, desktop viewport on phone, rapid preset switching.

---

### 2. The "Build-in-Public" Founder

**Role**: Indie Hacker / Solo Founder

**Pain**: Momentum is everything in #BuildInPublic. Visual posts perform dramatically better than code snippets. But creating desktop screenshots of staging branches requires a laptop — 8 steps vs 5 with Viewpo.

**How Viewpo solves it**: Notification → open in viewer at Desktop (1920px) → pan to the new feature → screenshot → share to Twitter via system share sheet. No laptop needed.

**Key features**: Screenshot capture, desktop viewport, branch access, system share sheet, dark/light override.

---

### 3. The Agency Juggler

**Role**: Freelance Web Developer / Agency Owner

**Pain**: Client A is on Vercel. Client B is on Cloudflare. Client C is on Netlify. Each has its own dashboard, login, and notification system. A client texts about a broken header — you don't have your laptop.

**How Viewpo solves it**: One dashboard → find project → verify in viewer → screenshot evidence or send share link → client sees desktop layout on their phone → "Approved."

**Key features**: Multi-provider dashboard, unified project feed, share links, QR codes, team workspaces.

---

### 4. The "iPad-First" Nomad

**Role**: Digital Nomad / iPad Developer

**Pain**: Mobile Safari lies. An iPad Pro's CSS viewport tops out at ~1024px. "Request Desktop Site" changes the User Agent string, not the CSS viewport. You literally cannot see a 1440px or 1920px layout on an iPad.

**How Viewpo solves it**: Viewpo injects the actual CSS viewport width. WebKit lays out at 1920px and shrink-to-fits it to the iPad screen. CSS media queries respond to the injected width.

**Key features**: True viewport simulation, custom viewport sizes, orientation toggle, iPad multitasking.

---

### 5. The Team Unblocker (Managers & Leads)

**Role**: Engineering Manager / Tech Lead / Startup CEO

**Pain**: Average PR sits 5 days before merge (LinearB). The bottleneck: you're between meetings. You can see the code changed, but not whether the layout actually works. Screenshots are manual, single-resolution, and go stale.

**How Viewpo solves it**: Notification → view exact build at Desktop (1920px) → switch to Phone M → message "Looks good, merging now." Total time: 30 seconds in an elevator.

**Key features**: Push notifications, deep link to specific commit, rapid viewport switching, share links, team workspaces.

---

### 6. The Quality Guardian (QA & Designers)

**Role**: QA Tester / UI/UX Designer

**Pain**: No mobile app exists for responsive viewport testing. BrowserStack is $39/user/month and desktop-only. Polypane is desktop-only. Chrome DevTools simulates but doesn't use a real device engine.

**How Viewpo solves it**: Open any deployment → cycle through 6 presets in 10 seconds → spot the overflow bug at 430px → screenshot with viewport dimensions → file the bug.

**Key features**: 6 presets + custom sizes, orientation toggle, screenshot capture, real CSS viewport (WebKit), pin & watch, share links.

---

## Feature-to-Persona Matrix

| Feature | Dog Walker | Indie Hacker | Agency | iPad Nomad | Team Lead | QA/Design |
|---------|-----------|-------------|--------|-----------|-----------|-----------|
| **Unified dashboard** | High | Medium | **Critical** | Medium | High | High |
| **Viewport viewer** | **Critical** | **Critical** | High | **Critical** | High | **Critical** |
| **Push notifications** | **Critical** | Medium | High | Low | **Critical** | High |
| **Share links** | Low | High | **Critical** | Low | High | High |
| **QR codes** | Low | Medium | High | Low | Medium | Low |
| **Screenshot capture** | Medium | **Critical** | High | Medium | Medium | **Critical** |
| **Pin & watch** | **Critical** | High | Medium | Medium | High | High |
| **Multi-provider** | High | Medium | **Critical** | Medium | High | Medium |
| **Team workspaces** | Low | Low | **Critical** | Low | **Critical** | High |
| **Dark/light override** | Low | High | Medium | Medium | Low | High |
| **Custom viewport sizes** | Low | Low | Low | High | Low | **Critical** |
| **Deep linking** | High | Low | Medium | Low | High | Medium |
