import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://viewpo.io',
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    starlight({
      title: 'Viewpo Help',
      disable404Route: true,
      customCss: ['./src/styles/starlight-custom.css'],
      components: {
        Header: './src/components/starlight/Header.astro',
        Footer: './src/components/starlight/Footer.astro',
        Head: './src/components/starlight/Head.astro',
        ThemeProvider: './src/components/starlight/ThemeProvider.astro',
        Sidebar: './src/components/starlight/Sidebar.astro',
      },
      sidebar: [
        {
          label: 'Help Centre',
          items: [
            { slug: 'help' },
            { slug: 'help/getting-started' },
            { slug: 'help/faq' },
            { slug: 'help/contact' },
          ],
        },
      ],
    }),
    // Note: @astrojs/sitemap removed — Starlight bundles its own.
    // Trade-off: /confirmed/ and /preferences/ will appear in sitemap (acceptable).
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: 'always',
});
