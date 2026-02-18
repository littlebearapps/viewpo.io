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
    iconColour: string;
  }

  const cards: PersonaCard[] = [
    {
      id: 'developers',
      label: 'For Developers',
      icon: 'terminal',
      hook: 'Debug Localhost',
      description: 'Push code, get a notification on your phone. Preview the deploy at any resolution — before your CI even finishes.',
      accentFrom: 'from-cyan-400',
      accentTo: 'to-blue-500',
      iconColour: 'text-cyan-400',
    },
    {
      id: 'managers',
      label: 'For Managers',
      icon: 'shield',
      hook: 'Unblock Your Team',
      description: 'Drop a preview link in Slack. Your team views the latest build and approves — no staging server, no waiting.',
      accentFrom: 'from-emerald-400',
      accentTo: 'to-green-500',
      iconColour: 'text-emerald-400',
    },
    {
      id: 'founders',
      label: 'For Founders',
      icon: 'rocket',
      hook: 'Build in Public',
      description: 'Pan around the viewport, screenshot your progress, and share it to X — all from your phone while walking the dog.',
      accentFrom: 'from-violet-400',
      accentTo: 'to-purple-500',
      iconColour: 'text-violet-400',
    },
    {
      id: 'agencies',
      label: 'For Agencies',
      icon: 'briefcase',
      hook: 'Get Client Sign-off',
      description: 'Send a link. Your client views the desktop layout on their phone. They reply "Approved" — no call needed.',
      accentFrom: 'from-orange-400',
      accentTo: 'to-amber-500',
      iconColour: 'text-orange-400',
    },
  ];

  let activeIndex = $state(0);
  let isPaused = $state(false);
  let timer: ReturnType<typeof setInterval> | null = null;
  let expandedMobile: number | null = $state(null);
  let progressKey = $state(0);

  const AUTOPLAY_INTERVAL = 5000;

  function startAutoplay(): void {
    stopAutoplay();
    progressKey++;
    timer = setInterval(() => {
      if (!isPaused) {
        activeIndex = (activeIndex + 1) % cards.length;
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

  function selectCard(index: number): void {
    activeIndex = index;
    expandedMobile = expandedMobile === index ? null : index;
    progressKey++;
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

<!-- Desktop: 4-column command bar | Mobile: vertical accordion -->
<div
  class="persona-dock rounded-2xl border-t border-foreground/10 dark:border-white/20 p-2 lg:p-3"
  role="tablist"
  aria-label="Choose your role"
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
>
  <!-- Cards -->
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-2">
    {#each cards as card, i}
      <div
        class="persona-card group relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer
          {i === activeIndex
            ? 'bg-foreground/[0.08] dark:bg-white/10 border border-foreground/15 dark:border-white/20 shadow-lg shadow-black/5 dark:shadow-black/15'
            : 'bg-transparent border border-transparent hover:bg-foreground/[0.04] dark:hover:bg-white/[0.05]'}"
        role="tab"
        tabindex="0"
        aria-selected={i === activeIndex}
        aria-controls="persona-panel-{card.id}"
        onclick={() => selectCard(i)}
        onkeydown={(e) => handleKeydown(e, i)}
      >
        <div class="p-3 lg:p-4">
          <!-- Flex row: Icon Left, Text Right -->
          <div class="flex items-center gap-3">
            <!-- Icon -->
            <div class="w-10 h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
              {i === activeIndex
                ? `bg-gradient-to-br ${card.accentFrom} ${card.accentTo} text-white shadow-md`
                : 'bg-foreground/[0.05] dark:bg-white/[0.06]'}">
              <svg class="w-6 h-6 transition-colors duration-300
                {i === activeIndex ? '' : `${card.iconColour} opacity-50 group-hover:opacity-70`}"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d={icons[card.icon]} />
              </svg>
            </div>

            <!-- Text -->
            <div class="flex-1 min-w-0">
              <span class="block text-[10px] font-heading font-bold uppercase tracking-[0.15em] transition-colors duration-300
                {i === activeIndex ? 'text-foreground/60 dark:text-white/70' : 'text-foreground/25 dark:text-white/30 group-hover:text-foreground/40 dark:group-hover:text-white/40'}">
                {card.label}
              </span>
              <h3 class="font-heading font-bold text-sm lg:text-base leading-snug transition-colors duration-300 truncate
                {i === activeIndex ? 'text-foreground dark:text-white' : 'text-foreground/40 dark:text-white/40 group-hover:text-foreground/60 dark:group-hover:text-white/60'}">
                {card.hook}
              </h3>
            </div>

            <!-- Mobile accordion chevron -->
            <svg
              class="w-5 h-5 lg:hidden transition-transform duration-300 flex-shrink-0
                {expandedMobile === i ? 'rotate-180' : ''}
                {i === activeIndex ? 'text-foreground/50 dark:text-white/70' : 'text-foreground/20 dark:text-white/30'}"
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
            <p class="text-xs lg:text-sm leading-relaxed text-foreground/45 dark:text-white/50 pl-[52px] lg:pl-0">
              {card.description}
            </p>
          </div>
        </div>

        <!-- Progress bar at bottom of active card -->
        {#if i === activeIndex}
          <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground/5 dark:bg-white/5">
            {#key progressKey}
              <div
                class="h-full rounded-full bg-gradient-to-r {card.accentFrom} {card.accentTo}"
                style={isPaused ? 'animation-play-state: paused' : ''}
                class:progress-animate={!isPaused || true}
              ></div>
            {/key}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes progress-fill {
    from { width: 0%; }
    to { width: 100%; }
  }

  .persona-dock {
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }

  .persona-card {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .progress-animate {
    animation: progress-fill 5s linear forwards;
  }

  /* Pause the animation when hovered */
  .persona-dock:hover .progress-animate {
    animation-play-state: paused;
  }
</style>
