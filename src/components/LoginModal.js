import React from 'react';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { RiFacebookCircleFill, RiKakaoTalkFill } from "react-icons/ri";
// ICONS
import LogoSmall from "../assets/small-logo.png";
// STYLE
import { BtnContainer, Button, CloseBtnContainer, InputContainer, ItemBlock, LogoContainer, ModalWrapper } from '../common/Styled';
import GoogleLogin from './GoogleLogin';

const LoginModal = ({ getLoggedIn, getLoginModal }) => {

  return (
    <ModalWrapper>
      <CloseBtnContainer onClick={getLoginModal}>
        <HiOutlineChevronLeft />
      </CloseBtnContainer>
      <LogoContainer>
        <img src={LogoSmall} alt="로고" />
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
        <p>아직 회원이 아니시라면, 회원가입</p>
      </ItemBlock>
      <ItemBlock className="signin-title">
        <p>간편로그인</p>
      </ItemBlock>
      <ItemBlock className="btn-wrapper">
        {/* 구글로그인 */}
        <BtnContainer>
          <GoogleLogin />
        </BtnContainer>

        <BtnContainer>
          <Button type="button" bgColor={'facebook'}>
            <RiFacebookCircleFill /> 페이스북으로 시작
          </Button>
        </BtnContainer>
        {/* 카카오로그인 */}
        <BtnContainer>
          <Button type="button" bgColor={'kakao'} color={'black'}>
            <RiKakaoTalkFill /> 카카오로 시작
          </Button>
        </BtnContainer>
      </ItemBlock>
    </ModalWrapper>
  );
};

export default LoginModal;