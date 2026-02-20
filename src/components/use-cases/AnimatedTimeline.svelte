<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  interface TimelineEntry {
    time: string;
    action: string;
  }

  let {
    entries,
    accentText,
    accentBg,
    accentBorder,
  }: {
    entries: TimelineEntry[];
    accentText: string;
    accentBg: string;
    accentBorder: string;
  } = $props();

  let timelineEl: HTMLElement | undefined = $state();
  let visibleCount = $state(0);
  let lineProgress = $state(0);
  let observer: IntersectionObserver | null = null;
  let reduceMotion = $state(false);

  onMount(() => {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      visibleCount = entries.length;
      lineProgress = 100;
      return;
    }

    if (!timelineEl) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let count = 0;
          const interval = setInterval(() => {
            count++;
            visibleCount = count;
            lineProgress = (count / entries.length) * 100;
            if (count >= entries.length) clearInterval(interval);
          }, 150);
          observer?.unobserve(timelineEl!);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(timelineEl);
  });

  onDestroy(() => observer?.disconnect());
</script>

<div
  bind:this={timelineEl}
  class="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-foreground/[0.02] dark:bg-white/[0.02] overflow-hidden"
>
  <div class="p-5 sm:p-6 relative">
    <!-- Animated vertical line -->
    <div
      class="absolute left-[4.25rem] sm:left-[4.75rem] top-6 bottom-6 w-px bg-neutral-200 dark:bg-neutral-700 overflow-hidden"
      aria-hidden="true"
    >
      <div
        class={`w-full ${accentBg} opacity-60`}
        style="height: {lineProgress}%; transition: height 0.5s ease-out;"
      ></div>
    </div>

    <!-- Entries -->
    <div class="space-y-0">
      {#each entries as entry, i}
        <div
          class="flex gap-4 items-start py-2.5"
          style="opacity: {i < visibleCount ? 1 : 0}; transform: translateY({i < visibleCount ? 0 : 8}px); transition: opacity 0.3s ease-out, transform 0.3s ease-out;"
        >
          {#if entry.time}
            <span class={`flex-shrink-0 w-16 sm:w-20 text-xs font-mono font-semibold ${accentText} pt-0.5 text-right`}>
              {entry.time}
            </span>
          {:else}
            <span class="flex-shrink-0 w-16 sm:w-20"></span>
          {/if}

          <!-- Dot -->
          <div class="flex-shrink-0 relative z-10">
            <div
              class={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                entry.time
                  ? `${accentBg} ${accentBorder}`
                  : 'bg-neutral-200 dark:bg-neutral-600 border-neutral-300 dark:border-neutral-500'
              }`}
              style="transform: scale({i < visibleCount ? 1 : 0}); transition: transform 0.3s ease-out;"
            ></div>
          </div>

          <p class="text-sm text-foreground/70 dark:text-neutral-300 leading-relaxed">
            {entry.action}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>
