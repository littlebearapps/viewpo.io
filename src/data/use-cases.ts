// Use case data for all 10 Viewpo use case pages
// Source: websites/incoming/viewpo/use-cases.md

export interface UseCaseStep {
  text: string;
}

export interface FeatureRow {
  feature: string;
  description: string;
}

export interface ComparisonRow {
  label: string;
  cells: string[];
}

export interface WorkflowEntry {
  time: string;
  action: string;
}

export interface CrossRef {
  label: string;
  slug: string;
  hook: string;
  accentColour: string;
}

export interface UseCaseFAQ {
  question: string;
  answer: string;
}

export type UseCaseType = 'persona' | 'situation';

export interface UseCase {
  slug: string;
  type: UseCaseType;
  title: string;
  subtitle: string;
  accentColour: string;
  icon: string;

  metaTitle: string;
  metaDescription: string;

  painTitle: string;
  painContent: string[];

  solutionTitle: string;
  solutionIntro?: string;
  solutionSteps: UseCaseStep[];

  featuresTitle: string;
  features: FeatureRow[];

  workflowTitle: string;
  workflow: WorkflowEntry[];

  comparison?: {
    title: string;
    headers: string[];
    rows: ComparisonRow[];
  };

  crossRefTitle: string;
  crossRefs: CrossRef[];

  faqs: UseCaseFAQ[];
}

// ─── Persona Use Cases ───────────────────────────────────────────────

const remoteMonitoring: UseCase = {
  slug: 'remote-monitoring',
  type: 'persona',
  title: 'Remote Developers',
  subtitle: 'Full-Stack Engineers & Remote Workers',
  accentColour: 'cyan',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />',

  metaTitle: 'Remote Developers — Viewpo Use Case',
  metaDescription: 'Push to main and verify at desktop resolution from your phone. Viewpo sends push notifications when deploys land, then lets you preview at 1920px without opening your laptop.',

  painTitle: 'The Pain',
  painContent: [
    'You pushed to main at 5:25 PM and left the house. Now you\'re on a walk, phone in pocket, wondering: did the CSS grid break on mobile? Is the hero section clipped on desktop?',
    'The Runway 2025 report calls this the "thousand-tabs problem" — engineers jump between Slack, Jira, CI/CD dashboards, and App Store Connect just to understand the status of a single release. Slack is your notification layer, but after the "deploy succeeded" ping, there\'s no mobile-native way to actually see the deployment at the correct resolution.',
    'The standard workaround: open the preview URL in mobile Safari. But you see a mobile layout — not the desktop view you need to verify. "Request Desktop Site" changes the User Agent string, not the CSS viewport. Responsive sites still trigger phone breakpoints.',
  ],

  solutionTitle: 'How Viewpo Solves It',
  solutionSteps: [
    { text: 'Push notification arrives: "Deploy succeeded on main (Cloudflare Pages)" — tap it' },
    { text: 'Deep link opens viewer: loads the exact commit at 1920px desktop resolution' },
    { text: 'Verify in 10 seconds: Pan around the desktop layout on your phone screen. Switch to Laptop (1440px) to check the breakpoint. Switch to Phone M (390px) to verify mobile' },
    { text: 'Done: Close the app. Resume walking the dog' },
  ],

  featuresTitle: 'Key Features Used',
  features: [
    { feature: 'Push notifications', description: 'Watch the main branch — get alerted on deploy success/failure without polling' },
    { feature: 'Deep linking', description: 'Tap notification to jump straight to the deployed commit in the viewer' },
    { feature: 'Desktop viewport on phone', description: 'See 1920px layout rendered via real CSS viewport injection (not "Request Desktop Site")' },
    { feature: 'Rapid preset switching', description: 'Cycle Phone S/M/L, Tablet, Laptop, Desktop in seconds to verify responsiveness' },
    { feature: 'Real-time build status', description: 'Dashboard shows success/building/failed per deployment — no provider login needed' },
  ],

  workflowTitle: 'Typical Workflow',
  workflow: [
    { time: '5:25 PM', action: 'Push to main, leave house' },
    { time: '5:28 PM', action: 'Viewpo notification: "Deploy building on main (Cloudflare)"' },
    { time: '5:31 PM', action: 'Viewpo notification: "Deploy succeeded on main"' },
    { time: '', action: 'Tap → Viewer opens at Desktop (1920px)' },
    { time: '', action: 'Pan to hero section → looks correct' },
    { time: '', action: 'Switch to Phone M (390px) → mobile nav is fine' },
    { time: '5:32 PM', action: 'Close app. Crisis averted.' },
  ],

  comparison: {
    title: 'Why Not Existing Tools?',
    headers: ['Tool', 'Limitation'],
    rows: [
      { label: 'Vercel/Netlify/CF dashboard', cells: ['Web-based, mobile-hostile, no viewport simulation'] },
      { label: 'Mobile Safari', cells: ['Shows mobile layout; "Request Desktop Site" doesn\'t change CSS viewport'] },
      { label: 'Slack CI notifications', cells: ['Tells you status but can\'t show you what it looks like'] },
      { label: 'GitHub Mobile', cells: ['Code review only — no visual preview of frontend changes'] },
    ],
  },

  crossRefTitle: 'Related Situations',
  crossRefs: [
    { label: 'Visual QA Audit', slug: 'responsive-testing', hook: 'Catch the overflow bug at 390px before users do.', accentColour: 'pink' },
    { label: 'Emergency Hotfix', slug: 'production-monitoring', hook: 'Verify the Friday night fix without opening your laptop.', accentColour: 'amber' },
  ],

  faqs: [
    {
      question: 'Can Viewpo show a real desktop layout on my iPhone?',
      answer: 'Yes. Viewpo injects the actual CSS viewport width (e.g. 1920px) via the viewport meta tag, causing CSS media queries and breakpoints to fire at the target width. WebKit then renders the page at that width and shrink-to-fits it to your screen. This is fundamentally different from "Request Desktop Site", which only changes the User Agent string.',
    },
    {
      question: 'Which deployment providers does Viewpo support?',
      answer: 'Viewpo currently supports Cloudflare Pages, Vercel, Netlify, and GitHub deployments. Connect via one-tap OAuth (GitHub, Vercel, Netlify) or API token (Cloudflare). All providers appear in a single unified dashboard.',
    },
    {
      question: 'Do I need to be at my desk to verify a deployment?',
      answer: 'No — that\'s the whole point. Viewpo sends push notifications when builds land, then lets you preview the deployment at any viewport size directly from your phone. You can verify a deploy in under 60 seconds from anywhere.',
    },
  ],
};

