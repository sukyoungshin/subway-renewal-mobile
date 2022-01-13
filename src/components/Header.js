import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import Navbar from './Navbar.js';

const Header = () => {
  const [ navModalOpened, setNavModalOpened ] = useState(false); // navbar 클릭
  const handleNavbar = () => setNavModalOpened((prev) => !prev); // navbar 스위치

  const [ loginModalOpened, setLoginModalOpened ] = useState(false); // 로그인팝업창
  const getLoginModal = () => setLoginModalOpened(loginModalOpened => !loginModalOpened); // 로그인 팝업창
  const getLoggedIn = () => getLoginModal(); // 로그인팝업창 닫기

  return (
    <>
    {/* 사이드메뉴바 팝업 */}
    {
      navModalOpened
      ? (
        <Navbar 
          navModalOpened={navModalOpened} 
          handleNavbar={handleNavbar} 
          getLoginModal={getLoginModal}
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