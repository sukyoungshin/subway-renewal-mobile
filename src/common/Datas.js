/**************************** 
  각 페이지별 카테고리리스트 &
  상품데이터 저장한 파일 
****************************/

// Navbar 메뉴 카테고리
export const NavCategories = [
  {
    pathName : 'main',
    categoryName: '메인화면',
  },
  {
    pathName : 'order',
    categoryName: '주문하기',
  },
  {
    pathName : 'cart',
    categoryName: '장바구니',
  },
  {
    pathName : 'track',
    categoryName: '배송조회',
  },
];

// MAIN 추천메뉴 데이터리스트
export const MenuRecommended = [
  {
    id: 1,
    img : '',
    imgDecript: '첫번째 이미지',
    menuName : '다이어터를 위한11',
    kcal : 245,
  },  
  {
    id: 2,
    img : '',
    imgDecript: '두번째 이미지',
    menuName : '다이어터를 위한22',
    kcal : 245,
  },  
  {
    id: 3,
    img : '',
    imgDecript: '세번째 이미지',
    menuName : '다이어터를 위한333',
    kcal : 245,
  }
];

// Carousel 광고데이터
export const AdContents = [
  {
    id: 0,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "나만의 메뉴 첫 주문시, 20% 할인 EVENT",
    eventDate: "2021.08.21~2021.09.01",
  },
  {
    id: 1,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "나만의 메뉴 첫 주문시, 20% 할인 EVENT2",
    eventDate: "2021.08.21~2021.09.01",
  },
  {
    id: 2,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "나만의 메뉴 첫 주문시, 20% 할인 EVENT3",
    eventDate: "2021.08.21~2021.09.01",
  },
];

// Order 메뉴카테고리 (차후 추가예정)
export const MenuCategories = [
  {
    id: 0,
    title: '즐겨찾기',
    titleEng : 'Favorite',
    imgSrc : '',
  },
  {
    id: 1,
    title: '샌드위치',
    titleEng : 'Sandwiches',
    imgSrc : '',
  },
  {
    id: 2,
    title: '찹샐러드',
    titleEng: 'Salad',
    imgSrc : '',
  },
  {
    id: 3,
    title: '랩기타',
    titleEng: 'Wrap',
    imgSrc : '',
  },
  // {
  //   id: 4,
  //   title: '프로모션',
  //   imgSrc : '',
  // }
];

