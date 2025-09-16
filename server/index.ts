// PRODUCTION-ONLY (배포 전용)
import compression from 'compression';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import serveStatic from 'serve-static';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // 압축 + 정적 파일 (dist/client)
  app.use(compression());
  app.use(
    serveStatic(path.resolve(__dirname, '..', 'client'), {
      index: false, // index.html은 SSR에서 직접 읽는다
      // 캐시는 원하면 조정 (예: 1시간)
      // maxAge: '1h',
    }),
  );

  // 모든 라우트: SSR
  app.get('*', async (req, res) => {
    try {
      const ssrModulePath = path.resolve(__dirname, '..', 'server', 'server-entry.mjs');
      const { render } = await import(ssrModulePath as unknown as string);

      const templatePath = path.resolve(__dirname, '..', 'client', 'index.html');
      const template = await fs.readFile(templatePath, 'utf-8');
      const [templateStart, templateEnd] = template.split('<!--app-html-->');

      res.status(200).set({ 'Content-Type': 'text/html' });
      res.write(templateStart);

      // src/ssr/server-entry.tsx 의 render(req,res, templateEnd) 사용
      await render(req, res, templateEnd);
    } catch (e) {
      console.error('SSR Error:', e);
      res.status(500).end('Internal Server Error');
    }
  });

  return app;
}

async function startServer() {
  const app = await createServer();

  const HOST = process.env.HOST ?? '0.0.0.0';
  const PORT = Number(process.env.PORT ?? 80);

  app.listen(PORT, HOST, () => {
    console.log(`🚀 Server listening on http://${HOST}:${PORT}`);
  });
}

startServer();

export default createServer;
