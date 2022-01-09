/* global Kakao */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  /* 리덕스 */
  const dispatch = useDispatch();

  /* 라우터 */
  const navigate = useNavigate();

  /* 카카오 로그인 */
  const code = new URL(window.location.href).searchParams.get("code"); // calllback으로 받은 인가코드
  const REST_API_KEY = 'ece476bdaebc7c1f44fde0ddc61f3ddd';
  const CLIENT_SECRET = '8f7zL9kW7g8sTkKWFnC3E3pgEYa3Cymv';
  const REDIRECT_URI = `${window.location.origin}/oauth`;

  const getToken = async () => {

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
      window.Kakao.Auth.setAccessToken(json.access_token); // access token 설정

      navigate('/');
    })
    .catch((error) => {
      console.log('error', error);
    });
  };
  
  useEffect(() => {
    getToken();
  }, []);

  /* 카카오로그인 script 생성 */
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://developers.kakao.com/sdk/js/kakao.min.js');
    script.onload = () => {
      Kakao.init('17c42b0f1b3dd9fa6aad367a62391d17');
      // console.log(Kakao.isInitialized());
    };
    document.head.append(script);
  }, []);

  return (
    <div>
      Auth
    </div>
  );
};

export default Auth;