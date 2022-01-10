import React, { useCallback, useEffect } from 'react';
import { GoogleLoginButtonStyled, GoogleLogoutButtonStyled } from '../common/Styled';
import { RiGoogleLine } from "react-icons/ri";
import { useNavigate } from 'react-router';
// React-redux
import { useDispatch, useSelector } from 'react-redux';
import { loginFlagSelector } from '../reducers';

const GoogleLogin = () => {
  /* 리덕스 */
  // eslint-disable-next-line
  const loginFlag = useSelector(loginFlagSelector);
  const dispatch = useDispatch();

  /* 라우터 */
  const navigate = useNavigate();

  /* 구글 OAuth 로그인 */
  const onSignIn = useCallback((googleUser) => {
    const profile = googleUser.getBasicProfile();
    
    dispatch({ 
      type : 'auth/login', 
      userInfo : {
        id : profile.getId(),// Do not send to your backend! Use an ID token instead.
        userName : profile.getName(),
        imageURL : profile.getImageUrl(),
      }, 
      isLoggedIn : true,
    });
  // eslint-disable-next-line
  }, []);

  /* 구글 OAuth 로그아웃 */
  const onSignOut = () => {
    // eslint-disable-next-line
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    dispatch({ 
      type : 'auth/logout', 
      isLoggedIn : false, 
      userInfo : {
        id: null,
        userName: null,
        imageURL: null,
      }, 
    });
    navigate('/'); // 로그아웃버튼 클릭 시, 메인페이지로 리디렉션
  };

  /* 구글 OAuth 관련 스크립트 생성 및 함수실행 */
  useEffect(() => {
    // 동적 script 생성하여 head에 추가
    const script = document.createElement('script');
    script.setAttribute('src', 'https://apis.google.com/js/platform.js');
    document.head.append(script);
    // window 전역객체 사용하여 로그인함수 실행
    window.onSignIn = onSignIn; 
  // eslint-disable-next-line
  }, [onSignIn]);

  return (
    <>
    {
      loginFlag
      ? <GoogleLogoutButton onSignOut={onSignOut} />
      : <GoogleLoginButton />
    }
    </>
  );
};

const GoogleLoginButton = () => {
  return (
    <GoogleLoginButtonStyled className="g-signin2" data-height="48" data-onsuccess="onSignIn"/>
  );
};

const GoogleLogoutButton = ({ onSignOut }) => {
  return (
    <GoogleLogoutButtonStyled type="button" onClick={onSignOut}>
      <RiGoogleLine /> 구글logout
    </GoogleLogoutButtonStyled>
  );
};

export default GoogleLogin;