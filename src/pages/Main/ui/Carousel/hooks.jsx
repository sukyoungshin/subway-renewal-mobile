import LINK from '@/shared/constants/link';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCarouselIndex = () => {
  const [selectedId, setSelectedId] = useState(0); // 선택한 페이지네이션 및 캐러셀 index#
  const [, setIsSelected] = useState(false); // 페이지네이션 및 캐러셀 스위치
  const handleClick = useCallback(
    (id) => () => {
      setSelectedId(id); // 페이지네이션 인덱스 설정
      setIsSelected((prev) => !prev); // 페이지네이션 스위치
    },
    []
  );

  return { selectedId, handleClick };
};

export const usePageMove = () => {
  const navigate = useNavigate();
  const goToOrderPage = () => navigate(LINK.ADDR);
  return goToOrderPage;
};
