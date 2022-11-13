import React from "react";
import { NavLink } from "react-router-dom";
import LogoSmall from "assets/small-logo.webp";
import { HiX, HiLogout, HiUser } from "react-icons/hi";
import { NavCategories } from "mock/tab-data";
import LINK from "constants/link";
import {
  NavbarWrapperStyled,
  NavbarHeaderStyled,
  NavbarNavStyled,
  NavbarFooterStyled,
  NavbarMainStyled,
  NavLinkStyled,
  ButtonStyled,
} from "./SideMenu.style";
import { usePageMove, useReduxSelector } from "./hooks";

const Navbar = ({ handleNavbar }) => {
  const { loginFlag, userInfo } = useReduxSelector();
  const goToLoginPage = usePageMove();

  return (
    <NavbarWrapperStyled>
      <NavbarHeader handleNavbar={handleNavbar} />
      <NavbarNav handleNavbar={handleNavbar} />
      {loginFlag === false && (
        <NavbarLoginButton goToLoginPage={goToLoginPage} />
      )}
      {loginFlag && <NavbarMain userInfo={userInfo} />}
      <NavbarFooter loginFlag={loginFlag} />
    </NavbarWrapperStyled>
  );
};

const NavbarHeader = ({ handleNavbar }) => {
  return (
    <NavbarHeaderStyled>
      <div>
        <NavLinkStyled to={LINK.ROOT} onClick={handleNavbar}>
          <img src={LogoSmall} alt="로고" />
        </NavLinkStyled>
      </div>
      <div>
        <NavLinkStyled to={LINK.ROOT} onClick={handleNavbar}>
          <HiX />
        </NavLinkStyled>
      </div>
    </NavbarHeaderStyled>
  );
};

const NavbarNav = ({ handleNavbar }) => {
  return (
    <NavbarNavStyled>
      <ul>
        {NavCategories.map((category) => (
          <li key={category.pathName}>
            <NavLinkStyled
              to={category.pathName}
              onClick={handleNavbar}
              className={({ isActive }) =>
                isActive ? "var(--color-green)" : "var(--color-black)"
              }
            >
              {category.categoryName}
            </NavLinkStyled>
          </li>
        ))}
      </ul>
    </NavbarNavStyled>
  );
};

const NavbarMain = ({ userInfo }) => {
  const { userName, imageURL } = userInfo;

  return (
    <NavbarMainStyled>
      <h1>
        안녕하세요, {userName}님
        <img src={imageURL} alt={userName} />
      </h1>
      <div>
        <p>멤버십포인트 : 000원</p>
        <p>주문내역 : 0건</p>
      </div>
    </NavbarMainStyled>
  );
};

const NavbarLoginButton = ({ goToLoginPage }) => {
  return (
    <ButtonStyled type="button" onClick={goToLoginPage}>
      로그인
    </ButtonStyled>
  );
};

const NavbarFooter = ({ loginFlag }) => {
  return (
    <NavbarFooterStyled>
      {loginFlag && (
        <>
          <div>
            <HiUser />
          </div>
          <div>
            <NavLink to={LINK.LOGIN}>
              <HiLogout />
            </NavLink>
          </div>
        </>
      )}
    </NavbarFooterStyled>
  );
};

export default Navbar;
