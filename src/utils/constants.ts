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

// --- Features Page Data ---

export interface FeatureDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  group: 'core' | 'collaboration';
  badge?: 'Roadmap';
  bullets: string[];
  relatedUseCases?: string[];
}

export const FEATURES_DATA: FeatureDetail[] = [
  {
    id: 'viewport-viewer',
    title: 'Viewport Viewer',
    subtitle: 'See Any Resolution, From Any Device',
    description: '23 device presets — from iPhone SE to 4K — plus any custom resolution. View a 27-inch desktop layout on your iPhone. Real CSS viewport simulation, not a screenshot.',
    group: 'core',
    bullets: [
      '6 quick-access presets: Phone S/M/L, Tablet, Laptop, Desktop',
      '17-device library: iPhone SE, iPad Pro, Samsung Galaxy, 4K UHD, and more',
      'Real CSS viewport injection — media queries fire at the simulated width',
      'Dark/light mode override: test prefers-color-scheme without changing device settings',
      'Screenshot, pan, pinch-to-zoom, and open in Safari — all from one viewer',
    ],
    relatedUseCases: ['responsive-testing', 'ipad-testing', 'qa-design'],
  },
  {
    id: 'unified-dashboard',
    title: 'Unified Dashboard',
    subtitle: 'Every Provider, One Screen',
    description: 'Cloudflare, GitHub, Vercel, and Netlify in a single feed. Pin your active branches to the top and toggle watch to get notified — everything else stays quiet.',
    group: 'core',
    bullets: [
      'All four major providers in one live-updating feed',
      'Branch pinning: important branches always at the top',
      'Watch toggle: per-branch push notifications on or off',
      'Build status at a glance: success, building, or failed — with commit message and timestamp',
      'Horizontal branch filter chips for quick project focus',
    ],
    relatedUseCases: ['remote-monitoring', 'freelancers'],
  },
  {
    id: 'push-notifications',
    title: 'Push Notifications',
    subtitle: 'Know the Moment It\u2019s Ready',
    description: 'Get notified when builds succeed or fail. Tap the notification to open the preview — no dashboards, no hunting for URLs.',
    group: 'core',
    bullets: [
      'Notifications for deploy created, succeeded, and failed',
      'Tap to open the preview instantly — one step, no hunting',
      'In-app notification feed with read/unread status and badge count',
      'Enable or disable per-branch from the pin card',
      'Works across iOS, iPadOS, and macOS',
    ],
    relatedUseCases: ['remote-monitoring', 'production-monitoring'],
  },
  {
    id: 'share-links',
    title: 'Share Links & QR Codes',
    subtitle: 'Share a Preview in Seconds',
    description: 'Generate a link or QR code for any update. Recipients see it at the right viewport — no account needed.',
    group: 'collaboration',
    bullets: [
      'Two link types: specific deployment (frozen) or "latest for branch" (auto-updates)',
      'QR code generated instantly for mobile handoff or in-person demos',
      'Expiry options: never, 1 day, 1 week, or 1 month',
      'No Viewpo account required for recipients to view',
      'System share sheet for Messages, Mail, Slack, and more',
    ],
    relatedUseCases: ['client-feedback', 'live-demos', 'freelancers'],
  },
  {
    id: 'review-approval',
    title: 'Review & Approval',
    subtitle: 'Get Feedback and Approval Instantly',
    description: 'Clients sign off via a share link. Internal teams — designers, PMs, leads — leave comments and approve directly on the preview.',
    group: 'collaboration',
    badge: 'Roadmap',
    bullets: [
      'Clients approve or request changes via a share link — no login required',
      'Internal team members leave comments pinned to the live preview',
      'Notification when a stakeholder approves or requests changes',
      'Approval history tracked per deployment',
    ],
    relatedUseCases: ['client-feedback', 'team-review', 'agencies'],
  },
  {
    id: 'team-workspaces',
    title: 'Team Workspaces',
    subtitle: 'Everyone on the Same Page',
    description: 'Invite teammates and clients with Owner, Member, or Viewer roles. Notify your team on Slack, Google Chat, or Microsoft Teams when updates land.',
    group: 'collaboration',
    badge: 'Roadmap',
    bullets: [
      'Three roles: Owner (full control), Member (pin and share), Viewer (view only)',
      'Token-based invite links — share via any channel',
      'Shared provider integrations visible to all workspace members',
      'Team notifications via Slack, Google Chat, or Microsoft Teams',
      'Row-Level Security enforces permissions at the database level',
    ],
    relatedUseCases: ['teams', 'agencies'],
  },
];

// --- Pricing Page Data ---

export interface PricingComparisonRow {
  category: string;
  feature: string;
  free: string | boolean;
  starter: string | boolean;
  pro: string | boolean;
  note?: string;
}

