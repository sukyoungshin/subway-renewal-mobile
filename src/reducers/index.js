import { combineReducers } from 'redux';
import auth from './auth';
import cart from './cart';

// 루트 리듀서
const rootReducer = combineReducers({
  auth,
  cart,
});

export default rootReducer;