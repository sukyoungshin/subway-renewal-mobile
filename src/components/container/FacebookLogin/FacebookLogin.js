import { OAuthButtonLayout } from "components/Layout";
import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FacebookLoginStyled } from "./Facebook.style";

const FacebookLogin = () => {
  return (
    <OAuthButtonLayout>
      <FacebookLoginStyled type="button">
        <RiFacebookCircleFill /> 페이스북으로 시작
      </FacebookLoginStyled>
    </OAuthButtonLayout>
  );
};

export default FacebookLogin;
