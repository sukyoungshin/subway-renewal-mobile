import React, { useCallback, useEffect } from 'react';
import { GoogleLoginButton, GoogleLogoutButton } from '../common/Styled';
import { RiGoogleLine } from "react-icons/ri";
import { useNavigate } from 'react-router';
// React-redux
import { useDispatch, useSelector } from 'react-redux';

const GoogleLogin = () => {

  const navigate = useNavigate();

  // 리덕스 스토어의 상태를 조회
  // eslint-disable-next-line
  const { userInfo, isLoggedIn } = useSelector((state) => state.auth); 

  // 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 한다.
  const dispatch = useDispatch();
  
  // 구글 OAuth 로그인
  const onSignIn = useCallback((googleUser) => {
    const profile = googleUser.getBasicProfile();
    
    dispatch({ 
      type : 'auth/login', 
      userInfo : {
        id : profile.getId(),// Do not send to your backend! Use an ID token instead.
        userName : profile.getName(),
        imageURL : profile.getImageUrl(),
        email : profile.getEmail(), // This is null if the 'email' scope is not present.
      }, // 로그인 된 유저의 정보저장
      isLoggedIn : true,
    });
  // eslint-disable-next-line
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
    dispatch({ 
      type : 'auth/logout',  // 액션타입
      isLoggedIn : false, // 로그인여부
      userInfo : {
        id: null,
        userName: null,
        imageURL: null,
        email: null, 
      }, // 로그인 된 유저의 정보저장
    });
    navigate('/'); // 로그아웃버튼이 눌리면 메인페이지로 리디렉션
  };

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