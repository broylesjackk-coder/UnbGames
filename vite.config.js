import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure that the service worker and scramjet files are copied correctly
    rollupOptions: {
      input: {
        main: 'index.html',
        games: 'games.html',
        settings: 'settings.html',
        browser: 'browser.html',
      },
    },
  },
  publicDir: 'public',
});
