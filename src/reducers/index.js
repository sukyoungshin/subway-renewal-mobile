import { combineReducers, createStore } from 'redux';
import authReducer from './auth';
import cartReducer from './cartReducer';
import amountReducer from './amountReducer';

// 모듈의 초기 상태 (test 데이터 / 추후 삭제)
export const initialState = () => ({

  category : {
    amount : 0,
  },
  itemCount : 0,
});

// 루트 리듀서
const rootReducer = combineReducers({
  authReducer,
  cartReducer,
  amountReducer,
});

// 단일 스토어 생성
export const store = createStore(rootReducer); 
console.log('@App store', store.getState()); // 스토어의 상태 확인

// 데이터 selector
export const orderSelector = (state) => state.cartReducer; 
export const categorySelector = (state) => state.cartReducer.category; 
export const itemCountSelector = (state) => state.cartReducer.itemCount;
export const itemAmountSelector = (state) => state.amountReducer.category.amount; 
export const userInfoSelector = (state) => state.authReducer.userInfo;
export const loginFlagSelector = (state) => state.authReducer.isLoggedIn;

export default rootReducer;