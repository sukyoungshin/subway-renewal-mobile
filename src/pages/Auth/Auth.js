/* global Kakao */
import LINK from 'constants/link';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MainStyled } from './Auth.style';

const Auth = () => {

  /* 리덕스 & 라우터 */
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* 카카오 로그인 */
  const code = new URL(window.location.href).searchParams.get("code"); // calllback으로 받은 인가코드
  const REST_API_KEY = 'ece476bdaebc7c1f44fde0ddc61f3ddd';
  const CLIENT_SECRET = '8f7zL9kW7g8sTkKWFnC3E3pgEYa3Cymv';
  const REDIRECT_URI = `${window.location.origin}/oauth`;

  const getToken = () => {

    const payload = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    // access token 가져오기
    const fetchOption = {
      method : 'POST',
      body : payload,
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
    };

    fetch('https://kauth.kakao.com/oauth/token', fetchOption)
    .then((response) => response.json())
    .then((json) => {
      // access token 설정
      window.Kakao.Auth.setAccessToken(json.access_token); 
      // 사용자 정보 요청
      Kakao.API.request({
        url: '/v2/user/me',
        data: {
          property_keys: [
            "kakao_account.profile"
          ],
        },
        success: function(response) {
          const { 
            kakao_account : { 
              profile : { 
                nickname, 
                profile_image_url,
              }
            } 
          } = response;
          dispatch({
            type : 'auth/login',
            userInfo : {
              id: response.id,
              userName: nickname,
              imageURL: profile_image_url, 
            },
            isLoggedIn: true,
          });
          navigate(LINK.ROOT);
        },
        fail: function(error) {
          console.log('카카오요청 실패', error);
        }
      });
    })
    .catch((error) => {
      console.log('error', error);
    });
  };
  
  useEffect(() => {
    getToken();
  // eslint-disable-next-line
  }, []);

  /* 카카오로그인 script 생성 */
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://developers.kakao.com/sdk/js/kakao.min.js');
    script.onload = () => {
      Kakao.init('17c42b0f1b3dd9fa6aad367a62391d17');
    };
    document.head.append(script);
  }, []);

  return (
    <MainStyled>
      Loading...
    </MainStyled>
  );
};

export default Auth;