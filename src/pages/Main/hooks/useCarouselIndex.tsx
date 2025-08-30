import { useCallback, useState } from 'react';

export const useCarouselIndex = () => {
  const [selectedId, setSelectedId] = useState(0); // 선택한 페이지네이션 및 캐러셀 index#
  const [, setIsSelected] = useState(false); // 페이지네이션 및 캐러셀 스위치
  const handleClick = useCallback(
    (id: number) => () => {
      setSelectedId(id); // 페이지네이션 인덱스 설정
      setIsSelected((prev) => !prev); // 페이지네이션 스위치
    },
    []
  );

  return { selectedId, handleClick };
};