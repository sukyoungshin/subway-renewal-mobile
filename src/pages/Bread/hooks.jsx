import LINK from '@/constants/link';
import { breadOptionsDefault, breads } from '@/mock/food-data';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useSelectBreadOption = () => {
  const [breadOptions, setBreadOptions] = useState(breadOptionsDefault); // 선택한 빵 옵션을 저장
  const selectedRadio = useCallback(
    ({ id, nameKor, name, bool, price }) =>
      () => {
        const newBreadOptions = { id, name, nameKor, bool, price }; // 새로 선택된 빵 옵션
        setBreadOptions(breadOptions, newBreadOptions); // 선택한 빵 옵션 저장
      },
    [breadOptions]
  );

  return { breadOptions, selectedRadio };
};

export const useSelectBread = () => {
  const [menuId, setMenuId] = useState(0); // 선택된 메뉴 버튼의 인덱싱#
  const handleOrderMenu = (id) => setMenuId(id);

  // 선택한 빵 및 빵옵션 저장
  const [currentMenu, setCurrentMenu] = useState(null); // 선택한 빵을 저장
  useEffect(() => {
    setCurrentMenu(breads[menuId]); // 최종적으로 선택한 메뉴
  }, [menuId]);

  return { menuId, currentMenu, handleOrderMenu };
};

export const useCTAButton = ({ currentMenu, breadOptions }) => {
  /* 리덕스 및 라우터 셋팅 */
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isBtnActivated, setIsBtnActivated] = useState(false); // CTA버튼 활성화 여부

  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'cart/bread',
      payload: {
        currentMenu, // 선택한 빵
        breadOptions, // 선택한 빵옵션
      },
    });
    navigate(LINK.CHEESE);
  });

  return { isBtnActivated, handleOrderProcess, setIsBtnActivated };
};
