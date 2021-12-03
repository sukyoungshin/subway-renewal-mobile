import styled, { createGlobalStyle } from 'styled-components';

/**************
  GLOBAL-STYLE
***************/
export const GlobalStyle = createGlobalStyle`
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
  #root {
    width: 100%;
    height: 100%;
  }
  // COLOR & FONT-SIZE
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
    --color-google: rgb(66, 133, 244);

    --font-size-largest: 24px;
    --font-size-larger: 20px;
    --font-size-large: 18px;
    --font-size-medium: 14px;
    --font-size-smaller: 12px;
    --font-size-smallest: 10px;
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

/******************
  STYLED-COMPONENTS
********************/
// SplashScreen
export const SplashWrapper = styled.main`
  padding: 8px 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-green);

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
export const SplashLogoWrapper = styled.section`
  flex: 1;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    width: calc(50%);
  }
`;
export const SplashFooterWrapper = styled.footer`
  color: var(--color-white);
  font-size: var(--font-size-smallest);
`;

// LoginModal
export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  background-color: var(--color-white);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;
`;
export const ItemBlock = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;

  a {
    color: var(--color-grey);
    font-size: var(--font-size-small);
    border-bottom: 1px solid var(--color-white);
    transition: all 0.4s;

    &:hover {
      border-bottom: 1px solid var(--color-green);
      color: var(--color-green);
    }
  }

  &.btn-wrapper {
    display: inline-flex;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;
  }
  &.signup-wrapper,
  &.signin-title {
    font-size: 12px;
    color: var(--color-grey);
  }
  &.signup-wrapper {
    padding: 8px;
    height: 30px;
  }
  &.signin-title {
    height: 40px;

    /* line그리기 */
    p {
      display: flex;
      flex-basis: 100%;
      align-items: center;
      font-size: inherit;
      color: var(--color-grey);
      margin: 8px 0;
    }
    p::before {
      content: '';
      flex-grow: 1;
      margin: 0px 16px;
      background-color: var(--color-light-grey);
      height: 1px; /* cross-browsing issue: chrome은 0.5px -> 1px, fireFox는 0.5px -> 0 */
    }
    p::after {
      content: '';
      flex-grow: 1;
      margin: 0px 16px;
      background-color: var(--color-light-grey);
      height: 1px; /* cross-browsing issue: chrome은 0.5px -> 1px, fireFox는 0.5px -> 0 */
    }
  }
`;
export const LogoContainer = styled(ItemBlock)`
  height: 150px;

  img {
    display: inline-block;
    margin-top: 70px;
    width: 180px;
    height: 48px;
  }
`;
export const InputContainer = styled(ItemBlock)`
  height: 48px;

  input[type="text"] {
    border: none;
    outline: none;

    padding: 12px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    color: var(--color-grey);
    font-size: var(--font-size-smaller);
    border: 1px solid var(--color-light-grey);
    border-radius: 8px;
  }
  input[type="text"]::placeholder {
    color: var(--color-grey);
    font-size: var(--font-size-smaller);
  }
`;
export const CloseBtnContainer = styled.div`
  width: 24px;
  height: 24px;
  font-size: var(--font-size-largest);

  position: absolute;
  top: 16px;
  left: 16px;
`;
export const BtnContainer = styled(ItemBlock)`
  height: 48px;
`;
export const Button = styled.button`
  border: none;
  outline: none;

  width: 100%;
  height: 100%; 

  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: ${(props) => props.color ? `var(--color-${props.color})` : 'var(--color-white)'};
  font-size: var(--font-size-medium);
  font-weight: ${(props) => props.bold && 'bold'};
  background-color: ${(props) => props.bgColor? `var(--color-${props.bgColor})` : 'transparent' };
  border: ${(props) => props.bgColor? null : '1px solid var(--color-green)}'};
  border-radius: 8px;
`;
export const LogoutButton = styled(Button)`
  outline: none;
  border: none;
  
  padding: 4px;
  width: 100%;
  height: 100%;
  color: var(--color-white);
  font-size: var(--font-size-medium);
  background-color: var(--color-google);

  &:active {
    color: var(--color-black);
  }
`;
export const LoginButton = styled.div`
  border-radius: 8px;

  /* css override - 구글기본스타일을 override하기 위해 어쩔 수 없이 important 사용*/
  div.abcRioButton.abcRioButtonLightBlue{
    width: 100% !important;
    border-radius: 8px !important;
    box-shadow: none !important;
    color: var(--color-white) !important;
    background-color: var(--color-google) !important;

    .abcRioButtonContentWrapper {
      display: inline-flex !important;
      flex-direction: row !important;
      justify-content: center !important;
      align-items: center !important;
      
      .abcRioButtonContents{
        line-height: 0 !important;
        font-size: var(--font-size-medium) !important;
      }
    }
    .abcRioButtonIcon {

      padding: 0 !important;

      div {
        width: 14px !important;
        height: 14px !important;
        
        svg {
          width: 14px !important;
          height: 14px !important;
          filter: drop-shadow(0 0 1px white) !important;
        }
      }
    }

  }
`;

// HeaderNav
export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 56px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);

  ul.header-nav-wrapper {
    height: 100%;
    list-style-type: none;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
  };
  ul.header-nav-wrapper li {
    padding: 10px;
    height: 56px;
  };
  ul.header-nav-wrapper button[type="button"] {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 0;
  };
  a.cart-btn {
    position: relative;
    color: var(--color-green);
    font-size: var(--font-size-smallest);
  };
  a.cart-btn span {
    position: absolute;
    top: -0.1rem;
    right: 0.1rem;
  };
