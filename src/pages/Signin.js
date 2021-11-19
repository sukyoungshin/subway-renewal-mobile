import React from 'react';
import './Signin.css';
import Logo from '../assets/small-logo.png';

function Signin() {
  return (
    <main className="signin-wrapper">
      Signin
      <img src={Logo} alt="로고" style={{ width: 'calc(50%)' }} />
    </main>
  );
};

export default Signin;