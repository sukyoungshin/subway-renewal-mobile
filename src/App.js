import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Splash from "./pages/Splash";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* COLOR */
  html {
    --color-yellow: #FFCB08;
    --color-green: #009743;
    --color-red: #FF0000;
    --color-white: #FFFFFF;
    --color-grey: #8C8C8C;
    --color-light-grey: #DFDFDF;
    --color-black: #292F28;
    --color-transparent: rgba(255,255,255,0.5);
  }
  /* MOUSE EFFECT */
  ::selection{ 
    color: var(--color-white);
    background-color: var(--color-yellow);
  }
  ::-moz-selection{
    color: var(--color-white);
    background-color: var(--color-yellow);
  }
`;

const App = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="main" element={<Main />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
