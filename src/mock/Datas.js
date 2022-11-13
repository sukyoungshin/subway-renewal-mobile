import LINK from "constants/link";

/**************************** 
  각 페이지별 카테고리리스트 &
  상품데이터 저장한 파일 
****************************/

// Navbar 메뉴 카테고리
export const NavCategories = [
  {
    pathName: LINK.MAIN,
    categoryName: "메인화면",
  },
  {
    pathName: LINK.ADDR,
    categoryName: "주문하기",
  },
  {
    pathName: LINK.CART,
    categoryName: "장바구니",
  },
  // {
  //   pathName : LINK.TRACK,
  //   categoryName: '배송조회',
  // },
];

// MAIN 추천메뉴 데이터리스트
export const MenuRecommended = [
  {
    id: 1,
    img: "",
    imgDecript: "첫번째 이미지",
    menuName: "다이어터를 위한11",
    kcal: 245,
  },
  {
    id: 2,
    img: "",
    imgDecript: "두번째 이미지",
    menuName: "다이어터를 위한22",
    kcal: 245,
  },
  {
    id: 3,
    img: "",
    imgDecript: "세번째 이미지",
    menuName: "다이어터를 위한333",
    kcal: 245,
  },
];

// Carousel 광고데이터
export const AdContents = [
  {
    id: 0,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "모바일앱 첫 주문시, 20% 할인 EVENT",
    eventDate: "2021.11.21 ~ 2021.12.14",
  },
  {
    id: 1,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "써브웨이 앱으로 주문하면 배달비가 2000원!",
    eventDate: "2021.11.21 ~",
  },
  {
    id: 2,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "SAMPLE",
    eventDate: "2021.11.21 ~",
  },
];

/************************
  Order메뉴 카테고리 
  및 카테고리별 리스트
*************************/
// Order 메뉴카테고리 (차후 추가예정)
export const MenuCategories = [
  {
    id: 0,
    title: "기본메뉴",
    titleEng: "Default",
    imgSrc: "/sandwich/italianbmt.webp",
  },
  {
    id: 1,
    title: "샌드위치",
    titleEng: "Sandwiches",
    imgSrc: "/sandwich/eggmayo.webp",
  },
  {
    id: 2,
    title: "샐러드",
    titleEng: "Salads",
    imgSrc: "/salad/shrimp.webp",
  },
  {
    id: 3,
    title: "랩기타",
    titleEng: "Wraps",
    imgSrc: "/wrap/shrimp_egg_grilled_wrap.webp",
  },
];

export const BASEURL = `${process.env.PUBLIC_URL}/assets`;

