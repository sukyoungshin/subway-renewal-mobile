import React from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
// ICONS
import Cart from "../assets/icons/cart.svg";
import Logo from "../assets/splash-logo.png";
// STYLE
import { HeaderWrapper } from '../common/Styled';


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

export default HeaderNav;