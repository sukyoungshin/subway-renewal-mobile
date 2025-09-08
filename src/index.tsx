import { Routes } from '@/app';
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );

  const isSSRMode = window.location.port === '5173';
  console.log('🔍 Render Mode:', {
    port: window.location.port,
    mode: isSSRMode ? 'SSR (hydrate)' : 'CSR (createRoot)',
  });

  if (isSSRMode) {
    console.log('🔍 Port 5173 → hydrateRoot (SSR)');
    hydrateRoot(rootElement, App);
  } else {
    console.log('🔍 Port ' + window.location.port + ' → createRoot (CSR)');
    rootElement.innerHTML = '';
    createRoot(rootElement).render(App);
  }
}
