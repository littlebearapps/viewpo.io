<script lang="ts">
  let activeDevice = $state(0);

  const devices = ['Phone', 'Tablet', 'MacBook', 'Desktop'];
</script>

<div class="w-full flex flex-col items-center gap-3">
  <!-- Buttons (left) + Device (right) -->
  <div class="flex items-center gap-4 w-full justify-center">
    <!-- Vertical preset buttons -->
    <div class="flex flex-col gap-1.5">
      {#each devices as device, i}
        <button
          type="button"
          class="px-3 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all duration-200 cursor-pointer text-left {activeDevice === i
            ? 'bg-primary/15 text-primary dark:bg-primary/20 ring-1 ring-primary/30'
            : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'}"
          onclick={() => activeDevice = i}
        >
          {device}
        </button>
      {/each}
    </div>

    <!-- Device display area — crossfade between mockups -->
    <div class="relative flex items-end justify-center flex-1" style="height: 190px;">
      <!-- Phone -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-400 {activeDevice === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}">
        <div class="w-[90px] rounded-xl border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
          <div class="h-3.5 flex items-center justify-center bg-neutral-50 dark:bg-neutral-700/50">
            <div class="w-10 h-2.5 bg-neutral-900 dark:bg-neutral-600 rounded-full"></div>
          </div>
          <div class="px-2 py-1.5 space-y-1">
            <div class="h-2.5 w-full bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
            <div class="h-1.5 w-3/4 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
            <div class="h-12 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm mt-1"></div>
            <div class="h-1.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
            <div class="h-1.5 w-2/3 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
            <div class="h-6 w-3/4 bg-neutral-100 dark:bg-neutral-700 rounded-sm mt-1"></div>
            <div class="h-1.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
            <div class="h-1.5 w-1/2 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
          </div>
          <div class="flex justify-center py-2">
            <div class="w-8 h-[2px] bg-neutral-300 dark:bg-neutral-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Tablet -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-400 {activeDevice === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}">
        <div class="w-[150px] rounded-xl border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
          <div class="h-3 flex items-center justify-center bg-neutral-50 dark:bg-neutral-700/50">
            <div class="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          </div>
          <div class="px-2.5 py-2 space-y-1.5">
            <div class="h-3 w-2/3 bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
            <div class="h-1.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
            <div class="h-1.5 w-3/4 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
            <div class="grid grid-cols-2 gap-1.5 mt-1.5">
              <div class="h-12 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
              <div class="h-12 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
            </div>
            <div class="h-1.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm mt-1.5"></div>
            <div class="h-1.5 w-1/2 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
          </div>
          <div class="flex justify-center py-2">
            <div class="w-8 h-[2px] bg-neutral-300 dark:bg-neutral-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- MacBook -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-400 {activeDevice === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}">
        <div class="w-[230px]">
          <div class="rounded-t-lg border-2 border-b-0 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
            <div class="h-3.5 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700/50 border-b border-neutral-200 dark:border-neutral-600">
              <div class="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            </div>
            <div class="p-3 space-y-1.5">
              <div class="flex gap-2.5">
                <div class="w-1/4 space-y-1.5">
                  <div class="h-2 w-full bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
                  <div class="h-1 w-3/4 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  <div class="h-1 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  <div class="h-1 w-2/3 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                </div>
                <div class="flex-1 space-y-1.5">
                  <div class="h-3 w-1/2 bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
                  <div class="h-1 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  <div class="h-1 w-4/5 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  <div class="grid grid-cols-3 gap-1.5 mt-1.5">
                    <div class="h-10 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-10 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-10 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-[3px] bg-neutral-300 dark:bg-neutral-500 rounded-b-sm"></div>
          <div class="h-2 bg-neutral-200 dark:bg-neutral-600 rounded-b-lg mx-[-4px] border-t border-neutral-300 dark:border-neutral-500"></div>
        </div>
      </div>

      <!-- Desktop -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-400 {activeDevice === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}">
        <div class="w-[260px]">
          <div class="rounded-t-lg border-2 border-b-0 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
            <div class="h-2.5 bg-neutral-200 dark:bg-neutral-700/50"></div>
            <div class="p-3 space-y-1.5">
              <div class="flex items-center gap-1.5 pb-1">
                <div class="w-12 h-2.5 bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
                <div class="flex-1"></div>
                <div class="w-6 h-2.5 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                <div class="w-6 h-2.5 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                <div class="w-8 h-2.5 bg-primary/30 rounded-sm"></div>
              </div>
              <div class="flex gap-2.5">
                <div class="w-1/4 space-y-1.5">
                  <div class="h-2 w-full bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
                  <div class="h-1 w-3/4 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  <div class="h-1 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  <div class="h-1 w-1/2 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                </div>
                <div class="flex-1 space-y-1.5">
                  <div class="h-3.5 w-2/3 bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
                  <div class="h-1 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  <div class="h-1 w-5/6 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  <div class="grid grid-cols-4 gap-1.5 mt-1.5">
                    <div class="h-8 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-8 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-8 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-8 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-2.5 bg-neutral-200 dark:bg-neutral-600 rounded-b-sm border-t-2 border-neutral-300 dark:border-neutral-500 flex items-center justify-center">
            <div class="w-5 h-0.5 bg-neutral-300 dark:bg-neutral-500 rounded-full"></div>
          </div>
          <div class="h-4 w-5 bg-neutral-300 dark:bg-neutral-500 mx-auto rounded-b-sm"></div>
          <div class="h-1.5 w-14 bg-neutral-300 dark:bg-neutral-500 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Preset count badge -->
  <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/8 dark:bg-primary/10">
    <span class="text-[10px] font-heading font-semibold text-primary/70 dark:text-primary/60">23 presets + custom sizes</span>
  </div>
</div>
