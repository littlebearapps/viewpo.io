<script lang="ts">
  import { slide } from 'svelte/transition';

  interface FAQItem {
    question: string;
    answer: string;
  }

  let { items }: { items: FAQItem[] } = $props();
  let openIndex = $state<number | null>(null);

  function toggle(index: number): void {
    openIndex = openIndex === index ? null : index;
  }

  function handleKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle(index);
    }
  }
</script>

<div class="space-y-0">
  {#each items as item, i}
    <div class="border-b border-neutral-200 dark:border-neutral-800">
      <button
        type="button"
        class="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer select-none group"
        aria-expanded={openIndex === i}
        onclick={() => toggle(i)}
        onkeydown={(e) => handleKeydown(e, i)}
      >
        <span class="font-heading font-semibold text-base text-foreground dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {item.question}
        </span>
        <svg
          class="w-5 h-5 text-foreground/30 dark:text-neutral-600 flex-shrink-0 transition-transform duration-200 {openIndex === i ? 'rotate-45' : ''}"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

      {#if openIndex === i}
        <div transition:slide={{ duration: 200 }}>
          <p class="pb-5 text-foreground/55 dark:text-neutral-400 leading-relaxed text-sm pr-10">
            {item.answer}
          </p>
        </div>
      {/if}
    </div>
  {/each}
</div>
