import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/splash-logo.png';
import './Splash.css';

function Splash() {

  return (
    <Link to="/signin">
      <main className="splash-wrapper">
        <section className="splash-logo">
          <img src={Logo} alt="스플래쉬 로고" style={{ width: 'calc(50%)' }} />
        </section>
        <footer className="splash-footer">
        개인 포트폴리오로 작성된 앱웹입니다. All rights are reserved by Subway LLC.©
        </footer>
      </main>
    </Link>
  );
};

export default Splash;