const indieHackers: UseCase = {
  slug: 'indie-hackers',
  type: 'persona',
  title: 'Indie Founders',
  subtitle: 'Solo Founders & #BuildInPublic Creators',
  accentColour: 'violet',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />',

  metaTitle: 'Indie Founders — Viewpo Use Case',
  metaDescription: 'Create #BuildInPublic content from your phone. Push code, get notified, screenshot your staging build at desktop resolution, and share directly to Twitter/X — no laptop needed.',

  painTitle: 'The Pain',
  painContent: [
    'Momentum is everything in #BuildInPublic. You need to tweet progress daily, but you can\'t be at your laptop 24/7. The Indie Hackers community\'s top tip for engagement: "Add screenshots or animated gifs." Visual posts showing real product UI perform dramatically better than code snippets or text updates.',
    'Current workflow: push code, wait for deploy, open provider dashboard on laptop, find preview URL, open in browser, manually resize window, take screenshot, crop, export, post. That\'s 8 steps requiring a laptop. Miss a day and the algorithm punishes you.',
  ],

  solutionTitle: 'How Viewpo Solves It',
  solutionSteps: [
    { text: 'Push from phone (GitHub Mobile or terminal SSH)' },
    { text: 'Viewpo notification: Deploy ready on feature/new-pricing-page' },
    { text: 'Open in viewer at Desktop (1920px) — full-width rendering with real CSS media queries firing' },
    { text: 'Pan to the new feature, take a screenshot (saved to Photos)' },
    { text: 'Share directly to Twitter/X via the system share sheet' },
  ],

  featuresTitle: 'Key Features Used',
  features: [
    { feature: 'Screenshot capture', description: 'Save high-res viewport screenshots directly to Photos (iOS)' },
    { feature: 'Desktop viewport', description: 'Render staging branches at 1920px with real CSS breakpoints — professional-quality staging screenshots' },
    { feature: 'Branch access', description: 'View any branch, not just production — show unfinished work on staging' },
    { feature: 'System share sheet', description: 'Share screenshot directly to Twitter, Slack, Messages — no export step' },
    { feature: 'Pin & watch', description: 'Pin your active development branch so it\'s always one tap away' },
    { feature: 'Dark/light override', description: 'Capture both dark and light mode screenshots for comparison posts' },
  ],

  workflowTitle: 'Typical Workflow',
  workflow: [
    { time: 'Morning', action: 'Push feature/new-pricing to GitHub' },
    { time: '', action: 'Viewpo notification: "Deploy ready on feature/new-pricing (Vercel)"' },
    { time: '', action: 'Tap → Viewer at Desktop (1920px)' },
    { time: '', action: 'Pan to pricing table → Screenshot → Share to Twitter' },
    { time: '', action: 'Caption: "Day 47: new pricing page live on staging #buildinpublic"' },
    { time: 'Evening', action: 'Switch to Phone M preset → Screenshot mobile layout' },
    { time: '', action: 'Caption: "Mobile-first responsive design coming together"' },
  ],

  comparison: {
    title: 'Content Types Viewpo Enables',
    headers: ['Content', 'How'],
    rows: [
      { label: 'Desktop preview screenshots', cells: ['Viewer at 1920px, screenshot to Photos'] },
      { label: 'Mobile-first responsive demos', cells: ['Rapid preset switching, screenshot each size'] },
      { label: 'Dark/light mode comparisons', cells: ['Theme override toggle, side-by-side screenshots'] },
      { label: '"Before and after" posts', cells: ['Pin two branches, screenshot each'] },
      { label: 'Progress threads', cells: ['Daily screenshots from the same pinned branch'] },
    ],
  },

  crossRefTitle: 'Related Situations',
  crossRefs: [
    { label: 'Visual QA Audit', slug: 'responsive-testing', hook: 'Audit your responsive design before posting screenshots.', accentColour: 'pink' },
    { label: 'Live Demo', slug: 'live-demos', hook: 'Pull out your phone and demo your product at a meetup.', accentColour: 'violet' },
  ],

  faqs: [
    {
      question: 'Can I screenshot staging builds from my phone?',
      answer: 'Yes. Viewpo renders any branch deployment at any viewport size. Take a screenshot with iOS\'s native screenshot function, and the image is saved to your Photos. From there, share it directly to Twitter/X, Slack, or Messages via the system share sheet.',
    },
    {
      question: 'Do I need to be at my desk to create #BuildInPublic content?',
      answer: 'No. Push code from GitHub Mobile or SSH, get a Viewpo notification when the deploy is ready, open the viewer at desktop resolution, screenshot, and share — all from your phone. Five steps, no laptop.',
    },
    {
      question: 'Can I view feature branches, not just production?',
      answer: 'Yes. Viewpo shows all branches with active deployments. Pin your development branch so it\'s always one tap away. You can also view specific commits to compare before-and-after states.',
    },
  ],
};

