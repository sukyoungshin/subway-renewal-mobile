import { AUTH_ACTION_TYPES } from '@/features/auth/model/actionTypes';
import { loginFlagSelector } from '@/features/auth/model/selector.js';
import LINK from '@/shared/constants/link';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const useGoogleLoginAndOut = () => {
  const loginFlag = useSelector(loginFlagSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* 구글 OAuth 로그인 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSignIn = useCallback((googleUser: { getBasicProfile: () => any }) => {
    const profile = googleUser.getBasicProfile();

    dispatch({
      type: AUTH_ACTION_TYPES.LOGIN,
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
  }, [onSignIn]);

  return { loginFlag, onSignOut };
};
