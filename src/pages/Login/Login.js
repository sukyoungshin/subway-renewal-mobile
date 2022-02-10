import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi";
import LogoSmall from "assets/small-logo.webp";
import LINK from 'constants/link';
import { SubwayLogin, GoogleLogin, KakaoLogin, FacebookLogin } from 'components';
import { CloseBtnContainerStyled, ItemBlock, LinkStyled, LogoContainerStyled, MainStyled } from './Login.style';

const Login = () => {

  return (
    <MainStyled>
      <CloseBtnContainerStyled>
        <LinkStyled to={LINK.ROOT}>
          <HiOutlineChevronLeft />
        </LinkStyled>
      </CloseBtnContainerStyled>

      <LogoContainerStyled>
        <Link to={LINK.ROOT}>
          <img src={LogoSmall} alt="로고" />
        </Link>
      </LogoContainerStyled>
      
      <SubwayLogin />

      <ItemBlock className="signup-wrapper">
        <p>
          아직 회원이 아니시라면, 
          <Link to={LINK.SIGNUP}>회원가입</Link>
        </p>
      </ItemBlock>
      
      <ItemBlock className="signin-title">
        <p>간편 SNS 로그인</p>
      </ItemBlock>

      <ItemBlock className="btn-wrapper">
        <GoogleLogin />
        <KakaoLogin /> 
        <FacebookLogin />
      </ItemBlock>
    </MainStyled>
  );
};

export default Login;