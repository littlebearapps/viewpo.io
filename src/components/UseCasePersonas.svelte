<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  interface Persona {
    id: string;
    label: string;
    role: string;
    icon: string;
    slug: string;
    accentColour: string;
    iconColour: string;
    painHook: string;
    bullets: string[];
    features: string[];
  }

  const personas: Persona[] = [
    {
      id: 'remote-dev',
      label: 'Remote Dev',
      role: 'Full-Stack Developer',
      icon: 'terminal',
      slug: '/use-cases/remote-monitoring/',
      accentColour: 'bg-cyan-400',
      iconColour: 'text-cyan-400',
      painHook: "You pushed to main at 5:25 PM and left the house. Now you're on a walk, wondering: did the CSS grid break on mobile? Is the hero section clipped on desktop?",
      bullets: [
        'Push notification arrives — tap to open the exact deploy at 1920px desktop',
        'Switch presets in seconds: Phone, Tablet, Laptop, Desktop',
        'Pin branches you care about — everything else stays silent',
      ],
      features: ['Push Notifications', 'Viewport Viewer', 'Pin & Watch'],
    },
    {
      id: 'indie-founder',
      label: 'Indie Founder',
      role: 'Solo Founder / #BuildInPublic',
      icon: 'rocket',
      slug: '/use-cases/indie-hackers/',
      accentColour: 'bg-violet-400',
      iconColour: 'text-violet-400',
      painHook: "Every screenshot you share is a brand impression. Your B2B customers are on 1440px laptops. A phone screenshot of a phone layout doesn't signal enterprise-ready. You need professional desktop screenshots — and you need them from your phone, right now.",
      bullets: [
        'Screenshot your staging build at desktop resolution — right from your phone',
        'Professional-quality desktop screenshots for investor decks and #BuildInPublic posts',
        'Capture dark and light mode screenshots for comparison posts',
      ],
      features: ['Screenshot Capture', 'Desktop Viewport', 'Dark/Light Override'],
    },
    {
      id: 'creator',
      label: 'Creator',
      role: 'Vibe Coder / AI Builder',
      icon: 'sparkles',
      slug: '/use-cases/creators/',
      accentColour: 'bg-rose-400',
      iconColour: 'text-rose-400',
      painHook: "You built a landing page with Cursor in 20 minutes. Vercel deployed it automatically. It looks great on your phone — but you have no idea what it looks like at 1920px desktop. The AI generated the Tailwind classes. Did it get the responsive breakpoints right?",
      bullets: [
        'See the desktop layout your AI tool generated — real 1920px rendering on your phone',
        'Verify responsive breakpoints without understanding CSS media queries',
        'Push notification when auto-deploys land — tap to check instantly',
      ],
      features: ['Desktop Viewport', 'Viewport Presets', 'Push Notifications'],
    },
    {
      id: 'agency',
      label: 'Agency',
      role: 'Freelancer / Agency Owner',
      icon: 'briefcase',
      slug: '/use-cases/freelancers/',
      accentColour: 'bg-orange-400',
      iconColour: 'text-orange-400',
      painHook: "Client A is on Vercel. Client B is on Cloudflare. Client C just migrated to Netlify. Each provider has its own dashboard, login, and notification system.",
      bullets: [
        'One dashboard for every client, every provider — sorted by time',
        'Send a share link — clients see the desktop design on their phone',
        'Separate workspace per client with role-based access',
      ],
      features: ['Multi-Provider', 'Share Links', 'Team Workspaces'],
    },
    {
      id: 'ipad-dev',
      label: 'iPad Dev',
      role: 'Digital Nomad / iPad Developer',
      icon: 'tablet',
      slug: '/use-cases/digital-nomads/',
      accentColour: 'bg-teal-400',
      iconColour: 'text-teal-400',
      painHook: "Mobile Safari lies. An iPad Pro's CSS viewport tops out at ~1024px. You literally cannot see a 1440px laptop layout or a 1920px desktop layout through any standard means.",
      bullets: [
        'Real CSS viewport injection — media queries fire at the target width',
        'See 1920px desktop layouts on your iPad, not a faked User Agent',
        'Split View alongside your code editor for live comparison',
      ],
      features: ['True Viewport Simulation', 'Custom Sizes', 'iPad Multitasking'],
    },
    {
      id: 'team-lead',
      label: 'Team Lead',
      role: 'Engineering Manager / Tech Lead',
      icon: 'users',
      slug: '/use-cases/teams/',
      accentColour: 'bg-emerald-400',
      iconColour: 'text-emerald-400',
      painHook: "The average PR sits 5 days before merge. You can read code diffs on GitHub Mobile, but you cannot see the visual result of frontend changes. Your team is waiting.",
      bullets: [
        'See the exact build at Desktop, then quick-check mobile — 10 seconds',
        'Share a viewport-specific view with the design team for sign-off',
        'All team members see the same deployment feed in one workspace',
      ],
      features: ['Deep Linking', 'Rapid Preset Switching', 'Team Workspaces'],
    },
    {
      id: 'qa-design',
      label: 'QA & Design',
      role: 'QA Tester / UI Designer',
      icon: 'search',
      slug: '/use-cases/qa-design/',
      accentColour: 'bg-pink-400',
      iconColour: 'text-pink-400',
      painHook: "\"It works on my machine.\" QA needs to verify across resolutions. BrowserStack is $39/month. Polypane is desktop-only. No mobile app exists for viewport testing.",
      bullets: [
        'Cycle through 6 presets in 10 seconds: Phone S through Desktop',
        'Real WebKit rendering catches Safari-specific bugs instantly',
        'Screenshot evidence with exact viewport dimensions for bug reports',
      ],
      features: ['6 Presets + Custom', 'Real WebKit', 'Screenshot Capture'],
    },
  ];

  let activeIndex = $state(0);
  let isPaused = $state(false);
  let timer: ReturnType<typeof setInterval> | null = null;
  let progressKey = $state(0);

  const AUTOPLAY_INTERVAL = 6000;

  function startAutoplay(): void {
    stopAutoplay();
    progressKey++;
    timer = setInterval(() => {
      if (!isPaused) {
        activeIndex = (activeIndex + 1) % personas.length;
        progressKey++;
      }
    }, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay(): void {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function selectPersona(index: number): void {
    activeIndex = index;
    progressKey++;
    startAutoplay();
  }

  function handleKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectPersona(index);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectPersona((index + 1) % personas.length);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectPersona((index - 1 + personas.length) % personas.length);
    }
  }

  onMount(() => startAutoplay());
  onDestroy(() => stopAutoplay());

  const icons: Record<string, string> = {
    terminal: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z',
    sparkles: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
    rocket: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    briefcase: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0',
    tablet: 'M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25V4.5a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z',
    users: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    search: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  };

  const activePersona = $derived(personas[activeIndex]);
</script>

<!-- Persona pill bar -->
<div class="mb-8">
  <div
    class="flex gap-2 flex-wrap justify-center"
    role="tablist"
    aria-label="Choose your role"
  >
    {#each personas as persona, i}
      <button
        class="persona-pill group flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-heading font-medium transition-all duration-300 cursor-pointer
          {i === activeIndex
            ? `bg-white/90 dark:bg-white/[0.12] shadow-md border border-neutral-200 dark:border-neutral-600/50 text-foreground dark:text-white`
            : 'bg-white/40 dark:bg-white/[0.04] border border-transparent text-foreground/50 dark:text-white/40 hover:bg-white/60 dark:hover:bg-white/[0.07] hover:text-foreground/70 dark:hover:text-white/60'}"
        role="tab"
        tabindex={i === activeIndex ? 0 : -1}
        aria-selected={i === activeIndex}
        onclick={() => selectPersona(i)}
        onkeydown={(e) => handleKeydown(e, i)}
        onmouseenter={() => { isPaused = true; }}
        onmouseleave={() => { isPaused = false; }}
      >
        <svg
          class="w-4 h-4 transition-colors duration-300 {i === activeIndex ? persona.iconColour : ''}"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d={icons[persona.icon]} />
        </svg>
        {persona.label}
      </button>
    {/each}
  </div>
</div>

<!-- Content panel -->
<div
  class="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700/50 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl shadow-lg"
  onmouseenter={() => { isPaused = true; }}
  onmouseleave={() => { isPaused = false; }}
>
  {#key activeIndex}
    <div class="p-6 md:p-8 animate-fade-in">
      <!-- Role + Label row -->
      <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 {activePersona.accentColour}/10 dark:{activePersona.accentColour}/20">
            <svg
              class="w-5 h-5 {activePersona.iconColour}"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d={icons[activePersona.icon]} />
            </svg>
          </div>
          <div>
            <h3 class="font-heading font-bold text-lg text-foreground dark:text-white">
              {activePersona.label}
            </h3>
            <p class="text-sm text-foreground/50 dark:text-white/40">{activePersona.role}</p>
          </div>
        </div>
      </div>

      <!-- Pain hook -->
      <p class="text-foreground/70 dark:text-white/60 leading-relaxed mb-6 max-w-2xl">
        {activePersona.painHook}
      </p>

      <!-- How Viewpo helps -->
      <ul class="space-y-3 mb-6">
        {#each activePersona.bullets as bullet}
          <li class="flex items-start gap-3 text-sm text-foreground/70 dark:text-white/60">
            <svg class="w-4 h-4 mt-0.5 flex-shrink-0 {activePersona.iconColour}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span>{bullet}</span>
          </li>
        {/each}
      </ul>

      <!-- Feature chips + CTA row -->
      <div class="flex flex-col sm:flex-row sm:items-center gap-4">
        <div class="flex flex-wrap gap-2">
          {#each activePersona.features as feature}
            <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-foreground/5 dark:bg-white/[0.06] text-foreground/60 dark:text-white/50 border border-foreground/5 dark:border-white/[0.06]">
              {feature}
            </span>
          {/each}
        </div>
        <a
          href={activePersona.slug}
          class="inline-flex items-center gap-1.5 text-sm font-heading font-medium text-primary hover:text-primary-hover transition-colors whitespace-nowrap group"
        >
          Read the full story
          <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  {/key}

  <!-- Progress bar -->
  <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-200/50 dark:bg-white/5">
    {#key progressKey}
      <div class="h-full rounded-full {activePersona.accentColour} progress-animate"></div>
    {/key}
  </div>
</div>

<style>
  @keyframes progress-fill {
    from { width: 0%; }
    to { width: 100%; }
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .progress-animate {
    animation: progress-fill 6s linear forwards;
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }

</style>
