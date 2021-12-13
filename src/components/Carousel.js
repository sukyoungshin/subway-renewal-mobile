import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { CarouselWrapper, AdPagination, AdPaginationList, AdWrapper, AdTitleWrapper, AdEventWrapper, AdButtonWrapper } from '../common/Styled';
// DATA
import { AdContents } from '../common/Datas';


const Carousel = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(0); // 선택한 페이지네이션 및 캐러셀 index#
    // eslint-disable-next-line
  const [isSelected, setIsSelected] = useState(false); // 페이지네이션 및 캐러셀 스위치
  const handleClick = useCallback((id) => 
  // 커링 : 함수를 실행해서 새로만든 함수를 리턴
    () => {
      setSelectedId(id); // 페이지네이션 인덱스 설정
      setIsSelected((prev) => !prev); // 페이지네이션 스위치
    }, []); 

  return (
    <>
    <CarouselWrapper>
      {/* 캐러셀 페이지네이션 */}
      <AdPagination className="ad_pagination">
        {AdContents.map((content) => (
          <AdPaginationList
            key={content.id}
            isSelected={content.id === selectedId}
            onClick={handleClick(content.id)}
          ></AdPaginationList>
        ))}
      </AdPagination>

      {/* 광고 영역 */}
      {AdContents.map((content) => (
        <AdWrapper 
          key={content.id}
          isSelected={content.id === selectedId} 
          onClick={handleClick(content.id)}
        >
          <AdTitleWrapper>
            <h2>{content.eventTitle}</h2>
            <h2>{content.eventTitle2}</h2>
          </AdTitleWrapper>
          <AdEventWrapper>
            <p>{content.eventName}</p>
            <p>{content.eventDate}</p>
          </AdEventWrapper>
          <AdButtonWrapper>
            <button type="button" onClick={() => navigate('/order')}>
              ORDER NOW
            </button>
          </AdButtonWrapper>
        </AdWrapper>
      ))}
    </CarouselWrapper>
    </>
  );
};

export default Carousel;