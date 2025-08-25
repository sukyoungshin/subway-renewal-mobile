interface ICommonMenuList {
  id: number;
  nameKor: string;
  nameEng: string;
}

export interface IBreadList extends ICommonMenuList {
  imgPath: string;
  description: string;
  price: string;
}

export interface ICheeseList extends ICommonMenuList {
  imgPath: string;
  description: string;
}

export interface ISauceList extends ICommonMenuList {
  description: string;
  imgPath: string;
}

interface ICommonOptionList {
  id: number;
  nameKor: string;
  nameEng: string;
}

export interface ISauceOptionList extends ICommonOptionList {
  radioGroup: string;
  defaultChecked: boolean;
}

export interface ICategoryMenuDetail extends ICommonMenuList {
  imgPath: string;
  kcal: number;
  description: string;
  price: string;
  amount: number;
}