const freelancers: UseCase = {
  slug: 'freelancers',
  type: 'persona',
  title: 'Freelancers & Agencies',
  subtitle: 'Freelance Web Developers & Agency Owners',
  accentColour: 'orange',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />',

  metaTitle: 'Freelancers & Agencies — Viewpo Use Case',
  metaDescription: 'Manage all client deployments from Cloudflare, Vercel, and Netlify in one dashboard. Check any client\'s deploy from your phone and share viewport-specific preview links.',

  painTitle: 'The Pain',
  painContent: [
    'Client A is on Vercel. Client B is on Cloudflare. Client C just migrated to Netlify. You\'re at lunch. A Reddit r/webdev user captured it: "You know how much of a pain in the ass managing dozens of GitHub and Netlify logins would be when making edits and additions to sites? Huge."',
    'Each provider has its own dashboard, its own login, its own notification system. A client texts: "The header looks weird on the new landing page." You don\'t have your laptop. Do you ignore them for 2 hours? Open three different dashboards on mobile Safari? Try to remember which provider hosts this particular client?',
    'A freelancer managing 60+ client sites described the overhead as primarily administrative navigation between dashboards — the technical work is fast, finding the right deploy is slow.',
  ],

  solutionTitle: 'How Viewpo Solves It',
  solutionSteps: [
    { text: 'One dashboard: All clients, all providers, one unified feed sorted by recency' },
    { text: 'Client texts about an issue: Open Viewpo, find the project (filter by name), tap latest deployment' },
    { text: 'Verify in the viewer: Check Desktop and Phone presets, see the broken header' },
    { text: 'Reply with evidence: Screenshot the viewport, share via Messages. "I see it. Fixing now."' },
    { text: 'Or share a link: Send the client a Viewpo share link so they see the exact same Desktop view on their phone' },
  ],

  featuresTitle: 'Key Features Used',
  features: [
    { feature: 'Multi-provider dashboard', description: 'Cloudflare + GitHub + Vercel + Netlify in one feed — no provider switching' },
    { feature: 'Unified project feed', description: 'All client projects in one chronological feed — find the right deploy without switching dashboards' },
    { feature: 'Share links', description: 'Send "latest for branch" links to clients — auto-updates on each deploy' },
    { feature: 'QR codes', description: 'Generate QR for in-person client meetings — scan to see the latest staging build' },
    { feature: 'Team workspaces', description: 'Separate workspace per client with Viewer-only access for non-technical stakeholders' },
    { feature: 'Integration health', description: 'See if a client\'s API token expired without logging into their provider dashboard' },
  ],

  workflowTitle: 'Typical Workflow',
  workflow: [
    { time: '', action: 'Client texts: "Header looks weird on the landing page"' },
    { time: '', action: 'Open Viewpo → Dashboard → Find ClientB project in unified feed' },
    { time: '', action: 'Latest deploy: feature/hero-redesign (Netlify, 12 min ago, success)' },
    { time: '', action: 'Tap → Viewer at Desktop (1920px) → see broken padding' },
    { time: '', action: 'Switch to Phone M (390px) → mobile looks fine' },
    { time: '', action: 'Screenshot desktop view → Reply: "Found it, padding issue at desktop. Fixing."' },
    { time: '', action: 'Push fix → Viewpo notification: "Deploy succeeded"' },
    { time: '', action: 'Generate share link (latest for main) → Send to client' },
    { time: '', action: 'Client opens on their phone, sees Desktop view → "Looks great, ship it."' },
  ],

  comparison: {
    title: 'Scale Comparison',
    headers: ['Scenario', 'Without Viewpo', 'With Viewpo'],
    rows: [
      { label: 'Check one client\'s deploy', cells: ['Log into provider, navigate to project, find branch', 'Open Viewpo, tap project'] },
      { label: 'Switch between clients', cells: ['Log out, log into different provider', 'Swipe to different project in same dashboard'] },
      { label: 'Show client the deploy', cells: ['Email preview URL (they see mobile layout)', 'Send share link (they see correct viewport)'] },
      { label: 'Track 10+ client projects', cells: ['3-4 provider dashboards, bookmarks, browser tabs', 'One unified feed, sorted by time'] },
    ],
  },

  crossRefTitle: 'Related Situations',
  crossRefs: [
    { label: 'Stakeholder Approval', slug: 'stakeholder-feedback', hook: 'Stop explaining responsive design over email.', accentColour: 'emerald' },
    { label: 'Live Demo', slug: 'live-demos', hook: 'Show clients a 1920px desktop layout from your phone in meetings.', accentColour: 'violet' },
  ],

  faqs: [
    {
      question: 'Can Viewpo manage multiple clients across different hosting providers?',
      answer: 'Yes. Viewpo connects to Cloudflare Pages, Vercel, Netlify, and GitHub simultaneously. All client projects appear in a single unified feed, sorted by most recent deployment. No more switching between provider dashboards.',
    },
    {
      question: 'Can I share a deploy preview with a non-technical client?',
      answer: 'Yes. Generate a share link that opens the deployment at a specific viewport size (e.g. Desktop 1920px). The client sees exactly what you see — no account required, no responsive design confusion. Links auto-update with each new deploy.',
    },
    {
      question: 'How many projects can I track in Viewpo?',
      answer: 'There\'s no limit on connected projects. Agencies managing 60+ client sites use the unified dashboard to see all deployments in one feed. Filter by project name to find any client instantly.',
    },
  ],
};

const digitalNomads: UseCase = {
  slug: 'digital-nomads',
  type: 'persona',
  title: 'iPad Developers',
  subtitle: 'Digital Nomads & iPad-First Developers',
  accentColour: 'teal',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />',

  metaTitle: 'iPad Developers — Viewpo Use Case',
  metaDescription: 'See real 1920px desktop layouts on your iPad. Viewpo uses CSS viewport injection — not User Agent tricks — to render true desktop breakpoints on iPadOS.',

  painTitle: 'The Pain',
  painContent: [
    'Mobile Safari lies. Apple\'s own documentation confirms: "Not every website will have an apparent difference between mobile and desktop sites. This is especially true of websites that utilise responsive layouts." An iPad Pro\'s CSS viewport tops out at approximately 1024px — firmly in the tablet breakpoint range. You literally cannot see a 1440px laptop layout or a 1920px desktop layout on an iPad through any standard means.',
    'iGeeksBlog confirms: "Most responsive websites still show you a mobile layout" even when "Request Desktop Site" is enabled. Reddit users resort to paid workarounds like iCab Mobile ($2) just to change User Agent strings — which still doesn\'t solve the CSS viewport width problem.',
    'For developers working from cafes in Bali, airport lounges, or co-working spaces with only an iPad, this is a fundamental capability gap.',
  ],

  solutionTitle: 'How Viewpo Solves It',
  solutionIntro: 'Viewpo injects the actual CSS viewport width via the viewport meta tag, not a User Agent string change. WebKit lays out the page at 1920px and shrink-to-fits it to the iPad screen. CSS media queries, breakpoints, and responsive layouts respond to the injected width.',
  solutionSteps: [
    { text: 'Native SwiftUI with adaptive sidebar layout — designed for iPad' },
    { text: 'Pointer and trackpad support for precise inspection' },
    { text: 'Split View / Slide Over multitasking — Viewpo alongside your code editor' },
    { text: 'External keyboard shortcuts for rapid viewport switching' },
  ],

  featuresTitle: 'Key Features Used',
  features: [
    { feature: 'True viewport simulation', description: 'See 1440px laptop or 1920px desktop layouts on an iPad\'s 1024px screen' },
    { feature: 'Custom viewport sizes', description: 'Test exact breakpoints (768px, 1024px, 1366px, 1440px, 1920px, 3840px)' },
    { feature: 'Orientation toggle', description: 'Test portrait vs landscape at each viewport size' },
    { feature: 'Pinch-to-zoom', description: 'Zoom into specific UI elements for inspection' },
    { feature: 'Dark/light override', description: 'Test both themes without changing system settings' },
    { feature: 'iPad multitasking', description: 'Run Viewpo in Split View alongside code editors, terminal apps, or Safari' },
  ],

  workflowTitle: 'iPad Development Workflow',
  workflow: [
    { time: '', action: 'Code in your editor (Split View left)' },
    { time: '', action: 'Push to GitHub from terminal app' },
    { time: '', action: 'Viewpo notification: "Deploy ready"' },
    { time: '', action: 'Open Viewpo in Split View (right)' },
    { time: '', action: 'Switch to Desktop (1920px) — see full desktop layout on iPad' },
    { time: '', action: 'Switch to Laptop (1440px) — verify breakpoint transition' },
    { time: '', action: 'Pinch-to-zoom on specific elements to inspect spacing' },
  ],

  comparison: {
    title: 'iPad vs Other Approaches',
    headers: ['Approach', 'Desktop Layout?', 'CSS Breakpoints Fire?', 'Works on iPad?'],
    rows: [
      { label: 'Safari "Request Desktop Site"', cells: ['Sometimes', 'No (viewport stays ~1024px)', 'Yes but unreliable'] },
      { label: 'iCab Mobile (User Agent change)', cells: ['Sometimes', 'No (same viewport issue)', 'Yes but $2 and limited'] },
      { label: 'Chrome for iPad', cells: ['No', 'No', 'Yes but same limitations'] },
      { label: 'Remote desktop to a Mac', cells: ['Yes', 'Yes', 'Laggy, requires Mac running'] },
      { label: 'Viewpo', cells: ['Yes', 'Yes (real viewport injection)', 'Native iPadOS app'] },
    ],
  },

  crossRefTitle: 'Related Situations',
  crossRefs: [
    { label: 'Visual QA Audit', slug: 'responsive-testing', hook: 'Test responsive designs at every breakpoint — from your iPad.', accentColour: 'pink' },
    { label: 'Live Demo', slug: 'live-demos', hook: 'Present your product from an iPad at full desktop resolution.', accentColour: 'violet' },
  ],

  faqs: [
    {
      question: 'Can I really see a 1920px desktop layout on my iPad?',
      answer: 'Yes. Viewpo injects the CSS viewport width (e.g. 1920px) via the viewport meta tag. WebKit renders the page at that width and shrink-to-fits it to your iPad screen. CSS media queries and breakpoints fire at the injected width — this is fundamentally different from "Request Desktop Site".',
    },
    {
      question: 'Does Viewpo support iPad multitasking?',
      answer: 'Yes. Viewpo is a native SwiftUI app built for iPadOS. It supports Split View (run alongside your code editor), Slide Over, pointer/trackpad input, and external keyboard shortcuts.',
    },
    {
      question: 'Why doesn\'t "Request Desktop Site" work for viewport testing?',
      answer: '"Request Desktop Site" changes the User Agent string, not the CSS viewport width. Responsive websites use CSS media queries that respond to viewport width, not User Agent. An iPad Pro\'s viewport is ~1024px — so responsive sites still show tablet layouts regardless of the User Agent.',
    },
  ],
};

