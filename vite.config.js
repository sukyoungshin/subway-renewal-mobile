import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.js',
  },
  plugins: [react(), visualizer({ filename: 'stats.html', open: false, template: 'treemap' })],
  root: '.',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    ssr: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        search: path.resolve(__dirname, 'search.html'),
      },
    },
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // console.log 제거
        dead_code: true, // 사용하지 않는 코드 제거
      },
    },
  },
  server: {
    port: 3000,
    fs: {
      allow: ['.'],
    },
  },
});
