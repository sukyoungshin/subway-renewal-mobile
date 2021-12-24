import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer); // 스토어 생성
console.log('@App store', store.getState()); // 스토어의 상태 확인

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);