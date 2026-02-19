<script lang="ts">
  import { onMount } from 'svelte';

  interface BenefitItem {
    id: string;
    heading: string;
    description: string;
    iconPath: string;
    iconColor: string;
    bgColor: string;
    darkBgColor: string;
    badge?: { label: string; href: string };
    placeholder: string;
  }

  const CYCLE_DURATION = 4000; // ms per item
  const PAUSE_AFTER_INTERACT = 6000; // ms before resuming auto-cycle after user interaction

  const items: BenefitItem[] = [
    {
      id: 'viewport',
      heading: 'Any resolution, any device',
      description:
        'Phone, tablet, laptop, desktop, 4K — or type in a custom size. See a 1920px layout on your iPhone. Toggle dark and light mode per page without changing device settings.',
      iconPath:
        'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
      iconColor: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      darkBgColor: 'dark:bg-indigo-500/[0.15]',
      placeholder: 'Viewport viewer',
    },
    {
      id: 'notifications',
      heading: 'Know the moment it\u2019s live',
      description:
        'A push notification lands when your build succeeds. Tap it to open the preview on your MacBook, iPad, or iPhone — no switching between dashboards or hunting for URLs.',
      iconPath:
        'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0',
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      darkBgColor: 'dark:bg-amber-500/[0.15]',
      placeholder: 'Push notifications',
    },
    {
      id: 'sharing',
      heading: 'Share with anyone',
      description:
        'Send a link or QR code. Clients, stakeholders, and teammates see the preview at the right viewport — no Viewpo account required.',
      iconPath:
        'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244',
      iconColor: 'text-sky-500',
      bgColor: 'bg-sky-500/10',
      darkBgColor: 'dark:bg-sky-500/[0.15]',
      placeholder: 'Share links & QR codes',
    },
    {
      id: 'feedback',
      heading: 'Collect feedback and approval',
      description:
        'Clients sign off via a share link. Internal teams — designers, PMs, managers — review together in a workspace and leave comments directly on the preview.',
      iconPath:
        'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z',
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      darkBgColor: 'dark:bg-emerald-500/[0.15]',
      badge: { label: 'Pro', href: '/teams/' },
      placeholder: 'Team workspaces',
    },
  ];

  let activeIndex = $state(0);
  let isAutoCycling = $state(true);
  let progressKey = $state(0); // Incremented to restart CSS animation

  let cycleTimer: ReturnType<typeof setTimeout> | null = null;
  let resumeTimer: ReturnType<typeof setTimeout> | null = null;
  let containerEl: HTMLDivElement | undefined = $state();
  let isVisible = $state(false);
  let prefersReducedMotion = $state(false);

  function advanceToNext() {
    activeIndex = (activeIndex + 1) % items.length;
    progressKey++;
    scheduleCycle();
  }

  function scheduleCycle() {
    clearCycleTimer();
    if (!isAutoCycling || !isVisible || prefersReducedMotion) return;
    cycleTimer = setTimeout(advanceToNext, CYCLE_DURATION);
  }

  function clearCycleTimer() {
    if (cycleTimer) {
      clearTimeout(cycleTimer);
      cycleTimer = null;
    }
  }

  function clearResumeTimer() {
    if (resumeTimer) {
      clearTimeout(resumeTimer);
      resumeTimer = null;
    }
  }

  function handleInteraction(index: number) {
    activeIndex = index;
    isAutoCycling = false;
    progressKey++;
    clearCycleTimer();
    clearResumeTimer();
    // Resume auto-cycling after a pause
    resumeTimer = setTimeout(() => {
      isAutoCycling = true;
      progressKey++;
      scheduleCycle();
    }, PAUSE_AFTER_INTERACT);
  }

  onMount(() => {
    // Respect reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion = mq.matches;
    const motionHandler = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (e.matches) clearCycleTimer();
      else scheduleCycle();
    };
    mq.addEventListener('change', motionHandler);

    // IntersectionObserver — only cycle when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (entry.isIntersecting) {
          scheduleCycle();
        } else {
          clearCycleTimer();
        }
      },
      { threshold: 0.2 },
    );

    if (containerEl) observer.observe(containerEl);

    return () => {
      clearCycleTimer();
      clearResumeTimer();
      mq.removeEventListener('change', motionHandler);
      observer.disconnect();
    };
  });

  // Accent colours per item for the placeholder frame border
  const accentColors = [
    'border-indigo-300 dark:border-indigo-700',
    'border-amber-300 dark:border-amber-700',
    'border-sky-300 dark:border-sky-700',
    'border-emerald-300 dark:border-emerald-700',
  ];

  const progressBarColors = [
    'bg-indigo-400',
    'bg-amber-400',
    'bg-sky-400',
    'bg-emerald-400',
  ];

  const placeholderIconColors = [
    'text-indigo-300 dark:text-indigo-600',
    'text-amber-300 dark:text-amber-600',
    'text-sky-300 dark:text-sky-600',
    'text-emerald-300 dark:text-emerald-600',
  ];
