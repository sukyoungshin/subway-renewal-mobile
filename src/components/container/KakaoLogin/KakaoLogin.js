import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { KakaoButtonStyled } from "./KakaoLogin.style";
import { useKakaoLoginAndOut } from "./hooks";
import { OAuthButtonLayout } from "components/Layout";

const KakaoLogin = () => {
  const { loginFlag, onSignIn, onSignOut } = useKakaoLoginAndOut();

  return (
    <OAuthButtonLayout>
      {!loginFlag ? (
        <KakaoLoginButton onSignIn={onSignIn} />
      ) : (
        <KakaoLogoutButton onSignOut={onSignOut} />
      )}
    </OAuthButtonLayout>
  );
};

const KakaoLoginButton = ({ onSignIn }) => {
  return (
    <KakaoButtonStyled type="button" onClick={onSignIn}>
      <RiKakaoTalkFill /> 카카오로 시작
    </KakaoButtonStyled>
  );
};

const KakaoLogoutButton = ({ onSignOut }) => {
  return (
    <KakaoButtonStyled type="button" onClick={onSignOut}>
      LogOut
    </KakaoButtonStyled>
  );
};

export default KakaoLogin;
