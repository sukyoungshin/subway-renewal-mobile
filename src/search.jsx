import React from 'react';
import ReactDOM from 'react-dom/client';
import PostSearch from './pages/PostSearch/PostSearch.jsx';
import { GlobalStyle } from './styles/GlobalStyle.js';

const rootElement = document.getElementById('wrap');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <>
      <GlobalStyle />
      <React.StrictMode>
        <PostSearch />
      </React.StrictMode>
    </>
  );
}
