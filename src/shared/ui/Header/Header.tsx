import { itemCountSelector } from '@/features/cart/model/selector';
import CartSvg from '@/shared/assets/icons/cart.svg';
import Logo from '@/shared/assets/splash-logo.webp';
import LINK from '@/shared/constants/link';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Anchor, Button, Container, LinkStyled } from './Header.style';

interface IProps {
  handleNavbar: () => void;
}

const Header = ({ handleNavbar }: IProps) => {
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

const HamburgerMenu = ({ handleNavbar }: IProps) => {
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
