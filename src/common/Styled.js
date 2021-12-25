import styled, { createGlobalStyle, css } from 'styled-components';

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
  input, button {
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

/******************
  STYLED-COMPONENTS
********************/
// SplashScreen
export const SplashWrapper = styled.main`
  padding: 8px 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-green-dark);

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
  font-size: var(--font-size-10);
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
    height: auto;

    p {
      font-weight: var(--font-weight-normal);
    }
    a {
      color: var(--color-grey);
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-bold);
      border-bottom: 1px solid var(--color-white);
    }
  }
  &.signin-title {
    height: auto;

    /* line그리기 */
    p {
      display: flex;
      flex-basis: 100%;
      align-items: center;
      font-size: inherit;
      color: var(--color-grey);
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
  height: 104px;

  img {
    display: inline-block;
    margin-top: 40px;
    width: 180px;
    height: 48px;
  }
`;
export const InputContainer = styled(ItemBlock)`
  height: 48px;
  position: relative;

  input[type="text"] {
    padding: 12px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    color: var(--color-grey);
    font-size: var(--font-size-12);
    border: 1px solid var(--color-light-grey);
    border-radius: 8px;
  }
  input[type="text"]::placeholder {
    color: var(--color-grey);
    font-size: var(--font-size-12);
  }
`;
export const AddressInput = styled.input`
  padding: 12px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;

  color: var(--color-grey);
  font-size: var(--font-size-12);
  border: 1px solid var(--color-light-grey);
  border-radius: 8px;

  position: relative;

  &::placeholder {
    color: var(--color-grey);
    font-size: var(--font-size-12);
  }
`;
export const CloseBtnContainer = styled.span`
  width: 24px;
  height: 24px;
  font-size: var(--font-size-24);

  position: absolute;
  top: 16px;
  left: 16px;
`;
export const BtnContainer = styled(ItemBlock)`
  height: 48px;
`;
export const Button = styled.button`
  width: 100%;
  height: 100%; 

  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-gap: 8px; 
  gap: 8px;

  color: ${(props) => props.color ? `var(--color-${props.color})` : 'var(--color-white)'};
  font-size: var(--font-size-14);
  font-weight: ${(props) => props.bold && 'var(--font-weight-bold)'};
  background-color: ${(props) => props.bgColor? `var(--color-${props.bgColor})` : 'transparent' };
  border-radius: 8px;
`;

export const CompleteButton = styled(Button)`
  height: 48px;

  color: var(--color-grey);
  font-weight: var(--font-weight-normal);
  background-color: var(--transparent);
  border: 1px solid var(--color-light-grey);
  
  transition: all 0.3s;
  
  ${props => props.isBtnSelected && css`
    color: var(--color-white);
    font-weight: var(--font-weight-bold);
    border: 1px solid var(--color-green);
    background-color: var(--color-green);
  `};
`;

export const GoogleLogoutButton = styled(Button)`
  padding: 4px;
  width: 100%;
  height: 100%;
  color: var(--color-white);
  font-size: var(--font-size-14);
  background-color: var(--color-google);

  &:active,
  &:focus,
  &:hover {
    color: var(--color-black);
  }
`;
export const GoogleLoginButton = styled.div`
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
        margin-left: 8px !important;
        line-height: 0 !important;
        font-size: var(--font-size-14) !important;
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
    background-color: transparent;
    font-size: 0;
  };
  a.cart-btn {
    position: relative;
  };
  a.cart-btn span {
    padding: 2px 6px;
    color: var(--color-white);
    font-size: var(--font-size-10);
    font-weight: var(--font-weight-bold);
    background-color: var(--color-yellow);
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(-30%);
  };
`;

// Navbar
export const SideNavWrapper = styled.aside`
  padding: 16px;
  width: calc(100vw / 4 * 3); 
  height: 100vh;
  background-color: #ebebeb; // todo : 색상변경
  
  display: inline-flex;
  flex-direction: column;

  position: fixed;
  top:0;
  left:0;
  z-index: 999;

  .loginlink {
    height: 40px;
    line-height: 40px;

    color: var(--color-white);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-normal);
    background-color: var(--color-black);
    border-radius: 8px;
  }
`;
export const SideHeader = styled.header`
  width: 100%;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  grid-gap: 8px;
  gap: 8px;

  font-size: 0;

  div:first-child {
    flex: 1;
  }
  div:not(:first-child) {
    svg {
      font-size: var(--font-size-12);
      font-size: var(--font-size-24);
    }
  }
  svg {
    cursor: pointer; /* HiOutlineChevronLeft 때문에 추가. 나중에 수정 */
  }
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

  li {
    background-color: transparent;
    transition: all 0.4s;

    &:focus,
    &:active,
    &:hover {
      background-color: rgba(0,0,0,0.1); /* modify later */
    }
  }

  a:link,
  a:visited {
    color: var(--color-black);
    font-size: var( --font-size-14);
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
    font-size: var(--font-size-14);

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
export const MainWrapper = styled.main`
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
    font-size: var(--font-size-20);
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
    font-size: var(--font-size-14);
  }
  p{
    color: var(--color-grey);
    font-size: var(--font-size-14);
  }
  button[type="button"] {
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

// KakaoMap
export const MapWrapper = styled.main`
  padding: 16px;
  width: 100%;
  min-height: calc(100% - 136px);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;

  h1 {
    color: var(--color-black);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-bold);
  }
  .address-wrapper {
    flex: 1;
  }
`;
export const MapSection = styled.section`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;

  h2  {
    color: var(--color-grey);
    font-size: var(--font-size-12);
  }

  input[type="text"] {
    padding: 12px;
    width: 100%;
    font-size: var(--font-size-12);
    border: 1px solid var(--color-light-grey);
    border-radius: 8px;
  }
`;

// Carousel
export const CarouselWrapper = styled.section`
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
  font-size: var(--font-size-14);

  border-radius: 12px;
  border: 1px solid var(--color-white);
  background-color: transparent;
  transition: background-color 0.4s;

  ${(props) => props.isSelected && css`
    background-color: var(--color-white);
    border: none;
  `}
`;
export const AdWrapper = styled.section`
  padding: 16px;
  width: 100vw;
  height: 232px;
  overflow: hidden;
  position: relative;
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
export const AdTitleWrapper = styled.article`
  h2:first-child {
    color: var(--color-yellow);
    font-size: var(--font-size-20);
  }
  h2:last-child {
    color: var(--color-white);
    font-size: var(--font-size-20);
  }
`;
export const AdEventWrapper = styled.article`
  color: var(--color-white);
  font-size: var(--font-size-14);

  p {
    line-height: 1.3rem;
  }
`;
export const AdButtonWrapper = styled.article`
  button[type="button"] {
    padding: 8px 16px;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid var(--color-white);
    
    color: var(--color-white);
    font-size: var(--font-size-10);

    transition: background-color 0.4s;

    &:focus,
    &:active,
    &:hover {
      background-color: var(--color-transparent);
    }
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
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-bold);
    color: var(--color-black);
  }