// 기본 셋팅된 메뉴
export const Default = [
  {
    id: 0,
    nameKor: "기본메뉴",
    nameEng: "Shrimp Egg Grilled Wrap",
    imgSrc: "/noimage.webp",
    kcal: 11111,
    description: "추천꿀조합으로 셋팅된 메뉴1 바로 주문하기",
    price: "",
    amount: 1,
  },
  {
    id: 1,
    nameKor: "기본메뉴",
    nameEng: "Shrimp Egg Grilled Wrap",
    imgSrc: "/noimage.webp",
    kcal: 11111,
    description: "추천꿀조합으로 셋팅된 메뉴1 바로 주문하기",
    price: "",
    amount: 1,
  },
  {
    id: 2,
    nameKor: "기본메뉴",
    nameEng: "Shrimp Egg Grilled Wrap",
    imgSrc: "/noimage.webp",
    kcal: 11111,
    description: "추천꿀조합으로 셋팅된 메뉴1 바로 주문하기",
    price: "",
    amount: 1,
  },
  {
    id: 3,
    nameKor: "기본메뉴",
    nameEng: "Shrimp Egg Grilled Wrap",
    imgSrc: "/noimage.webp",
    kcal: 11111,
    description: "추천꿀조합으로 셋팅된 메뉴1 바로 주문하기",
    price: "",
    amount: 1,
  },
  {
    id: 4,
    nameKor: "기본메뉴",
    nameEng: "Shrimp Egg Grilled Wrap",
    imgSrc: "/noimage.webp",
    kcal: 11111,
    description: "추천꿀조합으로 셋팅된 메뉴1 바로 주문하기",
    price: "",
    amount: 1,
  },
];
// 샌드위치리스트
export const Sandwiches = [
  {
    id: 0,
    nameKor: "에그마요",
    nameEng: "Egg Mayo",
    imgSrc: "/sandwich/eggmayo.webp",
    kcal: 480,
    description:
      "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러",
    price: 4300,
    amount: 1,
  },
  {
    id: 1,
    nameKor: "이탈리안 비엠티",
    nameEng: "Italian B.M.T.™",
    imgSrc: "/sandwich/italianbmt.webp",
    kcal: 410,
    description:
      "페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는 써브웨이의 베스트셀러! Biggest Meatiest Tastiest, its’ B.M.T!",
    price: 5400,
    amount: 1,
  },
  {
    id: 2,
    nameKor: "비엘티",
    nameEng: "B.L.T.",
    imgSrc: "/sandwich/blt.webp",
    kcal: 300,
    description: "오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로~",
    price: 5400,
    amount: 1,
  },
  {
    id: 3,
    nameKor: "미트볼",
    nameEng: "Meatball",
    imgSrc: "/sandwich/meatball.webp",
    kcal: 480,
    description:
      "이탈리안 스타일 비프 미트볼에 써브웨이만의 풍부한 토마토 향이 살아있는 마리나라소스를 듬뿍",
    price: 5300,
    amount: 1,
  },
  {
    id: 4,
    nameKor: "햄",
    nameEng: "Ham",
    imgSrc: "/sandwich/ham.webp",
    kcal: 290,
    description:
      "기본 중에 기본! 풍부한 햄이 만들어내는 입 안 가득 넘치는 맛의 향연",
    price: 4800,
    amount: 1,
  },
  {
    id: 5,
    nameKor: "참치",
    nameEng: "Tuna",
    imgSrc: "/sandwich/tuna.webp",
    kcal: 480,
    description:
      "남녀노소 누구나 좋아하는 담백한 참치와 고소한 마요네즈의 완벽한 조화",
    price: 4800,
    amount: 1,
  },

  {
    id: 6,
    nameKor: "로스트 치킨",
    nameEng: "Roasted Chicken",
    imgSrc: "/sandwich/roastedchicken.webp",
    kcal: 320,
    description: "오븐에 구워 담백한 저칼로리 닭가슴살의 건강한 풍미",
    price: 6100,
    amount: 1,
  },
  {
    id: 7,
    nameKor: "로티세리 바비큐 치킨",
    nameEng: "Rotisserie Barbecue Chicken",
    imgSrc: "/sandwich/roatisery.webp",
    kcal: 350,
    description:
      "촉촉한 바비큐 치킨의 풍미가득. 손으로 찢어 더욱 부드러운 치킨의 혁명",
    price: 6100,
    amount: 1,
  },
  {
    id: 8,
    nameKor: "써브웨이 클럽",
    nameEng: "Subway Club™",
    imgSrc: "/sandwich/subwayclub.webp",
    kcal: 293,
    description: "명실공히 시그니처 써브! 터키, 햄, 베이컨의 완벽한 앙상블",
    price: 5900,
    amount: 1,
  },
  {
    id: 9,
    nameKor: "터키",
    nameEng: "Turkey",
    imgSrc: "/sandwich/turkey.webp",
    kcal: 280,
    description: "280kcal로 슬림하게 즐기는 오리지날 터키 샌드위치",
    price: 5300,
    amount: 1,
  },
  {
    id: 10,
    nameKor: "베지",
    nameEng: "Veggie Delite",
    imgSrc: "/sandwich/veggie.webp",
    kcal: 230,
    description: "갓 구운 빵과 신선한 7가지 야채로 즐기는 깔끔한 한끼",
    price: "",
  },
  {
    id: 11,
    nameKor: "쉬림프",
    nameEng: "Shrimp",
    imgSrc: "/sandwich/shrimp.webp",
    kcal: 229,
    description:
      "탱글한 식감이 그대로 살아있는 통새우가 5마리 들어가 한 입 베어 먹을 때 마다 진짜 새우의 풍미가 가득",
    price: 5900,
    amount: 1,
  },
  {
    id: 12,
    nameKor: "K-바비큐",
    nameEng: "K-BBQ",
    imgSrc: "/sandwich/kbbq.webp",
    kcal: 372,
    description:
      "써브웨이 최초의 코리안 스타일 샌드위치! 마늘, 간장 그리고 은은한 불맛까지!",
    price: 6100,
    amount: 1,
  },
  {
    id: 13,
    nameKor: "풀드 포크 바비큐",
    nameEng: "Pulled Pork Barbecue",
    imgSrc: "/sandwich/pulledpork.webp",
    kcal: 327,
    description: "미국 스타일의 풀드 포크 바비큐가 가득 들어간 샌드위치",
    price: 6000,
    amount: 1,
  },
  {
    id: 14,
    nameKor: "스테이크 & 치즈",
    nameEng: "Steak & Cheese",
    imgSrc: "/sandwich/steakandcheese.webp",
    kcal: 380,
    description: "육즙이 쫙~풍부한 비프 스테이크의 풍미가 입안 한가득",
    price: 6500,
    amount: 1,
  },
  {
    id: 15,
    nameKor: "터키 베이컨 아보카도",
    nameEng: "Turkey Bacon Avocado",
    imgSrc: "/sandwich/turkeybacon.webp",
    kcal: 420,
    description:
      "담백한 터키와 바삭한 베이컨 환상조합에 부드러운 아보카도는 신의 한수",
    price: 6500,
    amount: 1,
  },
  {
    id: 16,
    nameKor: "스파이시 이탈리안",
    nameEng: "Spicy Italian",
    imgSrc: "/sandwich/spicyitalian.webp",
    kcal: 480,
    description: "살라미, 페퍼로니가 입안 한가득! 쏘 핫한 이탈리아의 맛",
    price: 5700,
    amount: 1,
  },
  {
    id: 17,
    nameKor: "치킨 데리야끼",
    nameEng: "Chicken Teriyaki",
    imgSrc: "/sandwich/chickenterriyaki.webp",
    kcal: 370,
    description:
      "담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 특제 데리야끼 소스와의 환상적인 만남",
    price: 5700,
    amount: 1,
  },
];

