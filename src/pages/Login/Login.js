import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi";
import LogoSmall from "assets/small-logo.png";
import LINK from 'constants/link';
import { GoogleLogin, KakaoLogin, FacebookLogin } from 'components';
import { CloseBtnContainerStyled, InputContainerStyled, ItemBlock, LinkStyled, LogoContainerStyled, MainStyled } from './Login.style';
import SubwayLoginButton from 'components/SubwayLoginButton/SubwayLoginButton';

const Login = ({ getLoggedIn }) => {

  return (
    <MainStyled>
      <TopLeftIcon />
      <TopCenter />
      
      <InputContainerStyled>
        <input type="text" placeholder="아이디를 입력하세요" />
      </InputContainerStyled>
      <InputContainerStyled>
        <input type="text" placeholder="비밀번호를 입력하세요" />
      </InputContainerStyled>

      <SubwayLoginButton getLoggedIn={getLoggedIn} />
      <SignUpRequest />
      <Line />
      <ItemBlock className="btn-wrapper">
        <GoogleLogin />
        <KakaoLogin /> 
        <FacebookLogin />
      </ItemBlock>
    </MainStyled>
  );
};

const TopLeftIcon = () => {
  return(
    <CloseBtnContainerStyled>
      <LinkStyled to={LINK.ROOT}>
        <HiOutlineChevronLeft />
      </LinkStyled>
    </CloseBtnContainerStyled>
  );
};

const TopCenter = () => {
  return (
    <LogoContainerStyled>
      <Link to={LINK.ROOT}>
        <img src={LogoSmall} alt="로고" />
      </Link>
    </LogoContainerStyled>
  );
};

const SignUpRequest = () => {

  return (
    <ItemBlock className="signup-wrapper">
      <p>
        아직 회원이 아니시라면, 
        <Link to={LINK.SIGNUP}>
          회원가입
        </Link>
      </p>
    </ItemBlock>
  );
};

const Line = () => {
  return (
    <ItemBlock className="signin-title">
      <p>간편 SNS 로그인</p>
    </ItemBlock>
  );
};

export default Login;