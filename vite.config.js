import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  const isSsrBuild = command === 'build' && process.env.SSR_BUILD;

  if (isSsrBuild) {
    return {
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
      build: {
        ssr: true,
        lib: {
          entry: 'server/index.ts',
          fileName: 'index',
          formats: ['cjs'],
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
            'fs/promises',
            'path',
            'url',
            'compression',
            'serve-static',
          ],
        },
      },
      ssr: {
        noExternal: ['react-icons', 'react', 'react-dom', '@'],
      },
    };
  }

  return {
    css: {
      postcss: './postcss.config.js',
    },
    plugins: [
      react(),
      !isSsrBuild && visualizer({ filename: 'stats.html', open: false, template: 'treemap' }),
    ],
    root: '.',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      outDir: 'dist/client',
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
          drop_console: true,
          dead_code: true,
        },
      },
    },
    server: {
      port: 5173,
      fs: {
        allow: ['.'],
      },
    },
    ssr: {
      noExternal: ['react-icons', 'compression', 'serve-static'],
    },
  };
});
