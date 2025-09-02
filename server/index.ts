import compression from 'compression';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import serveStatic from 'serve-static';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p: string) => path.resolve(__dirname, '..', p);
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';
const port = Number(process.env.PORT) || 5173;

const app = express();
app.use(compression());

// 프로덕션 환경에서는 클라이언트 빌드 폴더를 정적 파일로 제공합니다.
if (isProduction && !isVercel) {
  app.use(serveStatic(resolve('dist/client'), { index: false }));
}

// 모든 요청에 대한 SSR 핸들러
app.get('*', async (req, res, next) => {
  const url = req.originalUrl;
  let render: (req: express.Request, res: express.Response, templateEnd?: string) => void;
  let template: string;

  try {
    if (!isProduction) {
      // 개발 환경에서는 ViteDevServer에서 렌더링 모듈을 로드합니다.
      const viteModule = await import('vite');
      const vite = await viteModule.createServer({
        server: { middlewareMode: true },
        appType: 'custom',
      });
      app.use(vite.middlewares);

      template = await fs.readFile(resolve('index.html'), 'utf-8');
      template = await vite!.transformIndexHtml(url, template);
      render = (await vite!.ssrLoadModule('/src/ssr/server-entry.tsx')).render;
    } else if (isVercel) {
      // 프로덕션 환경에서는 빌드된 SSR 모듈을 로드합니다.
      let ssrModulePath: string;
      let templatePath: string;

      if (isVercel) {
        ssrModulePath = path.resolve(__dirname, '..', 'dist/server', 'server-entry.mjs');
        templatePath = resolve('dist/client/index.html');
      } else {
        ssrModulePath = path.resolve(__dirname, '..', 'dist/server', 'server-entry.mjs');
        templatePath = resolve('dist/client/index.html');
      }

      const { render: ssrRender } = await import(ssrModulePath as unknown as string);
      render = ssrRender;
      template = await fs.readFile(templatePath, 'utf-8');
    } else {
      // 로컬 프로덕션 환경
      const ssrModulePath = path.resolve(__dirname, '..', 'dist/server', 'server-entry.mjs');
      render = (await import(ssrModulePath)).render;
      template = await fs.readFile(resolve('dist/client/index.html'), 'utf-8');
    }

    const [templateStart, templateEnd] = template.split('<!--app-html-->');

    res.status(200).set({ 'Content-Type': 'text/html' });
    res.write(templateStart);

    render(req, res, templateEnd);
  } catch (e: unknown) {
    if (!isProduction && 'ssrFixStacktrace' in (e as object)) {
      (e as { ssrFixStacktrace: (e: Error) => void }).ssrFixStacktrace(e as Error);
    }
    console.error('SSR Error:', e);
    res.status(500).end('Internal Server Error');
  }
});

export default app;

// 로컬 환경에서만 서버를 시작합니다. Vercel에서는 이 코드가 실행되지 않습니다.
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}
