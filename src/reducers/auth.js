// 모듈의 초기 상태 
const initialState = { 
  // 로그인 된 유저정보
  userInfo : {
    id: null,
    userName: null,
    email: null, 
  },  
  // 유저의 로그인여부
  isLoggedIn : false, 
};

// 리듀서
function auth(state = initialState, action) {
  const LOGIN = 'auth/login';
  const LOGOUT = 'auth/logout';

  switch (action.type) {
    case LOGIN:
      return { 
        ...state,
        userInfo : {
          id: action.userInfo.id,
          userName: action.userInfo.userName,
          imageURL: action.userInfo.imageURL,
        }, 
        isLoggedIn : true,
      };
    case LOGOUT:
      return { 
        ...state,
        userInfo : {
          id: null,
          userName: null,
          email: null,
        },  
        isLoggedIn : false,
      };
    default:
      return state;
  };
}

export default auth;