import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    ssr: true,
    lib: {
      entry: 'src/ssr/server-entry.tsx',
      fileName: 'server-entry',
      formats: ['es'],
    },
    outDir: 'dist/server',
    rollupOptions: {
      external: [
        'express',
        'compression',
        'serve-static',
        '@reduxjs/toolkit',
        'react-router',
        'react-router-dom',
        'react-redux',
        'fs',
        'path',
        'url',
      ],
      output: {
        entryFileNames: 'server-entry.mjs',
      },
    },
  },
  ssr: {
    noExternal: ['react-icons', 'react', 'react-dom', '@'],
  },
});
