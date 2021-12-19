import React from 'react';
import { Link, useNavigate } from "react-router-dom";
// ICONS
import { HiOutlineChevronLeft } from "react-icons/hi";
import LogoSmall from "../assets/small-logo.png";
// STYLE
import { BtnContainer, Button, CloseBtnContainer, InputContainer, ItemBlock, LogoContainer, ModalWrapper } from '../common/Styled';
import GoogleLogin from '../components/GoogleLogin';
import KakaoLogin from '../components/KakaoLogin';
import FacebookLogin from '../components/FacebookLogin';

const Login = ({ getLoggedIn }) => {

  const navigate = useNavigate();
  const goBack = () => navigate(-1); // 뒤로가기

  return (
    <ModalWrapper>
      <CloseBtnContainer onClick={goBack}>
        <HiOutlineChevronLeft />
      </CloseBtnContainer>
      <LogoContainer>
        <Link to="/">
          <img src={LogoSmall} alt="로고" />
        </Link>
      </LogoContainer>
      <InputContainer>
        <input type="text" placeholder="아이디를 입력하세요" />
      </InputContainer>
      <InputContainer>
        <input type="text" placeholder="비밀번호를 입력하세요" />
      </InputContainer>
      <BtnContainer>
        <Button 
          type="button" 
          bgColor={'green'} 
          bold={'bold'}
          onClick={getLoggedIn}
        >로그인</Button>
      </BtnContainer>
      <ItemBlock className="signup-wrapper">
        <p>
          아직 회원이 아니시라면, 
          <Link to="/singup">회원가입</Link>
        </p>
      </ItemBlock>
      <ItemBlock className="signin-title">
        <p>간편 SNS 로그인</p>
      </ItemBlock>
      <ItemBlock className="btn-wrapper">
        {/* 구글로그인 */}
        <BtnContainer>
          <GoogleLogin />
        </BtnContainer>
        {/* 카카오로그인 */}
        <BtnContainer>
          <KakaoLogin />
        </BtnContainer>
        {/* facebook 로그인 */}
        <BtnContainer>
          <FacebookLogin />
        </BtnContainer>
      </ItemBlock>
    </ModalWrapper>
  );
};

export default Login;