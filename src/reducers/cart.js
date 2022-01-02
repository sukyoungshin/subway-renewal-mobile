// 모듈의 초기 상태 
const initialState = {
    "subwayInfo": {
        "id": 1,
        "name": "써브웨이 인천계산역점",
        "distance": "1381",
        "address": "인천 계양구 경명대로 1055",
        "phone": "032-547-5550",
        "url": "http://place.map.kakao.com/2051270680"
    },
    "category": {
        "id": 0,
        "nameKor": "에그마요",
        "nameEng": "Egg Mayo",
        "imgSrc": "/sandwich/eggmayo.png",
        "kcal": 480,
        "description": "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러",
        "price": 4300
    },
    "bread": {
        "currentMenu": {
            "id": 0,
            "nameKor": "허니오트",
            "nameEng": "Honey Oat",
            "description": "고소한 위트빵에 오트밀 가루를 묻혀 고소함과 식감이 두배로",
            "imgSrc": "/bread/honeyoat.png",
            "price": null
        },
        "breadOptions": [
            {
                "id": 0,
                "nameKor": " 빵 사이즈",
                "name": "size",
                "bool": true,
                "price": 0
            },
            {
                "id": 1,
                "nameKor": " 토스팅",
                "name": "toasting",
                "bool": true,
                "price": null
            },
            {
                "id": 2,
                "nameKor": " 속파기",
                "name": "digOut",
                "bool": false,
                "price": null
            },
            {
                "id": 3,
                "nameKor": " 컷팅",
                "name": "cutting",
                "bool": false,
                "price": null
            }
        ]
    },
    "cheese": {
      "id": 0,
      "nameKor": "아메리칸 치즈",
      "nameEng": "American Cheese",
      "description": "",
      "imgSrc": "/cheese/american.jpg"
    },
    "veggie": {
      "0": 50,
      "1": 50,
      "2": 50,
      "3": 50,
      "4": 50,
      "5": 50,
      "6": 50,
      "7": 50,
      "8": 50
    },
    "sauce": {
      "id": 0,
      "nameKor": "선택안함",
      "description": "",
      "imgSrc": "",
      "defaultChecked": true
    }
  };

// 리듀서 함수
function cart (state = initialState, action) {
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