import { initialState } from './index.js';

// 리듀서 함수 (장바구니 정보 업데이트)
function cartReducer (state = initialState(), action) {
  const SUBWAYINFO = 'cart/subwayInfo';
  const CATEGORY = 'cart/category';
  const BREAD = 'cart/bread';
  const CHEESE = 'cart/cheese';
  const VEGGIE = 'cart/veggie';
  const SAUCE = 'cart/sauce';
  
  switch (action.type) {
    case SUBWAYINFO:
      return {
        ...state, 
        subwayInfo : action.payload
      };
    case CATEGORY:
      return {
        ...state,
        category : action.payload
      };
    case BREAD:
      return {
        ...state,
        bread : action.payload
      }; 
    case CHEESE:
      return {
        ...state,
        cheese : action.payload
      };
    case VEGGIE:
      return {
        ...state,
        veggie : action.payload
      };
    case SAUCE:
      return {
        ...state,
        sauce : action.payload
      };
          
    default:
      return state;
  };
};

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