<script lang="ts">
  let { title, description, span = '1', visual }: {
    title: string;
    description: string;
    span?: '1' | '2';
    visual: string;
  } = $props();

  let hovered = $state(false);
</script>

<div
  class="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/50 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 h-full flex flex-row md:flex-col"
  class:md:col-span-2={span === '2'}
  role="listitem"
  onmouseenter={() => hovered = true}
  onmouseleave={() => hovered = false}
>
  <!-- Visual area -->
  <div class="relative w-28 shrink-0 md:w-auto md:flex-1 min-h-[120px] md:min-h-[200px] p-4 md:p-6 md:pb-0 flex items-center justify-center overflow-hidden order-2 md:order-none">
    {#if visual === 'dashboard'}
      <!-- Universal Dashboard mock UI -->
      <div class="w-full max-w-md rounded-xl border border-neutral-200 dark:border-neutral-700/50 bg-neutral-50 dark:bg-neutral-800/80 overflow-hidden shadow-sm transition-transform duration-500" class:scale-[1.02]={hovered}>
        <!-- Header bar -->
        <div class="flex items-center gap-2 px-4 py-2.5 border-b border-neutral-200 dark:border-neutral-700/50">
          <div class="w-2.5 h-2.5 rounded-full bg-red-400/70"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-green-400/70"></div>
          <span class="ml-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-500">All Deploys</span>
        </div>
        <!-- Deploy rows -->
        <div class="divide-y divide-neutral-100 dark:divide-neutral-700/30">
          {#each [
            { provider: 'Vercel', branch: 'main', status: 'Ready', color: 'bg-emerald-400', time: '2m ago' },
            { provider: 'Cloudflare', branch: 'feature/auth', status: 'Building', color: 'bg-amber-400', time: '45s ago' },
            { provider: 'Netlify', branch: 'fix/nav', status: 'Ready', color: 'bg-emerald-400', time: '8m ago' },
            { provider: 'Vercel', branch: 'staging', status: 'Failed', color: 'bg-red-400', time: '12m ago' },
          ] as row}
            <div class="flex items-center justify-between px-4 py-2.5 text-[11px]">
              <div class="flex items-center gap-2.5">
                <div class="w-1.5 h-1.5 rounded-full {row.color}"></div>
                <span class="font-medium text-neutral-700 dark:text-neutral-300 w-16">{row.provider}</span>
                <span class="font-mono text-neutral-400 dark:text-neutral-500">{row.branch}</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-neutral-400 dark:text-neutral-500">{row.time}</span>
                <span class="font-medium" class:text-emerald-500={row.status === 'Ready'} class:text-amber-500={row.status === 'Building'} class:text-red-500={row.status === 'Failed'}>{row.status}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>

    {:else if visual === 'performance'}
      <!-- Native Performance — 60fps badge -->
      <div class="flex flex-col items-center gap-2 md:gap-3 transition-transform duration-500" class:scale-[1.05]={hovered}>
        <div class="relative">
          <svg class="w-16 h-16 md:w-28 md:h-28" viewBox="0 0 120 120">
            <!-- Background ring -->
            <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" stroke-width="6" class="text-neutral-200 dark:text-neutral-700" />
            <!-- Progress ring -->
            <circle cx="60" cy="60" r="50" fill="none" stroke="url(#perf-gradient)" stroke-width="6" stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="28" transform="rotate(-90 60 60)" class="transition-all duration-700" />
            <defs>
              <linearGradient id="perf-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#6366F1" />
                <stop offset="100%" stop-color="#10B981" />
              </linearGradient>
            </defs>
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="text-xl md:text-3xl font-heading font-bold text-neutral-800 dark:text-white">60</span>
            <span class="text-[10px] font-heading font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">fps</span>
          </div>
        </div>
        <div class="hidden md:flex gap-2">
          {#each ['SwiftUI', 'Metal', '120Hz'] as tag}
            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">{tag}</span>
          {/each}
        </div>
      </div>

    {:else if visual === 'qr'}
      <!-- QR Code that scales on hover -->
      <div class="transition-transform duration-500 ease-out" class:scale-110={hovered}>
        <div class="w-16 h-16 md:w-32 md:h-32 rounded-lg md:rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-1.5 md:p-3 shadow-sm">
          <svg viewBox="0 0 100 100" class="w-full h-full text-neutral-800 dark:text-neutral-200">
            <!-- Simplified QR pattern -->
            <rect x="5" y="5" width="25" height="25" rx="3" fill="currentColor"/>
            <rect x="70" y="5" width="25" height="25" rx="3" fill="currentColor"/>
            <rect x="5" y="70" width="25" height="25" rx="3" fill="currentColor"/>
            <rect x="10" y="10" width="15" height="15" rx="2" fill="currentColor" opacity="0.3"/>
            <rect x="75" y="10" width="15" height="15" rx="2" fill="currentColor" opacity="0.3"/>
            <rect x="10" y="75" width="15" height="15" rx="2" fill="currentColor" opacity="0.3"/>
            <!-- Data modules -->
            <rect x="35" y="5" width="8" height="8" rx="1" fill="currentColor" opacity="0.7"/>
            <rect x="48" y="5" width="8" height="8" rx="1" fill="currentColor" opacity="0.5"/>
            <rect x="35" y="18" width="8" height="8" rx="1" fill="currentColor" opacity="0.6"/>
            <rect x="48" y="18" width="8" height="8" rx="1" fill="currentColor" opacity="0.8"/>
            <rect x="57" y="18" width="8" height="8" rx="1" fill="currentColor" opacity="0.4"/>
            <rect x="35" y="35" width="8" height="8" rx="1" fill="currentColor" opacity="0.5"/>
            <rect x="48" y="35" width="8" height="8" rx="1" fill="currentColor" opacity="0.7"/>
            <rect x="57" y="35" width="8" height="8" rx="1" fill="currentColor" opacity="0.6"/>
            <rect x="70" y="35" width="8" height="8" rx="1" fill="currentColor" opacity="0.5"/>
            <rect x="83" y="35" width="8" height="8" rx="1" fill="currentColor" opacity="0.8"/>
            <rect x="5" y="48" width="8" height="8" rx="1" fill="currentColor" opacity="0.6"/>
            <rect x="18" y="48" width="8" height="8" rx="1" fill="currentColor" opacity="0.4"/>
            <rect x="35" y="48" width="8" height="8" rx="1" fill="currentColor" opacity="0.7"/>
            <rect x="57" y="48" width="8" height="8" rx="1" fill="currentColor" opacity="0.5"/>
            <rect x="70" y="48" width="8" height="8" rx="1" fill="currentColor" opacity="0.6"/>
            <rect x="83" y="48" width="8" height="8" rx="1" fill="currentColor" opacity="0.7"/>
            <rect x="48" y="57" width="8" height="8" rx="1" fill="currentColor" opacity="0.5"/>
            <rect x="57" y="57" width="8" height="8" rx="1" fill="currentColor" opacity="0.8"/>
            <rect x="35" y="70" width="8" height="8" rx="1" fill="currentColor" opacity="0.6"/>
            <rect x="48" y="70" width="8" height="8" rx="1" fill="currentColor" opacity="0.4"/>
            <rect x="70" y="70" width="8" height="8" rx="1" fill="currentColor" opacity="0.7"/>
            <rect x="83" y="70" width="8" height="8" rx="1" fill="currentColor" opacity="0.5"/>
            <rect x="35" y="83" width="8" height="8" rx="1" fill="currentColor" opacity="0.8"/>
            <rect x="57" y="83" width="8" height="8" rx="1" fill="currentColor" opacity="0.6"/>
            <rect x="70" y="83" width="8" height="8" rx="1" fill="currentColor" opacity="0.4"/>
            <rect x="83" y="83" width="8" height="8" rx="1" fill="currentColor" opacity="0.7"/>
          </svg>
        </div>
      </div>

    {:else if visual === 'github'}
      <!-- GitHub PR merge icon -->
      <div class="transition-transform duration-500" class:scale-[1.05]={hovered}>
        <div class="relative w-16 h-16 md:w-36 md:h-36">
          <svg viewBox="0 0 100 100" class="w-full h-full">
            <!-- Main branch line -->
            <line x1="35" y1="15" x2="35" y2="85" stroke="currentColor" stroke-width="3" class="text-neutral-300 dark:text-neutral-600" />
            <!-- Feature branch -->
            <path d="M65 25 C65 45, 50 55, 35 65" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" class="text-primary" />
            <!-- Commit dots -->
            <circle cx="35" cy="15" r="5" fill="currentColor" class="text-neutral-400 dark:text-neutral-500" />
            <circle cx="35" cy="45" r="5" fill="currentColor" class="text-neutral-400 dark:text-neutral-500" />
            <circle cx="65" cy="25" r="5" fill="currentColor" class="text-primary" />
            <!-- Merge point -->
            <circle cx="35" cy="65" r="7" fill="currentColor" class="text-emerald-500" />
            <path d="M30 65 L33 68 L40 61" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
            <!-- Bottom commit -->
            <circle cx="35" cy="85" r="5" fill="currentColor" class="text-neutral-400 dark:text-neutral-500" />
          </svg>
        </div>
        <div class="hidden md:flex absolute bottom-6 left-6 right-6 items-center gap-2">
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Merged</span>
          <span class="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">#142 → main</span>
        </div>
      </div>

    {:else if visual === 'regression'}
      <!-- Visual Regression side-by-side -->
      <div class="w-full max-w-md transition-transform duration-500" class:scale-[1.02]={hovered}>
        <div class="flex gap-3">
          <!-- Before -->
          <div class="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-700/50 overflow-hidden bg-neutral-50 dark:bg-neutral-800/80">
            <div class="px-3 py-1.5 border-b border-neutral-200 dark:border-neutral-700/50 text-[10px] font-mono text-neutral-400 dark:text-neutral-500">Before</div>
            <div class="p-3 space-y-2">
              <div class="h-2.5 w-3/4 rounded bg-neutral-300 dark:bg-neutral-600"></div>
              <div class="h-2 w-full rounded bg-neutral-200 dark:bg-neutral-700"></div>
              <div class="h-2 w-5/6 rounded bg-neutral-200 dark:bg-neutral-700"></div>
              <div class="h-8 w-full rounded bg-neutral-200 dark:bg-neutral-700 mt-3"></div>
              <div class="flex gap-2 mt-2">
                <div class="h-6 w-16 rounded bg-neutral-300 dark:bg-neutral-600"></div>
                <div class="h-6 w-12 rounded bg-neutral-200 dark:bg-neutral-700"></div>
              </div>
            </div>
          </div>
          <!-- Diff indicator -->
          <div class="flex flex-col items-center justify-center gap-1">
            <svg class="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
            <span class="text-[9px] font-mono text-amber-400">3 diffs</span>
          </div>
          <!-- After -->
          <div class="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-700/50 overflow-hidden bg-neutral-50 dark:bg-neutral-800/80">
            <div class="px-3 py-1.5 border-b border-neutral-200 dark:border-neutral-700/50 text-[10px] font-mono text-neutral-400 dark:text-neutral-500">After</div>
            <div class="p-3 space-y-2">
              <div class="h-2.5 w-3/4 rounded bg-neutral-300 dark:bg-neutral-600"></div>
              <div class="h-2 w-full rounded bg-neutral-200 dark:bg-neutral-700"></div>
              <div class="h-2 w-5/6 rounded bg-neutral-200 dark:bg-neutral-700"></div>
              <div class="h-10 w-full rounded bg-red-200/50 dark:bg-red-500/20 border border-red-300 dark:border-red-500/30 mt-3"></div>
              <div class="flex gap-2 mt-2">
                <div class="h-6 w-20 rounded bg-red-200/50 dark:bg-red-500/20 border border-red-300 dark:border-red-500/30"></div>
                <div class="h-6 w-12 rounded bg-neutral-200 dark:bg-neutral-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Text content -->
  <div class="p-4 md:p-6 md:pt-4 flex-1 flex flex-col justify-center order-1 md:order-none">
    <h3 class="font-heading font-semibold text-base md:text-lg text-neutral-900 dark:text-white mb-1 md:mb-1.5">{title}</h3>
    <p class="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{description}</p>
  </div>
</div>
