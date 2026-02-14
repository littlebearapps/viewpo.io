# Viewpo Purpose & Goals

**Last Updated**: 2026-02-13

---

## The Problem

Preview deployments are scattered. Cloudflare Pages, GitHub Pages, Vercel, Netlify — each has its own dashboard, its own deploy URLs, its own way of telling you whether a build succeeded or failed. Finding the right preview link means:

1. Logging into the provider dashboard
2. Navigating to the right project
3. Finding the right branch/commit
4. Discovering the build failed due to CI issues, formatting errors, or config problems — wasting the trip entirely
5. If it did succeed, opening the preview URL and only seeing it at whatever screen size you happen to be on

This is tedious on a laptop. It's painful on a phone. And it's what Nathan was doing repeatedly while walking his dog.

---

## What Viewpo Is

Viewpo is a single place to see all your preview deployments across providers, know instantly whether they succeeded, and view them at any screen resolution — from any device.

The core experience: you're on your iPhone walking the dog. You open Viewpo. You see that your latest push to `feature/new-landing` deployed successfully on Cloudflare Pages. You tap it. A viewport viewer opens showing you what that page looks like on a 27-inch desktop monitor — right there on your phone screen. You swipe to check the iPad view. Looks good. You switch to the phone view. The hero section is clipped. You pin that branch so you get notified when the next deploy lands.

That's it. No hunting for links. No guessing whether the build passed. No "I'll check it when I'm back at my desk."

---

## Core Value Propositions

1. **Find the right preview without hunting** — All providers in one dashboard, latest deployments surfaced automatically, build status visible at a glance
2. **See any resolution on any device** — A viewport viewer that renders the actual website (not a screenshot) at configurable device resolutions, regardless of what device you're holding
3. **Know when it's ready** — Pin branches, get notified when deploys succeed (or fail), stop refreshing dashboards manually
4. **Share easily** — Generate a link or QR code for a specific deployment or "latest for this branch" so teammates or clients can see it instantly

---

## Who It's For

- **Solo developers** juggling multiple projects across providers (the initial use case)
- **Small teams** where devs, designers, and stakeholders need to review preview deployments without provider dashboard access
- **Agencies** managing client sites across different hosting providers
- **Anyone** who reviews website changes on mobile and wants to see how they look at different screen sizes

---

## The Viewport Viewer

The key differentiator. Not just a list of deploy links — a viewer that loads the actual website in a native WebView and frames it at a chosen resolution.

Think of it as a viewfinder: the website is the scene, and you aim the viewfinder at the part you want to inspect. You're on a 6.7-inch iPhone screen, but looking through a window sized as a 27-inch desktop, an 11-inch iPad, or a small phone. Pan around to see different parts. Switch presets to check responsiveness.

This works because the app uses WKWebView (a native browser engine), not iframes. Most websites block iframe embedding via security headers. WKWebView bypasses this entirely — any website loads, no exceptions.

---

## Commercial Goals

Viewpo is intended to generate revenue as a commercial product:

- **Target**: Several thousand dollars per month in recurring income
- **Model**: Freemium — free tier for solo use, paid tiers for teams and advanced features
- **Distribution**: App Store (iOS/iPadOS/macOS), expanding to Android/Windows later via Tauri
- **Growth path**: Start with the core viewer + deployment aggregation, expand features over time

This isn't a side project that stays free forever. It's a product with a commercial trajectory, even if modest initially.

---

## Feature Evolution (Directional)

**MVP (proving the concept):**
- Connect Cloudflare Pages + GitHub
- See deployments, build status, preview URLs
- Viewport viewer with device preset switching
- Pin branches, get notified on new deploys
- Share links + QR codes

**Post-MVP (expanding value):**
- More providers (Vercel, Netlify, Railway)
- Team workspaces with roles and permissions
- Visual regression testing (auto-compare screenshots across viewports per deploy)
- Commenting/annotation on previews
- MCP server giving AI coding tools "eyes" to see viewport previews

---

## Guiding Principles

1. **Mobile-first** — The phone experience is primary, not an afterthought
2. **Speed to insight** — Minimise taps between "I wonder how that deploy looks" and actually seeing it
3. **Multi-provider, not provider-locked** — The unified view is the value; no single provider can replicate this
4. **Native quality** — SwiftUI, not a web wrapper. Feels like it belongs on the platform.
5. **Ship and iterate** — Prove the core value fast, expand features based on real usage
