export const SITE_NAME = 'Viewpo';
export const SITE_URL = 'https://viewpo.io';
export const SITE_DESCRIPTION = 'See your preview deploys on any device, at any viewport. One dashboard for Cloudflare Pages, Vercel, Netlify, and GitHub Pages.';

export const API_BASE_URL = 'https://email.viewpo.io';
export const TURNSTILE_SITE_KEY = '0x4AAAAAACcgsYVs4BfNtUGF';

export const FEEDBACK_CATEGORIES = [
  'Feature',
  'Enhancement',
  'Bug Fix',
  'Integration',
  'UI/UX',
  'Other',
] as const;

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
    description: 'For individuals with a few projects.',
    features: [
      'Up to 3 projects',
      '1 provider connection',
      'Full viewport viewer (any resolution)',
      'Device presets (iPhone, iPad, Desktop)',
      'Build status notifications',
    ],
    cta: 'Join the Beta',
    highlighted: false,
  },
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'For creators juggling multiple projects.',
    features: [
      'Unlimited projects',
      'All provider connections',
      'Branch pinning & notifications',
      'Share links & QR codes',
      'Custom viewport sizes',
    ],
    cta: 'Notify Me',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For teams and agencies reviewing together.',
    features: [
      'Everything in Starter',
      'Team workspaces (up to 10)',
      'Deploy comparison view',
      'Priority support',
      'API access',
    ],
    cta: 'Notify Me',
    highlighted: false,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What is Viewpo?',
    answer: 'Viewpo is a native app that brings together website previews from Cloudflare Pages, GitHub Pages, Vercel, and Netlify into one dashboard. Whether you code by hand or use AI tools to build, its key feature is the viewport viewer — which lets you see how any preview looks at any screen size, from any device.',
  },
  {
    question: 'How does the viewport viewer work?',
    answer: 'The viewport viewer uses a native WebView (not an iframe) to load the actual website at your chosen resolution. This means it works with any site — even those that block iframe embedding. You can view a 27-inch desktop layout right on your iPhone, pan around to see different parts, and switch between device presets instantly.',
  },
  {
    question: 'Can I really see a desktop layout on my phone?',
    answer: 'Yes! The viewport viewer renders the actual website at your chosen resolution — whether that\'s a 27-inch desktop (2560×1440) or a small phone (393×852). You can pan around to see different parts of the page, just like looking through a viewfinder. It\'s a native WebView, so it\'s the real site — not a screenshot.',
  },
  {
    question: 'Do I need to be a developer to use Viewpo?',
    answer: 'No. If you deploy websites through Cloudflare Pages, GitHub Pages, Vercel, or Netlify, Viewpo works for you — whether you write code yourself or use AI tools like Cursor, v0, or Bolt to build. You just need an account with one of the supported providers.',
  },
  {
    question: 'How do I connect my accounts?',
    answer: 'Just link your Cloudflare Pages or GitHub account with a single tap — Viewpo uses secure sign-in under the hood, so there are no API keys, tokens, or config files to deal with. Once connected, it discovers your projects automatically.',
  },
  {
    question: 'Which deployment providers are supported?',
    answer: 'At launch, Viewpo supports Cloudflare Pages and GitHub Pages. Vercel, Netlify, and Railway support is coming soon after launch.',
  },
  {
    question: 'Is there a free tier?',
    answer: 'Yes! The free tier includes up to 3 projects, 1 provider connection, and full access to the viewport viewer at any resolution with device presets. No credit card required.',
  },
  {
    question: 'Which platforms is Viewpo available on?',
    answer: 'Viewpo is coming soon — launching first on iOS and iPadOS via the App Store, with macOS support via Mac Catalyst. Android, Windows, and Linux versions will follow. Sign up for the beta or get notified when it launches.',
  },
  {
    question: 'Can I share preview links with my team?',
    answer: 'Yes — on Starter and Pro plans, you can generate shareable links and QR codes for any deployment. You can share a specific deploy or a "latest for this branch" link that always shows the newest version. Team members can view and provide feedback without needing provider dashboard access.',
  },
  {
    question: 'Is Viewpo made by Little Bear Apps?',
    answer: 'Yes! Viewpo is built by Little Bear Apps, an Australian indie software studio. We build practical, privacy-friendly developer tools.',
  },
  {
    question: 'When does Viewpo launch?',
    answer: 'Viewpo is currently in development. Join the TestFlight beta to be among the first to try it. Sign up above to get notified when spots open up.',
  },
  {
    question: 'How can I get help or contact support?',
    answer: 'Email us at support@viewpo.io or use the contact form in the footer. We aim to respond within 2 business days. You can also check the FAQ sections on this page, the Teams page, and the Creators page for quick answers.',
  },
  {
    question: 'What does priority support mean?',
    answer: 'Pro plan members get faster response times — within 1 business day — and a dedicated email thread for ongoing issues. Free and Starter plan members receive support within 2 business days via the same email and contact form.',
  },
];
