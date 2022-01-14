import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './styles/GlobalStyle';
import { SplashScreen } from './components';
import Elements from './pages/router';

const App = () => {
  // Splash Screen
  const [ isLoading, setIsLoading ] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      { isLoading ? <SplashScreen /> : <Elements /> }
    </BrowserRouter>
  );
};

export default App;
