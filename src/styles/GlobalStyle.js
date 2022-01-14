import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // CSS Reset
  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  #root {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
  }
  a, button, input {
    cursor: pointer;
  }
  a {
    display: inline-block;
    font-size: 0;
    color: inherit;
    text-align: center;
    text-decoration: none;
  }
  input, button, textarea {
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
  }

  // CSS VARIABLES
  // COLOR, FONT-SIZE, FONT-WEIGHT
  html {
    --color-yellow: #FFCB08;
    --color-green: #009743;
    --color-green-dark: #007936;
    --color-red: #FF0000;
    --color-white: #FFFFFF;
    --color-grey: #8C8C8C;
    --color-light-grey: #DFDFDF;
    --color-black: #292F28;
    --color-transparent: rgba(233,233,233,0.4);
    --color-kakao: #FFE812;
    --color-facebook: #3C5997;
    --color-google: rgb(66, 133, 244);

    --font-size-24: 24px;
    --font-size-20: 20px;
    --font-size-18: 18px;
    --font-size-16: 16px;
    --font-size-14: 14px;
    --font-size-12: 12px;
    --font-size-10: 10px;

    --font-weight-normal: 300;
    --font-weight-bold: 600;
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