// 샐러드 리스트
export const Salads = [
  {
    id: 0,
    nameKor: "쉬림프",
    nameEng: "Shrimp",
    imgSrc: "/salad/shrimp.webp",
    kcal: 67,
    description:
      "탱글한 식감이 그대로 살아있는 통새우가 5마리가 샐러드에 쏙 ! Fresh함이 그대로~",
    price: 7600,
    amount: 1,
  },
  {
    id: 1,
    nameKor: "K-바비큐",
    nameEng: "K-BBQ",
    imgSrc: "/salad/k-bbq.webp",
    kcal: 210,
    description:
      "써브웨이 최초의 코리안 스타일 샐러드! 마늘, 간장 그리고 은은한 불맛까지!",
    price: 7800,
    amount: 1,
  },
  {
    id: 2,
    nameKor: "로티세리 바비큐 치킨",
    nameEng: "Rotisserie Chicken",
    imgSrc: "/salad/rotisery.webp",
    kcal: 480,
    description:
      "촉촉한 바비큐 치킨의 풍미가득. 손으로 찢어 더욱 부드러운 치킨이 샐러드에 쏙",
    price: 7800,
    amount: 1,
  },
  {
    id: 3,
    nameKor: "풀드 포크 바비큐",
    nameEng: "Pulled Pork Barbecue",
    imgSrc: "/salad/pulledpork.webp",
    kcal: 165,
    description:
      "훈연한 미국 스타일의 풀드 포크 바비큐가 가득 올라간 풍미 가득한 샐러드",
    price: 7700,
    amount: 1,
  },
  {
    id: 4,
    nameKor: "이탈리안 비엠티",
    nameEng: "Italian B.M.T™",
    imgSrc: "/salad/itlianbmt.webp",
    kcal: 480,
    description:
      "페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는 써브웨이의 베스트셀러! Biggest Meatiest Tastiest, its’ B.M.T! 샐러드",
    price: 7100,
    amount: 1,
  },
  {
    id: 5,
    nameKor: "비엘티",
    nameEng: "B.L.T.",
    imgSrc: "/salad/blt.webp",
    kcal: 153,
    description: "오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로~",
    price: 7100,
    amount: 1,
  },
  {
    id: 6,
    nameKor: "에그마요",
    nameEng: "Egg Mayo",
    imgSrc: "/salad/eggmayo.webp",
    kcal: 310,
    description:
      "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러",
    price: 6000,
    amount: 1,
  },
  {
    id: 7,
    nameKor: "로스트 치킨",
    nameEng: "Roasted Chicken",
    imgSrc: "/salad/roatstedchicken.webp",
    kcal: 150,
    description: "오븐에 구워 담백한 저칼로리 닭가슴살의 건강한 풍미",
    price: 7800,
    amount: 1,
  },
  {
    id: 8,
    nameKor: "써브웨이 클럽",
    nameEng: "Subway Club™",
    imgSrc: "/salad/subwayclub.webp",
    kcal: 138,
    description: "터키, 햄, 베이컨의 완벽한 앙상블과 즐기는 샐러드",
    price: 7600,
    amount: 1,
  },
  {
    id: 9,
    nameKor: "터키 샐러드",
    nameEng: "Turkey",
    imgSrc: "/salad/turkey.webp",
    kcal: 110,
    description: "더 슬림하게 즐기자! 오리지날 터키 샐러드",
    price: 7000,
    amount: 1,
  },
  {
    id: 10,
    nameKor: "베지",
    nameEng: "Veggie Delite™",
    imgSrc: "/salad/veggie.webp",
    kcal: 60,
    description: "7가지 야채만으로도 깔끔한 조화! 기본에 충실한 베지 샐러드",
    price: 5600,
    amount: 1,
  },
  {
    id: 11,
    nameKor: "스테이크 & 치즈",
    nameEng: "Steak & Cheese",
    imgSrc: "/salad/steakandcheese.webp",
    kcal: 210,
    description:
      "육즙이 쫙~풍부한 비프 스테이크의 풍미 가득 스테이크 & 치즈 샐러드!",
    price: 8200,
    amount: 1,
  },
  {
    id: 12,
    nameKor: "터키 베이컨 아보카도",
    nameEng: "Turkey Bacon Avocado",
    imgSrc: "/salad/turkeyandbacon.webp",
    kcal: 238,
    description:
      "담백한 터키와 바삭한 베이컨 환상조합에 부드러운 아보카도는 신의 한수",
    price: 8200,
    amount: 1,
  },
  {
    id: 13,
    nameKor: "스파이시 이탈리안",
    nameEng: "Spicy Italian",
    imgSrc: "/salad/splicyitalian.webp",
    kcal: 310,
    description:
      "살라미, 페퍼로니가 입안 한가득! 진짜 이탈리아의 맛 가득한 샐러드",
    price: 7400,
    amount: 1,
  },
  {
    id: 14,
    nameKor: "치킨 데리야끼",
    nameEng: "Chicken Teriyaki",
    imgSrc: "/salad/chickenteriyaki.webp",
    kcal: 230,
    description:
      "담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 특제 데리야끼 소스 토핑으로 더 풍성한 샐러드",
    price: 7400,
    amount: 1,
  },
];

