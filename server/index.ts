import compression from 'compression';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import serveStatic from 'serve-static';
import { fileURLToPath } from 'url';
import type { ViteDevServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p: string) => path.resolve(__dirname, '..', p);
const isProduction = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT) || 5173;

async function createServer() {
  const app = express();
  let vite: ViteDevServer | undefined;
  let templateHtml = '';

  if (!isProduction) {
    const viteModule = await import('vite');
    vite = await viteModule.createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    templateHtml = await fs.readFile(resolve('dist/client/index.html'), 'utf-8');
    app.use(compression());
    app.use(serveStatic(resolve('dist/client'), { index: false }));
  }

  app.get('*', async (req, res, next) => {
    try {
      const url = req.originalUrl;
      let template: string;
      let render: (req: express.Request, res: express.Response, templateEnd?: string) => void;

      if (!isProduction) {
        template = await fs.readFile(resolve('index.html'), 'utf-8');
        template = await vite!.transformIndexHtml(url, template);
        render = (await vite!.ssrLoadModule('/src/ssr/server-entry.tsx')).render;
      } else {
        template = templateHtml;
        const ssrModulePath = path.resolve(__dirname, '..', 'dist/server', 'server-entry.cjs');
        render = (await import(ssrModulePath)).render;
      }

      const [templateStart, templateEnd] = template.split('<!--app-html-->');

      res.status(200).set({ 'Content-Type': 'text/html' });
      res.write(templateStart);

      render(req, res, templateEnd);
    } catch (e: unknown) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e as Error);
      }
      console.error(e);
      res.status(500).end('Internal Server Error');
    }
  });

  // 서버 시작
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

createServer();
