/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
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
  } else {
    const compression = (await import('compression')).default;
    const serveStatic = (await import('serve-static')).default;
    app.use(compression());
    app.use(serveStatic(resolve('dist/client'), { index: false }));
  }

  // 모든 요청을 하나의 라우트 핸들러로 처리
  app.use(async (req, res, next) => {
    try {
      const url = req.originalUrl;
      let htmlTemplate: string;
      let render: any;

      if (!isProduction) {
        htmlTemplate = await fs.readFile(resolve('index.html'), 'utf-8');
        htmlTemplate = await vite!.transformIndexHtml(url, htmlTemplate);
        render = (await vite!.ssrLoadModule('/src/ssr/server-entry.tsx')).render;
      } else {
        htmlTemplate = await fs.readFile(resolve('dist/client/index.html'), 'utf-8');
        render = (await import('../dist/server/server-entry.js')).render;
      }

      const isSSRable = url === '/' || url.startsWith('/main');

      if (isSSRable) {
        const [templateStart, templateEnd] = htmlTemplate.split('<!--app-html-->');
        
        // 헤더를 설정하고, HTML 문서의 시작 부분을 먼저 보냅니다.
        res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' });
        res.write(templateStart);

        // render 함수에 templateEnd를 전달하여 React 스트림 후에 보내도록 합니다.
        await render(req, res, templateEnd);
      } else {
        const finalHtml = htmlTemplate.replace('<!--app-html-->', '');
        res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(finalHtml);
      }
    } catch (e: unknown) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });

  // 서버 시작
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

createServer();