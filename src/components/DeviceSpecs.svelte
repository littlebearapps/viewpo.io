<script lang="ts">
  interface DeviceCard {
    name: string;
    icon: string;
    status: 'live' | 'beta' | 'roadmap';
    statusLabel: string;
    cta: string;
    ctaAction: string;
  }

  let { items }: { items: DeviceCard[] } = $props();

  const statusStyles: Record<string, { dot: string; text: string }> = {
    live: {
      dot: 'bg-emerald-500',
      text: 'text-emerald-600 dark:text-emerald-400',
    },
    beta: {
      dot: 'bg-amber-400',
      text: 'text-amber-600 dark:text-amber-400',
    },
    roadmap: {
      dot: 'bg-neutral-400 dark:bg-neutral-600',
      text: 'text-neutral-500 dark:text-neutral-500',
    },
  };
</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-4xl mx-auto">
  {#each items as card, i}
    <div class="reveal reveal-delay-{i + 1} flex flex-col items-center text-center border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm">
      <!-- Platform icon -->
      <div class="w-8 h-8 sm:w-10 sm:h-10 text-foreground/50 dark:text-neutral-500 mb-3 sm:mb-4">
        <svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          {@html card.icon}
        </svg>
      </div>

      <!-- Device name -->
      <h3 class="font-heading font-semibold text-sm sm:text-base text-foreground dark:text-white mb-2 sm:mb-3">
        {card.name}
      </h3>

      <!-- Status row -->
      <div class="flex items-center gap-1.5 mb-4 sm:mb-5">
        <span class="relative flex h-2 w-2">
          {#if card.status === 'live'}
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          {/if}
          <span class="relative inline-flex rounded-full h-2 w-2 {statusStyles[card.status].dot}"></span>
        </span>
        <span class="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider {statusStyles[card.status].text}">
          {card.statusLabel}
        </span>
      </div>

      <!-- Ghost CTA button -->
      <button
        type="button"
        {...(card.ctaAction === 'signup' ? { 'data-open-signup': '' } : card.ctaAction === 'notify' ? { 'data-open-signup': 'notify' } : {})}
        class="mt-auto w-full inline-flex items-center justify-center gap-1.5 font-heading font-medium text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-foreground/70 dark:text-neutral-400 hover:border-primary/40 hover:text-primary dark:hover:text-primary transition-all duration-200 cursor-pointer plausible-event-name=Device+{card.name.replace(/\s+/g, '+')}"
      >
        {card.cta}
      </button>
    </div>
  {/each}
</div>

<style>
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
</style>
