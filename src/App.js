import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './styles/GlobalStyle';
import Elements from './pages/router';

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Elements />
    </BrowserRouter>
  );
};

export default App;
