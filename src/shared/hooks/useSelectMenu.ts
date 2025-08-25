import {
  IBreadList,
  ICheeseList,
  ISauceOptionList,
} from "@/shared/api/mock/food-menu.types";
import { useEffect, useState } from "react";

export const useSelectMenu = (
  menuList: IBreadList[] | ICheeseList[] | ISauceOptionList[]
) => {
  const [menuId, setMenuId] = useState<number>(0); // 선택된 메뉴 버튼의 인덱싱#
  const [currentMenu, setCurrentMenu] = useState(menuList[0]);

  const handleOrderMenu = (id: number) => {
    setMenuId(id);
  };

  useEffect(() => {
    setCurrentMenu(menuList[menuId]);
  }, [menuList, menuId]);

  return { menuId, currentMenu, handleOrderMenu };
};
