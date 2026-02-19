---
title: Integrations
description: Learn which deployment providers Viewpo connects to and how to set up each integration.
order: 3
category: Reference
---

Viewpo connects to your existing deployment providers so you can see all your previews in one place. No API keys, no config files — just sign in and go.

## Supported Providers

These providers are fully supported at launch:

| Provider | Status | How to Connect |
|----------|--------|----------------|
| **Cloudflare Pages** | Available | Sign in with your Cloudflare account |
| **GitHub Pages** | Available | Sign in with your GitHub account |
| **Vercel** | Available | Sign in with your Vercel account |
| **Netlify** | Available | Sign in with your Netlify account |

## Roadmap Providers

These providers are planned for future releases:

| Provider | Status |
|----------|--------|
| **GitLab** | On the roadmap |
| **Bitbucket** | On the roadmap |
| **Figma** | On the roadmap |
| **WordPress** | On the roadmap |

Want to see a provider that's not listed? [Let us know](/help/contact/) — we use your feedback to decide what to build next.

## Connecting a Provider

1. Open Viewpo and go to **Settings → Accounts**
2. Tap **Add Provider**
3. Choose your provider and sign in
4. Viewpo discovers your projects automatically — no manual setup needed

Each provider uses secure OAuth sign-in. Viewpo never stores your password or asks for API tokens.

## How It Works

Once connected, Viewpo listens for deploy webhooks from your providers. When a new deploy finishes, it appears in your dashboard automatically. You can then:

- **Preview at any resolution** using the viewport viewer
- **Compare deploys** to see what changed
- **Share preview links** with your team or clients
- **Generate QR codes** for on-device review

## Multiple Providers

You can connect as many providers as your plan allows:

| Plan | Provider Connections |
|------|---------------------|
| **Free** | 1 provider |
| **Starter** | 3 providers |
| **Pro** | Unlimited |

## Troubleshooting

### My projects aren't showing up

After connecting a provider, Viewpo discovers your projects within a few seconds. If they don't appear:

- Check that the account you signed in with has access to the projects
- Try pulling down to refresh the project list
- Disconnect and reconnect the provider in **Settings → Accounts**

### Deploys aren't updating

If new deploys aren't appearing:

- Ensure the project has had a recent deploy since you connected
- Check your provider's dashboard to confirm the deploy completed
- Pull down to manually refresh

Still stuck? [Contact support](/help/contact/) and we'll help you sort it out.
