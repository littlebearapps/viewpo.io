<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  interface PersonaCard {
    id: string;
    label: string;
    icon: string;
    hook: string;
    description: string;
    accentFrom: string;
    accentTo: string;
  }

  const cards: PersonaCard[] = [
    {
      id: 'developers',
      label: 'For Developers',
      icon: 'terminal',
      hook: 'Debug Localhost & Builds',
      description: 'Push code, get a notification on your phone. Preview the deploy at any resolution — before your CI even finishes.',
      accentFrom: 'from-indigo-500',
      accentTo: 'to-violet-500',
    },
    {
      id: 'managers',
      label: 'For Managers',
      icon: 'shield',
      hook: 'Unblock Your Team',
      description: 'Drop a preview link in Slack. Your team views the latest build and approves — no staging server, no waiting.',
      accentFrom: 'from-emerald-500',
      accentTo: 'to-teal-500',
    },
    {
      id: 'founders',
      label: 'For Founders',
      icon: 'rocket',
      hook: 'Build in Public',
      description: 'Pan around the viewport, screenshot your progress, and share it to X — all from your phone while walking the dog.',
      accentFrom: 'from-orange-500',
      accentTo: 'to-amber-500',
    },
    {
      id: 'agencies',
      label: 'For Agencies',
      icon: 'briefcase',
      hook: 'Get Client Sign-off',
      description: 'Send a link. Your client views the desktop layout on their phone. They reply "Approved" — no call needed.',
      accentFrom: 'from-sky-500',
      accentTo: 'to-blue-500',
    },
  ];

  let activeIndex = $state(0);
  let isPaused = $state(false);
  let timer: ReturnType<typeof setInterval> | null = null;
  let expandedMobile: number | null = $state(null);

  const AUTOPLAY_INTERVAL = 5000;

  function startAutoplay(): void {
    stopAutoplay();
    timer = setInterval(() => {
      if (!isPaused) {
        activeIndex = (activeIndex + 1) % cards.length;
      }
    }, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay(): void {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function selectCard(index: number): void {
    activeIndex = index;
    // Toggle mobile accordion
    expandedMobile = expandedMobile === index ? null : index;
    // Reset autoplay timer on manual selection
    startAutoplay();
  }

  function handleMouseEnter(): void {
    isPaused = true;
  }

  function handleMouseLeave(): void {
    isPaused = false;
  }

  function handleKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectCard(index);
    }
  }

  onMount(() => {
    startAutoplay();
  });

  onDestroy(() => {
    stopAutoplay();
  });

  // SVG icon paths
  const icons: Record<string, string> = {
    terminal: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z',
    shield: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    rocket: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    briefcase: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0',
  };
</script>

<!-- Desktop: 4-column grid | Mobile: vertical accordion -->
<div
  class="persona-dock"
  role="tablist"
  aria-label="Choose your role"
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
>
  <!-- Progress bar (desktop only) -->
  <div class="hidden lg:flex gap-2 mb-4 px-1">
    {#each cards as card, i}
      <button
        class="h-1 flex-1 rounded-full overflow-hidden bg-white/10 transition-colors"
        onclick={() => selectCard(i)}
        aria-label="Go to {card.label}"
        tabindex="-1"
      >
        <div
          class="h-full rounded-full transition-all duration-300 {i === activeIndex
            ? `bg-gradient-to-r ${card.accentFrom} ${card.accentTo}`
            : i < activeIndex
              ? 'bg-white/30'
              : 'bg-transparent'}"
          style={i === activeIndex && !isPaused
            ? `animation: progress ${AUTOPLAY_INTERVAL}ms linear forwards`
            : i === activeIndex
              ? 'width: 100%'
              : i < activeIndex
                ? 'width: 100%'
                : 'width: 0%'}
        ></div>
      </button>
    {/each}
  </div>

  <!-- Cards -->
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-3">
    {#each cards as card, i}
      <div
        class="persona-card group relative rounded-2xl transition-all duration-300 cursor-pointer
          {i === activeIndex
            ? 'bg-white/10 border border-white/20 shadow-lg shadow-black/10'
            : 'bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/10'}"
        role="tab"
        tabindex="0"
        aria-selected={i === activeIndex}
        aria-controls="persona-panel-{card.id}"
        onclick={() => selectCard(i)}
        onkeydown={(e) => handleKeydown(e, i)}
      >
        <!-- Active accent line (top, desktop only) -->
        {#if i === activeIndex}
          <div class="hidden lg:block absolute -top-px left-4 right-4 h-0.5 rounded-full bg-gradient-to-r {card.accentFrom} {card.accentTo}"></div>
        {/if}

        <div class="p-4 lg:p-5">
          <!-- Icon + Label row -->
          <div class="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
            <div class="w-9 h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300
              {i === activeIndex
                ? `bg-gradient-to-br ${card.accentFrom} ${card.accentTo} text-white shadow-md`
                : 'bg-white/[0.06] text-white/50 group-hover:text-white/70'}">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d={icons[card.icon]} />
              </svg>
            </div>

            <div class="flex-1 lg:flex-none">
              <span class="text-xs font-heading font-semibold uppercase tracking-wider transition-colors duration-300
                {i === activeIndex ? 'text-white/90' : 'text-white/40 group-hover:text-white/60'}">
                {card.label}
              </span>
              <h3 class="font-heading font-bold text-base lg:text-lg leading-snug transition-colors duration-300
                {i === activeIndex ? 'text-white' : 'text-white/60 group-hover:text-white/80'}">
                {card.hook}
              </h3>
            </div>

            <!-- Mobile accordion chevron -->
            <svg
              class="w-5 h-5 lg:hidden transition-transform duration-300 flex-shrink-0
                {expandedMobile === i ? 'rotate-180' : ''}
                {i === activeIndex ? 'text-white/70' : 'text-white/30'}"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

          <!-- Description (always visible on desktop when active, accordion on mobile) -->
          <div class="overflow-hidden transition-all duration-300
            {i === activeIndex ? 'lg:max-h-24 lg:opacity-100 lg:mt-3' : 'lg:max-h-0 lg:opacity-0 lg:mt-0'}
            {expandedMobile === i ? 'max-h-24 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}
            lg:{i === activeIndex ? '' : ''}">
            <p class="text-sm leading-relaxed text-white/50">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes progress {
    from { width: 0%; }
    to { width: 100%; }
  }

  .persona-dock {
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .persona-card {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
</style>
