import { Routes } from '@/app';
import { createAppStore } from '@/app/store';
import { Request, Response } from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

export async function render(req: Request, res: Response, templateEnd?: string) {
  const url = req.url;
  const ssrable = url === '/' || url === '/main';

  console.log('SSR render called for:', url, 'isSSRable:', ssrable);

  if (!ssrable) {
    // SSR 불가 경로는 CSR로 폴백: 이미 server에서 templateStart를 write 했으므로
    // templateEnd만 마저 보내고 종료합니다.
    res.status(200);
    if (templateEnd) {
      res.write(templateEnd);
    }
    res.end();
    return;
  }

  try {
    const store = createAppStore();
    const preloadedState = store.getState();
    let didError = false;

    const { pipe } = renderToPipeableStream(
      <Provider store={store}>
        <StaticRouter location={req.originalUrl}>
          <Routes />
        </StaticRouter>
      </Provider>,
      {
        onShellReady() {
          if (!didError) {
            pipe(res);
          }
        },
        onAllReady() {
          console.log('onAllReady called');
          if (!didError) {
            const stateJson = JSON.stringify(preloadedState).replace(/</g, '\\u003c');
            res.write(`<script>window.__PRELOADED_STATE__=${stateJson}</script>`);

            if (templateEnd) {
              res.write(templateEnd);
            }
          }
        },
        onShellError(error) {
          didError = true;
          console.error('SSR Shell Error:', error);
          res.statusCode = 500;
          res.end('<h1>SSR Error</h1><p>Failed to render the application shell.</p>');
        },
        onError(error) {
          didError = true;
          console.error('SSR Error:', error);
          res.end();
        },
      }
    );
  } catch (error) {
    console.error('SSR Render Error:', error);
    res.statusCode = 500;
    res.end('<h1>SSR Render Error</h1><p>An unexpected error occurred during rendering.</p>');
  }
}
