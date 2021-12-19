// // 액션타입
// const LOGIN = 'cart/LOGIN';
// const INSERT = 'cart/INSERT'; // 새로운 item을 등록함
// const TOGGLE = 'cart/TOGGLE'; // item를 체크/체크 해제함
// const REMOVE = 'cart/REMOVE'; // item를 제거함

// // 액션생성함수
// export const changeInput = (input) => ({ 
//   type : CHANGE_INPUT,
//   input,
// });

// let id = 3; // insert가 호출될 때마다 1씩 더해집니다.
// export const insert = (text) => ({
//   type : INSERT,
//   todo : {
//     id : id++,
//     text,
//     done: false,
//   }
// });

// export const toggle = (id) => ({
//   type : TOGGLE,
//   id
// });

// export const remove = (id) => ({
//   type : REMOVE,
//   id,
// });

// // 모듈의 초기 상태 
// const initialState = {
//   input: '',
//   todos: [
//     {
//       id: 1,
//       text: '리덕스 기초 배우기',
//       done: true
//     },
//     {
//       id: 2,
//       text: '리액트와 리덕스 사용하기',
//       done: false
//     }
//   ]
// };

// // 리듀서
// function auths (state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {...state, input: action.input};
//     case INSERT:
//       return {...state, todos: state.todos.concat(action.todo)};
//     case TOGGLE:
//       return {...state, todos: state.todos.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)};
//     case REMOVE:
//       return {...state, todos: state.todos.filter(todo => todo.id !== action.id)};
//     default:
//       return state;
//   };
// };

// export default auths;