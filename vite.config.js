import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  root: '.',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        search: path.resolve(__dirname, 'search.html'),
      },
    },
  },
  server: {
    port: 3000,
    fs: {
      allow: ['.'],
    },
    // CRA의 proxy 대체
    // proxy: {
    //   '/api': 'http://localhost:4000'
    // }
  },
});