const teams: UseCase = {
  slug: 'teams',
  type: 'persona',
  title: 'Team Leads',
  subtitle: 'Engineering Managers & Tech Leads',
  accentColour: 'emerald',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />',

  metaTitle: 'Team Leads — Viewpo Use Case',
  metaDescription: 'Review frontend changes from your phone in 30 seconds. Viewpo sends push notifications when PR preview deploys are ready, then lets you verify at desktop resolution.',

  painTitle: 'The Pain',
  painContent: [
    'LinearB\'s analysis of 1 million PRs across 25,000 developers found the average time from PR open to merge is 5 days. The most significant velocity driver: "pickup time" — how long before anyone starts reviewing. A PR untouched for 24+ hours becomes a blocker.',
    'Engineering managers can read code diffs on GitHub Mobile, but they cannot see the visual result of frontend changes. Waydev\'s PR workflow guide recommends: "Have your team add some screenshots for front-end changes, which make the job of the reviewer much easier." But screenshots capture a single resolution, are manually produced, and go stale with each subsequent commit.',
    'The bottleneck: you\'re in an elevator, on a commute, or between meetings. Your team is waiting. You can see the code changed, but not whether the layout actually works.',
  ],

  solutionTitle: 'How Viewpo Solves It',
  solutionSteps: [
    { text: 'Notification: "Deploy ready on feature/checkout-redesign (Vercel)"' },
    { text: 'Tap to view: See the exact build at Desktop (1920px)' },
    { text: 'Quick check: Switch to Phone M — does the mobile layout work?' },
    { text: 'Unblock the team: Message in Slack: "Looks good, merging now"' },
    { text: 'Total time: 30 seconds in an elevator' },
  ],

  featuresTitle: 'Key Features Used',
  features: [
    { feature: 'Push notifications', description: 'Know immediately when a PR\'s preview deployment is ready' },
    { feature: 'Deep link to specific commit', description: 'View the exact build, not "whatever\'s on staging"' },
    { feature: 'Rapid viewport switching', description: 'Desktop → Tablet → Phone check in 10 seconds' },
    { feature: 'Share links', description: 'Share a viewport-specific view with the design team for sign-off' },
    { feature: 'Screenshot', description: 'Capture evidence: "Approved — desktop and mobile look correct"' },
    { feature: 'Team workspaces', description: 'All team members see the same deployment feed' },
  ],

  workflowTitle: 'Review Workflow',
  workflow: [
    { time: '', action: 'PR opened by a team member' },
    { time: '', action: 'Viewpo notification: "Deploy ready on feature/checkout-redesign"' },
    { time: '', action: 'Tap → Viewer at Desktop (1920px)' },
    { time: '', action: 'Swipe to Phone M (390px) — mobile layout looks good' },
    { time: '', action: 'Screenshot both → Reply in Slack: "LGTM, merging"' },
    { time: '', action: 'Team unblocked — PR merged same day' },
  ],

  comparison: {
    title: 'Impact on Review Velocity',
    headers: ['Metric', 'Without Viewpo', 'With Viewpo'],
    rows: [
      { label: 'Time to visual review', cells: ['Hours (wait for laptop)', 'Seconds (phone notification → viewer)'] },
      { label: 'Review confidence', cells: ['Low (code diff only, no visual)', 'High (see layout at multiple resolutions)'] },
      { label: 'Feedback precision', cells: ['"Something looks off"', 'Screenshot of exact viewport showing the issue'] },
      { label: 'Blocking duration', cells: ['Average 5 days open-to-merge', 'Potential same-day merge for visual-only changes'] },
    ],
  },

  crossRefTitle: 'Related Situations',
  crossRefs: [
    { label: 'Stakeholder Approval', slug: 'stakeholder-feedback', hook: 'Get client and stakeholder sign-off without the back-and-forth.', accentColour: 'emerald' },
    { label: 'Emergency Hotfix', slug: 'production-monitoring', hook: 'Verify the Friday night fix without dragging out your laptop.', accentColour: 'amber' },
    { label: 'Live Demo', slug: 'live-demos', hook: 'Run sprint reviews and demos from your phone or iPad.', accentColour: 'violet' },
  ],

  faqs: [
    {
      question: 'Can my team share a single Viewpo workspace?',
      answer: 'Yes. Team workspaces let all members see the same deployment feed. Roles include Owner, Member, and Viewer — so non-technical stakeholders can have Viewer-only access to see deployments without modifying settings.',
    },
    {
      question: 'How does Viewpo help reduce PR review time?',
      answer: 'Instead of waiting until you\'re at your desk to review frontend changes, Viewpo sends a push notification when the PR\'s preview deploy is ready. Tap it, see the visual result at multiple viewport sizes, and approve — all in under 60 seconds from your phone.',
    },
    {
      question: 'Does Viewpo replace code review?',
      answer: 'No. Viewpo complements code review with visual review. Use GitHub Mobile for code diffs and Viewpo for visual verification. Together, they let you fully review and unblock PRs from your phone.',
    },
  ],
};