// 랩, 기타
export const Wraps = [
  {
    id: 0,
    nameKor: "쉬림프 에그마요 랩",
    nameEng: "Shrimp Egg Grilled Wrap",
    imgSrc: "/wrap/shrimp_egg_grilled_wrap.webp",
    kcal: 427,
    description:
      "더 뜨겁게, 더 맛있게 즐기자! 탱글한 새우와 부드러운 오믈렛의 만남",
    price: 5000,
    amount: 1,
  },
  {
    id: 1,
    nameKor: "스테이크&치즈 아보카도 랩",
    nameEng: "Steak & Cheese Avocado Grilled Wrap",
    imgSrc: "/wrap/steak_n_cheese_avocado_grilled_wrap.webp",
    kcal: 451,
    description:
      "더 뜨겁게, 더 맛있게 즐기자! 육즙이 쫙~ 비프 스테이크와 아보카도가 만나다!",
    price: 5700,
    amount: 1,
  },
  {
    id: 2,
    nameKor: "치킨 베이컨 미니 랩",
    nameEng: "Chicken Bacon Mini Grilled Wrap",
    imgSrc: "/wrap/chicken_bacon_mini_grilled_wrap.webp",
    kcal: 376,
    description:
      "더 뜨겁게 더 맛있게 즐기자! 담백한 치킨, 바삭한 베이컨 비츠가 쏙",
    price: 2900,
    amount: 1,
  },
  {
    id: 3,
    nameKor: "이탈리안 미니 랩",
    nameEng: "Italian Mini Grilled Wrap",
    imgSrc: "/wrap/italian_mini_wrap.webp",
    kcal: 405,
    description:
      "더 뜨겁게 더 맛있게 즐기자! 페퍼로니, 살라미 풍미 넘치는 한입 매콤한 핫칠리로 놓칠 수 없는 맛",
    price: 3400,
    amount: 1,
  },
  {
    id: 4,
    nameKor: "스테이크 & 치즈 파니니",
    nameEng: "Steak & Cheese Panini",
    imgSrc: "/wrap/steak_n_cheese_panini.webp",
    kcal: 453,
    description:
      "바삭한 식감에 치즈는 두배로 써브웨이 베스트 메뉴 스테이크 & 치즈를 파니니로 즐겨보세요!",
    price: "",
    amount: 1,
  },
  {
    id: 5,
    nameKor: "로티세리 바비큐 치킨 파니니",
    nameEng: "Rotisserie Barbecue Chicken Panini",
    imgSrc: "/wrap/rotisserie_barbecue_chicken_panini.webp",
    kcal: 450,
    description:
      "바삭한 식감에 치즈는 두배로 풍미 가득한 로티세리 바비큐 치킨을 파니니로 즐겨보세요!",
    price: "",
    amount: 1,
  },
  {
    id: 6,
    nameKor: "오늘의 수프",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 2900,
    amount: 1,
  },
  {
    id: 7,
    nameKor: "초코칩 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 8,
    nameKor: "더블 초코칩 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 9,
    nameKor: "오트밀 레이즌 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 10,
    nameKor: "라즈베리 치즈케익 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 11,
    nameKor: "화이트 초코 마카다미아 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 12,
    nameKor: "파인애플 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 13,
    nameKor: "쿠키 3개입",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 2700,
    amount: 1,
  },
  {
    id: 14,
    nameKor: "쿠키팩 (6개입)",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 4900,
    amount: 1,
  },
  {
    id: 15,
    nameKor: "쿠키박스 (12개입)",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 9600,
    amount: 1,
  },
  {
    id: 16,
    nameKor: "칩 (랜덤발송)",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 17,
    nameKor: "코카콜라 (355ml)",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1800,
    amount: 1,
  },
  {
    id: 18,
    nameKor: "코카콜라 제로 (355ml)",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1800,
    amount: 1,
  },
  {
    id: 19,
    nameKor: "스프라이트 (355ml)",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1800,
    amount: 1,
  },
  {
    id: 20,
    nameKor: "닥터페퍼 (355ml)",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1800,
    amount: 1,
  },
];

