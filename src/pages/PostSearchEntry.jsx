import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '../styles/GlobalStyle.js';
import PostSearch from './PostSearch/PostSearch.jsx';

const rootElement = document.getElementById('wrap');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <GlobalStyle />
      <PostSearch />
    </React.StrictMode>
  );
}
