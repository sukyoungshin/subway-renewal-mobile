import { NavCategories } from '@/shared/api/mock/navigation.mock.js';
import LogoSmall from '@/shared/assets/small-logo.webp';
import LINK from '@/shared/constants/link';
import { HiLogout, HiUser, HiX } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Container,
  FooterContainer,
  HeaderContainer,
  Item,
  MainContainer,
  NavContainer,
  NavigationList,
  NavLinkStyled,
} from './SideMenu.style';
import { usePageMove, useReduxSelector } from './hooks';

interface IProps {
  handleNavbar: () => void;
}

const SideMenu = ({ handleNavbar }: IProps) => {
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

const Header = ({ handleNavbar }: IProps) => {
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

const Navigation = ({ handleNavbar }: IProps) => {
  return (
    <NavContainer>
      <NavigationList>
        {NavCategories.map((category) => (
          <Item key={category.pathName}>
            <NavLinkStyled
              to={category.pathName}
              onClick={handleNavbar}
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? 'var(--color-green)' : 'var(--color-black)'
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

const Main = ({
  userInfo,
}: {
  userInfo: {
    userName: string;
    imageURL: string;
  };
}) => {
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

const LoginButton = ({ goToLoginPage }: { goToLoginPage: () => void }) => {
  return (
    <Button type="button" onClick={goToLoginPage}>
      로그인
    </Button>
  );
};

const Footer = ({ loginFlag }: { loginFlag: boolean }) => {
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

export default SideMenu;
