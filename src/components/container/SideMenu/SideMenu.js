import React from "react";
import { NavLink } from "react-router-dom";
import LogoSmall from "assets/small-logo.webp";
import { HiX, HiLogout, HiUser } from "react-icons/hi";
import { NavCategories } from "mock/tab-data";
import LINK from "constants/link";
import {
  Container,
  HeaderContainer,
  NavContainer,
  NavigationList,
  Item,
  FooterContainer,
  MainContainer,
  NavLinkStyled,
  Button
} from "./SideMenu.style";
import { usePageMove, useReduxSelector } from "./hooks";

const Navbar = ({ handleNavbar }) => {
  const { loginFlag, userInfo } = useReduxSelector();
  const goToLoginPage = usePageMove();

  return (
    <Container>
      <Header handleNavbar={handleNavbar} />
      <Navigation handleNavbar={handleNavbar} />
      {loginFlag === false && <LoginButton goToLoginPage={goToLoginPage} />}
      {loginFlag && <Main userInfo={userInfo} />}
      <Footer loginFlag={loginFlag} />
    </Container>
  );
};

const Header = ({ handleNavbar }) => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

const Navigation = ({ handleNavbar }) => {
  return (
    <NavContainer>
      <NavigationList>
        {NavCategories.map((category) => (
          <Item key={category.pathName}>
            <NavLinkStyled
              to={category.pathName}
              onClick={handleNavbar}
              className={({ isActive }) =>
                isActive ? "var(--color-green)" : "var(--color-black)"
              }
            >
              {category.categoryName}
            </NavLinkStyled>
          </Item>
        ))}
      </NavigationList>
    </NavContainer>
  );
};

const Main = ({ userInfo }) => {
  const { userName, imageURL } = userInfo;

  return (
    <MainContainer>
      <h1>
        안녕하세요, {userName}님
        <img src={imageURL} alt={userName} />
      </h1>
      <div>
        <p>멤버십포인트 : 000원</p>
        <p>주문내역 : 0건</p>
      </div>
    </MainContainer>
  );
};

const LoginButton = ({ goToLoginPage }) => {
  return (
    <Button type="button" onClick={goToLoginPage}>
      로그인
    </Button>
  );
};

const Footer = ({ loginFlag }) => {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
};

export default Navbar;