// 샌드위치리스트
export const Sandwiches = [
  {
    id: 0,
    nameKor : '에그마요',
    nameEng : 'Egg Mayo',
    imgSrc : '',
    kcal : 480,
    description : '부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러',
    price : '',
  },
  {
    id: 1,
    nameKor : '이탈리안 비엠티',
    nameEng : 'Italian B.M.T.™',
    imgSrc : '',
    kcal : 410,
    description : '페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는 써브웨이의 베스트셀러! Biggest Meatiest Tastiest, its’ B.M.T!',
    price : '',
  },
  {
    id: 2,
    nameKor : '비엘티',
    nameEng : 'B.L.T.',
    imgSrc : '',
    kcal : 300,
    description : '오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로~',
    price : '',
  },
  {
    id: 3,
    nameKor : '미트볼',
    nameEng : 'Meatball',
    imgSrc : '',
    kcal : 480,
    description : '이탈리안 스타일 비프 미트볼에 써브웨이만의 풍부한 토마토 향이 살아있는 마리나라소스를 듬뿍',
    price : '',
  },
  {
    id: 4,
    nameKor : '햄',
    nameEng : 'Ham',
    imgSrc : '',
    kcal : 290,
    description : '기본 중에 기본! 풍부한 햄이 만들어내는 입 안 가득 넘치는 맛의 향연',
    price : '',
  },
  {
    id: 5,
    nameKor : '참치',
    nameEng : 'Tuna',
    imgSrc : '',
    kcal : 480,
    description : '남녀노소 누구나 좋아하는 담백한 참치와 고소한 마요네즈의 완벽한 조화',
    price : '',
  },
  
  {
    id: 6,
    nameKor : '로스트 치킨',
    nameEng : 'Roasted Chicken',
    imgSrc : '',
    kcal : 320,
    description : '오븐에 구워 담백한 저칼로리 닭가슴살의 건강한 풍미',
    price : '',
  },
  {
    id: 7,
    nameKor : '로티세리 바비큐 치킨',
    nameEng : 'Rotisserie Barbecue Chicken',
    imgSrc : '',
    kcal : 350,
    description : '촉촉한 바비큐 치킨의 풍미가득. 손으로 찢어 더욱 부드러운 치킨의 혁명',
    price : '',
  },
  {
    id: 8,
    nameKor : '써브웨이 클럽',
    nameEng : 'Subway Club™',
    imgSrc : '',
    kcal : 293,
    description : '명실공히 시그니처 써브! 터키, 햄, 베이컨의 완벽한 앙상블',
    price : '',
  },
  {
    id: 9,
    nameKor : '터키',
    nameEng : 'Turkey',
    imgSrc : '',
    kcal : 280,
    description : '280kcal로 슬림하게 즐기는 오리지날 터키 샌드위치',
    price : '',
  },
  {
    id: 10,
    nameKor : '베지',
    nameEng : 'Veggie Delite',
    imgSrc : '',
    kcal : 230,
    description : '갓 구운 빵과 신선한 7가지 야채로 즐기는 깔끔한 한끼',
    price : '',
  },
  {
    id: 11,
    nameKor : '쉬림프',
    nameEng : 'Shrimp',
    imgSrc : '',
    kcal : 229,
    description : '탱글한 식감이 그대로 살아있는 통새우가 5마리 들어가 한 입 베어 먹을 때 마다 진짜 새우의 풍미가 가득',
    price : '',
  },
  {
    id: 12,
    nameKor : 'K-바비큐',
    nameEng : 'K-BBQ',
    imgSrc : '',
    kcal : 372,
    description : '써브웨이 최초의 코리안 스타일 샌드위치! 마늘, 간장 그리고 은은한 불맛까지!',
    price : '',
  },
  {
    id: 13,
    nameKor : '풀드 포크 바비큐',
    nameEng : 'Pulled Pork Barbecue',
    imgSrc : '',
    kcal : 327,
    description : '미국 스타일의 풀드 포크 바비큐가 가득 들어간 샌드위치',
    price : '',
  },
  {
    id: 14,
    nameKor : '스테이크 & 치즈',
    nameEng : 'Steak & Cheese',
    imgSrc : '',
    kcal : 380,
    description : '육즙이 쫙~풍부한 비프 스테이크의 풍미가 입안 한가득',
    price : '',
  },
  {
    id: 15,
    nameKor : '터키 베이컨 아보카도',
    nameEng : 'Turkey Bacon Avocado',
    imgSrc : '',
    kcal : 420,
    description : '담백한 터키와 바삭한 베이컨 환상조합에 부드러운 아보카도는 신의 한수',
    price : '',
  },
  {
    id: 16,
    nameKor : '스파이시 이탈리안',
    nameEng : 'Spicy Italian',
    imgSrc : '',
    kcal : 480,
    description : '살라미, 페퍼로니가 입안 한가득! 쏘 핫한 이탈리아의 맛',
    price : '',
  },
  {
    id: 17,
    nameKor : '치킨 데리야끼',
    nameEng : 'Chicken Teriyaki',
    imgSrc : '',
    kcal : 370,
    description : '담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 특제 데리야끼 소스와의 환상적인 만남',
    price : '',
  }
];

// 빵 리스트
export const Breads = [
  {
    id: 0,
    nameKor : '',
    description : '',
    size : {
      // 빵 사이즈
      halfSize : 15,
      fullSize : 30,
    },
    toast : true, // 빵데우기 옵션
    digOut : false, // 빵 속 파내기 옵션
    cutting: true,  // 빵 컷팅 (30cm일때만 선택가능)
  },
  {
    id: 1,
    nameKor : '',
    description : '',
    size : {
      // 빵 사이즈
      halfSize : 15,
      fullSize : 30,
    },
    toast : true, // 빵데우기 옵션
    digOut : false, // 빵 속 파내기 옵션
    cutting: true,  // 빵 컷팅 (30cm일때만 선택가능)
  },

];
