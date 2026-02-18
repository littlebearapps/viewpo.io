import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://viewpo.io',
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    sitemap(),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: 'always',
});
