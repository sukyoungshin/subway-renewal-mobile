import React from 'react';
import { useSelector } from 'react-redux';
import Cart from "assets/icons/cart.svg";
import Logo from "assets/splash-logo.webp";
import { HiMenuAlt1 } from "react-icons/hi";
import { itemCountSelector } from 'reducers';
import { ButtonStyled, HeaderWrapperStyled, LinkStyled, MainLinkStyled } from './Header.style';
import LINK from 'constants/link';

const Header = ({ handleNavbar }) => {
  const itemCount = useSelector(itemCountSelector); // 장바구니 주문갯수

  return (
    <HeaderWrapperStyled>
      <ul className="header-nav-wrapper">
        <li>
          <HeaderHamburgerIcon handleNavbar={handleNavbar} />
        </li>
        <li>
          <HeaderLogo />
        </li>
        <li>
          <HeaderCartIcon itemCount={itemCount} />
        </li>
      </ul>
    </HeaderWrapperStyled>
  );
};

const HeaderHamburgerIcon = ({ handleNavbar }) => {
  return (
    <ButtonStyled type="button" onClick={handleNavbar}>
      <HiMenuAlt1 />
    </ButtonStyled>
  );
};

const HeaderLogo = () => {
  return (
    <MainLinkStyled to={LINK.ROOT} title="메인페이지로 이동">
      <img src={Logo} alt="써브웨이 로고" />
    </MainLinkStyled>
  );
};

const HeaderCartIcon = ({ itemCount }) => {
  return (
    <LinkStyled to={LINK.CART} >
      <img src={Cart} alt="장바구니 아이콘" />
      <span>{itemCount}</span>
    </LinkStyled>
  );
};

export default Header;