import React, { useState, useCallback, useEffect } from 'react';
import { LoginButton, LogoutButton } from '../common/Styled';
import { RiGoogleLine } from "react-icons/ri";
import { useNavigate } from 'react-router';

const GoogleLogin = () => {
  
  // 구글 OAuth 로그인
  const [ isLoggedIn, setIsLoggedIn ] = useState(false); // 로그인여부
  // eslint-disable-next-line
  const [ userInfo, setUserInfo ] = useState(null); // ✅ 로그인 된 유저의 정보저장, 리덕스로 전역관리 해줘야 할 듯
  const navigate = useNavigate();

  const onSignIn = useCallback((googleUser) => {
    const profile = googleUser.getBasicProfile();
    setUserInfo({
      ID : profile.getId(),// Do not send to your backend! Use an ID token instead.
      userName : profile.getName(),
      imageURL : profile.getImageUrl(),
      email : profile.getEmail(), // This is null if the 'email' scope is not present.
    });
    setIsLoggedIn(true);
    console.log('로그인 완료');
  }, []);

  useEffect(() => {
    // 동적 script 생성하여 head에 추가
    const script = document.createElement('script');
    script.setAttribute('src', 'https://apis.google.com/js/platform.js');
    document.head.append(script);
    // window 전역객체 사용하여 로그인함수 실행
    window.onSignIn = onSignIn; 
  // eslint-disable-next-line
  }, [onSignIn]);

  const signOut = () => {
    // eslint-disable-next-line
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    setIsLoggedIn(false);
    setUserInfo(null);

    // 로그아웃버튼이 눌리면 메인페이지로 리디렉션
    navigate('/');
  };

  return (
    <>
    {
      isLoggedIn
      ? <LogoutButton type="button" onClick={signOut}><RiGoogleLine /> 구글logout</LogoutButton>
      : <LoginButton className="g-signin2" data-height="48" data-onsuccess="onSignIn"/>
    }
    </>
  );
};

export default GoogleLogin;