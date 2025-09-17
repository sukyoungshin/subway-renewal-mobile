import { asset } from "../utils/assets";

export const defaultProductImageUrl = asset('/assets/noimage.webp');

const menuItem = {
  id: 0,
  nameKor: '',
  nameEng: '',
  imgPath: '',
  description: '',
  price: '',
};

export const defaultBreadList = [{ ...menuItem }];
export const defaultMenuList = [{ ...menuItem }];