`;

// Navbar
export const SideNavWrapper = styled.aside`
  padding: 16px;
  width: calc(100vw / 4 * 3); 
  height: 100vh;
  background-color: var(--color-light-grey); /* need to change colors */

  display: inline-flex;
  flex-direction: column;

  position: fixed;
  top:0;
  left:0;
  z-index: 999;
`;
export const SideHeader = styled.header`
  width: 100%;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 0;
`;
export const SideNav = styled.nav`
  flex: 1;

  ul {
    margin: 40px 0 0 0;
    
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    grid-gap: 16px;
    gap: 16px;
  }
  a:link,
  a:visited {
    color: var(--color-black);
    font-size: var( --font-size-medium);
    transition: color 0.4s;
  }
  a:active,
  a:focus {
    color: var(--color-green);    
    font-size: var( --font-size-medium);
    transition: color 0.4s;
  }
`;
export const SideMain = styled.main`
  padding: 32px 0 0 0;
  height: 210px;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 32px;
  gap: 32px;

  border-top: 1px solid var(--color-transparent);
  
  h1{
    font-size: 18px;
  }
  div {
    font-size: var(--font-size-medium);

    display: inline-flex;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;
  }
`;
export const SideFooter = styled.footer`
  font-size: 0;

  display: inline-flex;
  flex-direction: row;
  grid-gap: 16px;
  gap: 16px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

// Main
export const MainWrapper = styled.div`
  width: 100vw;
  min-height: calc(100% - 136px);
`;
export const MainSection = styled.section`
  margin-bottom: 56px;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  h2{
    margin: 32px 0 24px 0;
    text-align: center;
    color: var(--color-black);
    font-size: var(--font-size-larger);
  }
`;
export const MainArticle = styled.article`
  width: 270px;
  height: fit-content;

  display:flex;
  flex-direction: column;
  text-align: center;
  grid-gap: 32px;
  gap: 32px;

  div{
    padding: 16px;
    width: 270px;
    height: 260px; 

    display:inline-block;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.1);
    position: relative;
    box-sizing: border-box;
  }
  div > img {
    width: 235px;
    height: 135px;
  }
  h3{
    margin-top: 10px;
    margin-bottom: 11px;
    color: var(--color-black);
    font-size: var(--font-size-medium);
  }
  p{
    color: var(--color-grey);
    font-size: var(--font-size-medium);
  }
  button[type="button"] {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 0;

    width: fit-content;
    height: 48px;

    position: absolute; 
    left: 50%; 
    bottom: 0; 
    transform: translate(-50%, 50%); 
  }
`;

// Carousel
export const CarouselWrapper = styled.div`
  width: 100vw;
  height: 232px;
  overflow: hidden;
  position: relative;
`;
export const AdPagination = styled.ul`
  width: 100%;
  height: 32px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 16px; /* cross-browsing */
  gap: 16px;

  list-style: none;

  position: absolute;
  left: 50%;
  bottom: 0.4rem;
  transform: translateX(-50%);
  z-index: 50;
`;
export const AdPaginationList = styled.li`
  width: 12px;
  height: 12px;
  font-size: var(--font-size-medium);
  border-radius: 12px;
  background-color: ${(props) => props.isSelected ? `var(--color-white)` : null};
  border: ${(props) => props.isSelected ? null : `1px solid var(--color-white)`};
`;
export const AdWrapper = styled(CarouselWrapper)`
  padding: 16px;
  background-color: var(--color-green);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => props.isSelected ? 5 : null};
`;
export const AdTitleWrapper = styled.div`
  h2:first-child {
    color: var(--color-yellow);
    font-size: var(--font-size-larger);
  }
  h2:last-child {
    color: var(--color-white);
    font-size: var(--font-size-larger);
  }
`;
export const AdEventWrapper = styled.div`
  color: var(--color-white);
  font-size: var(--font-size-medium);
`;
export const AdButtonWrapper = styled.div`
  button[type="button"] {
    border: none;
    outline: none;

    padding: 8px 16px;
    color: var(--color-white);
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid var(--color-white);

    font-size: var(--font-size-smallest);
    transition: all 0.4s;
  }
`;

// Order
export const OrderFormWrapper = styled.form`
  padding: 16px;
  width: 100vw;
  height: calc(100vh - 136px); 

  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 16px;
  gap: 16px;

  p,
  label {
    font-size: var(--font-size-medium);
    font-weight: bold;
    color: var(--color-black);
  }
`;
export const MapViewer = styled.div`
  padding: ${(props) => props.padding? '12px' : '0px' };
  width: 100%;
  height: calc(100%);

  border-radius: 8px;
  background-color: var(--color-light-grey);

  position: relative;

  p {
    font-size: var(--font-size-smaller);
    font-weight: normal;
    color: var(--color-grey);
  }
`;
export const ContentWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;
`;
export const Map = styled.div`
  height: 100%;
  /* display: ${(props) => props.hidden && 'hidden' }; */
`;
export const ButtonWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  grid-gap: 16px;
  gap: 16px;
`;

// Footer
export const MainFooter = styled.footer`
    width: 100vw;
    height: 80px;
    font-size: var(--font-size-smallest);
    color: var(--color-white);
    background-color: var(--color-black);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

  address {
    width: 270px;
  }
`;