// 카테고리 탭 (menu.js)
export const TabContents = {
  // 속성 접근자(bracket notation), Routing Design Patterns
  [MenuCategories[0].titleEng]: Default,
  [MenuCategories[1].titleEng]: Sandwiches,
  [MenuCategories[2].titleEng]: Salads,
  [MenuCategories[3].titleEng]: Wraps,
};

// 재료 리스트
// 빵 옵션 (화면에 나타내줄)
export const breadOptionLists = [
  {
    id: 0,
    name: "빵 길이",
    nameEng: "size",
    option: {
      option1: {
        text: "15cm",
        default: true,
        price: 999,
      },
      option2: {
        text: "30cm",
        default: false,
        price: 999,
      },
    },
  },
  {
    id: 1,
    name: "토스팅",
    nameEng: "toasting",
    option: {
      option1: {
        text: "토스팅",
        default: true,
        price: null,
      },
      option2: {
        text: "토스팅안함",
        default: false,
        price: null,
      },
    },
  },
  {
    id: 2,
    name: "빵 속 파기",
    nameEng: "digOut",
    option: {
      option1: {
        text: "속 파기",
        default: false,
        price: null,
      },
      option2: {
        text: "안함",
        default: true,
        price: null,
      },
    },
  },
  {
    id: 3,
    name: "빵 컷팅",
    nameEng: "cutting",
    option: {
      option1: {
        text: "빵 컷팅",
        default: false,
        price: null,
      },
      option2: {
        text: "컷팅안함",
        default: true,
        price: null,
      },
    },
  },
];
// 빵 옵션 기본값
export const breadOptionsDefault = [
  {
    id: 0,
    nameKor: " 빵 사이즈",
    name: "size",
    bool: true,
    price: 0,
  },
  {
    id: 1,
    nameKor: " 토스팅",
    name: "toasting",
    bool: true,
    price: null,
  },
  {
    id: 2,
    nameKor: " 속파기",
    name: "digOut",
    bool: false,
    price: null,
  },
  {
    id: 3,
    nameKor: " 컷팅",
    name: "cutting",
    bool: false,
    price: null,
  },
];

