// @ts-check
import { defineConfig } from 'astro/config';

// Deployed as a GitHub Pages project site: https://anton-kulchytskyi.github.io/personal-site/
// If a custom domain is added later, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://anton-kulchytskyi.github.io',
  base: '/personal-site',
  output: 'static',
});
