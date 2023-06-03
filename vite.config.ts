import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',

  server: {
    port: 8000,
  },

  build: {
    outDir: 'dist',
  },

  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/shared";',
        includePaths: ['src/styles'],
      },
    },
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
