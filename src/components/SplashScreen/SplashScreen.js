import React from 'react';
import Logo from 'assets/splash-logo.webp';
import { FooterWrapperStyled, LogoWrapperStyled, WrapperStyled } from './SplashScreen.style';

const SplashScreen = () => {
  return (
    <WrapperStyled>
      <LogoWrapperStyled>
        <img src={Logo} alt="스플래쉬 로고" />
      </LogoWrapperStyled>
      <FooterWrapperStyled>
        개인 포트폴리오로 작성된 앱웹입니다. All rights are reserved by Subway LLC.©
      </FooterWrapperStyled>
    </WrapperStyled>
  );
};

export default SplashScreen;