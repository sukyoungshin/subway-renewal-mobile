import { ISauceList } from "@/shared/api/mock/food-menu.types";
import { useCallback, useEffect, useState } from "react";

interface IOptionList {
  id: number;
  nameKor: string;
  nameEng: string;
  radioGroup: string;
  defaultChecked: boolean;
}

const NOT_SELECTED_MENU_ID = 0;
const MAX_SELECT_NUMBER = 3;

export const useSelectOptionAndMenu = (
  sauceOptionList: IOptionList[],
  sauceList: ISauceList[]
) => {
  // 옵션선택 관련
  const initialId = sauceOptionList.filter((opt) => opt.defaultChecked)[0].id;
  const [selectedOptionId, setSelectedOptionId] = useState<number>(initialId);

  // 메뉴 선택관련
  const [menuIdArray, setMenuIdArray] = useState<number[]>([]); //선택된 메뉴 버튼의 인덱싱#
  const [currentMenu, setCurrentMenu] = useState<ISauceList[]>(sauceList); // 현재 선택완료된 메뉴를 저장

  const handleOrderMenu = ({ id }: { id: number }) => {
    const array = [...menuIdArray, id];

    if (menuIdArray.includes(id)) {
      const toggleList = array.filter((num) => num !== id);
      const removeDuplicatedList = Array.from(new Set(toggleList));
      const result = removeDuplicatedList
        .filter((menuId) => menuId !== NOT_SELECTED_MENU_ID)
        .slice(0, MAX_SELECT_NUMBER);
      setMenuIdArray(result);
    } else {
      const result = array
        .filter((menuId) => menuId !== NOT_SELECTED_MENU_ID)
        .slice(0, MAX_SELECT_NUMBER);
      setMenuIdArray(result);
    }

    if (id === NOT_SELECTED_MENU_ID) {
      setSelectedOptionId(1);
    } else {
      setSelectedOptionId(0);
    }
  };

  // 옵션선택 radio버튼 핸들러
  const handleSelectedOptionId = useCallback(
    (id: number) => () => {
      if (id !== NOT_SELECTED_MENU_ID) {
        setSelectedOptionId(id);
      }
    },
     
    []
  );

  // 클릭한 index에 맞추어 radio flag 변경 ( 옵션 '선택안함'을 클릭하면 메뉴리스트를 선택안함으로 변경 )
  useEffect(() => {
    if (selectedOptionId === 1) {
      setMenuIdArray([0]);
    }
  }, [selectedOptionId]);

  // 최종적으로 선택한 메뉴 저장
  useEffect(() => {
    const selectedMenuArray = sauceList.filter(({ id }) =>
      menuIdArray.includes(id)
    );
    setCurrentMenu(selectedMenuArray);
  }, [menuIdArray, sauceList]);

  return {
    menuId: menuIdArray,
    currentMenu,
    selectedOptionId,
    handleOrderMenu,
    handleSelectedOptionId,
  };
};