`;
export const MapViewer = styled.div`
  padding: ${(props) => props.padding? '12px' : '0px' };
  width: 100%;
  height: calc(100%);

  border-radius: 8px;
  border: 1px solid var(--color-light-grey);

  position: relative;

  p {
    color: var(--color-grey);
    font-size: var(--font-size-12);
    font-weight: var(--font-weight-normal);
  }

  ul.placesList {
    width: 100%; 
    display: block;

    position: absolute; 
    top: 0px; 
    right: 0px; 
    z-index: 10;

    display: inline-flex;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;

    background-color: var(--color-transparent);

    li {
      width: 100%;
      position: relative;
    }
  }
`;

export const InputAddress = styled.input`
  padding-left: 22px;
  width: 100%; 
  height: 40px;
  box-sizing: border-box;

  background-color: rgba(255,255,255,0.5);
  border: 1px solid var(--color-light-grey)
  border-radius: 8px;

  color: var(--color-black);
  font-size: var(--font-size-12);

  & + span {
    display:inline-block;
    
    color: var(--main-text-color);
    font-size: var(--font-size-12);

    position: absolute; 
    top: 50%; 
    right: 5%;
    transform: translateY(-50%);

    a {
      font-size: var(--font-size-12);
    }
  }

  &:active,
  &:focus,
  &:active + span,
  &:focus + span {
    color: var(--color-white);
    background-color: var(--color-green);
  }
`;

export const FormFieldset = styled.fieldset`
  margin:0;
  padding: 0;
  border: none;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;
`;
export const Map = styled.div`
  height: 100%;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  height: 48px;
`;
export const ButtonsWrapper = styled.div`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;
`;

// Menu
export const MenuSection = styled.section`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;

  h2 {
    color: var(--color-black);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-bold);
  }

  ul {
    font-size: 0; /* removed unexpected space */
  }

  ul:not(option-wrapper) {
    display: inline-flex;
    flex-direction: row;
    grid-gap: 20px;
    gap: 20px;
  }

  ul.option-wrapper{
    width: 100%;
    min-height: 104px;

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 8px;
    gap: 8px;

    background-color: var(--color-transparent);
  }
`;

export const OptionLists = styled.li`
  display: inline-flex;
  justify-content: space-between;
  flex-direction: row;
  grid-gap: 16px;
  gap: 16px;

  font-size: var(--font-size-12);

  span {
    margin-left: 8px;
  }
  .option {
    width: 238px;
    display: inline-flex;
    flex-direction: row;
    grid-gap: 16px;
    gap: 16px;
  }
`;

export const OptionList = styled.li`
  display: inline-flex;
  align-items: center;
  grid-gap: 8px;
  gap: 8px;
`;
// todo : 라디오버튼 커스터마이징
export const RadioButton = styled.input`
  accent-color: var(--color-green);
  /* display: none; */
`;
export const RadioButtonLabel = styled.label`
  font-size: var(--font-size-12);

  &:checked + ${RadioButton} {
    
  }
`;

export const MenuWrapper = styled(MainWrapper)`
  padding: 16px;
  position: relative;
