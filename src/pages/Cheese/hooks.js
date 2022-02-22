import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LINK from 'constants/link';

export const useSelectCheese = ({ cheeses }) => {
  /* 아이템선택 관련 */
  const [ menuId, setMenuId ] = useState(0); //선택된 메뉴 버튼의 인덱싱#
  const [ currentMenu, setCurrentMenu ] = useState(null); // 현재 선택완료된 메뉴를 저장
  const handleOrderMenu = (id) => setMenuId(id);
  
  // 최종적으로 선택한 메뉴 저장
  useEffect(() => {
    setCurrentMenu(cheeses[menuId]); 
    // eslint-disable-next-line
  }, [menuId]);

  return { menuId, currentMenu, handleOrderMenu };
};

export const useCTAbutton = ({ currentMenu }) => {
  /* 리덕스 및 라우터 */
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  const [ isBtnActivated, setIsBtnActivated ] = useState(false); // CTA버튼 활성화여부
  
  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'cart/cheese',
      payload : currentMenu,
    }); 
    navigate(LINK.VEGGIE); 
  });
  
  return { isBtnActivated, setIsBtnActivated, handleOrderProcess };
};