const qaDesign: UseCase = {
  slug: 'qa-design',
  type: 'persona',
  title: 'QA & Design',
  subtitle: 'QA Testers & UI/UX Designers',
  accentColour: 'pink',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />',

  metaTitle: 'QA & Design — Viewpo Use Case',
  metaDescription: 'Cycle through 6 viewport presets in 10 seconds with real WebKit rendering. Catch responsive bugs before users do — from your phone, no BrowserStack subscription needed.',

  painTitle: 'The Pain',
  painContent: [
    'The developer says "It works on my machine." QA needs to verify across resolutions. The industry options: BrowserStack Live ($39/month per user) is automation-first and desktop-only. Polypane ($9-17/month) is excellent but desktop-only. Responsively is free but desktop-only. Chrome DevTools responsive mode is simulated, not real.',
    'A Reddit r/Frontend user: "I had a Polypane subscription but forgot to cancel it and it was charging me out the ass." Another: "Unless you\'re an agency, you can make do with the resizable mobile view in Chrome\'s developer tools." Developers settle for inferior free tools because the paid ones are expensive or limited to desktop.',
    'No mobile app exists in this category. A QA tester reviewing deployments on their commute has zero options for viewport testing.',
  ],

  solutionTitle: 'How Viewpo Solves It',
  solutionSteps: [
    { text: 'Open any deployment in the viewer' },
    { text: 'Cycle through 6 presets in 10 seconds: Phone S (375px) through Desktop (1920px)' },
    { text: 'Spot the overflow bug that only happens at 430px (Phone L)' },
    { text: 'Screenshot the evidence: Save to Photos with the viewport size visible' },
    { text: 'File the bug: Share screenshot with exact viewport dimensions' },
  ],

  featuresTitle: 'Key Features Used',
  features: [
    { feature: '6 presets + custom sizes', description: 'Test exact breakpoints: 375, 390, 430, 768, 820, 1024, 1440, 1920' },
    { feature: 'Orientation toggle', description: 'Portrait/landscape at each size — catch landscape-only bugs' },
    { feature: 'Screenshot capture', description: 'Evidence for bug reports with exact viewport dimensions' },
    { feature: 'Dark/light override', description: 'Test both themes without changing device system settings' },
    { feature: 'Real CSS viewport (WebKit)', description: 'Media queries fire at the injected width — catches Safari/WebKit-specific bugs instantly' },
    { feature: 'Pin & watch', description: 'Pin the branch under test, get notified when a fix deploy lands' },
    { feature: 'Share links', description: 'Share "latest for branch" with the developer — they see what you see' },
  ],

  workflowTitle: 'QA Testing Workflow',
  workflow: [
    { time: '', action: 'New deployment lands on feature/responsive-grid' },
    { time: '', action: 'Open Viewpo → tap deployment in unified feed' },
    { time: 'Test', action: 'Phone S (375px) → Grid wraps correctly' },
    { time: '', action: 'Phone M (390px) → Overflow! Third column breaks out' },
    { time: '', action: 'Phone L (430px) → Grid wraps correctly' },
    { time: '', action: 'Tablet (820px) → 2-column layout correct' },
    { time: '', action: 'Laptop (1440px) → 3-column layout correct' },
    { time: '', action: 'Desktop (1920px) → 4-column layout correct' },
    { time: '', action: 'Screenshot the 390px bug → File ticket with evidence' },
    { time: '', action: 'Fix pushed → Notification → Re-verify' },
  ],

  comparison: {
    title: 'Cost Comparison',
    headers: ['Tool', 'Monthly Cost', 'Mobile App?', 'Real Viewport?'],
    rows: [
      { label: 'BrowserStack Live', cells: ['$39/user', 'No', 'Yes (cloud devices)'] },
      { label: 'Polypane', cells: ['$9-17', 'No', 'Yes (desktop Chromium)'] },
      { label: 'LambdaTest', cells: ['$15', 'No', 'Yes (cloud devices)'] },
      { label: 'Responsively', cells: ['Free', 'No', 'Yes (desktop Electron)'] },
      { label: 'Chrome DevTools', cells: ['Free', 'No', 'Simulated only'] },
      { label: 'Viewpo', cells: ['Free (beta)', 'Yes (native iOS/iPadOS/macOS)', 'Yes (real CSS viewport injection)'] },
    ],
  },

  crossRefTitle: 'Related Situations',
  crossRefs: [
    { label: 'Stakeholder Approval', slug: 'stakeholder-feedback', hook: 'Share viewport-specific previews for design sign-off.', accentColour: 'emerald' },
    { label: 'Visual QA Audit', slug: 'responsive-testing', hook: 'Systematic responsive testing across all breakpoints.', accentColour: 'pink' },
  ],

  faqs: [
    {
      question: 'Is Viewpo a replacement for BrowserStack?',
      answer: 'Not entirely. Viewpo uses WebKit (the Safari rendering engine) for viewport simulation. It catches Safari/WebKit-specific bugs instantly and natively on iOS. For cross-browser testing (Chrome, Firefox, Edge), tools like BrowserStack remain necessary. Viewpo is a fast, mobile-first complement — not a full cross-browser testing suite.',
    },
    {
      question: 'Can I test custom viewport sizes beyond the 6 presets?',
      answer: 'Yes. In addition to the 6 quick presets (375px through 1920px), Viewpo supports custom viewport sizes. Enter any width to test exact breakpoints like 1366px, 3840px, or your app\'s specific breakpoint values.',
    },
    {
      question: 'How do I share bug evidence with developers?',
      answer: 'Screenshot the viewport (saved to Photos with viewport size visible), then share via the system share sheet to Slack, Jira, email, or Messages. Alternatively, send a Viewpo share link — the developer sees the exact same deployment at the exact same viewport size.',
    },
  ],
};

// ─── Situation Use Cases ─────────────────────────────────────────────

