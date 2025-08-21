import LINK from '@/constants/link';
import { loginFlagSelector } from '@/reducers';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const useGoogleLoginAndOut = () => {
  /* 리덕스 */
  const loginFlag = useSelector(loginFlagSelector);
  const dispatch = useDispatch();
  /* 라우터 */
  const navigate = useNavigate();

  /* 구글 OAuth 로그인 */
  const onSignIn = useCallback((googleUser) => {
    const profile = googleUser.getBasicProfile();

    dispatch({
      type: 'auth/login',
      userInfo: {
        id: profile.getId(), // Do not send to your backend! Use an ID token instead.
        userName: profile.getName(),
        imageURL: profile.getImageUrl(),
      },
      isLoggedIn: true,
    });
    navigate(LINK.ROOT);
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
      type: 'auth/logout',
      userInfo: {
        id: null,
        userName: null,
        imageURL: null,
      },
      isLoggedIn: false,
    });
    navigate(LINK.ROOT);
  };

  /* 구글 OAuth 관련 스크립트 동적 스크립트 생성 */
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://apis.google.com/js/platform.js');
    document.head.append(script);
    window.onSignIn = onSignIn;
    // eslint-disable-next-line
  }, [onSignIn]);

  return { loginFlag, onSignOut };
};
