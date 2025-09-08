/* eslint-disable @typescript-eslint/no-explicit-any */
import compression from 'compression';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import serveStatic from 'serve-static';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p: string) => path.resolve(__dirname, '..', p);

const NODE_ENV = process.env.NODE_ENV || 'development';
const isVercel = process.env.VERCEL === '1';
const port = Number(process.env.PORT) || 5173;
// yarn start 시에도 production 모드로 작동하도록 isDev 변수 로직 수정
const isDev = (NODE_ENV === 'development' || NODE_ENV === undefined) && !isVercel;

async function createServer() {
  const app = express();
  app.use(compression());

  let vite: any;

  console.log('🔍 Server environment:', {
    NODE_ENV,
    isDev,
    isVercel,
    port,
  });

  if (isDev) {
    console.log('🔍 Loading Vite dev server...');
    const viteModule = await import('vite');
    vite = await viteModule.createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    // 빌드 모드 (yarn start:prod, vercel)
    console.log('🔍 Serving static files from dist/client');
    // 모든 정적 파일 요청을 dist/client 폴더에서 처리하도록 수정합니다.
    app.use(serveStatic(path.resolve(__dirname, '..', 'client'), { index: false }));
  }

  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;
    let render: (req: express.Request, res: express.Response, templateEnd?: string) => void;
    let template: string;

    try {
      if (isDev) {
        // 개발 모드 (yarn dev)
        console.log('🔍 Using Vite dev mode');
        template = await fs.readFile(resolve('index.html'), 'utf-8');
        template = await vite!.transformIndexHtml(url, template);
        render = (await vite!.ssrLoadModule('/src/ssr/server-entry.tsx')).render;
      } else {
        // 빌드 모드 (로컬/Vercel)
        console.log('🔍 Using built mode');
        const ssrModulePath = path.resolve(__dirname, '..', 'server', 'server-entry.mjs');
        const templatePath = path.resolve(__dirname, '..', 'client', 'index.html');

        const { render: ssrRender } = await import(ssrModulePath as unknown as string);
        render = ssrRender;
        template = await fs.readFile(templatePath, 'utf-8');
      }
      
      const [templateStart, templateEnd] = template.split('<!--app-html-->');

      res.status(200).set({ 'Content-Type': 'text/html' });
      res.write(templateStart);

      render(req, res, templateEnd);
    } catch (e: unknown) {
      if (isDev && vite && 'ssrFixStacktrace' in (e as object)) {
        (e as { ssrFixStacktrace: (e: Error) => void }).ssrFixStacktrace(e as Error);
      }
      console.error('SSR Error:', e);
      res.status(500).end('Internal Server Error');
    }
  });

  return app;
}

async function startServer() {
  try {
    const app = await createServer();

    if (!isVercel) {
      app.listen(port, () => {
        console.log(`🚀 Server listening on http://localhost:${port}`);
        console.log(`🔍 Mode: ${isDev ? 'Development' : 'Built'}`);
        console.log(`🔍 NODE_ENV: ${NODE_ENV}`);
      });
    }

    return app;
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

export default createServer;