const stakeholderFeedback: UseCase = {
  slug: 'stakeholder-feedback',
  type: 'situation',
  title: 'Stakeholder Approval',
  subtitle: 'Get sign-off without the responsive design confusion',
  accentColour: 'emerald',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />',

  metaTitle: 'Stakeholder Approval — Viewpo Use Case',
  metaDescription: 'Stop explaining responsive design over email. Send a Viewpo share link — stakeholders see the desktop design on their phone. No account needed, no confusion.',

  painTitle: 'The Situation',
  painContent: [
    'You\'re ready to launch. But you need the "OK" from a non-technical boss, a client, or a salesperson who is currently on the road. You send them the preview link. They open it on their phone. They see a mobile layout. They panic: "The desktop design is completely different from the mockup!"',
    'You spend the next hour explaining responsive design over email.',
    'This is "staging limbo" — the gap between "code is ready" and "stakeholder has approved" — and it kills momentum. Vercel\'s own team acknowledged this problem: "Previously, our staging environments created bottlenecks, and collaboration between developers and non-technical stakeholders was inefficient."',
  ],

  solutionTitle: 'The Viewpo Fix',
  solutionIntro: 'Send a Viewpo share link instead of a raw preview URL. The stakeholder opens it on their phone and sees exactly what you see — the Desktop version at 1920px, rendered in high fidelity.',
  solutionSteps: [
    { text: 'No account, no login, no onboarding — the deep link opens the full viewer with all controls available' },
    { text: 'They tap through presets to verify responsiveness: Desktop, Tablet, Phone' },
    { text: 'They reply "Looks good." You deploy to production' },
    { text: 'No responsive design explanation required. No "open this on your laptop instead" follow-up' },
  ],

  featuresTitle: 'Key Features',
  features: [
    { feature: 'Share links (latest for branch)', description: 'Auto-updates — no re-sharing after each commit' },
    { feature: 'No-account viewing', description: 'Recipient needs the Viewpo app installed but no account or login — deep link opens directly to the deployment' },
    { feature: 'Desktop viewport on phone', description: 'Client sees the desktop design, not a mobile layout' },
    { feature: 'QR codes', description: 'For in-person reviews — scan to see the staging build' },
    { feature: 'Expiry options', description: 'Set 1-week expiry for client review periods' },
  ],

  workflowTitle: 'Approval Workflow',
  workflow: [
    { time: 'Developer', action: 'Sends Viewpo share link (latest for feature/redesign, Desktop preset)' },
    { time: 'Client', action: 'Opens on iPhone → sees 1920px desktop layout' },
    { time: 'Client', action: 'Taps Tablet preset → sees iPad layout' },
    { time: 'Client', action: 'Replies "Approved"' },
    { time: 'Developer', action: 'Merges to main → production deploy' },
  ],

  comparison: {
    title: 'Who Benefits',
    headers: ['Role', 'Pain Removed'],
    rows: [
      { label: 'Developer', cells: ['No more "it looks different on my phone" back-and-forth'] },
      { label: 'Designer', cells: ['Clients see the actual design at intended resolution'] },
      { label: 'PM/Account Manager', cells: ['Faster approval cycles — hours instead of days'] },
      { label: 'Client/Stakeholder', cells: ['Clear visual of what\'s being shipped, on any device'] },
    ],
  },

  crossRefTitle: 'Best For These Roles',
  crossRefs: [
    { label: 'Freelancers & Agencies', slug: 'freelancers', hook: 'Manage all client deployments in one dashboard.', accentColour: 'orange' },
    { label: 'Team Leads', slug: 'teams', hook: 'Unblock PRs and approve frontend changes from your phone.', accentColour: 'emerald' },
    { label: 'QA & Design', slug: 'qa-design', hook: 'Share viewport-specific previews for design sign-off.', accentColour: 'pink' },
  ],

  faqs: [
    {
      question: 'Does the stakeholder need a Viewpo account to view the preview?',
      answer: 'No. Share links open directly in the Viewpo app without requiring an account or login. The recipient does need the Viewpo app installed on their device. Universal Links (web fallback) are planned for a future release.',
    },
    {
      question: 'Will the share link always show the latest deployment?',
      answer: 'Yes. "Latest for branch" links auto-update with each new deploy. You share once, and the client always sees the most recent build — no re-sharing needed after subsequent commits.',
    },
    {
      question: 'Can I control what viewport the stakeholder sees first?',
      answer: 'Yes. When generating a share link, you can set the default viewport preset (e.g. Desktop 1920px). The recipient opens to that view but can freely switch between all presets.',
    },
  ],
};

const responsiveTesting: UseCase = {
  slug: 'responsive-testing',
  type: 'situation',
  title: 'Visual QA Audit',
  subtitle: 'Systematic responsive testing across all breakpoints',
  accentColour: 'pink',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />',

  metaTitle: 'Visual QA Audit — Viewpo Use Case',
  metaDescription: 'Catch overflow bugs at 390px before users do. Cycle through 6 viewport presets in 10 seconds with real WebKit rendering — on your phone, not a desktop simulator.',

  painTitle: 'The Situation',
  painContent: [
    'You\'re coding a complex CSS grid with breakpoints at 768px, 1024px, and 1440px. Chrome DevTools responsive mode is useful but limited — it\'s simulated, not a real device engine. And you can\'t test on actual devices easily: physical device labs are expensive, BrowserStack is $39/month per user, and cloud devices add latency.',
    'The edge case: an overflow bug that only appears on Safari iOS at exactly 390px width (iPhone 14/15 standard). Chrome DevTools can\'t reproduce it because it uses Blink, not WebKit. The bug ships. Users report it. You debug for hours.',
    'Apple\'s own documentation warns: "Not every website will have an apparent difference between mobile and desktop sites" when using Request Desktop Site — because responsive layouts respond to viewport width, not User Agent strings.',
  ],

  solutionTitle: 'The Viewpo Fix',
  solutionIntro: 'Turn your phone into a viewport simulator. Viewpo uses WKWebView — the actual WebKit rendering engine used by Safari on iOS. When you test at 390px in Viewpo on an iPhone, you get the same rendering engine, the same CSS interpretation, and the same quirks as the user\'s real device.',
  solutionSteps: [
    { text: 'Cycle through iPhone SE (375px), iPhone 14 (390px), iPhone 15 Pro Max (430px), iPad (820px), Laptop (1440px), and Desktop (1920px) in seconds' },
    { text: 'Spot the overflow bug before users do' },
    { text: 'Screenshot the evidence with exact viewport dimensions' },
    { text: 'Pin the branch and get notified when the fix deploy lands' },
  ],

  featuresTitle: 'Key Features',
  features: [
    { feature: '6 presets + custom sizes', description: 'Test exact breakpoints from 375px to 1920px and beyond' },
    { feature: 'Real WebKit rendering', description: 'WKWebView — the same engine that powers Safari on iOS and macOS' },
    { feature: 'Orientation toggle', description: 'Portrait/landscape at each size to catch orientation-specific bugs' },
    { feature: 'Screenshot capture', description: 'Evidence for bug reports with viewport size visible' },
    { feature: 'Pin & watch', description: 'Pin the branch under test, get notified when fixes deploy' },
    { feature: 'Share links', description: 'Developer sees what you see — same deployment, same viewport' },
  ],

  workflowTitle: 'Test Sequence',
  workflow: [
    { time: '', action: 'Push feature/responsive-grid to GitHub' },
    { time: '', action: 'Viewpo notification: "Deploy ready on feature/responsive-grid (Vercel)"' },
    { time: '', action: 'Tap → Viewer opens' },
    { time: '375px', action: 'Phone S → Grid wraps correctly' },
    { time: '390px', action: 'Phone M → Overflow! Third column breaks out of container' },
    { time: '430px', action: 'Phone L → Grid wraps correctly' },
    { time: '820px', action: 'Tablet → 2-column layout correct' },
    { time: '1440px', action: 'Laptop → 3-column layout correct' },
    { time: '1920px', action: 'Desktop → 4-column layout correct' },
    { time: '', action: 'Screenshot the 390px bug → File ticket with evidence' },
    { time: '', action: 'Fix → Push → Notification → Re-verify' },
  ],

  comparison: {
    title: 'Real WebKit vs Simulated Testing',
    headers: ['Testing Method', 'Rendering Engine', 'CSS Viewport', 'Catches Safari Bugs?'],
    rows: [
      { label: 'Chrome DevTools', cells: ['Blink', 'Simulated', 'No'] },
      { label: 'Firefox Responsive Mode', cells: ['Gecko', 'Simulated', 'No'] },
      { label: 'BrowserStack (cloud)', cells: ['Real devices', 'Real', 'Yes (with latency)'] },
      { label: 'Physical device', cells: ['Real', 'Real', 'Yes (expensive)'] },
      { label: 'Viewpo', cells: ['WebKit (WKWebView)', 'Real (injected)', 'Yes (native, instant)'] },
    ],
  },

  crossRefTitle: 'Best For These Roles',
  crossRefs: [
    { label: 'QA & Design', slug: 'qa-design', hook: 'Systematic responsive testing across all breakpoints.', accentColour: 'pink' },
    { label: 'Remote Developers', slug: 'remote-monitoring', hook: 'Verify responsive design from anywhere, on any device.', accentColour: 'cyan' },
    { label: 'iPad Developers', slug: 'digital-nomads', hook: 'Test desktop layouts you can\'t see natively on iPad.', accentColour: 'teal' },
  ],

  faqs: [
    {
      question: 'Does Viewpo catch Safari-specific CSS bugs?',
      answer: 'Yes. Viewpo uses WKWebView — the same WebKit rendering engine that powers Safari on iOS and macOS. CSS media queries fire at the injected viewport width. This catches Safari/WebKit-specific rendering bugs that Chrome DevTools (Blink) cannot reproduce.',
    },
    {
      question: 'Is Viewpo a replacement for cross-browser testing?',
      answer: 'No. Viewpo provides instant, native WebKit viewport testing. For cross-browser testing (Chrome/Blink, Firefox/Gecko, Edge), tools like BrowserStack remain necessary. Viewpo is the fastest way to test Safari/WebKit rendering at any viewport width.',
    },
    {
      question: 'What does "real CSS viewport injection" mean?',
      answer: 'Viewpo sets the viewport meta tag to your target width (e.g. width=1920). WebKit then lays out the page at that width, causing all CSS media queries and breakpoints to fire as if the screen were that wide. This is different from simulated testing, where the rendering engine doesn\'t change its actual layout.',
    },
  ],
};

