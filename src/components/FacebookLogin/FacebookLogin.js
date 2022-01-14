import React from 'react';
import { RiFacebookCircleFill } from "react-icons/ri";
import { OAuthButtonTemplate } from '../index';
import { FacebookLoginStyled } from './Facebook.style';

const FacebookLogin = () => {
  return (
    <OAuthButtonTemplate>
      <FacebookLoginStyled type="button">
        <RiFacebookCircleFill /> 페이스북으로 시작
      </FacebookLoginStyled>
    </OAuthButtonTemplate>
  );
};

export default FacebookLogin;