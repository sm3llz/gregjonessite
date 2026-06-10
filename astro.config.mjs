import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// Static-first build. Outputs to ./dist — the directory Cloudflare Pages serves.
export default defineConfig({
  site: 'https://gregjones.io',
  output: "hybrid",
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  adapter: cloudflare()
});