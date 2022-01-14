import React, { useState } from 'react';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';

const HeaderLayout = () => {
  const [ navModalOpened, setNavModalOpened ] = useState(false); // navbar 클릭
  const handleNavbar = () => setNavModalOpened((prev) => !prev); // navbar 스위치

  return (
    <>
    {
      navModalOpened
      ? (
        <SideMenu 
          navModalOpened={navModalOpened} 
          handleNavbar={handleNavbar} 
        />
        ) 
      : null
    }

    <Header handleNavbar={handleNavbar} />
    </>
  );
};

export default HeaderLayout;