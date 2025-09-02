import { AppRouter, Routes } from '@/app';
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createAppStore } from './app/store';
import './shared/styles/global.css';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __PRELOADED_STATE__?: any;
  }
}

const preloaded = typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : undefined;
if (preloaded && typeof window !== 'undefined') delete window.__PRELOADED_STATE__;

const store = createAppStore(preloaded);
const rootElement = typeof window !== 'undefined' ? document.getElementById('root') : null;

if (rootElement) {
  const App = (
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter>
          <Routes />
        </AppRouter>
      </Provider>
    </React.StrictMode>
  );

  // #root 엘리먼트가 자식 노드를 가지고 있으면 (SSR), hydrate를 사용
  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, App);
  } else {
    // 그렇지 않으면 (CSR), createRoot를 사용
    createRoot(rootElement).render(App);
  }
}
