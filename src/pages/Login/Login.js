import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi";
import LogoSmall from "assets/small-logo.webp";
import LINK from "constants/link";
import { SubwayLogin, LoginButtons } from "components";
import {
  ClosedButton,
  LinkStyled,
  SubwayLogo,
  Container,
  SignUpWrapper,
  SignInTitle
} from "./Login.style";

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
