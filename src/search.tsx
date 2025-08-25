import React from 'react';
import ReactDOM from 'react-dom/client';
import PostSearch from './pages/PostSearch/PostSearch.jsx';
import { GlobalStyle } from './shared/styles/GlobalStyle.js';

const rootElement = document.getElementById('wrap');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <GlobalStyle />
      <PostSearch />
    </React.StrictMode>
  );
}
