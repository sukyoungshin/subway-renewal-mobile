/* global Kakao */
import React from 'react';
import { useEffect } from 'react';
import { RiKakaoTalkFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { Button } from '../common/Styled';

const KakaoLogin = () => {

  /* 리덕스 */
  const dispatch = useDispatch();

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

  /* 카카오 로그인 */
  const onSignIn = () => {
    Kakao.Auth.authorize({
      redirectUri: 'https://subway-renewal-mobile.netlify.app', // 인가 코드를 받을 URI
      scope: 'profile_nickname, profile_image', // 추가 항목 동의 받기
    });    
  };

  /* 유저 정보 불러오기 */
  const LoginInfo = () => {
    Kakao.API.request({
      url: '/v2/user/me',
      data: {
        property_keys: [
          "kakao_account.profile_nickname",
          "kakao_account.profile_image"
        ]
      },
      success: function(response) {
        console.log('@@카카오로그인', response);
      },
      fail: function(error) {
        console.log('@@카카오로그인', error);
      }
    });
  };
  

  return (
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

export default KakaoLogin;