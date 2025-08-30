import React from 'react';
import ReactDOM from 'react-dom/client';
import { PostSearch } from './pages/index';
import './shared/styles/global.css';

const rootElement = document.getElementById('wrap');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <PostSearch />
    </React.StrictMode>
  );
}
