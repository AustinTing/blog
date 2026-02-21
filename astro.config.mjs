import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

export default defineConfig({
  srcDir: 'src',
  publicDir: 'public',

  server: {
    host: true,
  },

  integrations: [mdx()],
});