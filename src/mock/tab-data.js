import LINK from '@/constants/link';
import { Default, Salads, Sandwiches, Wraps } from './food-data';

/** 왼쪽상단 햄버거메뉴, 네비 카테고리 */
export const NavCategories = [
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
export const MenuCategories = [
  {
    id: 0,
    title: '기본메뉴',
    titleEng: 'Default',
    imgSrc: 'assets/sandwich/italianbmt.webp',
  },
  {
    id: 1,
    title: '샌드위치',
    titleEng: 'Sandwiches',
    imgSrc: 'assets/sandwich/eggmayo.webp',
  },
  {
    id: 2,
    title: '샐러드',
    titleEng: 'Salads',
    imgSrc: 'assets/salad/shrimp.webp',
  },
  {
    id: 3,
    title: '랩기타',
    titleEng: 'Wraps',
    imgSrc: 'assets/wrap/shrimp_egg_grilled_wrap.webp',
  },
];

/** Order페이지, 메뉴 카테고리 탭 */
export const TabContents = {
  [MenuCategories[0].titleEng]: Default,
  [MenuCategories[1].titleEng]: Sandwiches,
  [MenuCategories[2].titleEng]: Salads,
  [MenuCategories[3].titleEng]: Wraps,
};
