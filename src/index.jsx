import Routes from '@/routes/routes';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './reducers';
import { GlobalStyle } from './styles/GlobalStyle.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyle />
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
