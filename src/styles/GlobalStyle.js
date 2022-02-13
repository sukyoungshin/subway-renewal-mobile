import { createGlobalStyle } from 'styled-components';
import FONT from './font';
import SIZE from './fontsize';
import WEIGHT from './fontweight';
import PALETTE from './palette';

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
  body {
    background-color: var(--color-transparent);
  }
  #root {
    margin: 0 auto;
    max-width: 440px;
    height: 100%;
    overflow-x: hidden;
    position: relative;
    background-color: var(--color-white);
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
  
  // CSS VARIABLEs
  html {
    font-family: ${FONT.EN}, ${FONT.DEFAULT};

    --color-light-white: ${PALETTE.LIGHT_WHITE};
    --color-white: ${PALETTE.WHITE};
    --color-black: ${PALETTE.BLACK};
    --color-yellow: ${PALETTE.YELLOW};
    --color-green: ${PALETTE.GREEN};
    --color-green-dark: ${PALETTE.GREEN_DARK};
    --color-red: ${PALETTE.RED};
    --color-grey: ${PALETTE.GREY};
    --color-light-grey: ${PALETTE.GREY_LIGHT};
    --color-kakao: ${PALETTE.KAKAO};
    --color-facebook: ${PALETTE.FACEBOOK};
    --color-google: ${PALETTE.GOOGLE};
    --color-transparent: ${PALETTE.TRANSPARENT};
    
    --font-size-24: ${SIZE.LARGE_24};
    --font-size-20: ${SIZE.LARGE_20};
    --font-size-18: ${SIZE.LARGE_18};
    --font-size-16: ${SIZE.MIDDLE_16};
    --font-size-14: ${SIZE.MIDDLE_14};
    --font-size-12: ${SIZE.SMALL_12};
    --font-size-10: ${SIZE.SMALL_10};

    --font-weight-normal: ${WEIGHT.NORMAL};
    --font-weight-bold: ${WEIGHT.BOLD};
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