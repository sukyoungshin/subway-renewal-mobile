import { OAuthButtonLayout } from "components/Layout";
import React from "react";
import { RiGoogleLine } from "react-icons/ri";
import {
  GoogleLoginButtonStyled,
  GoogleLogoutButtonStyled,
} from "./GoogleLogin.style";

import { useGoogleLoginAndOut } from "./hooks";

const GoogleLogin = () => {
  const { loginFlag, onSignOut } = useGoogleLoginAndOut();

  return (
    <OAuthButtonLayout>
      {!loginFlag.id ? (
        <GoogleLoginButton />
      ) : (
        <GoogleLogoutButton onSignOut={onSignOut} />
      )}
    </OAuthButtonLayout>
  );
};

const GoogleLoginButton = () => {
  return (
    <GoogleLoginButtonStyled
      className="g-signin2"
      data-height="48"
      data-onsuccess="onSignIn"
    />
  );
};

const GoogleLogoutButton = ({ onSignOut }) => {
  return (
    <GoogleLogoutButtonStyled type="button" onClick={onSignOut}>
      <RiGoogleLine /> 구글logout
    </GoogleLogoutButtonStyled>
  );
};

export default GoogleLogin;
