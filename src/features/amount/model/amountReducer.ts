import { AnyAction } from 'redux';
import { AMOUNT_ACTION_TYPE } from './actionTypes';

// 모듈의 초기 상태 (test 데이터 / 추후 삭제)
export const initialState = () => ({
  category: {
    amount: 1,
  },
  itemCount: 0,
});

// 리듀서 함수 (장바구니 수량조절)
function amountReducer(state = initialState(), action: AnyAction) {
  switch (action.type) {
    case AMOUNT_ACTION_TYPE.INCREMENT:
      return {
        ...state,
        category: {
          ...state.category,
          amount: action.payload + 1,
        },
      };

    case AMOUNT_ACTION_TYPE.DECREMENT:
      return {
        ...state,
        category: {
          ...state.category,
          amount: action.payload - 1,
        },
      };

    default:
      return state;
  }
}

export default amountReducer;