// 빵 리스트`
export const breads = [
  {
    id: 0,
    nameKor: "허니오트",
    nameEng: "Honey Oat",
    description: "고소한 위트빵에 오트밀 가루를 묻혀 고소함과 식감이 두배로",
    imgSrc: "/bread/honeyoat.webp",
    price: null,
  },
  {
    id: 1,
    nameKor: "하티",
    nameEng: "Hearty Italian",
    description:
      "부드러운 화이트빵에 옥수수가루를 묻혀 겉은 바삭하고 고소하며 속은 부드럽게",
    imgSrc: "/bread/hearty.webp",
    price: null,
  },
  {
    id: 2,
    nameKor: "위트",
    nameEng: "Wheat",
    description: "9가지 곡물로 만들어 건강하고 고소한 맛의 곡물빵",
    imgSrc: "/bread/wheat.webp",
    price: null,
  },
  {
    id: 3,
    nameKor: "파마산오레가노",
    nameEng: "Parmesan Oregano",
    description:
      "부드러운 화이트빵에 파마산 오레가노 시즈닝을 묻혀 허브향 가득",
    imgSrc: "/bread/parmesan.webp",
    price: null,
  },
  {
    id: 4,
    nameKor: "화이트",
    nameEng: "White",
    description: "가장 클래식한 빵으로 부드러운 식감이 매력 포인트",
    imgSrc: "/bread/white.webp",
    price: null,
  },
  {
    id: 5,
    nameKor: "플랫브래드",
    nameEng: "Flat Bread",
    description: "납작한 모양의 식감이 쫀득한 빵",
    imgSrc: "/bread/flatbread.webp",
    price: null,
  },
];

// 치즈 리스트
export const cheeses = [
  {
    id: 0,
    nameKor: "아메리칸 치즈",
    nameEng: "American Cheese",
    description: "",
    imgSrc: "/cheese/american.webp",
  },
  {
    id: 1,
    nameKor: "슈레드 치즈",
    nameEng: "Shredded Cheese",
    description: "",
    imgSrc: "/cheese/shredded.webp",
  },
  {
    id: 2,
    nameKor: "모차렐라 치즈",
    nameEng: "Mozzallea",
    description: "",
    imgSrc: "/cheese/mozzallea.webp",
  },
  {
    id: 3,
    nameKor: "치즈제외",
    nameEng: "",
    description: "",
    imgSrc: "/noimage.webp",
  },
];

// 야채 리스트
export const vegetables = [
  {
    id: 0,
    nameKor: "양상추",
    description: "",
    imgSrc: "/veg/lettuce.webp",
  },
  {
    id: 1,
    nameKor: "토마토",
    description: "",
    imgSrc: "/veg/tomatoes.webp",
  },
  {
    id: 2,
    nameKor: "오이",
    description: "",
    imgSrc: "/veg/cucumbers.webp",
  },
  {
    id: 3,
    nameKor: "피망",
    description: "",
    imgSrc: "/veg/peppers.webp",
  },
  {
    id: 4,
    nameKor: "피클",
    description: "",
    imgSrc: "/veg/pickles.webp",
  },
  {
    id: 5,
    nameKor: "올리브",
    description: "",
    imgSrc: "/veg/olives.webp",
  },
  {
    id: 6,
    nameKor: "할라피뇨",
    description: "",
    imgSrc: "/veg/jalapenos.webp",
  },
  {
    id: 7,
    nameKor: "아보카도",
    description: "",
    imgSrc: "/veg/avocado.webp",
  },
  {
    id: 8,
    nameKor: "양파",
    description: "",
    imgSrc: "/veg/redonion.webp",
  },
];

// 소스 옵션
export const sauceOptionLists = [
  {
    id: 0,
    name: "선택",
    nameEng: "isSelected",
    radioGroup: "option",
    defaultChecked: false,
  },
  {
    id: 1,
    name: "소스/시즈닝 선택안함",
    nameEng: "IsNotSelected",
    radioGroup: "option",
    defaultChecked: true,
  },
];