`;
export const MenuCategoryList = styled.ul`

`;
export const CategoryBtn = styled.button`
  padding: 8px;
  width: 100%;
  min-width: 65px;
  height: 104px;

  color: var(--color-grey);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-normal);
  background-color: rgba(233,233,233,0.4);
  border: 1px solid var(--color-light-grey);
  border-radius: 8px;
  
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 24px;
  gap: 24px;

  transition: all 0.3s;

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  ${(props) => props.isBtnSelected && css`
    color: var(--color-white);
    background-color: var(--color-green);
    font-weight: var(--font-weight-bold);

    img {
      transform: scale(2);
      transition: transform 0.3s;
      filter : drop-shadow(0px 2px 2px var(--color-black));
    }
  `}
`;

// 각 재료 선택 (야채제외)
export const MenuListGrid = styled.div`
  margin-bottom: 16px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(156px, auto);
  grid-gap: 20px;
`;
export const MenuArticle = styled.article`
  padding: 8px;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 8px;
  gap: 8px;

  border: 1px solid var(--color-light-grey);
  border-radius: 8px;

  position: relative;

  .menu-name-wrapper {
    max-width: 112px; /* 패딩, 아이콘너비 제외한 최대너비값 */
    max-height: 30px; 

    .menu-name-kor {
      font-size: var(--font-size-12);  
      
      text-overflow: ellipsis; // 네이밍이 길어지면 ... 처리
      white-space: nowrap;
      overflow: hidden;
    }
    .menu-name-eng {
      font-size: var(--font-size-10);  
      
      text-overflow: ellipsis; // 네이밍이 길어지면 ... 처리
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .menu-img-wrapper{
    width: 100%;
    max-height: 84px;
    flex: 1;
    font-size: 0; 

    position: relative;
    
    .menu-img {
      width: 100%;
      position: relative;
      font-size: var(--font-size-10);

      opacity: 1;
      transition: opacity 0.3s;
    }
    .menu-description {
      width: 100%;
      font-size: var(--font-size-10);
      
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      opacity: 0;
      transition: opacity 0.5s;
    }

    ${(props) => props.isMenuSelected && css`
      .menu-img {
        opacity: 0.3;
      }
      .menu-description {
        opacity: 1;
      }
    `}
  }

  .menu-price {
    font-size: var(--font-size-10);  
  }

  ${(props) => props.isMenuSelected && css`
    border: 2px solid var(--color-green);
  `}
`;
export const OrderIconButton = styled.button`
  padding: 0;
  width: 32px;
  height: 32px;
  
  color: var(--color-light-grey);
  font-size: 0;
  background-color: var(--color-transparent);
  border-radius: 0 8px 0 8px;

  position: absolute;
  top: -2px;
  right: -2px;
  z-index: 1;

  svg {
    font-size: var(--font-size-16);
  }

  ${(props) => props.isMenuSelected && css`
    background-color: var(--color-green);
  `}
`;

// 야채 선택
export const VegListGrid = styled.div`
  margin-bottom: 16px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(1fr);
  grid-auto-rows: minmax(156px, auto);
  grid-gap: 20px;
`;
export const VegArticle = styled.article`
  padding: 8px;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  border: 2px solid var(--color-green);
  border-radius: 8px;

  position: relative;
`;
export const VegArticleHeader = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: var(--font-size-14);
  }
`;
export const VegAmountButton = styled.button`
  padding: 0;
  width: 32px;
  height: 32px;
  
  color: var(--color-grey);
  font-size: var(--font-size-18);
  background-color: var(--color-transparent);
  border-radius: 50%;
  
  &:focus {
    color: var(--color-white);
    background-color: var(--color-green);
  }
  svg {
    font-size: var(--font-size-16);
  }
`;

export const VegContentWrapper = styled.div`
  width: 100%;
  font-size: 0; /* remove space */

  img {
    width: 100%;
    max-height: 84px;
    object-fit: contain;
  }

  input[type="range"] {
    width: 100%;
  }
`;

export const RangeButton = styled.input`
  accent-color: var(--color-green);
`;


export const FloatBtn = styled.button`
  display: block;
  margin: auto;
  width: 100%;
  height: 48px;

  color: var(--color-grey);
  font-weight: var(--font-weight-normal);
  background-color: var(--color-transparent);
  border: 1px solid var(--color-light-grey);
  backdrop-filter: blur(4px);
  border-radius: 8px;

  position: sticky; /* 부모요소에 overflow 요소가 있으면 작동안함 */
  bottom: 16px;
  left: 0;
  z-index: 100;

  transition: all 0.3s;
  
  ${props => props.isBtnActivated && css`
    color: var(--color-white);
    font-weight: var(--font-weight-bold);
    border: 1px solid var(--color-green);
    background-color: var(--color-green);
  `};
`;


// Footer
export const MainFooter = styled.footer`
    padding: 0 16px;
    width: 100vw;
    height: 80px;

    color: var(--color-grey);
    font-size: var(--font-size-10);
    background-color: var(--color-black);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

  address {
    width: 100%;
    word-break: break-all;
  }
`;