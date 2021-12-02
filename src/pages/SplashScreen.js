import React from 'react';
import Logo from '../assets/splash-logo.png';
// STYLE
import { SplashFooterWrapper, SplashLogoWrapper, SplashWrapper } from '../common/Styled';

const SplashScreen = () => {
  return (
    <SplashWrapper>
      <SplashLogoWrapper>
        <img src={Logo} alt="스플래쉬 로고" />
      </SplashLogoWrapper>
      <SplashFooterWrapper>
        개인 포트폴리오로 작성된 앱웹입니다. All rights are reserved by Subway LLC.©
      </SplashFooterWrapper>
    </SplashWrapper>
  );
};

export default SplashScreen;