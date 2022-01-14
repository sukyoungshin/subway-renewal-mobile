import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi";
import LogoSmall from "../assets/small-logo.png";
import { BtnContainerStyled, Button, CloseBtnContainerStyled, InputContainerStyled, ItemBlock, LogoContainerStyled, ModalWrapper } from '../common/Styled';
import { GoogleLogin, KakaoLogin, FacebookLogin } from '../components';
import LINK from '../constants/link';

const Login = ({ getLoggedIn }) => {
  /* 라우터 */
  const navigate = useNavigate();
  const goToMain = () => navigate(`${LINK.BOOT}`); 

  return (
    <ModalWrapper>
      <CloseBtnTop goToMain={goToMain} />
      <LogoCenter />
      
      <InputContainerStyled>
        <input type="text" placeholder="아이디를 입력하세요" />
      </InputContainerStyled>
      <InputContainerStyled>
        <input type="text" placeholder="비밀번호를 입력하세요" />
      </InputContainerStyled>

      <LoginButton getLoggedIn={getLoggedIn} />
      <SignUpRequest />
      <Line />
      <ItemBlock className="btn-wrapper">
        <GoogleLogin />
        <KakaoLogin /> 
        <FacebookLogin />
      </ItemBlock>
    </ModalWrapper>
  );
};

const CloseBtnTop = ({ goToMain }) => {
  return(
    <CloseBtnContainerStyled onClick={goToMain}>
      <HiOutlineChevronLeft />
    </CloseBtnContainerStyled>
  );
};

const LogoCenter = () => {
  return (
    <LogoContainerStyled>
      <Link to={LINK.ROOT}>
        <img src={LogoSmall} alt="로고" />
      </Link>
    </LogoContainerStyled>
  );
};

const LoginButton = ({ getLoggedIn }) => {
  return (
    <BtnContainerStyled>
      <Button 
        type="button" 
        bgColor={'green'} 
        bold={'bold'}
        onClick={getLoggedIn}
      >로그인</Button>
    </BtnContainerStyled>
  );
};

const SignUpRequest = () => {

  return (
    <ItemBlock className="signup-wrapper">
      <p>
        아직 회원이 아니시라면, 
        <Link 
          to={LINK.SIGNUP} 
          
        >회원가입</Link>
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