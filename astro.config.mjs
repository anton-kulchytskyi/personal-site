// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages project site: https://anton-kulchytskyi.github.io/personal-site/
// If a custom domain is added later, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://anton-kulchytskyi.github.io',
  base: '/personal-site',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