// 소스 리스트
export const sauces = [
  {
    id: 0,
    nameKor: "선택안함",
    description: "",
    imgSrc: "/noimage.webp",
    defaultChecked: true,
  },
  {
    id: 1,
    nameKor: "랜치",
    description: "고소한 마요네즈와 레몬즙의 만남 고소함이 두배!",
    imgSrc: "/sauce/ranch.webp",
    defaultChecked: false,
  },
  {
    id: 2,
    nameKor: "마요네즈",
    description: "말이 필요없는 고소함의 대명사, 마요네즈 소스",
    imgSrc: "/sauce/mayonnaise.webp",
    defaultChecked: false,
  },
  {
    id: 3,
    nameKor: "스위트 어니언",
    description: "써브웨이만의 특제 레시피로 만든 달콤한 양파소스",
    imgSrc: "/sauce/sweetonion.webp",
    defaultChecked: false,
  },
  {
    id: 4,
    nameKor: "허니 머스타드",
    description: "겨자씨가 아낌없이 들어간 달콤한 머스타드 소스",
    imgSrc: "/sauce/honeymustard.webp",
    defaultChecked: false,
  },
  {
    id: 5,
    nameKor: "스위트 칠리",
    description: "매콤한 칠리에 더해진 기분 좋은 달콤함!",
    imgSrc: "/sauce/sweetchilli.webp",
    defaultChecked: false,
  },
  {
    id: 6,
    nameKor: "핫 칠리",
    description: "진짜 매운맛을 보고 싶다면 써브웨이의 핫 칠리!",
    imgSrc: "/sauce/hotchilli.webp",
    defaultChecked: false,
  },
  {
    id: 7,
    nameKor: "사우스웨스트 치폴레",
    description: "핫 칠리와 고소한 마요네즈가 만난 이국적인 매콤한 맛",
    imgSrc: "/sauce/southwestchipotle.webp",
    defaultChecked: false,
  },
  {
    id: 8,
    nameKor: "머스타드",
    description: "오리지날 옐로우 머스타드 소스",
    imgSrc: "/sauce/yellowmustard.webp",
    defaultChecked: false,
  },
  {
    id: 9,
    nameKor: "홀스래디쉬",
    description:
      "고소한 마요네즈와 고추냉이의 이색적인 만남! 매니아층을 사로잡은 매력No.1 소스",
    imgSrc: "/sauce/horseradish.webp",
    defaultChecked: false,
  },
  {
    id: 10,
    nameKor: "올리브 오일",
    description: "담백하고 깔끔하게 즐기고 싶다면 주저하지 말고 올리브오일",
    imgSrc: "/sauce/oliveoil.webp",
    defaultChecked: false,
  },
  {
    id: 11,
    nameKor: "레드와인식초",
    description: "레드와인을 발효시켜 풍미가 가득한 식초",
    imgSrc: "/sauce/redwine.webp",
    defaultChecked: false,
  },
  {
    id: 12,
    nameKor: "스모크바비큐",
    description: "스모크 향과 달콤한 바비큐의 완벽한 조화",
    imgSrc: "/sauce/smokebbq.webp",
    defaultChecked: false,
  },
  {
    id: 13,
    nameKor: "후추",
    description: "",
    imgSrc: "/sauce/blackpepper.webp",
    defaultChecked: false,
  },
  {
    id: 14,
    nameKor: "소금",
    description: "",
    imgSrc: "/sauce/salt.webp",
    defaultChecked: false,
  },
];

