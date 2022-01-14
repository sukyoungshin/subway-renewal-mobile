import React, { useCallback, useEffect } from 'react';
import { RiGoogleLine } from "react-icons/ri";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginFlagSelector } from '../../reducers';
import { GoogleLoginButtonStyled, GoogleLogoutButtonStyled } from './GoogleLogin.style';
import LINK from '../../constants/link';
import { OAuthButtonTemplate } from '../index';

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
    navigate(`${LINK.ROOT}`); 
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
      userInfo : {
        id: null,
        userName: null,
        imageURL: null,
      }, 
      isLoggedIn : false, 
    });
    navigate(`${LINK.ROOT}`); 
  };

  /* 구글 OAuth 관련 스크립트 동적 스크립트 생성 */
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://apis.google.com/js/platform.js');
    document.head.append(script); 
    window.onSignIn = onSignIn; 
  // eslint-disable-next-line
  }, [onSignIn]);

  return (
    <OAuthButtonTemplate>
    {
      loginFlag
      ? <GoogleLogoutButton onSignOut={onSignOut} />
      : <GoogleLoginButton />
    }
    </OAuthButtonTemplate>
  );
};

const GoogleLoginButton = () => {
  return (
    <GoogleLoginButtonStyled 
      className="g-signin2" 
      data-height="48" 
      data-onsuccess="onSignIn"
    />
  );
};

const GoogleLogoutButton = ({ onSignOut }) => {
  return (
    <GoogleLogoutButtonStyled 
      type="button" 
      onClick={onSignOut}
    >
      <RiGoogleLine /> 구글logout
    </GoogleLogoutButtonStyled>
  );
};

export default GoogleLogin;