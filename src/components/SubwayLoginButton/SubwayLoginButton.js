import React from 'react';
import { ButtonWrapperStyled, LoginButtonStyled } from './SubwayLoginButton.style';

const SubwayLoginButton = ({ getLoggedIn }) => {
  return (
    <ButtonWrapperStyled>
      <LoginButtonStyled 
        type="button" 
        onClick={getLoggedIn}
      >로그인</LoginButtonStyled>
    </ButtonWrapperStyled>
  );
};

export default SubwayLoginButton;