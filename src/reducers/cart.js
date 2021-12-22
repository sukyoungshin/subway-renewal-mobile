// 모듈의 초기 상태 
const initialState = [
  {
    id: 0,
    // order페이지에서 주소지랑 정보 받아옴
    subwayInfo : {
      id: 0,
      name : null,
      distance : 0,
      address : null, 
      phone : null, 
      url : null,
    },
    // menu페이지에서 카테고리 선택 후 업데이트
    category : {
      id : 0,
      nameKor : null,
      nameEng : null,
      kcal : 0,
      imgSrc : null,
      description: null,
      price: 0,
    },
    // bread페이지
    bread : {
      id : 0,
      nameKor : null,
      nameEng : null,
      imgSrc : null,
      description: null,
      price: 0,
    },
    breadOptions : {
      size : {
        length: 15,
        price: 0,
      },
      toasting : true,
      digOut : true,
      cutting: false,
    },
  }
];

// 리듀서
function cart (state = initialState, action) {
  const SUBWAYINFO = 'cart/subwayInfo';
  const CATEGORY = 'cart/category';
  const BREAD = 'cart/bread';
  
  switch (action.type) {
    case SUBWAYINFO:
      console.log('subwayinfo', SUBWAYINFO, action.payload);
      return action.payload;
    case CATEGORY:
      console.log('CATEGORY', CATEGORY, action.payload);
      return action.payload;
    case BREAD:
      console.log('BREAD', BREAD, action.payload);
      return action.payload;
    default:
      return state;
  };
};

export default cart;

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