// 추가 리스트
export const extraOptions = [
  {
    id: 0,
    nameKor: "미트",
    description: "주 재료를 2배로 더 푸짐하게 즐기세요. ",
    imgSrc: "",
    size: {
      halfSize: {
        size: 15,
        price: 1000,
      },
      fullSize: {
        size: 30,
        price: 3600,
      },
    },
  },
  {
    id: 1,
    nameKor: "베이컨 비츠",
    description: "짭쪼름한 베이컨 비츠로 맛의 화룡점정을! ",
    imgSrc: "",
    size: {
      halfSize: {
        size: 15,
        price: 900,
      },
      fullSize: {
        size: 30,
        price: 1000,
      },
    },
  },
  {
    id: 2,
    nameKor: "쉬림프 더블업",
    description: "새우의 탱글함과 신선함을 2배로!",
    imgSrc: "",
    size: {
      halfSize: {
        size: 15,
        price: 1000,
      },
      fullSize: {
        size: 30,
        price: 3600,
      },
    },
  },
  {
    id: 3,
    nameKor: "에그마요",
    description: "신선한 달걀과 고소한 마요네즈의 만남.",
    imgSrc: "",
    size: {
      halfSize: {
        size: 15,
        price: 1600,
      },
      fullSize: {
        size: 30,
        price: 3200,
      },
    },
  },
  {
    id: 4,
    nameKor: "오믈렛",
    description: "더 부드럽게, 더 고소하게",
    imgSrc: "",
    size: {
      halfSize: {
        size: 15,
        price: 1200,
      },
      fullSize: {
        size: 30,
        price: 2400,
      },
    },
  },
  {
    id: 5,
    nameKor: "미트추가",
    description: "주 재료를 2배로 더 푸짐하게 즐기세요. ",
    imgSrc: "",
    size: {
      halfSize: {
        size: 15,
        price: 1000,
      },
      fullSize: {
        size: 30,
        price: 3600,
      },
    },
  },
  {
    id: 6,
    nameKor: "아보카도",
    description: "숲속의 버터 아보카도로 영양 UP",
    imgSrc: "",
    size: {
      halfSize: {
        size: 15,
        price: 1300,
      },
      fullSize: {
        size: 30,
        price: 2600,
      },
    },
  },
  {
    id: 7,
    nameKor: "베이컨",
    description: "진한 풍미와 바삭한 베이컨으로 특별한 나만의 써브웨이~",
    imgSrc: "",
    size: {
      halfSize: {
        size: 15,
        price: 900,
      },
      fullSize: {
        size: 30,
        price: 1000,
      },
    },
  },
  {
    id: 8,
    nameKor: "페퍼로니",
    description: "입맛 당기는 페퍼로니로 써브웨이를 더 맛있게!",
    imgSrc: "",
    size: {
      halfSize: {
        size: 15,
        price: 900,
      },
      fullSize: {
        size: 30,
        price: 1000,
      },
    },
  },
  {
    id: 9,
    nameKor: "치즈",
    description: "고소한 치즈를 2배로!",
    imgSrc: "",
    size: {
      halfSize: {
        size: 15,
        price: 900,
      },
      fullSize: {
        size: 30,
        price: 1000,
      },
    },
  },
];

// 음료 리스트
export const beverages = [
  {
    id: 0,
    nameKor: "코카콜라 (355ml)",
    nameEng: "",
    imgSrc: "",
    kcal: 0,
    description: "",
    price: 1800,
    amount: 1,
  },
  {
    id: 1,
    nameKor: "코카콜라 제로 (355ml)",
    nameEng: "",
    imgSrc: "",
    kcal: 0,
    description: "",
    price: 1800,
    amount: 1,
  },
  {
    id: 2,
    nameKor: "스프라이트 (355ml)",
    nameEng: "",
    imgSrc: "",
    kcal: 0,
    description: "",
    price: 1800,
    amount: 1,
  },
  {
    id: 3,
    nameKor: "닥터페퍼 (355ml)",
    nameEng: "",
    imgSrc: "",
    kcal: 0,
    description: "",
    price: 1800,
    amount: 1,
  },
];

// 쿠키 리스트
export const cookies = [
  {
    id: 0,
    nameKor: "초코칩 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 1,
    nameKor: "더블 초코칩 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 2,
    nameKor: "오트밀 레이즌 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 3,
    nameKor: "라즈베리 치즈케익 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 4,
    nameKor: "화이트 초코 마카다미아 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 5,
    nameKor: "파인애플 쿠키",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 1000,
    amount: 1,
  },
  {
    id: 6,
    nameKor: "쿠키 3개입",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 2700,
    amount: 1,
  },
  {
    id: 7,
    nameKor: "쿠키팩 (6개입)",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 4900,
    amount: 1,
  },
  {
    id: 8,
    nameKor: "쿠키박스 (12개입)",
    nameEng: "",
    imgSrc: "/noimage.webp",
    kcal: 0,
    description: "",
    price: 9600,
    amount: 1,
  },
];