const productionMonitoring: UseCase = {
  slug: 'production-monitoring',
  type: 'situation',
  title: 'Emergency Hotfix',
  subtitle: 'Verify fixes without opening your laptop',
  accentColour: 'amber',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />',

  metaTitle: 'Emergency Hotfix — Viewpo Use Case',
  metaDescription: 'Verify the Friday night fix without opening your laptop. Push notification, tap, see the deploy at 1920px. Under 60 seconds from fix to verified.',

  painTitle: 'The Situation',
  painContent: [
    'It\'s Friday night. A critical bug report comes in: "The checkout page is broken on desktop." You push a fix from your phone using GitHub Mobile. The CI pipeline runs. Cloudflare says "Success." But is the site actually fixed? "Success" means "built without errors" — it doesn\'t mean "the CSS you changed looks correct."',
    'A solo developer on DEV Community captured this: "I\'m the only engineer at my company. When I deploy, there\'s no one watching the CI pipeline with me — my teammates are non-technical stakeholders who care about what shipped, not the mechanics."',
    'The DORA 2024 report found that elite teams (19% of organisations) recover from incidents in under 1 hour. The bottleneck isn\'t fixing the code — it\'s verifying the fix without dragging your laptop out.',
  ],

  solutionTitle: 'The Viewpo Fix',
  solutionSteps: [
    { text: 'Push the fix from GitHub Mobile or terminal' },
    { text: 'Viewpo notification: "Deploy succeeded on main (Cloudflare)"' },
    { text: 'Tap to view: See the latest preview deployment for main at Desktop (1920px)' },
    { text: 'Verify the fix: The checkout page renders correctly on the preview build' },
    { text: 'Close the ticket: Reply to the bug report with a screenshot' },
    { text: 'Go back to your Friday night' },
  ],

  featuresTitle: 'Key Features',
  features: [
    { feature: 'Push notifications', description: 'Know immediately when the fix deploy succeeds or fails' },
    { feature: 'Deep linking', description: 'Tap notification to jump straight to the deployed commit' },
    { feature: 'Desktop viewport on phone', description: 'See 1920px layout — verify the desktop bug is actually fixed' },
    { feature: 'Screenshot capture', description: 'Reply to the bug report with visual evidence of the fix' },
    { feature: 'Pin & watch', description: 'Only get notified about watched branches — no notification noise' },
  ],

  workflowTitle: 'Hotfix Workflow',
  workflow: [
    { time: '8:47 PM', action: 'Bug report: "Checkout page broken on desktop"' },
    { time: '8:52 PM', action: 'Push fix via GitHub Mobile' },
    { time: '8:55 PM', action: 'Viewpo notification: "Deploy building on main"' },
    { time: '8:58 PM', action: 'Viewpo notification: "Deploy succeeded on main"' },
    { time: '', action: 'Tap → Viewer at Desktop (1920px)' },
    { time: '', action: 'Navigate to /checkout → layout fixed' },
    { time: '', action: 'Screenshot → Reply to bug report: "Fixed, verified at desktop resolution"' },
    { time: '8:59 PM', action: 'Close ticket. Resume evening.' },
  ],

  comparison: {
    title: 'Notification Signal-to-Noise',
    headers: ['Approach', 'Signal-to-Noise'],
    rows: [
      { label: 'All Slack CI notifications', cells: ['Every commit, every branch, every provider = noise'] },
      { label: 'Provider email notifications', cells: ['Per-provider, not filterable by branch'] },
      { label: 'Viewpo pin & watch', cells: ['Only watched branches, only on success/failure, unified across providers'] },
    ],
  },

  crossRefTitle: 'Best For These Roles',
  crossRefs: [
    { label: 'Remote Developers', slug: 'remote-monitoring', hook: 'Push to main and verify from your phone.', accentColour: 'cyan' },
    { label: 'Team Leads', slug: 'teams', hook: 'Unblock your team by reviewing and approving fixes fast.', accentColour: 'emerald' },
  ],

  faqs: [
    {
      question: 'Can I verify a production fix without my laptop?',
      answer: 'Yes. Push the fix from GitHub Mobile (or SSH), wait for the Viewpo push notification confirming the deploy succeeded, tap to open the viewer at Desktop (1920px), and visually verify the fix. Total time: under 60 seconds.',
    },
    {
      question: 'How does Viewpo reduce notification fatigue?',
      answer: 'Viewpo\'s "pin & watch" system lets you choose exactly which branches to receive notifications for. Unlike Slack CI notifications (every commit, every branch, every provider), Viewpo only notifies you about watched branches on success/failure — unified across all providers.',
    },
    {
      question: 'Can I verify the desktop layout if I only have my phone?',
      answer: 'Yes. Viewpo injects the CSS viewport width (e.g. 1920px) so media queries fire at desktop width. You see the actual desktop layout rendered by WebKit on your phone screen. Pan and zoom to inspect specific areas.',
    },
  ],
};

