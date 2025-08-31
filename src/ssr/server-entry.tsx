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
    res.end();
    return;
  }

  try {
    const store = createAppStore();
    let didError = false;

    const { pipe } = renderToPipeableStream(
      <Provider store={store}>
        <StaticRouter location={url}>
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
          // 모든 React 렌더링이 완료되면 templateEnd를 보냅니다.
          if (templateEnd && !didError) {
            res.write(templateEnd);
          }
          res.end();
        },
        onShellError(error) {
          didError = true;
          console.error('SSR Shell Error:', error);
          res.status(500);
          res.end('SSR Error');
        },
        onError(error) {
          console.error('SSR Error:', error);
        }
      }
    );
  } catch (error) {
    console.error('SSR Render Error:', error);
    res.status(500);
    res.end('SSR Error');
  }
}