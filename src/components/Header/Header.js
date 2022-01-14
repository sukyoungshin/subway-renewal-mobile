import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Cart from "../../assets/icons/cart.svg";
import Logo from "../../assets/splash-logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { itemCountSelector } from '../../reducers';
import { HeaderWrapperStyled } from './Header.style';
import LINK from '../../constants/link';

const Header = ({ handleNavbar }) => {
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
          <HeaderCartIcon />
        </li>
      </ul>
    </HeaderWrapperStyled>
  );
};

const HeaderHamburgerIcon = ({ handleNavbar }) => {
  return (
    <button type="button" onClick={handleNavbar}>
      <HiMenuAlt1
        style={{
          color: "var(--color-green)",
          width: "32px",
          height: "32px",
        }}
      />
    </button>
  );
};

const HeaderLogo = () => {
  return (
    <Link to={LINK.MAIN} title="메인페이지로 이동">
      <img
        src={Logo}
        alt="logo"
        style={{ 
          width: "calc(50%)", 
          height: "calc(50%)",
        }}
      />
    </Link>
  );
};

const HeaderCartIcon = () => {
  /* 리덕스 */
  const itemCount = useSelector(itemCountSelector); // 장바구니 주문갯수

  return (
    <Link to={LINK.CART} className="cart-btn" >
      <img src={Cart} alt="장바구니 아이콘" />
      <span>
        {itemCount}
      </span>
    </Link>
  );
};

export default Header;