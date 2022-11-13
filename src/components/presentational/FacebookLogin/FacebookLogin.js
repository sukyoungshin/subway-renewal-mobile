import { OAuthButtonLayout } from "components/Layout";
import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { Button } from "./Facebook.style";

const FacebookLogin = () => {
  return (
    <OAuthButtonLayout>
      <Button type="button">
        <RiFacebookCircleFill /> 페이스북으로 시작
      </Button>
    </OAuthButtonLayout>
  );
};

export default FacebookLogin;
