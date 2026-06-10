import { defineConfig } from 'astro/config';

// Static-first build. Outputs to ./dist — the directory Cloudflare Pages serves.
export default defineConfig({
  site: 'https://gregjones.io',
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
