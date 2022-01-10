/* global Kakao */
import React, { useEffect } from 'react';
import { RiKakaoTalkFill } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Styled';
import { loginFlagSelector } from '../reducers';

const KakaoLogin = () => {

  /* 리덕스 */
  // eslint-disable-next-line
  const loginFlag = useSelector(loginFlagSelector);
  const dispatch = useDispatch();

  /* 라우터 */
  const navigate = useNavigate();

  /* 카카오 로그인 */
  const REDIRECT_URI = `${window.location.origin}/oauth`; // 인가 코드를 받을 URI
  const onSignIn = () => {
    Kakao.Auth.authorize({
      redirectUri: REDIRECT_URI, 
      scope: 'profile_nickname, profile_image', // 추가 항목 동의 받기
    });    
  };  

  /* 카카오 로그아웃 */
  const onSignOut = () => {
    Kakao.Auth.logout(function() {
      window.Kakao.Auth.getAccessToken();
      console.log(Kakao.Auth.getAccessToken());
    });

    dispatch({
      type : 'auth/logout',
      userInfo : {
        id : null,
        userName: null,
        email: null, 
      },
      isLoggedIn: false,
    });
    navigate('/'); // 로그아웃버튼 클릭 시, 메인페이지로 리디렉션
  };

  /* 카카오로그인 script 생성 */
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://developers.kakao.com/sdk/js/kakao.min.js');
    script.onload = () => {
      Kakao.init('17c42b0f1b3dd9fa6aad367a62391d17');
      // console.log(Kakao.isInitialized());
    };
    document.head.append(script);
    window.KakaoLogin = KakaoLogin;
  }, []);

  return (
    <>
    {
      loginFlag
      ? <KakaoLogoutButton onSignOut={onSignOut} />
      : <KakaoLoginButton onSignIn={onSignIn} />
    }
    </>
  );
};

const KakaoLoginButton = ({ onSignIn }) => {
  return(
    <Button 
      type="button" 
      bgColor={'kakao'} 
      color={'black'}
      onClick={onSignIn}
    >
      <RiKakaoTalkFill /> 카카오로 시작
    </Button>
  );
};

const KakaoLogoutButton = ({ onSignOut }) => {
  return(
    <Button 
      type="button" 
      bgColor={'kakao'} 
      color={'black'}
      onClick={onSignOut}
    >
      LogOut
    </Button>
  );
};

export default KakaoLogin;