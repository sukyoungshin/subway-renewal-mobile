import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
// ICONS
import Logo from "../assets/splash-logo.png";
import LogoSmall from "../assets/small-logo.png";
import Cart from "../assets/icons/cart.svg";
import { RiKakaoTalkFill, RiFacebookCircleFill } from "react-icons/ri";
import { HiOutlineChevronLeft, HiMenuAlt1 } from "react-icons/hi";
// COMPONENTS
import Navbar from './Navbar.js';


// STYLED (LoginModal)
const ModalWrapper = styled.div`
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
const ItemBlock = styled.div`
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
    height: 30px;
  }
  &.signin-title {
    height: 40px;

    /* line그리기 */
    p {
      display: flex;
      flex-basis: 100%;
      align-items: center;
      color: var(--color-grey);
      margin: 8px 0;
    }
    p::before {
      content: '';
      flex-grow: 1;
      margin: 0px 16px;
      background-color: var(--color-light-grey);
      height: 0.5px;
    }
    p::after {
      content: '';
      flex-grow: 1;
      margin: 0px 16px;
      background-color: var(--color-light-grey);
      height: 0.5px;
    }
  }
`;
const LogoContainer = styled(ItemBlock)`
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
    border: 1px solid var(--color-light-grey);
    border-radius: 8px;
  }
  input[type="text"]::placeholder {
    font-size: 12px;
    color: var(--color-grey);
  }
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

  font-size: 14px;
  border-radius: 8px;
  font-weight: ${(props) => props.bold && 'bold'};
  color: ${(props) => props.color ? `var(--color-${props.color})` : 'var(--color-white)'};
  background-color: ${(props) => props.bgColor? `var(--color-${props.bgColor})` : 'transparent' };
  border: ${(props) => props.bgColor? null : '1px solid var(--color-green)}'};
`;
const CloseBtnContainer = styled.div`
  width: 24px;
  height: 24px;
  font-size: 24px;

  position: absolute;
  top: 16px;
  left: 16px;
`;

// STYLED (HeaderNav)
const HeaderWrapper = styled.header`
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
    font-size: 8px;
    color: #009743;
  };
  a.cart-btn span {
    position: absolute;
    top: -0.1rem;
    right: 0.1rem;
  };
`;

// COMPONENT
const LoginModal = ({ getLoggedIn, getLoginModal }) => {
  return (
    <ModalWrapper>
      <CloseBtnContainer onClick={getLoginModal}>
        <HiOutlineChevronLeft />
      </CloseBtnContainer>
      <LogoContainer>
        <img src={LogoSmall} alt="로고" />
      </LogoContainer>
      <InputContainer>
        <input type="text" placeholder="아이디를 입력하세요" />
      </InputContainer>
      <InputContainer>
        <input type="text" placeholder="비밀번호를 입력하세요" />
      </InputContainer>
      <BtnContainer>
        <Button 
          type="button" 
          bgColor={'green'} 
          bold={'bold'}
          onClick={getLoggedIn}
        >로그인</Button>
      </BtnContainer>
      <ItemBlock className="signup-wrapper">
        <p>아직 회원이 아니시라면, 회원가입</p>
      </ItemBlock>
      <ItemBlock className="signin-title">
        <p>간편로그인</p>
      </ItemBlock>
      <ItemBlock className="btn-wrapper">
        <BtnContainer>
          <Button type="button" bgColor={'kakao'} color={'black'}>
            <RiKakaoTalkFill /> 카카오로 시작
          </Button>
        </BtnContainer>
        <BtnContainer>
          <Button type="button" bgColor={'facebook'}>
            <RiFacebookCircleFill /> 페이스북으로 시작
          </Button>
        </BtnContainer>
      </ItemBlock>
    </ModalWrapper>
  );
};

const HeaderNav = ({ handleNavbar }) => {
  return (
    <HeaderWrapper>
      <ul className="header-nav-wrapper">
        <li>
          <button type="button" onClick={handleNavbar}>
            <HiMenuAlt1
              style={{
                color: "var(--color-green)",
                width: "32px",
                height: "32px",
              }}
            />
          </button>
        </li>
        <li>
          <Link to="/main" title="메인페이지로 이동">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "calc(50%)", height: "calc(50%)" }}
            />
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cart-btn" >
            <img src={Cart} alt="장바구니 아이콘" />
            <span>0</span>
          </Link>
        </li>
      </ul>
    </HeaderWrapper>
  );
};

const Header = () => {
  const [navModalOpened, setNavModalOpened] = useState(false); // navbar 클릭
  const handleNavbar = () => setNavModalOpened((prev) => !prev); // navbar 스위치

  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 완료여부
  const [ loginModalOpened, setLoginModalOpened] = useState(false); // 로그인팝업창
  const getLoginModal = () => setLoginModalOpened(loginModalOpened => !loginModalOpened); // 로그인 팝업창
  const getLoggedIn = () => {
    setIsLoggedIn(isLoggedIn => true); // 로그인완료된 상태로 변경
    getLoginModal(); // 로그인팝업창 닫기
  }; 

  return (
    <>
    {/* 로그인 팝업 */}
    {
      loginModalOpened 
      ? (
        <LoginModal 
          getLoginModal={getLoginModal}
          getLoggedIn={getLoggedIn}
        />
        ) 
      : null
      }

    {/* 사이드메뉴바 팝업 */}
    {
      navModalOpened 
      ? (
        <Navbar 
          isLoggedIn={isLoggedIn} 
          loginModalOpened={loginModalOpened}
          getLoginModal={getLoginModal}
          handleNavbar={handleNavbar} 
          getLoggedIn={getLoggedIn}
        />
        ) 
      : null
    }

    {/* 헤더 */}
    <HeaderNav handleNavbar={handleNavbar} />
    </>
  );
};

export default Header;