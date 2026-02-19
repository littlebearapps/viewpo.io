export const SITE_NAME = 'Viewpo';
export const SITE_URL = 'https://viewpo.io';
export const SITE_DESCRIPTION = 'All your preview deployments from every provider, viewable at any screen size, from any device. One dashboard for Cloudflare Pages, Vercel, Netlify, and GitHub.';

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
  { name: 'GitHub', icon: 'github' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Netlify', icon: 'netlify' },
] as const;

export const DEVICE_PRESETS = [
  { name: 'Phone S', width: 375, height: 667, category: 'phone' },
  { name: 'Phone M', width: 390, height: 844, category: 'phone' },
  { name: 'Phone L', width: 430, height: 932, category: 'phone' },
  { name: 'Tablet', width: 820, height: 1180, category: 'tablet' },
  { name: 'Laptop', width: 1440, height: 900, category: 'laptop' },
  { name: 'Desktop', width: 1920, height: 1080, category: 'desktop' },
] as const;

export const DEVICE_LIBRARY = [
  // Phones (6)
  { name: 'iPhone SE', width: 375, height: 667, category: 'phone' },
  { name: 'iPhone 14', width: 390, height: 844, category: 'phone' },
  { name: 'iPhone 15 Pro', width: 393, height: 852, category: 'phone' },
  { name: 'iPhone 16 Pro Max', width: 440, height: 956, category: 'phone' },
  { name: 'Samsung Galaxy S24', width: 360, height: 780, category: 'phone' },
  { name: 'Google Pixel 9', width: 412, height: 915, category: 'phone' },
  // Tablets (5)
  { name: 'iPad Mini', width: 744, height: 1133, category: 'tablet' },
  { name: 'iPad Air', width: 820, height: 1180, category: 'tablet' },
  { name: 'iPad Pro 11"', width: 834, height: 1194, category: 'tablet' },
  { name: 'iPad Pro 13"', width: 1024, height: 1366, category: 'tablet' },
  { name: 'Samsung Galaxy Tab S9', width: 800, height: 1280, category: 'tablet' },
  // Laptops & Monitors (6)
  { name: 'MacBook Air 13"', width: 1470, height: 956, category: 'laptop' },
  { name: 'MacBook Pro 14"', width: 1512, height: 982, category: 'laptop' },
  { name: 'MacBook Pro 16"', width: 1728, height: 1117, category: 'laptop' },
  { name: 'Full HD (1080p)', width: 1920, height: 1080, category: 'desktop' },
  { name: 'QHD (1440p)', width: 2560, height: 1440, category: 'desktop' },
  { name: '4K UHD', width: 3840, height: 2160, category: 'desktop' },
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
      'Viewport viewer (6 presets)',
      'Build status notifications',
      'Pin 1 branch',
    ],
    cta: 'Join the Beta',
    highlighted: false,
  },
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'For power users shipping across multiple projects.',
    features: [
      'Unlimited projects',
      'All provider connections',
      'Branch pinning & notifications',
      'Share links & QR codes',
      'Custom viewport sizes',
      '17-device library',
    ],
    cta: 'Join the Beta',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For teams and agencies reviewing together.',
    features: [
      'Everything in Starter',
      'Team workspaces (up to 10 members)',
      'Role-based access (Owner / Member / Viewer)',
      'Deploy comparison view',
      'Priority support (1 business day)',
      'API access',
    ],
    cta: 'Notify Me',
    highlighted: false,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What is Viewpo?',
    answer: 'Viewpo is a native app that brings together preview deployments from Cloudflare Pages, GitHub, Vercel, and Netlify into one dashboard. Its key feature is the viewport viewer — which lets you see how any deploy looks at any screen size, from any device. Whether you code by hand or use AI tools to build, Viewpo shows you the result instantly.',
  },
  {
    question: 'How does the viewport viewer work?',
    answer: 'The viewport viewer uses a native browser engine (WKWebView) to load the actual website at your chosen resolution. It injects a real CSS viewport width so media queries and breakpoints fire correctly — not CSS zoom, not a screenshot. You can view a 27-inch desktop layout right on your iPhone, pan around to see different parts, and switch between 6 presets or 17 specific devices instantly.',
  },
  {
    question: 'Can I really see a desktop layout on my phone?',
    answer: 'Yes. The viewport viewer renders the actual website at your chosen resolution — whether that\'s a 1920px desktop or a 375px phone. You can pan around to see different parts of the page, just like looking through a viewfinder. It\'s a real browser engine, so it\'s the live site — not a screenshot.',
  },
  {
    question: 'How is this different from Chrome DevTools?',
    answer: 'Chrome DevTools simulates viewports on desktop using the Blink engine. Viewpo uses a real native browser engine (WebKit) on your actual device, with real touch events, pinch-to-zoom, and safe areas. It also connects to your deployment providers, so you go from push notification to verified preview in 10 seconds — no laptop needed.',
  },
  {
    question: 'Do you have access to my source code?',
    answer: 'No. Viewpo only reads deployment metadata — build status, branch names, and preview URLs. It never accesses your repository contents, environment variables, or secrets. OAuth permissions are scoped to deployment read access only.',
  },
  {
    question: 'How do I connect my accounts?',
    answer: 'Sign in with GitHub, Vercel, or Netlify using secure OAuth — one tap and your projects appear automatically. For Cloudflare, paste an API token (scoped to Pages read-only). No config files, no webhooks to set up manually.',
  },
  {
    question: 'Which deployment providers are supported?',
    answer: 'Viewpo supports Cloudflare Pages, GitHub Deployments, Vercel, and Netlify. All four are fully integrated with OAuth or API token authentication. Railway, Render, and DigitalOcean are on the roadmap.',
  },
  {
    question: 'Is there a free tier?',
    answer: 'Yes. The free tier includes up to 3 projects, 1 provider connection, the viewport viewer with 6 presets, build status notifications, and 1 pinned branch. No credit card required.',
  },
  {
    question: 'Which platforms is Viewpo available on?',
    answer: 'Viewpo is currently in beta on iOS, iPadOS, and macOS — built natively with SwiftUI. Android and Windows versions (via Tauri) are planned for later. Join the beta to get early access.',
  },
  {
    question: 'Can I share preview links with my team?',
    answer: 'Yes — on Starter and Pro plans, you can generate shareable links and QR codes for any deployment. You can share a specific deploy or a "latest for this branch" link that always shows the newest version. Recipients don\'t need a Viewpo account to view.',
  },
  {
    question: 'Do I need to be a developer to use Viewpo?',
    answer: 'No. If you deploy websites through Cloudflare Pages, GitHub, Vercel, or Netlify, Viewpo works for you — whether you write code yourself or use AI tools like Cursor, v0, or Bolt to build. You just need an account with one of the supported providers.',
  },
  {
    question: 'What does priority support mean?',
    answer: 'Pro plan members get faster response times — within 1 business day — and a dedicated email thread for ongoing issues. Free and Starter plan members receive support within 2 business days via the same email and contact form.',
  },
  {
    question: 'Is Viewpo made by Little Bear Apps?',
    answer: 'Yes. Viewpo is built by Little Bear Apps, an Australian indie software studio. We build practical, privacy-friendly developer tools.',
  },
];

export const HOMEPAGE_FAQ_KEYS = [
  'What is Viewpo?',
  'How does the viewport viewer work?',
  'How is this different from Chrome DevTools?',
  'Do you have access to my source code?',
  'Is there a free tier?',
  'Which deployment providers are supported?',
  'Can I share preview links with my team?',
];
