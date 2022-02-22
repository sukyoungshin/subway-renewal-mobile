import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MenuCategories, TabContents } from 'mock/Datas';
import LINK from 'constants/link';

export const useSelectCategoryAndMenu = () => {
  /* 카테고리 선택 관련 */
  const [ categoryId, setCategoryId ] = useState(0); // 선택된 카테고리 인덱스#
  const [ currentMenu, setCurrentMenu ] = useState(null); // 현재 선택완료된 메뉴를 저장한다
  const [ menuId, setMenuId ] = useState(0); //선택된 메뉴 버튼의 인덱싱#

  // 카테고리 클릭 버튼
  // eslint-disable-next-line
  const handleButtonActive = (id, category) => {
    setCategoryId(id); // 선택된 버튼의 인덱싱값 저장
    setCategoryTitle(category); // 선택된 카테고리 저장
  };

  // 선택된 카테고리 저장
  const [ CategoryTitle, setCategoryTitle ] = useState(MenuCategories[0].titleEng); // 'Default'
  const currentSelectedMenuItems = TabContents[CategoryTitle]; // 리액트에서는 Object를 child를 사용할 수 없기 때문에, Array로 만들어주었다.
  // eslint-disable-next-line
  const handleOrderMenu = (id) => setMenuId(id);

  useEffect(() => {
    setCurrentMenu(currentSelectedMenuItems[menuId]); 
  }, [currentSelectedMenuItems, menuId]);

  return { menuId, categoryId, currentMenu, currentSelectedMenuItems, handleOrderMenu, handleButtonActive };
};


export const useCTAButton = ({ currentMenu }) => {
    /* 리덕스 및 라우터 */
    const dispatch = useDispatch(); // 리덕스 
    const navigate = useNavigate(); // 라우터 

    const [ isBtnActivated, setIsBtnActivated ] = useState(false); // 하단 메뉴선택버튼 활성화 여부
    // eslint-disable-next-line
    const handleOrderProcess = useCallback((e) => {
      e.preventDefault();
      dispatch({
        type : 'cart/category',
        payload : currentMenu,
      }); 
      navigate(LINK.BREAD); 
    });

  return { isBtnActivated, setIsBtnActivated, handleOrderProcess };
};