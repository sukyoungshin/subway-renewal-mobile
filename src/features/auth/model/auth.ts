import { AnyAction } from 'redux';
import { AUTH_ACTION_TYPES } from './actionTypes';

// 모듈의 초기 상태
const initialState = {
  // 로그인 된 유저정보
  userInfo: {
    id: null,
    userName: null,
    email: null,
  },
  // 유저의 로그인여부
  isLoggedIn: false,
};

// 리듀서
function authReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case AUTH_ACTION_TYPES.LOGIN:
      return {
        ...state,
        userInfo: {
          id: action.userInfo.id,
          userName: action.userInfo.userName,
          imageURL: action.userInfo.imageURL,
        },
        isLoggedIn: true,
      };
    case AUTH_ACTION_TYPES.LOGOUT:
      return {
        ...state,
        userInfo: {
          id: null,
          userName: null,
          imageURL: null,
        },
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

export default authReducer;
