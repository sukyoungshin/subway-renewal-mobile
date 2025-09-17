import LINK from '@/shared/constants/link';
import { asset } from '@/shared/utils/assets';
import { bestMenuList, saladList, sandwichList, wrapList } from './food-menu.mock';

/** 왼쪽상단 햄버거메뉴, 네비 카테고리 */
export const navigationMenuList = [
  {
    pathName: LINK.MAIN,
    categoryName: '메인화면',
  },
  {
    pathName: LINK.ADDR,
    categoryName: '주문하기',
  },
  {
    pathName: LINK.CART,
    categoryName: '장바구니',
  },
  // {
  //   pathName : LINK.TRACK,
  //   categoryName: '배송조회',
  // },
];

/** Order페이지, 메뉴 카테고리 */
export const menuCategoryList = [
  {
    id: 0,
    title: '추천메뉴',
    titleEng: 'bestMenuList',
    imgPath: asset('/assets/sandwich/italianbmt.webp'),
  },
  {
    id: 1,
    title: '샌드위치',
    titleEng: 'sandwichList',
    imgPath: asset('/assets/sandwich/eggmayo.webp'),
  },
  {
    id: 2,
    title: '샐러드',
    titleEng: 'saladList',
    imgPath: asset('/assets/salad/shrimp.webp'),
  },
  {
    id: 3,
    title: '랩기타',
    titleEng: 'wrapList',
    imgPath: asset('/assets/wrap/shrimp_egg_grilled_wrap.webp'),
  },
];

/** Order페이지, 메뉴 카테고리 탭 */
export const TabContents = {
  [menuCategoryList[0].titleEng]: bestMenuList,
  [menuCategoryList[1].titleEng]: sandwichList,
  [menuCategoryList[2].titleEng]: saladList,
  [menuCategoryList[3].titleEng]: wrapList,
};