</script>

<div bind:this={containerEl} class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
  <!-- Benefit list -->
  <div>
    <ul class="space-y-3">
      {#each items as item, i}
        <li>
          <button
            type="button"
            class="w-full text-left flex items-start gap-4 p-3 rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden {activeIndex === i
              ? 'bg-white/60 dark:bg-white/[0.04] shadow-sm ring-1 ring-neutral-200/60 dark:ring-neutral-700/60'
              : 'hover:bg-white/40 dark:hover:bg-white/[0.02]'}"
            onmouseenter={() => handleInteraction(i)}
            onclick={() => handleInteraction(i)}
          >
            <div
              class="w-10 h-10 rounded-full {item.bgColor} {item.darkBgColor} flex items-center justify-center flex-shrink-0 mt-0.5"
            >
              <svg
                class="w-5 h-5 {item.iconColor}"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d={item.iconPath}
                />
              </svg>
            </div>
            <div class="min-w-0">
              <span class="font-heading font-semibold text-base flex items-center gap-2 flex-wrap">
                {item.heading}
                {#if item.badge}
                  <a
                    href={item.badge.href}
                    class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-heading font-semibold bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary hover:bg-primary hover:text-white transition-colors duration-200 no-underline"
                    onclick={(e) => e.stopPropagation()}
                  >
                    {item.badge.label}
                  </a>
                {/if}
              </span>
              <p class="text-foreground/50 text-sm mt-0.5">{item.description}</p>
            </div>

            <!-- Progress bar — thin line at bottom of active item -->
            {#if activeIndex === i && isAutoCycling && isVisible && !prefersReducedMotion}
              {#key progressKey}
                <div class="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                  <div
                    class="h-full {progressBarColors[i]} opacity-40 progress-fill"
                    style="animation-duration: {CYCLE_DURATION}ms"
                  ></div>
                </div>
              {/key}
            {/if}
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <!-- Demo panel -->
  <div class="relative flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
    <!-- Ambient glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[280px] rounded-full bg-primary/8 blur-[80px] dark:bg-primary/[0.05] pointer-events-none"
      aria-hidden="true"
    ></div>

    <!-- Placeholder frames — crossfade -->
    {#each items as item, i}
      <div
        class="absolute inset-0 flex items-center justify-center transition-all duration-500 {activeIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}"
        aria-hidden={activeIndex !== i}
      >
        <div
          class="w-full max-w-[340px] sm:max-w-[380px] aspect-[4/3] rounded-2xl border-2 border-dashed {accentColors[i]} bg-white/50 dark:bg-white/[0.03] flex flex-col items-center justify-center gap-4 p-6"
        >
          <!-- Image placeholder icon -->
          <svg
            class="w-12 h-12 {placeholderIconColors[i]}"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Zm16.5-13.5h.008v.008h-.008V7.5Zm0 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z"
            />
          </svg>
          <span
            class="font-heading font-medium text-sm text-foreground/30 dark:text-white/25 text-center"
          >
            {item.placeholder}
          </span>
          <span
            class="text-[11px] text-foreground/20 dark:text-white/15 font-mono"
          >
            Screenshot coming soon
          </span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes progress-fill-anim {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  .progress-fill {
    animation: progress-fill-anim linear forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-fill {
      animation: none;
      width: 100%;
    }
  }
</style>
