<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { activePersona } from '../lib/heroStore';

  interface PersonaCard {
    id: string;
    label: string;
    icon: string;
    hook: string;
    description: string;
    accentColour: string;
    glowBg: string;
    iconColour: string;
    borderTop: string;
  }

  let { layout = 'bridge' }: { layout?: 'bridge' | 'mobile' } = $props();

  const cards: PersonaCard[] = [
    {
      id: 'developers',
      label: 'Developers',
      icon: 'terminal',
      hook: 'Preview Deploys Instantly',
      description: 'Push code, get a notification from Cloudflare, Vercel, Netlify, or GitHub. Preview at any resolution in 10 seconds.',
      accentColour: 'bg-cyan-400',
      glowBg: 'bg-cyan-400',
      iconColour: 'text-cyan-400',
      borderTop: 'border-t-cyan-400',
    },
    {
      id: 'managers',
      label: 'Managers',
      icon: 'shield',
      hook: 'Unblock Your Team',
      description: 'Review deploys between meetings. Share a viewport-specific preview link — your team approves in seconds.',
      accentColour: 'bg-emerald-400',
      glowBg: 'bg-emerald-400',
      iconColour: 'text-emerald-400',
      borderTop: 'border-t-emerald-400',
    },
    {
      id: 'founders',
      label: 'Founders',
      icon: 'rocket',
      hook: 'Build in Public',
      description: 'Screenshot your staging build at desktop resolution, share to X — all from your phone, while walking the dog.',
      accentColour: 'bg-violet-400',
      glowBg: 'bg-violet-400',
      iconColour: 'text-violet-400',
      borderTop: 'border-t-violet-400',
    },
    {
      id: 'agencies',
      label: 'Agencies',
      icon: 'briefcase',
      hook: 'Get Client Sign-off',
      description: 'One dashboard for every client, every provider. Send a share link — they see the desktop design on their phone.',
      accentColour: 'bg-orange-400',
      glowBg: 'bg-orange-400',
      iconColour: 'text-orange-400',
      borderTop: 'border-t-orange-400',
    },
  ];

  let activeIndex = $state(0);
  let isPaused = $state(false);
  let timer: ReturnType<typeof setInterval> | null = null;
  let progressKey = $state(0);

  const AUTOPLAY_INTERVAL = 5000;

  function syncStore(): void {
    activePersona.set(activeIndex);
  }

  function startAutoplay(): void {
    stopAutoplay();
    progressKey++;
    timer = setInterval(() => {
      if (!isPaused) {
        activeIndex = (activeIndex + 1) % cards.length;
        progressKey++;
        syncStore();
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
    progressKey++;
    syncStore();
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
    syncStore();
    startAutoplay();
  });

  onDestroy(() => {
    stopAutoplay();
  });

  const icons: Record<string, string> = {
    terminal: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z',
    shield: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    rocket: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    briefcase: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0',
  };
</script>

{#if layout === 'bridge'}
  <!-- BRIDGE: Unified floating bar straddling hero/features boundary -->
  <div
    class="backdrop-blur-xl bg-white/80 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-700/50 shadow-2xl rounded-2xl overflow-hidden"
    role="tablist"
    aria-label="Choose your role"
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
  >
    <div class="grid grid-cols-4">
      {#each cards as card, i}
        <button
          class="bridge-card group relative text-left cursor-pointer transition-all duration-300 px-5 py-4
            {i === activeIndex ? 'bg-black/[0.04] dark:bg-white/10' : 'hover:bg-black/[0.02] dark:hover:bg-white/5'}
            {i < cards.length - 1 ? 'border-r border-neutral-200 dark:border-neutral-800' : ''}"
          role="tab"
          tabindex="0"
          aria-selected={i === activeIndex}
          onclick={() => selectCard(i)}
          onkeydown={(e) => handleKeydown(e, i)}
        >
          <div class="flex items-start gap-3">
            <!-- Icon -->
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300
              {i === activeIndex ? card.iconColour : 'text-neutral-400 dark:text-white/40'}">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d={icons[card.icon]} />
              </svg>
            </div>

            <!-- Text -->
            <div class="flex-1 min-w-0">
              <span class="block text-[10px] font-heading font-bold uppercase tracking-[0.12em] mb-0.5 transition-colors duration-300
                {i === activeIndex ? 'text-neutral-500 dark:text-white/60' : 'text-neutral-300 dark:text-white/30'}">
                {card.label}
              </span>
              <span class="block font-heading font-bold text-sm leading-snug transition-colors duration-300
                {i === activeIndex ? 'text-neutral-900 dark:text-white' : 'text-neutral-400 dark:text-white/50'}">
                {card.hook}
              </span>
              <!-- Description — visible on active only -->
              <span class="block text-xs leading-relaxed mt-1 transition-all duration-300
                {i === activeIndex ? 'text-neutral-500 dark:text-white/40 max-h-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}">
                {card.description}
              </span>
            </div>
          </div>

          <!-- Progress bar at bottom of active segment -->
          {#if i === activeIndex}
            <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-200 dark:bg-white/5">
              {#key progressKey}
                <div class="h-full rounded-full {card.glowBg} progress-animate"></div>
              {/key}
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </div>

{:else}
  <!-- MOBILE: 2x2 grid (shows all cards without scrolling) -->
  <div
    class="grid grid-cols-2 gap-3.5"
    role="tablist"
    aria-label="Choose your role"
  >
    {#each cards as card, i}
      <button
        class="mobile-card relative text-left rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-t-2 p-4
          backdrop-blur-sm border border-neutral-200 dark:border-neutral-700/50
          {i === activeIndex
            ? `bg-white/70 dark:bg-white/[0.08] ${card.borderTop} shadow-md`
            : 'bg-white/40 dark:bg-white/[0.03] border-t-transparent opacity-60 hover:opacity-100'}"
        role="tab"
        tabindex="0"
        aria-selected={i === activeIndex}
        onclick={() => selectCard(i)}
        onkeydown={(e) => handleKeydown(e, i)}
      >
        <div class="flex items-start gap-3">
          <div class="min-w-0 flex-1">
            <span class="block text-[11px] font-heading font-bold uppercase tracking-[0.12em] mb-0.5
              {i === activeIndex ? 'text-foreground/50 dark:text-white/50' : 'text-foreground/20 dark:text-white/20'}">
              {card.label}
            </span>
            <span class="block font-heading font-bold text-sm leading-snug
              {i === activeIndex ? 'text-foreground dark:text-white' : 'text-foreground/40 dark:text-white/35'}">
              {card.hook}
            </span>
          </div>
          <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300
            {i === activeIndex ? card.iconColour : 'text-foreground/30 dark:text-white/30'}">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d={icons[card.icon]} />
            </svg>
          </div>
        </div>
        <!-- Description — full width below icon+heading row -->
        <span class="block text-xs leading-relaxed mt-2 transition-all duration-300
          {i === activeIndex ? 'text-foreground/50 dark:text-white/40 max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}">
          {card.description}
        </span>

        {#if i === activeIndex}
          <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground/5 dark:bg-white/5">
            {#key progressKey}
              <div class="h-full rounded-full {card.glowBg} progress-animate"></div>
            {/key}
          </div>
        {/if}
      </button>
    {/each}
  </div>
{/if}

<style>
  @keyframes progress-fill {
    from { width: 0%; }
    to { width: 100%; }
  }

  .progress-animate {
    animation: progress-fill 5s linear forwards;
  }

  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
