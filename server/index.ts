import compression from 'compression';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import serveStatic from 'serve-static';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p: string) => path.resolve(__dirname, '..', p);

// 실행 환경 vs 빌드 상태 구분
const NODE_ENV = process.env.NODE_ENV || 'development';
const isVercel = process.env.VERCEL === '1';
const port = Number(process.env.PORT) || 5173;
const isDev = NODE_ENV === 'development' && !isVercel; // 개발 모드 여부 확인

async function createServer() {
  const app = express();
  app.use(compression());
  
  let vite;
  
  console.log('🔍 Server environment:', {
    NODE_ENV,
    isDev,
    isVercel,
    port
  });

  // 개발 모드 (yarn dev)
  if (isDev) {
    console.log('🔍 Loading Vite dev server...');
    const viteModule = await import('vite');
    vite = await viteModule.createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    // 빌드 모드 (yarn start:prod, yarn vercel-build)
    console.log('🔍 Serving static files from dist/client');
    app.use(serveStatic(resolve('dist/client'), { index: false }));
  }

 // 모든 요청에 대한 SSR 핸들러
 app.get('*', async (req, res, next) => {
  const url = req.originalUrl;
  let render: (req: express.Request, res: express.Response, templateEnd?: string) => void;
  let template: string;

  try {
    if (isDev) {
      // 개발 모드 (yarn dev) - Vite 사용
      // TODO: yarn start 분기처리 필요
      console.log('🔍 Using Vite dev mode');
      // resolve() 함수를 사용해 프로젝트 루트 기준 경로로 변경
      template = await fs.readFile(resolve('index.html'), 'utf-8');
      template = await vite!.transformIndexHtml(url, template);
      render = (await vite!.ssrLoadModule('/src/ssr/server-entry.tsx')).render;
    } else {
      // 빌드 모드 (로컬/Vercel)
      console.log('🔍 Using built mode');
      const ssrModulePath = path.resolve(__dirname, '..', 'dist/server', isVercel ? 'server-entry.mjs' : 'server-entry.cjs');
      const templatePath = resolve('dist/client/index.html');
      
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

// 서버 시작 함수
async function startServer() {
try {
  const app = await createServer();
  
  // Vercel 환경에서는 app을 export하고, 로컬에서는 listen
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

// 모든 환경에서 서버 시작
startServer();

// Vercel 프로덕션 빌드를 위한 기본 export
export default createServer;