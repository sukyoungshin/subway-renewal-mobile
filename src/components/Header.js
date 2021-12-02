import React, { useState } from 'react';
// COMPONENTS
import LoginModal from './LoginModal';
import HeaderNav from './HeaderNav';
import Navbar from './Navbar.js';

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