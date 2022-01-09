import { initialState } from './index.js';

// 리듀서 함수 (장바구니 수량조절)
function amountReducer (state = initialState(), action) {
  const INCREMENT = 'cart/increment';
  const DECREMENT = 'cart/decrement';
  
  switch (action.type) {
    case INCREMENT:
      console.log ( '추가', state.category.amount );
      return {
        ...state,
        category: {
          ...state.category,
          amount: action.payload + 1,
        }
      };

      case DECREMENT:
        console.log ( '감소', state.category.amount );
        
        return {
          ...state,
          category: {
            ...state.category,
            amount: action.payload - 1,
          }
        };

    default:
      return state;
  }
};

export default amountReducer;