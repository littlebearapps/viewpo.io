<script lang="ts">
  import { activePersona } from '../lib/heroStore';

  let currentIndex = $state(0);

  // Subscribe to the shared store
  const unsubscribe = activePersona.subscribe((value) => {
    currentIndex = value;
  });

  import { onDestroy } from 'svelte';
  onDestroy(() => unsubscribe());
</script>

<div class="phone-display relative mx-auto" aria-hidden="true">
  <!-- Phone frame -->
  <div class="relative w-[240px] sm:w-[260px] lg:w-[280px] xl:w-[300px] mx-auto">
    <!-- Outer bezel -->
    <div class="rounded-[2.5rem] border-[3px] border-neutral-300 dark:border-neutral-600/50 bg-neutral-100 dark:bg-neutral-900 shadow-2xl shadow-black/15 dark:shadow-black/50 overflow-hidden">

      <!-- Screen area -->
      <div class="relative bg-white dark:bg-neutral-800 overflow-hidden" style="aspect-ratio: 9/16;">

        <!-- Status bar row with Dynamic Island centred -->
        <div class="relative z-20 flex items-center justify-between px-5 pt-2.5 pb-1.5">
          <!-- Left: Time -->
          <span class="text-[9px] font-semibold text-neutral-900 dark:text-white/80 w-10">9:41</span>

          <!-- Centre: Dynamic Island pill -->
          <div class="w-[80px] h-[24px] bg-black rounded-full flex items-center justify-center shadow-sm">
            <div class="w-2.5 h-2.5 rounded-full bg-neutral-900 ring-1 ring-neutral-700">
              <div class="w-1 h-1 rounded-full bg-neutral-600/50 mt-[3px] ml-[3px]"></div>
            </div>
          </div>

          <!-- Right: Signal + Wi-Fi + Battery -->
          <div class="flex items-center gap-1 w-10 justify-end">
            <!-- Signal bars -->
            <svg class="w-3 h-2 text-neutral-900 dark:text-white/80" viewBox="0 0 17 10" fill="currentColor">
              <rect x="0" y="7" width="3" height="3" rx="0.5"/>
              <rect x="4.5" y="4.5" width="3" height="5.5" rx="0.5"/>
              <rect x="9" y="2" width="3" height="8" rx="0.5"/>
              <rect x="13.5" y="0" width="3" height="10" rx="0.5"/>
            </svg>
            <!-- Wi-Fi -->
            <svg class="w-3 h-2.5 text-neutral-900 dark:text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M1.5 8.5c5.8-5.3 15.2-5.3 21 0" stroke-linecap="round"/>
              <path d="M5.5 12.5c3.6-3.3 9.4-3.3 13 0" stroke-linecap="round"/>
              <path d="M9.5 16.5c1.4-1.3 3.6-1.3 5 0" stroke-linecap="round"/>
              <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/>
            </svg>
            <!-- Battery -->
            <div class="flex items-center gap-0.5">
              <div class="w-4 h-2 border border-neutral-900/50 dark:border-white/50 rounded-sm p-[1px]">
                <div class="w-full h-full bg-neutral-900 dark:bg-emerald-400 rounded-[1px]"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cross-fading screen content -->
        <!-- Screen 0: Developers — Terminal + Push Notification -->
        <div class="screen-content absolute inset-0 transition-opacity duration-500 pt-10 px-3 pb-3"
          class:opacity-100={currentIndex === 0}
          class:opacity-0={currentIndex !== 0}>
          <!-- Terminal window -->
          <div class="bg-neutral-100 dark:bg-black/60 rounded-lg p-2.5 mb-3 border border-neutral-200 dark:border-white/[0.06]">
            <div class="flex items-center gap-1.5 mb-2">
              <div class="w-2 h-2 rounded-full bg-red-400/80"></div>
              <div class="w-2 h-2 rounded-full bg-yellow-400/80"></div>
              <div class="w-2 h-2 rounded-full bg-emerald-400/80"></div>
              <span class="text-[8px] text-neutral-400 dark:text-white/30 ml-1">terminal</span>
            </div>
            <div class="font-mono text-[9px] leading-relaxed space-y-0.5">
              <p class="text-emerald-600 dark:text-emerald-400">$ git push origin main</p>
              <p class="text-neutral-500 dark:text-white/50">Enumerating objects: 12, done.</p>
              <p class="text-neutral-500 dark:text-white/50">remote: Build started...</p>
              <p class="text-cyan-600 dark:text-cyan-400">&#10003; Deploy successful</p>
            </div>
          </div>
          <!-- Push notification -->
          <div class="bg-neutral-100 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-neutral-200 dark:border-white/10 flex items-start gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </div>
            <div>
              <p class="text-[10px] font-bold text-neutral-900 dark:text-white">Viewpo</p>
              <p class="text-[9px] text-neutral-500 dark:text-white/60">New deploy ready — tap to preview at 1440&#215;900</p>
            </div>
          </div>
        </div>

        <!-- Screen 1: Managers — Slack Message + Approval -->
        <div class="screen-content absolute inset-0 transition-opacity duration-500 pt-10 px-3 pb-3"
          class:opacity-100={currentIndex === 1}
          class:opacity-0={currentIndex !== 1}>
          <!-- Slack-style message -->
          <div class="bg-neutral-100 dark:bg-white/[0.06] rounded-xl p-3 mb-3 border border-neutral-200 dark:border-white/[0.06]">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-6 h-6 rounded bg-purple-500/50 flex items-center justify-center text-[8px] text-white font-bold">S</div>
              <div>
                <p class="text-[10px] font-bold text-neutral-900 dark:text-white/90">#design-reviews</p>
                <p class="text-[8px] text-neutral-400 dark:text-white/40">Sarah posted</p>
              </div>
            </div>
            <p class="text-[9px] text-neutral-600 dark:text-white/60 leading-relaxed">Hey team — homepage refresh is live on staging. Check it on mobile?</p>
            <div class="mt-2 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-lg p-2 border border-indigo-500/15 dark:border-indigo-500/20">
              <p class="text-[8px] text-indigo-600 dark:text-indigo-300">&#128279; viewpo.link/preview/abc123</p>
            </div>
          </div>
          <!-- Viewpo approval -->
          <div class="bg-emerald-50 dark:bg-emerald-500/10 rounded-xl p-3 border border-emerald-200 dark:border-emerald-500/20">
            <div class="flex items-center gap-2 mb-1.5">
              <svg class="w-4 h-4 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <p class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Approved</p>
            </div>
            <p class="text-[9px] text-neutral-500 dark:text-white/50">3 of 3 reviewers approved</p>
          </div>
        </div>

        <!-- Screen 2: Founders — Twitter compose with screenshot -->
        <div class="screen-content absolute inset-0 transition-opacity duration-500 pt-10 px-3 pb-3"
          class:opacity-100={currentIndex === 2}
          class:opacity-0={currentIndex !== 2}>
          <!-- Twitter/X compose -->
          <div class="bg-neutral-100 dark:bg-white/[0.06] rounded-xl p-3 border border-neutral-200 dark:border-white/[0.06]">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600"></div>
              <div class="flex-1">
                <p class="text-[10px] font-bold text-neutral-900 dark:text-white">New post</p>
              </div>
              <div class="px-3 py-1 bg-sky-500 rounded-full">
                <span class="text-[9px] font-bold text-white">Post</span>
              </div>
            </div>
            <p class="text-[10px] text-neutral-700 dark:text-white/80 leading-relaxed mb-2.5">Just shipped the new landing page &#128640; Here's what it looks like on mobile vs desktop — built in public, day 47.</p>
            <!-- Viewpo screenshot attachment -->
            <div class="rounded-lg overflow-hidden border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.04]">
              <div class="h-16 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-500/20 dark:to-violet-500/20 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-10 h-14 mx-auto bg-white dark:bg-neutral-700 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center mb-0.5">
                    <div class="w-6 h-1 bg-neutral-200 dark:bg-white/10 rounded"></div>
                  </div>
                  <p class="text-[7px] text-neutral-400 dark:text-white/30">viewpo preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Screen 3: Agencies — iMessage with client -->
        <div class="screen-content absolute inset-0 transition-opacity duration-500 pt-10 px-3 pb-3"
          class:opacity-100={currentIndex === 3}
          class:opacity-0={currentIndex !== 3}>
          <!-- iMessage header -->
          <div class="flex items-center justify-center gap-2 mb-3">
            <div class="w-7 h-7 rounded-full bg-orange-100 dark:bg-orange-400/30 flex items-center justify-center text-[9px] font-bold text-orange-600 dark:text-orange-300">JK</div>
            <div>
              <p class="text-[10px] font-bold text-neutral-900 dark:text-white">Jane Kim</p>
              <p class="text-[8px] text-neutral-400 dark:text-white/40">Client — Acme Corp</p>
            </div>
          </div>
          <!-- Message bubbles -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <div class="bg-indigo-500 rounded-2xl rounded-br-sm px-3 py-1.5 max-w-[80%]">
                <p class="text-[9px] text-white leading-relaxed">Hey Jane — here's the latest homepage. Tap to preview on your phone:</p>
              </div>
            </div>
            <div class="flex justify-end">
              <div class="bg-indigo-500/80 rounded-2xl rounded-br-sm px-3 py-1.5 max-w-[80%]">
                <p class="text-[9px] text-indigo-100">&#128279; viewpo.link/acme-redesign</p>
              </div>
            </div>
            <div class="flex justify-start">
              <div class="bg-neutral-100 dark:bg-white/10 rounded-2xl rounded-bl-sm px-3 py-1.5 max-w-[80%]">
                <p class="text-[9px] text-neutral-700 dark:text-white/80 leading-relaxed">Looks great on my iPhone! Approved &#9989;</p>
              </div>
            </div>
            <div class="flex justify-start">
              <div class="bg-neutral-100 dark:bg-white/10 rounded-2xl rounded-bl-sm px-3 py-1.5 max-w-[80%]">
                <p class="text-[9px] text-neutral-700 dark:text-white/80">Can we make the CTA bigger?</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Home indicator -->
      <div class="flex justify-center py-1.5 bg-white dark:bg-neutral-800">
        <div class="w-24 h-1 bg-neutral-300 dark:bg-white/15 rounded-full"></div>
      </div>
    </div>
  </div>
</div>

<style>
  .screen-content {
    will-change: opacity;
  }
</style>
