import styled, { css } from 'styled-components';

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
export const LogoContainerStyled = styled(ItemBlock)`
  height: 104px;

  img {
    display: inline-block;
    margin-top: 40px;
    width: 180px;
    height: 48px;
  }
`;
export const InputContainerStyled = styled(ItemBlock)`
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
export const CloseBtnContainerStyled = styled.span`
  width: 24px;
  height: 24px;
  font-size: var(--font-size-24);

  position: absolute;
  top: 16px;
  left: 16px;
`;
export const BtnContainerStyled = styled(ItemBlock)`
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
  }
  .description {
    font-size: var(--font-size-12);
  }

  p {
    color: var(--color-black);

    span {
      float: right;
    }
  }
  p:not(total-price) {
    font-size: var(--font-size-12);
  }
  p.total-price {
    margin-top: 16px;
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-bold);
  }

  ul {
    width: 100%;
    background-color: var(--color-transparent);
    border-radius: 8px;

    font-size: 0; /* removed unexpected space */
  }
  ul:not(option-wrapper) {
    display: inline-flex;
    flex-direction: row;
    grid-gap: 20px;
    gap: 20px;
  }
  ul.option-wrapper{
    min-height: 104px;

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 8px;
    gap: 8px;
  }
`;

export const OrderMenuSection = styled.section`
  margin-top: 16px;
  width: 100%;
  height: auto;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;

  h2 {
    color: var(--color-black);
    font-size: var(--font-size-14);

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    span {
      display: inline-block;
      color: var(--color-grey);
      font-size: var(--font-size-12);
      font-weight: var(--font-weight-normal);
    }
    span.subway-phone{
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 16px;
      gap: 16px;
    }
  }
  p {
    line-height: 1.3rem;
    font-size: var(--font-size-12);

    span {
      display: inline-block;
      width: 16px;
      height: 16px;
    }
  }
  p.order-agreement {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 8px;
    gap: 8px;

    input {
      accent-color: var(--color-green);
    }
  }

  ul {
    padding: 8px;
    width: 100%;
    background-color: var(--color-transparent);
    border-radius: 8px;
    box-sizing: border-box;

    font-size: 0; /* removed unexpected space */

    li {
      line-height: 1.3rem;
      color: var(--color-grey);
      font-size: var(--font-size-12);
    }
  }
  ul.addr-wrapper,
  ul.deliver-wrapper {
    min-height: 56px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
  }
  ul.addr-wrapper {
    li:nth-child(2) {
      margin-left: auto;
      justify-self: right;
    }
  }
  ul.deliver-wrapper {
    li {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 8px;
      gap: 8px;
    }

    input {
      accent-color: var(--color-green);
    }
  }

  textarea {
    padding: 8px;
    width: 100%;
    height: 100%;
    min-height: 72px;
    
    border-radius: 8px;
    background-color: var(--color-transparent);
    
    color: var(--color-grey);
    font-size: var(--font-size-12);

    resize: none;
  }
`;

export const MenuCard = styled.section`
  padding: 8px;
  width: 100%;
  height: 112px;
  background-color: #F6F5F5;

  display: inline-flex;
  flex-direction: row;
  grid-gap: 16px;
  gap: 16px;

  .card-img {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 96px;
    height: 100%;

    img {
      min-width: 96px;
      height: 96px;
      object-fit: cover;
      font-size: var(--font-size-12);
    }
  }
  .card-content {
    padding-top: 8px;
    flex: 1;

    display: inline-flex;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;

    overflow: hidden;

    h2 {
      font-size: var(--font-size-14);
      span {
        float: right;
      }
    }
    p {
      font-size: var(--font-size-12);
      max-height: 32px;
      overflow: hidden;
      position: relative;

      &::after {
        content: '...';
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }


  }
`;

export const OrderButtonWrapper = styled.div`
  margin-top: auto;
  justify-self: end;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;

  .button-wrapper {
    width: 100%;
    max-width: 112px;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-size: 0;

    span {
      font-size: var(--font-size-10);
      font-weight: var(--font-weight-bold);
    }
    button {
      width: 24px;
      height: 24px;
      background-color: #C4C4C4;
      border-radius: 50%;

      font-size: var(--font-size-10);
    }
    .menu-delete {
      font-size: var(--font-size-14);
    }
  }

  .menu-delete {
    margin-left: auto;
    justify-self: end;
    font-size: 0;

    svg {
      font-size: var(--font-size-24);
    }
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
// 라디오버튼 커스터마이징
export const RadioButton = styled.input`
  accent-color: var(--color-green);
`;
export const RadioButtonLabel = styled.label`
  font-size: var(--font-size-12);
`;

export const CheckBoxButton = styled.input`
  accent-color: var(--color-green);
`;
export const CheckBoxButtonLabel = styled.label`
  font-size: var(--font-size-12);
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

export const OrderSection = styled.section`
  margin: 48px 0 16px 0;
  width: 100%;

  h2 {
    font-size: var(--font-size-20);
  }
  p {
    font-size: var(--font-size-14);
  }
  li {
    font-size: var(--font-size-14);
  }
  
  ul {
    display: inline-flex;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;
  }

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

  border: 2px solid var(--color-light-grey);
  border-radius: 8px;

  position: relative;

  ${(props) => props.isMenuSelected && css`
    border: 2px solid var(--color-green);
  `}
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

// button

export const RangeButton = styled.input`
  accent-color: var(--color-green);
`;
export const FloatBtnWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 48px;

  display: inline-flex;
  flex-direction: row;
  grid-gap: 8px;
  gap: 8px;

  position: sticky; /* 부모요소에 overflow 요소가 있으면 작동안함 */
  bottom: 16px;
  left: 0;
  z-index: 100;

  transition: all 0.3s;
`;
export const HalfSizeBtn = styled.button`
  width: 100%;
  height: 100%;

  color: var(--color-grey);
  font-weight: var(--font-weight-normal);
  background-color: var(--color-transparent);
  border: 1px solid var(--color-light-grey);
  backdrop-filter: blur(4px);
  border-radius: 8px;

  transition: all 0.3s;

  &:focus,
  &:active {
    color: var(--color-white);
    font-weight: var(--font-weight-bold);
    border: 1px solid var(--color-green);
    background-color: var(--color-green);
  }
`;
