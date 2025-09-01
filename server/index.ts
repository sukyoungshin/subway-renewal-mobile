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

  if (!isProduction) {
    const viteModule = await import('vite');
    vite = await viteModule.createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    // **Vite 미들웨어를 가장 먼저 호출**
    app.use(vite.middlewares);

    // 개발 환경: 명시적으로 루트 경로를 처리
    app.use('/', async (req, res, next) => {
      try {
        const url = req.originalUrl;
        let htmlTemplate = await fs.readFile(resolve('index.html'), 'utf-8');
        htmlTemplate = await vite!.transformIndexHtml(url, htmlTemplate);
        const render = (await vite!.ssrLoadModule('/src/ssr/server-entry.tsx')).render;
        const [templateStart, templateEnd] = htmlTemplate.split('<!--app-html-->');

        res.status(200).set({ 'Content-Type': 'text/html' });
        res.write(templateStart);
        await render(req, res, templateEnd);
      } catch (e: unknown) {
        if (!isProduction && vite) {
          vite.ssrFixStacktrace(e as Error);
        }
        next(e);
      }
    });
  } else {
    // 운영 환경
    app.use(compression());
    app.use(serveStatic(resolve('dist/client'), { index: false }));

    const ssrModulePath = path.resolve(__dirname, '..', 'dist/server', 'server-entry.cjs');
    const ssrModule = await import(ssrModulePath);

    // 운영 환경: 모든 요청을 SSR로 처리
    app.use('*', async (req, res, next) => {
      try {
        const url = req.originalUrl;
        const htmlTemplate = await fs.readFile(
          path.resolve(__dirname, '..', 'dist/client/index.html'),
          'utf-8'
        );
        const render = ssrModule.render;

        if (!render || typeof render !== 'function') {
          throw new Error('SSR render function not found or is not a function.');
        }

        // render 함수를 한 번만 호출하고, 반환된 HTML을 사용
        const appHtml = await render(url);
        const [templateStart, templateEnd] = htmlTemplate.split('<!--app-html-->');
        const fullHtml = templateStart + appHtml + templateEnd;

        res.status(200).set({ 'Content-Type': 'text/html' }).end(fullHtml);
      } catch (e: unknown) {
        // 에러 발생 시 500 상태 코드와 함께 에러 메시지를 보냄
        console.error(e);
        res.status(500).end('Internal Server Error');
      }
    });
  }

  // 서버 시작
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

createServer();
