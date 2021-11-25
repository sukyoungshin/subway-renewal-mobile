import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/splash-logo.png';
import './Splash.css';
import styled from 'styled-components';

const SplashWrapper = styled.main`
  padding: 8px 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-green);

  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;
const LogoWrapper = styled.section`
  flex: 1;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const FooterWrapper = styled.footer`
  font-size: 10px;
  color: var(--color-white);
`;

const Splash = () => {
  return (
    <Link to="/main">
      <SplashWrapper>
        <LogoWrapper>
          <img src={Logo} alt="스플래쉬 로고" style={{ width: 'calc(50%)' }} />
        </LogoWrapper>
        <FooterWrapper>
        개인 포트폴리오로 작성된 앱웹입니다. All rights are reserved by Subway LLC.©
        </FooterWrapper>
      </SplashWrapper>
    </Link>
  );
};

export default Splash;