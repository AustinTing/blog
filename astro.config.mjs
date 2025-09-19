import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: 'src',
  publicDir: 'public',
  server: {
    host: true,
  },
});
