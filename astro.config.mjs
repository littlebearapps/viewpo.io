import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://viewpo.io',
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/confirmed') &&
        !page.includes('/preferences') &&
        !page.includes('/js/') &&
        !page.includes('/api/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: 'always',
});
