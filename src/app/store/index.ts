import amountReducer from '@/features/amount/model/amountReducer';
import authReducer from '@/features/auth/model/auth';
import cartReducer from '@/features/cart/model/cartReducer';
import { combineReducers, legacy_createStore as createStore } from 'redux';

// 루트 리듀서
const rootReducer = combineReducers({
  authReducer,
  cartReducer,
  amountReducer,
});

// 단일 스토어 생성
const store = createStore(rootReducer);
console.log('@App store', store.getState()); // 스토어의 상태 확인

export default store;