const liveDemos: UseCase = {
  slug: 'live-demos',
  type: 'situation',
  title: 'Live Demo',
  subtitle: 'Present responsive designs from any device',
  accentColour: 'violet',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />',

  metaTitle: 'Live Demo — Viewpo Use Case',
  metaDescription: 'Pull out your phone. Show a 1920px desktop layout. Switch presets live. Generate a QR code so everyone in the room can see it. No laptop, no projector.',

  painTitle: 'The Situation',
  painContent: [
    'You\'re in a room — sprint review, client meeting, conference lightning talk, investor pitch, or a tech meetup. You need to show a live, deployed website at professional quality. Not a screenshot from last week. Not a Figma mockup. The actual running code, at the resolution your audience cares about.',
    'Current options: drag out a laptop, connect to the projector, navigate to the deployment dashboard, find the URL, open it. If you\'re on stage with just your phone, you\'re stuck showing a mobile layout of a desktop product. If you\'re at a cafe showing a client, you\'re pinching and zooming on a tiny screen.',
    'The #BuildInPublic community lives on this: visual quality of progress posts differentiates successful indie hackers from invisible ones. But creating those visuals requires a laptop.',
  ],

  solutionTitle: 'The Viewpo Fix',
  solutionIntro: 'Pull out your phone or iPad. Open Viewpo. The latest staging build is one tap away (it\'s pinned). Switch to Desktop (1920px) — the audience sees a professional, full-resolution render.',
  solutionSteps: [
    { text: 'Switch to Tablet, then Phone — responsive design demonstrated in 5 seconds' },
    { text: 'Generate a QR code so everyone in the room can see it on their own devices right now' },
    { text: 'Cycle through this week\'s deploys, show each at the relevant viewport' },
    { text: 'No laptop, no projector cable, no "let me share my screen"' },
  ],

  featuresTitle: 'Key Features',
  features: [
    { feature: 'Pin & watch', description: 'Pinned branch = one tap to latest deploy, no searching' },
    { feature: 'Rapid preset switching', description: 'Desktop → Tablet → Phone in seconds = live responsive demo' },
    { feature: 'QR codes', description: 'Audience members scan and see it themselves, instantly' },
    { feature: 'Screenshot capture', description: 'Capture a specific viewport during the demo for follow-up' },
    { feature: 'Share links (latest for branch)', description: 'Drop the link in a meeting chat — attendees access it later' },
    { feature: 'Desktop viewport on phone/iPad', description: 'Show a 1920px desktop layout from a 6.7-inch screen' },
  ],

  workflowTitle: 'Demo Workflow',
  workflow: [
    { time: '', action: 'Sprint review / Client meeting / Conference demo' },
    { time: '', action: 'Open Viewpo → Pinned: feature/new-checkout (latest deploy, 3 min ago)' },
    { time: '', action: 'Tap → Viewer at Desktop (1920px) → "Here\'s the desktop experience"' },
    { time: '', action: 'Switch to Tablet (820px) → "And here\'s iPad"' },
    { time: '', action: 'Switch to Phone M (390px) → "Mobile is responsive"' },
    { time: '', action: 'Generate QR code → "Scan this to see it yourself right now"' },
    { time: '', action: 'Everyone in the room opens it on their own phone at desktop resolution' },
  ],

  comparison: {
    title: 'Who Benefits',
    headers: ['Role', 'Scenario'],
    rows: [
      { label: 'Indie Hacker', cells: ['Meetup demo, investor pitch, Twitter content capture on the go'] },
      { label: 'Team Lead', cells: ['Sprint review, cross-team demo, stakeholder walkthrough'] },
      { label: 'Agency', cells: ['Client meeting, project kickoff, in-person progress review'] },
      { label: 'Developer Advocate', cells: ['Conference talk, workshop, live coding session showcase'] },
    ],
  },

  crossRefTitle: 'Best For These Roles',
  crossRefs: [
    { label: 'Indie Founders', slug: 'indie-hackers', hook: 'Demo your product at meetups and capture #BuildInPublic content.', accentColour: 'violet' },
    { label: 'Team Leads', slug: 'teams', hook: 'Run sprint reviews from your phone — show real deploys.', accentColour: 'emerald' },
    { label: 'Freelancers & Agencies', slug: 'freelancers', hook: 'Show clients the latest build at full desktop resolution.', accentColour: 'orange' },
  ],

  faqs: [
    {
      question: 'Can I demo a live website from my phone at a conference?',
      answer: 'Yes. Open Viewpo, tap your pinned branch, and the latest deploy opens at any viewport size — including 1920px desktop. Switch between presets live to demonstrate responsive design. Generate a QR code so the audience can follow along on their own devices.',
    },
    {
      question: 'What if my deployment updates during the demo?',
      answer: 'Viewpo shows the deployment snapshot at the time you opened it. New deploys won\'t interrupt your demo. When you\'re ready, pull-to-refresh to load the latest build.',
    },
    {
      question: 'Can the audience view the demo on their own phones?',
      answer: 'Yes. Generate a QR code in Viewpo that links to the same deployment. Audience members scan it to open the deployment at desktop resolution on their own phones — they see exactly what you\'re presenting.',
    },
  ],
};

// ─── Export ──────────────────────────────────────────────────────────

export const USE_CASES: UseCase[] = [
  // Personas
  remoteMonitoring,
  indieHackers,
  freelancers,
  digitalNomads,
  teams,
  qaDesign,
  // Situations
  stakeholderFeedback,
  responsiveTesting,
  productionMonitoring,
  liveDemos,
];

export const PERSONA_USE_CASES = USE_CASES.filter((uc) => uc.type === 'persona');
export const SITUATION_USE_CASES = USE_CASES.filter((uc) => uc.type === 'situation');

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return USE_CASES.find((uc) => uc.slug === slug);
}
