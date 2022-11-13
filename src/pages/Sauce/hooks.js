import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sauceOptionLists, sauces } from "mock/Datas";
import LINK from "constants/link";

const OPTION_NOT_SELECTED = 1;
const OPTION_SELECTED = 0;

export const useSelectOptionAndMenu = () => {
  // 옵션선택 관련
  const [isChecked, setIsChecked] = useState(
    sauceOptionLists.filter((opt) => opt.defaultChecked)[0].id
  );

  // 메뉴 선택관련
  const [menuId, setMenuId] = useState(0); //선택된 메뉴 버튼의 인덱싱#
  const [currentMenu, setCurrentMenu] = useState(null); // 현재 선택완료된 메뉴를 저장

  const handleOrderMenu = ({
    id,
    nameKor,
    description,
    imgSrc,
    defaultChecked,
  }) => {
    const currentOrderMenuObj = {
      id,
      nameKor,
      description,
      imgSrc,
      defaultChecked,
    };

    if (currentOrderMenuObj.id === 0) {
      setIsChecked(OPTION_NOT_SELECTED);
    } else {
      setIsChecked(OPTION_SELECTED);
    }

    setMenuId(currentOrderMenuObj.id); // 선택한 리스트 indexing 저장
  };

  // 옵션 '선택안함'을 클릭하면 메뉴리스트를 선택안함으로 변경
  useEffect(() => {
    if (isChecked === 1) {
      setMenuId(0);
    }
  }, [isChecked]);

  // 옵션선택 버튼에 따라, 선택한 아이템 수정
  const selectedRadio = useCallback(
    (id) => (e) => {
      // 옵션 === 리스트 (선택안함)
      if (id !== menuId) {
        setIsChecked(id);
      }
      // eslint-disable-next-line
    },
    []
  );

  // 클릭한 index에 맞추어 radio flag 변경
  useEffect(() => {
    setCurrentMenu(sauces[menuId]); // 최종적으로 선택한 메뉴 저장
  }, [menuId]);

  return { menuId, currentMenu, isChecked, handleOrderMenu, selectedRadio };
};

export const useCTAButton = ({ currentMenu }) => {
  /* 리덕스 및 라우터 */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isBtnActivated, setIsBtnActivated] = useState(false); // CTA버튼 활성화여부

  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: "cart/sauce",
      payload: currentMenu,
    });
    navigate(LINK.ORDER);
  });

  return { isBtnActivated, setIsBtnActivated, handleOrderProcess };
};