export const PRICING_COMPARISON: PricingComparisonRow[] = [
  // Projects & Providers
  { category: 'Projects & Providers', feature: 'Projects', free: '3', starter: 'Unlimited', pro: 'Unlimited' },
  { category: 'Projects & Providers', feature: 'Provider connections', free: '1', starter: 'All 4', pro: 'All 4' },
  // Viewport Viewer
  { category: 'Viewport Viewer', feature: 'Quick-access presets (6)', free: true, starter: true, pro: true },
  { category: 'Viewport Viewer', feature: '17-device library', free: false, starter: true, pro: true },
  { category: 'Viewport Viewer', feature: 'Custom viewport dimensions', free: false, starter: true, pro: true },
  { category: 'Viewport Viewer', feature: 'Dark/light mode override', free: true, starter: true, pro: true },
  { category: 'Viewport Viewer', feature: 'Screenshot capture', free: true, starter: true, pro: true },
  // Dashboard
  { category: 'Dashboard', feature: 'Pinned branches', free: '1', starter: 'Unlimited', pro: 'Unlimited' },
  { category: 'Dashboard', feature: 'Branch watch notifications', free: true, starter: true, pro: true },
  { category: 'Dashboard', feature: 'Build status feed', free: true, starter: true, pro: true },
  // Sharing
  { category: 'Sharing', feature: 'Share links', free: false, starter: true, pro: true },
  { category: 'Sharing', feature: 'QR codes', free: false, starter: true, pro: true },
  { category: 'Sharing', feature: '"Latest for branch" links', free: false, starter: true, pro: true },
  { category: 'Sharing', feature: 'Link expiry options', free: false, starter: true, pro: true },
  // Team
  { category: 'Team', feature: 'Team workspaces', free: false, starter: false, pro: true, note: 'Roadmap' },
  { category: 'Team', feature: 'Role-based access', free: false, starter: false, pro: true, note: 'Roadmap' },
  { category: 'Team', feature: 'Deploy comparison view', free: false, starter: false, pro: true, note: 'Roadmap' },
  { category: 'Team', feature: 'Slack / Google Chat / Teams notifications', free: false, starter: false, pro: true, note: 'Roadmap' },
  // Support
  { category: 'Support', feature: 'Support response time', free: '2 business days', starter: '2 business days', pro: '1 business day' },
  { category: 'Support', feature: 'API access', free: false, starter: false, pro: true, note: 'Roadmap' },
];

export const PRICING_FAQ_ITEMS: Array<{ question: string; answer: string }> = [
  {
    question: 'What counts as a "project"?',
    answer: 'A project corresponds to one deployment source — for example, one Cloudflare Pages project, one Vercel project, or one GitHub repo with deployments. Each project can have multiple branches. The Free plan includes 3 projects; Starter and Pro are unlimited.',
  },
  {
    question: 'Do I need a credit card for the Free plan?',
    answer: 'No. Sign up with Apple, Google, GitHub, or email — no credit card required. The Free plan stays free indefinitely with no trial expiry.',
  },
  {
    question: 'What does "all provider connections" mean on Starter?',
    answer: 'The Free plan connects to 1 provider (e.g. Cloudflare Pages only). Starter unlocks all four providers — Cloudflare Pages, GitHub Deployments, Vercel, and Netlify — all connected simultaneously.',
  },
  {
    question: 'When will Pro features launch?',
    answer: 'Pro features — team workspaces, role-based access, deploy comparison — are on the roadmap after the initial beta. Join the beta now and you\'ll be first to know when they\'re available.',
  },
  {
    question: 'How does billing work?',
    answer: 'Billing is handled by Lemon Squeezy, our Merchant of Record. They handle payments, tax, VAT, and GST collection for your region. Prices shown are in USD and exclude tax — Lemon Squeezy calculates and adds the applicable tax at checkout.',
  },
  {
    question: 'Can I cancel at any time?',
    answer: 'Yes. Cancel from your account settings at any time. Your subscription continues until the end of the billing period, then reverts to the Free plan. No cancellation fees.',
  },
  {
    question: 'Is the 17-device library available on the Free plan?',
    answer: 'The 17-device library and custom dimensions are Starter and Pro features. The Free plan includes 6 quick-access presets — Phone S, Phone M, Phone L, Tablet, Laptop, and Desktop — which covers the most common breakpoints.',
  },
];

// --- Beta Programme Data ---

export const BETA_FAQ_ITEMS: Array<{ question: string; answer: string }> = [
  {
    question: 'What is TestFlight?',
    answer: 'TestFlight is Apple\'s official beta testing platform. It\'s a free app available on iPhone, iPad, and Mac that lets you install and test pre-release versions of apps. Once you\'re accepted into the Viewpo beta, we\'ll send you a TestFlight invite link — just tap it and follow the prompts.',
  },
  {
    question: 'Which devices do I need?',
    answer: 'You\'ll need at least one Apple device: iPhone (iOS 17+), iPad (iPadOS 17+), or Mac (macOS 14 Sonoma+). Viewpo runs natively on all three platforms. The more devices you can test on, the more helpful your feedback — but one is enough.',
  },
  {
    question: 'How long is the beta?',
    answer: 'The structured beta period runs for 4-6 weeks with weekly builds. After the beta period, testers who meet the feedback criteria receive their rewards. You\'ll continue to have access to Viewpo after the beta ends.',
  },
  {
    question: 'What if I can\'t commit the full time?',
    answer: 'That\'s completely OK. If you\'re interested but unsure about the time commitment, join the waitlist instead. We\'ll let you know when broader access opens up. No pressure — the beta is designed for people who can dedicate a few hours over the testing period.',
  },
  {
    question: 'How are testers selected?',
    answer: 'We look for a diverse mix across deployment providers (Cloudflare, Vercel, Netlify, GitHub), device types (iPhone, iPad, Mac), roles (developers, designers, QA, agencies), and project scales. We aim for coverage, not just volume — your specific workflow matters more than your follower count.',
  },
  {
    question: 'What do Founding Testers get?',
    answer: 'Founding Testers earn 12 months of the Pro plan free ($348 value), a Founding Tester badge on their profile, and priority consideration for feature requests. To qualify, complete the onboarding survey, submit at least 3 bug reports or feature requests, complete the exit survey, and provide 2 additional detailed feedback items.',
  },
  {
    question: 'Is my data safe during the beta?',
    answer: 'Yes. The beta runs with the same privacy and security standards as the production app. We only access your deployment metadata (build status, branch names, URLs) — never your source code or repository contents. All provider connections use OAuth with minimal scopes. See our privacy policy for full details.',
  },
];
