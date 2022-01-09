import React, { useCallback, useEffect } from 'react';
import { GoogleLoginButton, GoogleLogoutButton } from '../common/Styled';
import { RiGoogleLine } from "react-icons/ri";
import { useNavigate } from 'react-router';
// React-redux
import { useDispatch, useSelector } from 'react-redux';

const GoogleLogin = () => {
  /* 리덕스 */
  // eslint-disable-next-line
  const { userInfo, isLoggedIn } = useSelector((state) => state.auth); 
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
  const signOut = () => {
    // eslint-disable-next-line
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    dispatch({ 
      type : 'auth/logout',  // 액션타입
      isLoggedIn : false, // 로그인여부
      userInfo : {
        id: null,
        userName: null,
        imageURL: null,
      }, // 로그인 된 유저의 정보저장
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
      isLoggedIn
      ? <GoogleLogoutButton type="button" onClick={signOut}><RiGoogleLine /> 구글logout</GoogleLogoutButton>
      : <GoogleLoginButton className="g-signin2" data-height="48" data-onsuccess="onSignIn"/>
    }
    </>
  );
};

export default GoogleLogin;