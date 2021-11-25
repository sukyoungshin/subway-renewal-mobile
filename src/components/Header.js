import React from "react";
import Logo from "../assets/splash-logo.png";
import Cart from "../assets/icons/cart.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = ({ handleNavbar }) => {
  return (
    <header className="main-header">
      <nav>
        <ul className="header-nav-wrapper">
          <li onClick={handleNavbar}>
            <a href="#" title="클릭 시 메뉴바 나타냄">
              <HiMenuAlt1
                style={{
                  color: "var(--color-green)",
                  width: "32px",
                  height: "32px",
                }}
              />
            </a>
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
            <a href="#" title="장바구니 페이지로 이동" className="cart-btn">
              <img src={Cart} alt="장바구니 아이콘" />
              <span>0</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
