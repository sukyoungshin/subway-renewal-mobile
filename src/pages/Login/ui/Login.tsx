import LogoSmall from '@/shared/assets/small-logo.webp';
import LINK from '@/shared/constants/link';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import {
  ClosedButton,
  Container,
  LinkStyled,
  SignInTitle,
  SignUpWrapper,
  SubwayLogo,
} from './Login.style';
import LoginButtons from './LoginButtons/LoginButtons';
import SubwayLogin from './SubwayLogin/SubwayLogin';

const Login = () => {
  return (
    <Container>
      <ClosedButton>
        <LinkStyled to={LINK.ROOT}>
          <HiOutlineChevronLeft />
        </LinkStyled>
      </ClosedButton>

      <SubwayLogo>
        <Link to={LINK.ROOT}>
          <img src={LogoSmall} alt="로고" />
        </Link>
      </SubwayLogo>

      <SubwayLogin />

      <SignUpWrapper>
        <p>
          아직 회원이 아니시라면,
          <Link to={LINK.SIGNUP}>회원가입</Link>
        </p>
      </SignUpWrapper>

      <SignInTitle>
        <p>간편 SNS 로그인</p>
      </SignInTitle>

      <LoginButtons />
    </Container>
  );
};

export default Login;
