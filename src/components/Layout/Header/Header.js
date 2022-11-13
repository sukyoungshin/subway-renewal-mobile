import React from "react";
import { useSelector } from "react-redux";
import CartSvg from "assets/icons/cart.svg";
import Logo from "assets/splash-logo.webp";
import { HiMenuAlt1 } from "react-icons/hi";
import { itemCountSelector } from "reducers";
import { Button, Container, LinkStyled, Anchor } from "./Header.style";
import LINK from "constants/link";

const Header = ({ handleNavbar }) => {
  const itemCount = useSelector(itemCountSelector); // 장바구니 주문갯수

  return (
    <Container>
      <ul className="header-nav-wrapper">
        <li>
          <HamburgerMenu handleNavbar={handleNavbar} />
        </li>
        <li>
          <SubwayLogo />
        </li>
        <li>
          <Cart itemCount={itemCount} />
        </li>
      </ul>
    </Container>
  );
};

const HamburgerMenu = ({ handleNavbar }) => {
  return (
    <Button type="button" onClick={handleNavbar}>
      <HiMenuAlt1 />
    </Button>
  );
};

const SubwayLogo = () => {
  return (
    <Anchor to={LINK.ROOT} title="메인페이지로 이동">
      <img src={Logo} alt="써브웨이 로고" />
    </Anchor>
  );
};

const Cart = ({ itemCount }) => {
  return (
    <LinkStyled to={LINK.CART}>
      <img src={CartSvg} alt="장바구니 아이콘" />
      <span>{itemCount}</span>
    </LinkStyled>
  );
};

export default Header;
