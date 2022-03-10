import React from 'react';
import { RiKakaoTalkFill } from "react-icons/ri";
import { KakaoButtonStyled } from './KakaoLogin.style';
import { OAuthButtonTemplate } from '../index';
import { useKakaoLoginAndOut } from './hooks';

const KakaoLogin = () => {
  const { loginFlag, onSignIn, onSignOut } = useKakaoLoginAndOut();

  return (
    <OAuthButtonTemplate>
    {
      !loginFlag
      ? <KakaoLoginButton onSignIn={onSignIn} />
      : <KakaoLogoutButton onSignOut={onSignOut} />
    }
    </OAuthButtonTemplate>
  );
};

const KakaoLoginButton = ({ onSignIn }) => {
  return(
    <KakaoButtonStyled 
      type="button" 
      onClick={onSignIn}
    >
      <RiKakaoTalkFill /> 카카오로 시작
    </KakaoButtonStyled>
  );
};

const KakaoLogoutButton = ({ onSignOut }) => {
  return(
    <KakaoButtonStyled 
      type="button" 
      onClick={onSignOut}
    >
      LogOut
    </KakaoButtonStyled>
  );
};

export default KakaoLogin;