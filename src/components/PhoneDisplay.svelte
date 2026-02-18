<script lang="ts">
  import { activePersona } from '../lib/heroStore';

  let currentIndex = $state(0);

  // Subscribe to the shared store
  const unsubscribe = activePersona.subscribe((value) => {
    currentIndex = value;
  });

  import { onDestroy } from 'svelte';
  onDestroy(() => unsubscribe());

  // Screen content definitions for each persona
  const screens = [
    { id: 'developers', accent: 'indigo' },
    { id: 'managers', accent: 'emerald' },
    { id: 'founders', accent: 'orange' },
    { id: 'agencies', accent: 'sky' },
  ];
</script>

<div class="phone-display relative mx-auto" aria-hidden="true">
  <!-- Phone frame -->
  <div class="relative w-[260px] sm:w-[280px] lg:w-[300px] xl:w-[320px] mx-auto">
    <!-- Outer bezel — always dark like a real device -->
    <div class="rounded-[2.5rem] border-[3px] border-slate-700 dark:border-slate-600/50 bg-slate-900 shadow-2xl shadow-black/30 dark:shadow-black/50 overflow-hidden">
      <!-- Dynamic Island -->
      <div class="flex justify-center pt-3 pb-2">
        <div class="w-[84px] h-[25px] bg-black rounded-full flex items-center justify-center gap-2">
          <div class="w-2.5 h-2.5 rounded-full bg-slate-800 ring-1 ring-slate-700"></div>
        </div>
      </div>

      <!-- Screen area with cross-fading content -->
      <div class="mx-2.5 mb-2.5 rounded-[1.25rem] bg-slate-800 overflow-hidden relative" style="aspect-ratio: 9/16; max-height: 420px;">
        <!-- Screen 0: Developers — Terminal + Push Notification -->
        <div class="screen-content absolute inset-0 transition-opacity duration-500 p-3"
          class:opacity-100={currentIndex === 0}
          class:opacity-0={currentIndex !== 0}>
          <!-- Status bar -->
          <div class="flex items-center justify-between text-[9px] text-white/40 mb-3 px-1">
            <span>9:41</span>
            <div class="flex items-center gap-1">
              <div class="w-3 h-2 border border-white/40 rounded-sm"><div class="w-1.5 h-full bg-emerald-400 rounded-sm"></div></div>
            </div>
          </div>
          <!-- Terminal window -->
          <div class="bg-black/60 rounded-lg p-2.5 mb-3 border border-white/[0.06]">
            <div class="flex items-center gap-1.5 mb-2">
              <div class="w-2 h-2 rounded-full bg-red-400/80"></div>
              <div class="w-2 h-2 rounded-full bg-yellow-400/80"></div>
              <div class="w-2 h-2 rounded-full bg-emerald-400/80"></div>
              <span class="text-[8px] text-white/30 ml-1">terminal</span>
            </div>
            <div class="font-mono text-[9px] leading-relaxed space-y-0.5">
              <p class="text-emerald-400">$ git push origin main</p>
              <p class="text-white/50">Enumerating objects: 12, done.</p>
              <p class="text-white/50">remote: Build started...</p>
              <p class="text-cyan-400">✓ Deploy successful</p>
            </div>
          </div>
          <!-- Push notification -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/10 flex items-start gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </div>
            <div>
              <p class="text-[10px] font-bold text-white">Viewpo</p>
              <p class="text-[9px] text-white/60">New deploy ready — tap to preview at 1440×900</p>
            </div>
          </div>
        </div>

        <!-- Screen 1: Managers — Slack Message + Approval -->
        <div class="screen-content absolute inset-0 transition-opacity duration-500 p-3"
          class:opacity-100={currentIndex === 1}
          class:opacity-0={currentIndex !== 1}>
          <div class="flex items-center justify-between text-[9px] text-white/40 mb-3 px-1">
            <span>9:41</span>
            <div class="flex items-center gap-1">
              <div class="w-3 h-2 border border-white/40 rounded-sm"><div class="w-1.5 h-full bg-emerald-400 rounded-sm"></div></div>
            </div>
          </div>
          <!-- Slack-style message -->
          <div class="bg-white/[0.06] rounded-xl p-3 mb-3 border border-white/[0.06]">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-6 h-6 rounded bg-purple-500/50 flex items-center justify-center text-[8px] text-white font-bold">S</div>
              <div>
                <p class="text-[10px] font-bold text-white/90">#design-reviews</p>
                <p class="text-[8px] text-white/40">Sarah posted</p>
              </div>
            </div>
            <p class="text-[9px] text-white/60 leading-relaxed">Hey team — homepage refresh is live on staging. Check it on mobile?</p>
            <div class="mt-2 bg-indigo-500/20 rounded-lg p-2 border border-indigo-500/20">
              <p class="text-[8px] text-indigo-300">🔗 viewpo.link/preview/abc123</p>
            </div>
          </div>
          <!-- Viewpo approval -->
          <div class="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/20">
            <div class="flex items-center gap-2 mb-1.5">
              <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <p class="text-[10px] font-bold text-emerald-400">Approved</p>
            </div>
            <p class="text-[9px] text-white/50">3 of 3 reviewers approved</p>
          </div>
        </div>

        <!-- Screen 2: Founders — Twitter compose with screenshot -->
        <div class="screen-content absolute inset-0 transition-opacity duration-500 p-3"
          class:opacity-100={currentIndex === 2}
          class:opacity-0={currentIndex !== 2}>
          <div class="flex items-center justify-between text-[9px] text-white/40 mb-3 px-1">
            <span>9:41</span>
            <div class="flex items-center gap-1">
              <div class="w-3 h-2 border border-white/40 rounded-sm"><div class="w-1.5 h-full bg-emerald-400 rounded-sm"></div></div>
            </div>
          </div>
          <!-- Twitter/X compose -->
          <div class="bg-white/[0.06] rounded-xl p-3 border border-white/[0.06]">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600"></div>
              <div class="flex-1">
                <p class="text-[10px] font-bold text-white">New post</p>
              </div>
              <div class="px-3 py-1 bg-sky-500 rounded-full">
                <span class="text-[9px] font-bold text-white">Post</span>
              </div>
            </div>
            <p class="text-[10px] text-white/80 leading-relaxed mb-2.5">Just shipped the new landing page 🚀 Here's what it looks like on mobile vs desktop — built in public, day 47.</p>
            <!-- Viewpo screenshot attachment -->
            <div class="rounded-lg overflow-hidden border border-white/10 bg-white/[0.04]">
              <div class="h-20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-12 h-16 mx-auto bg-slate-700 rounded-lg border border-white/10 flex items-center justify-center mb-1">
                    <div class="w-8 h-1.5 bg-white/10 rounded"></div>
                  </div>
                  <p class="text-[7px] text-white/30">viewpo preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Screen 3: Agencies — iMessage with client -->
        <div class="screen-content absolute inset-0 transition-opacity duration-500 p-3"
          class:opacity-100={currentIndex === 3}
          class:opacity-0={currentIndex !== 3}>
          <div class="flex items-center justify-between text-[9px] text-white/40 mb-3 px-1">
            <span>9:41</span>
            <div class="flex items-center gap-1">
              <div class="w-3 h-2 border border-white/40 rounded-sm"><div class="w-1.5 h-full bg-emerald-400 rounded-sm"></div></div>
            </div>
          </div>
          <!-- iMessage header -->
          <div class="flex items-center justify-center gap-2 mb-3">
            <div class="w-8 h-8 rounded-full bg-orange-400/30 flex items-center justify-center text-[10px] font-bold text-orange-300">JK</div>
            <div>
              <p class="text-[10px] font-bold text-white">Jane Kim</p>
              <p class="text-[8px] text-white/40">Client — Acme Corp</p>
            </div>
          </div>
          <!-- Message bubbles -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <div class="bg-indigo-500 rounded-2xl rounded-br-sm px-3 py-2 max-w-[80%]">
                <p class="text-[9px] text-white leading-relaxed">Hey Jane — here's the latest homepage. Tap to preview on your phone:</p>
              </div>
            </div>
            <div class="flex justify-end">
              <div class="bg-indigo-500/80 rounded-2xl rounded-br-sm px-3 py-2 max-w-[80%]">
                <p class="text-[9px] text-indigo-100">🔗 viewpo.link/acme-redesign</p>
              </div>
            </div>
            <div class="flex justify-start">
              <div class="bg-white/10 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[80%]">
                <p class="text-[9px] text-white/80 leading-relaxed">Looks great on my iPhone! Approved ✅</p>
              </div>
            </div>
            <div class="flex justify-start">
              <div class="bg-white/10 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[80%]">
                <p class="text-[9px] text-white/80">Can we make the CTA bigger?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Home indicator -->
      <div class="flex justify-center pb-3">
        <div class="w-28 h-1 bg-white/15 rounded-full"></div>
      </div>
    </div>
  </div>
</div>

<style>
  .screen-content {
    will-change: opacity;
  }
</style>
