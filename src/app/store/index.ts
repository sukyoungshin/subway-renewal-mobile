import amountReducer from '@/features/amount/model/amountReducer';
import authReducer from '@/features/auth/model/auth';
import cartReducer from '@/features/cart/model/cartReducer';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// 루트 리듀서
const rootReducer = combineReducers({
  authReducer,
  cartReducer,
  amountReducer,
});

// store 요청시마다 생성 (팩토리)
export type RootState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createAppStore(preloadedState?: any) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}
export type AppStore = ReturnType<typeof createAppStore>;
