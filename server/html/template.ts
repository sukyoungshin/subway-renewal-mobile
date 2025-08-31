import fs from 'fs';

export function loadTemplate(p: string) {
  return fs.readFileSync(p, 'utf-8');
}

export function injectAppHtml(
  template: string,
  appHtml: string | null,
  preloadedState?: unknown
) {
  let html = template;

  if (appHtml) {
    html = html.replace('<!--app-html-->', appHtml);
  }
  if (preloadedState) {
    const stateJson = JSON.stringify(preloadedState).replace(/</g, '\\u003c');
    html = html.replace(
      '<!--preload-state-->',
      `<script>window.__PRELOADED_STATE__=${stateJson}</script>`
    );
  }
  return html;
}
