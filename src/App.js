import React from "react";
// REACT-ROUTE
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
// ROUTES ELEMENTS
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Splash from "./pages/Splash";
import Order from './pages/Order';
// STYLE
import { createGlobalStyle } from "styled-components";


// GLOBAL STYLE
const GlobalStyles = createGlobalStyle`
  // CSS Reset
  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    font-size: 0;
    text-align: center;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  // COLOR
  html {
    --color-yellow: #FFCB08;
    --color-green: #009743;
    --color-red: #FF0000;
    --color-white: #FFFFFF;
    --color-grey: #8C8C8C;
    --color-light-grey: #DFDFDF;
    --color-black: #292F28;
    --color-transparent: rgba(255,255,255,0.5);
    --color-kakao: #FFE812;
    --color-facebook: #3C5997;
  }
  // MOUSE DRAG EFFECT
  ::selection{ 
    color: var(--color-white);
    background-color: var(--color-yellow);
  }
  ::-moz-selection{
    color: var(--color-white);
    background-color: var(--color-yellow);
  }
`;

// COMPONENT
const App = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="main" element={<Main />} />
          <Route path="order" element={<Order />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
