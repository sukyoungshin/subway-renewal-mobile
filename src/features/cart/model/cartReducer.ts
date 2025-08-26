import { AnyAction } from 'redux';
import { CART_ACTION_TYPE } from './actionTypes';

// 모듈의 초기 상태 (test 데이터 / 추후 삭제)
export const initialState = () => ({
  category: {
    amount: 1,
  },
  itemCount: 0,
});

// 리듀서 함수 (장바구니 정보 업데이트)
function cartReducer(state = initialState(), action: AnyAction) {
  const {
    GENERAL_INFO,
    CATEGORY,
    BREAD,
    CHEESE,
    VEGETABLE,
    SAUCE,
    ADDITIONAL_REQUEST,
    ITEM_COUNT,
  } = CART_ACTION_TYPE;

  switch (action.type) {
    case GENERAL_INFO:
      return {
        ...state,
        generalInfo: action.payload,
      };
    case CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case BREAD:
      return {
        ...state,
        bread: action.payload,
      };
    case CHEESE:
      return {
        ...state,
        cheese: action.payload,
      };
    case VEGETABLE:
      return {
        ...state,
        vegetable: action.payload,
      };
    case SAUCE:
      return {
        ...state,
        sauce: action.payload,
      };
    case ADDITIONAL_REQUEST:
      return {
        ...state,
        request: action.payload,
      };
    case ITEM_COUNT:
      return {
        ...state,
        itemCount: action.payload,
      };
    default:
      return state;
  }
}

export default cartReducer;
// ✅ 파이프-필터, 데코레이터 패턴 (차후 이렇게 수정)

// id: 1,
// 고객주소지
// 근처의 써브웨이 매장이름, 매장전화번호, 매장주소

// 메뉴카테고리
// 메뉴이름
// 빵옵션, 빵종류
// 치즈옵션, 치즈종류
// 야채옵션, 야채수량
// 소스옵션, 소스 종류 (3개)
// 추가메뉴 옵션
// 세트메뉴 : 단품/셋트
// 주문수량변경

// 배송방법 옵션 : 배달 / 직접 방문수령
// 주문요청사항
