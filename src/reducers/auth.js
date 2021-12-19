// 모듈의 초기 상태 
const initialState = { 
  userInfo : {
    id: null,
    userName: null,
    imageURL: null,
    email: null, 
  },  // 로그인 된 유저의 정보저장
  isLoggedIn : false, // 로그인여부
};

// 리듀서
function auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { 
        ...state,
        userInfo : {
          id: action.id,
          userName: action.userName,
          imageURL: action.imageURL,
          email: action.email, // 로그인 된 유저의 정보
        }, 
        isLoggedIn : true, // 로그인여부
      };
    case 'LOGOUT':
      return { 
        ...state,
        userInfo : {
          id: null,
          userName: null,
          imageURL: null,
          email: null, // 로그인 된 유저의 정보저장
        },  
        isLoggedIn : false, // 로그인여부
      };
    default:
      return state;
  };
}

export default auth;