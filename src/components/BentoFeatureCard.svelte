<script lang="ts">
  let { title, subtitle = '', description, span = '1', visual }: {
    title: string;
    subtitle?: string;
    description: string;
    span?: '1' | '2';
    visual: string;
  } = $props();

  let hovered = $state(false);
</script>

<div
  class="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/50 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 h-full flex flex-col"
  class:md:col-span-2={span === '2'}
  role="listitem"
  onmouseenter={() => hovered = true}
  onmouseleave={() => hovered = false}
>
  <!-- Visual area -->
  <div class="relative flex-1 min-h-[200px] p-6 pb-0 flex items-center justify-center overflow-hidden">
    {#if visual === 'viewport'}
      <!-- Viewport Viewer — multi-device lineup: phone, tablet, laptop, desktop -->
      <div class="w-full flex items-end justify-center gap-3 sm:gap-4 lg:gap-5 transition-transform duration-500 px-3 sm:px-6" class:scale-[1.01]={hovered}>
        <!-- Phone -->
        <div class="flex flex-col items-center gap-1.5">
          <div class="w-[48px] sm:w-[52px] rounded-xl border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
            <!-- Notch -->
            <div class="h-2.5 flex items-center justify-center bg-neutral-50 dark:bg-neutral-700/50">
              <div class="w-6 h-1.5 bg-neutral-900 dark:bg-neutral-600 rounded-full"></div>
            </div>
            <!-- Screen content -->
            <div class="px-1 py-1 space-y-0.5">
              <div class="h-1.5 w-full bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
              <div class="h-0.5 w-3/4 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
              <div class="h-6 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm mt-0.5"></div>
              <div class="h-0.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
              <div class="h-0.5 w-2/3 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
              <div class="h-3 w-3/4 bg-neutral-100 dark:bg-neutral-700 rounded-sm mt-0.5"></div>
            </div>
            <!-- Home indicator -->
            <div class="flex justify-center py-1">
              <div class="w-5 h-[2px] bg-neutral-300 dark:bg-neutral-500 rounded-full"></div>
            </div>
          </div>
          <span class="text-[8px] sm:text-[9px] font-heading font-medium text-neutral-400 dark:text-neutral-500">Phone</span>
        </div>

        <!-- Tablet -->
        <div class="flex flex-col items-center gap-1.5">
          <div class="w-[72px] sm:w-[84px] rounded-xl border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
            <!-- Camera dot -->
            <div class="h-2 flex items-center justify-center bg-neutral-50 dark:bg-neutral-700/50">
              <div class="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            </div>
            <!-- Screen content -->
            <div class="px-1.5 py-1 space-y-0.5">
              <div class="h-2 w-2/3 bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
              <div class="h-0.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
              <div class="h-0.5 w-3/4 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
              <div class="grid grid-cols-2 gap-1 mt-1">
                <div class="h-7 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                <div class="h-7 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
              </div>
              <div class="h-0.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm mt-1"></div>
              <div class="h-0.5 w-1/2 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
            </div>
            <!-- Home indicator -->
            <div class="flex justify-center py-1">
              <div class="w-5 h-[2px] bg-neutral-300 dark:bg-neutral-500 rounded-full"></div>
            </div>
          </div>
          <span class="text-[8px] sm:text-[9px] font-heading font-medium text-neutral-400 dark:text-neutral-500">Tablet</span>
        </div>

        <!-- MacBook -->
        <div class="hidden sm:flex flex-col items-center gap-1.5">
          <div class="w-[120px] lg:w-[150px]">
            <!-- Screen -->
            <div class="rounded-t-lg border-2 border-b-0 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
              <!-- Camera notch -->
              <div class="h-2.5 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700/50 border-b border-neutral-200 dark:border-neutral-600">
                <div class="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              </div>
              <!-- Screen content — sidebar + main -->
              <div class="p-2 space-y-1">
                <div class="flex gap-1.5">
                  <div class="w-1/4 space-y-1">
                    <div class="h-1 w-full bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
                    <div class="h-0.5 w-3/4 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-0.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-0.5 w-2/3 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="h-2 w-1/2 bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
                    <div class="h-0.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-0.5 w-4/5 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="grid grid-cols-3 gap-1 mt-1">
                      <div class="h-6 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                      <div class="h-6 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                      <div class="h-6 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Laptop hinge + base -->
            <div class="h-[3px] bg-neutral-300 dark:bg-neutral-500 rounded-b-sm"></div>
            <div class="h-1.5 bg-neutral-200 dark:bg-neutral-600 rounded-b-lg mx-[-4px] border-t border-neutral-300 dark:border-neutral-500"></div>
          </div>
          <span class="text-[8px] sm:text-[9px] font-heading font-medium text-neutral-400 dark:text-neutral-500">MacBook</span>
        </div>

        <!-- Desktop monitor -->
        <div class="hidden sm:flex flex-col items-center gap-1.5">
          <div class="w-[140px] lg:w-[170px]">
            <!-- Screen -->
            <div class="rounded-t-lg border-2 border-b-0 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
              <!-- Thin bezel top -->
              <div class="h-1.5 bg-neutral-200 dark:bg-neutral-700/50"></div>
              <!-- Screen content — full layout -->
              <div class="p-2 space-y-1">
                <!-- Nav bar -->
                <div class="flex items-center gap-1 pb-0.5">
                  <div class="w-8 h-1.5 bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
                  <div class="flex-1"></div>
                  <div class="w-4 h-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  <div class="w-4 h-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  <div class="w-6 h-1.5 bg-primary/30 rounded-sm"></div>
                </div>
                <div class="flex gap-2">
                  <div class="w-1/4 space-y-1">
                    <div class="h-1 w-full bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
                    <div class="h-0.5 w-3/4 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-0.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-0.5 w-1/2 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-0.5 w-2/3 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="h-2.5 w-2/3 bg-neutral-200 dark:bg-neutral-600 rounded-sm"></div>
                    <div class="h-0.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="h-0.5 w-5/6 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    <div class="grid grid-cols-4 gap-1 mt-1">
                      <div class="h-6 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                      <div class="h-6 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                      <div class="h-6 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                      <div class="h-6 bg-neutral-100 dark:bg-neutral-700 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Monitor chin -->
            <div class="h-2 bg-neutral-200 dark:bg-neutral-600 rounded-b-sm border-t-2 border-neutral-300 dark:border-neutral-500 flex items-center justify-center">
              <div class="w-3 h-0.5 bg-neutral-300 dark:bg-neutral-500 rounded-full"></div>
            </div>
            <!-- Stand -->
            <div class="h-4 w-4 bg-neutral-300 dark:bg-neutral-500 mx-auto rounded-b-sm"></div>
            <div class="h-1 w-10 bg-neutral-300 dark:bg-neutral-500 rounded-full mx-auto"></div>
          </div>
          <span class="text-[8px] sm:text-[9px] font-heading font-medium text-neutral-400 dark:text-neutral-500">Desktop</span>
        </div>
      </div>

    {:else if visual === 'dashboard'}
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
            { provider: 'GitHub', branch: 'staging', status: 'Failed', color: 'bg-red-400', time: '12m ago' },
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

    {:else if visual === 'notifications'}
      <!-- Push Notifications — iPhone top half, cut off at bottom -->
      <div class="w-full max-w-[200px] transition-transform duration-500 relative" class:scale-[1.05]={hovered}>
        <!-- iPhone frame — only top portion, no bottom rounding -->
        <div class="rounded-t-[20px] border border-b-0 border-neutral-200 dark:border-neutral-700 bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 shadow-lg overflow-hidden">
          <!-- Status bar -->
          <div class="flex items-center justify-between px-5 pt-2.5 pb-1">
            <span class="text-[9px] font-semibold text-neutral-700 dark:text-neutral-300">9:41</span>
            <div class="w-16 h-4 bg-neutral-900 dark:bg-neutral-700 rounded-full mx-auto"></div>
            <div class="flex items-center gap-1">
              <svg class="w-2.5 h-2.5 text-neutral-600 dark:text-neutral-400" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
              <svg class="w-2.5 h-2.5 text-neutral-600 dark:text-neutral-400" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
            </div>
          </div>

          <!-- Lock screen time -->
          <div class="text-center pt-2 pb-3">
            <div class="text-[28px] font-light text-neutral-800 dark:text-neutral-200 leading-none">9:41</div>
            <div class="text-[8px] text-neutral-400 dark:text-neutral-500 mt-0.5">Wednesday, 19 February</div>
          </div>

          <!-- Notification banners -->
          <div class="px-2.5 pb-2 space-y-1.5">
            {#each [
              { title: 'Build succeeded — main', action: 'Tap to open preview', time: '2m ago' },
              { title: 'Build started — feature/auth', action: 'Tap to open preview', time: '30s ago' },
            ] as notif}
              <div class="rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-sm px-3 py-2 shadow-sm border border-white/50 dark:border-white/5">
                <div class="flex items-start gap-2">
                  <!-- Viewpo app icon -->
                  <div class="w-5 h-5 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span class="text-[8px] font-bold text-primary">V</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-semibold text-neutral-800 dark:text-neutral-200">Viewpo</span>
                      <span class="text-[8px] text-neutral-400 dark:text-neutral-500">{notif.time}</span>
                    </div>
                    <p class="text-[9px] font-medium text-neutral-700 dark:text-neutral-300 leading-tight">{notif.title}</p>
                    <p class="text-[8px] text-primary/70 dark:text-primary/60 leading-tight">{notif.action}</p>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
        <!-- Fade-out at bottom edge -->
        <div class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent pointer-events-none"></div>
      </div>

    {:else if visual === 'pinwatch'}
      <!-- Pin & Watch — pinned branch cards with provider logos and bell toggles -->
      <div class="flex flex-col gap-2.5 w-full max-w-[240px] transition-transform duration-500" class:scale-[1.05]={hovered}>
        {#each [
          { branch: 'main', provider: 'Cloudflare', status: 'Ready', providerIcon: 'M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727', providerColor: 'text-orange-400', watched: true },
          { branch: 'feature/checkout', provider: 'Vercel', status: 'Building', providerIcon: 'm12 1.608 12 20.784H0Z', providerColor: 'text-neutral-700 dark:text-white', watched: true },
          { branch: 'staging', provider: 'Netlify', status: 'Ready', providerIcon: 'M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z', providerColor: 'text-teal-400', watched: false },
        ] as pin}
          <div class="rounded-xl border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/80 px-3.5 py-2.5 shadow-sm flex items-center gap-3">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-0.5">
                <svg class="w-3 h-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 12V4H17V2H7V4H8V12L6 14V16H11.2V22H12.8V16H18V14L16 12Z" />
                </svg>
                <span class="text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate">{pin.branch}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <svg class="w-3 h-3 {pin.providerColor} flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d={pin.providerIcon} />
                </svg>
                <span class="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">{pin.provider} · {pin.status}</span>
              </div>
            </div>
            <div class="flex-shrink-0">
              <svg class="w-4 h-4 {pin.watched ? 'text-primary' : 'text-neutral-300 dark:text-neutral-600'}" fill={pin.watched ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </div>
          </div>
        {/each}
      </div>

    {:else if visual === 'qr'}
      <!-- QR Code that scales on hover -->
      <div class="transition-transform duration-500 ease-out" class:scale-110={hovered}>
        <div class="w-32 h-32 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-3 shadow-sm">
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

    {:else if visual === 'connection'}
      <!-- One-Tap Connection — provider icons flowing into a central hub -->
      <div class="w-full max-w-md transition-transform duration-500" class:scale-[1.02]={hovered}>
        <div class="flex items-center justify-center gap-4 sm:gap-6">
          {#each [
            { name: 'GitHub', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12', color: 'text-neutral-700 dark:text-white', badge: 'OAuth' },
            { name: 'Vercel', icon: 'm12 1.608 12 20.784H0Z', color: 'text-neutral-700 dark:text-white', badge: 'OAuth' },
            { name: 'Netlify', icon: 'M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z', color: 'text-teal-400', badge: 'OAuth' },
            { name: 'Cloudflare', icon: 'M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727', color: 'text-orange-400', badge: 'API Token' },
          ] as provider}
            <div class="flex flex-col items-center gap-2">
              <div class="w-14 h-14 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shadow-sm">
                <svg class="w-7 h-7 {provider.color}" viewBox="0 0 24 24" fill="currentColor">
                  <path d={provider.icon} />
                </svg>
              </div>
              <span class="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">{provider.badge}</span>
            </div>
          {/each}
        </div>
      </div>

    {:else if visual === 'team'}
      <!-- Team Workspaces — role badges -->
      <div class="flex flex-col items-center gap-3 transition-transform duration-500" class:scale-[1.05]={hovered}>
        {#each [
          { role: 'Owner', color: 'bg-primary/10 text-primary border-primary/20', icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' },
          { role: 'Member', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
          { role: 'Viewer', color: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 border-neutral-200 dark:border-neutral-700', icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
        ] as member}
          <div class="flex items-center gap-3 px-4 py-2.5 rounded-xl border {member.color} w-full max-w-[200px]">
            <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d={member.icon} />
            </svg>
            <span class="text-sm font-heading font-semibold">{member.role}</span>
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Text content -->
  <div class="p-6 pt-4">
    {#if subtitle}
      <p class="text-[11px] font-heading font-semibold uppercase tracking-wider text-primary/70 dark:text-primary/60 mb-1">{title}</p>
      <h3 class="font-heading font-semibold text-lg text-neutral-900 dark:text-white mb-1.5">{subtitle}</h3>
    {:else}
      <h3 class="font-heading font-semibold text-lg text-neutral-900 dark:text-white mb-1.5">{title}</h3>
    {/if}
    <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{description}</p>
  </div>
</div>
