export const SITE_NAME = 'Viewpo';
export const SITE_URL = 'https://viewpo.io';
export const SITE_DESCRIPTION = 'See your preview deploys on any device, at any viewport. One dashboard for Cloudflare Pages, Vercel, Netlify, and GitHub Pages.';

export const PROVIDERS = [
  { name: 'Cloudflare Pages', icon: 'cloudflare' },
  { name: 'GitHub Pages', icon: 'github' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Netlify', icon: 'netlify' },
] as const;

export const DEVICE_PRESETS = [
  { name: 'iPhone 16 Pro', width: 393, height: 852, category: 'phone' },
  { name: 'iPad Pro 13"', width: 1032, height: 1376, category: 'tablet' },
  { name: 'MacBook Pro 14"', width: 1512, height: 982, category: 'laptop' },
  { name: 'Desktop 27"', width: 2560, height: 1440, category: 'desktop' },
] as const;

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For solo developers with a few projects.',
    features: [
      'Up to 3 projects',
      '1 provider connection',
      'Viewport viewer with presets',
      'Build status notifications',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'For developers juggling multiple projects.',
    features: [
      'Unlimited projects',
      'All provider connections',
      'Branch pinning & notifications',
      'Share links & QR codes',
      'Custom viewport sizes',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For teams and agencies reviewing deploys together.',
    features: [
      'Everything in Starter',
      'Team workspaces (up to 10)',
      'Deploy comparison view',
      'Priority support',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What is Viewpo?',
    answer: 'Viewpo aggregates preview deployments from multiple providers — Cloudflare Pages, Vercel, Netlify, GitHub Pages — into one dashboard. It includes a viewport viewer that lets you see how any deployment looks at any screen resolution, from any device.',
  },
  {
    question: 'How does the viewport viewer work?',
    answer: 'The viewport viewer uses a native WebView (not an iframe) to load the actual website at your chosen resolution. This means it works with any site — even those that block iframe embedding. You can view a 27-inch desktop layout right on your iPhone.',
  },
  {
    question: 'Which deployment providers are supported?',
    answer: 'At launch, Viewpo supports Cloudflare Pages and GitHub Pages. Vercel, Netlify, and Railway support is coming soon after launch.',
  },
  {
    question: 'Is there a free tier?',
    answer: 'Yes! The free tier includes up to 3 projects, 1 provider connection, and full access to the viewport viewer with device presets. No credit card required.',
  },
  {
    question: 'Which platforms is Viewpo available on?',
    answer: 'Viewpo launches on iOS and iPadOS via the App Store, with macOS support via Mac Catalyst. Android and Windows versions are planned for later via Tauri.',
  },
  {
    question: 'Can I share preview links with my team?',
    answer: 'Yes — on Starter and Pro plans, you can generate shareable links and QR codes for any deployment. You can share a specific deploy or a "latest for this branch" link that always shows the newest version.',
  },
  {
    question: 'Is Viewpo made by Little Bear Apps?',
    answer: 'Yes! Viewpo is built by Little Bear Apps, an Australian indie software studio. We build practical, privacy-friendly developer tools.',
  },
  {
    question: 'When does Viewpo launch?',
    answer: 'Viewpo is currently in development. Join the TestFlight beta to be among the first to try it. Sign up above to get notified when spots open up.',
  },
];
