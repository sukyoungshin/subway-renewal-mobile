import { combineReducers, createStore } from 'redux';
import auth from './auth';
import cartReducer from './cartReducer';
import amountReducer from './amountReducer';

// 모듈의 초기 상태 (test 데이터 / 추후 삭제)
export const initialState = () => ({
    "category": {
        "id": 0,
        "nameKor": "에그마요",
        "nameEng": "Egg Mayo",
        "imgSrc": "/sandwich/eggmayo.png",
        "kcal": 480,
        "description": "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러",
        "price": 4300,
        "amount": 1
    },
    "generalInfo": {
        "customerInfo": "서울 서초구 남부순환로 2584 (서초동, 서초구청, 서초구의회) 1층",
        "subwayInfo": {
            "id": 1,
            "name": "써브웨이 포이사거리점",
            "distance": "1302",
            "address": "서울 강남구 논현로 84",
            "phone": "02-577-5227",
            "url": "http://place.map.kakao.com/713803231"
        }
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
    },
    "request": {
      "customerRequest": ""
    }
});

// 루트 리듀서
const rootReducer = combineReducers({
  auth,
  cartReducer,
  amountReducer,
});

// 단일 스토어 생성
export const store = createStore(rootReducer); 
console.log('@App store', store.getState()); // 스토어의 상태 확인

// 데이터 selector
export const orderSelector = (state) => state.cartReducer; 
export const amountSelector = (state) => state.amountReducer.category.amount; 

export default rootReducer;