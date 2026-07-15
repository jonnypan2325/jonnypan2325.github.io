// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // User site: served from the domain root, so no `base` is needed.
  site: 'https://jonathanpan.me',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // Emit source maps for the small amount of client JS (surfboard counter).
    build: { sourcemap: true },
  },
});
