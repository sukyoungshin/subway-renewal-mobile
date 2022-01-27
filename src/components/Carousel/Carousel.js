import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { CarouselWrapperStyled, AdPaginationStyled, AdPaginationListStyled, AdWrapperStyled, AdTitleWrapperStyled, AdEventWrapperStyled, AdButtonWrapperStyled } from './Carousel.style';
import { AdContents } from 'mock/Datas';
import LINK from 'constants/link';

const Carousel = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(0); // 선택한 페이지네이션 및 캐러셀 index#
  // eslint-disable-next-line
  const [isSelected, setIsSelected] = useState(false); // 페이지네이션 및 캐러셀 스위치
  const handleClick = useCallback((id) => 
    () => {
      setSelectedId(id); // 페이지네이션 인덱스 설정
      setIsSelected((prev) => !prev); // 페이지네이션 스위치
    }, []); 
  const goToOrderPage = () => navigate(LINK.ADDR);

  return (
    <CarouselWrapperStyled>
      <Pagination 
        selectedId={selectedId} 
        handleClick={handleClick} 
      />
      <Content 
        selectedId={selectedId}
        handleClick={handleClick}
        goToOrderPage={goToOrderPage}
      />
    </CarouselWrapperStyled>
  );
};

const Pagination = ({ selectedId, handleClick }) => {
  return (
    <AdPaginationStyled>
      {
        AdContents.map((content) => (
          <AdPaginationListStyled
            key={content.id}
            isSelected={content.id === selectedId}
            onClick={handleClick(content.id)}
          ></AdPaginationListStyled>
        ))
      }
    </AdPaginationStyled>
  );
};

const Content = ({ selectedId, handleClick, goToOrderPage }) => {
  return (
    <>
    {
      AdContents.map((content) => (
        <AdWrapperStyled 
          key={content.id}
          isSelected={content.id === selectedId} 
          onClick={handleClick(content.id)}
        >
          <AdTitleWrapperStyled>
            <h2>{content.eventTitle}</h2>
            <h2>{content.eventTitle2}</h2>
          </AdTitleWrapperStyled>
          <AdEventWrapperStyled>
            <p>{content.eventName}</p>
            <p>{content.eventDate}</p>
          </AdEventWrapperStyled>
          <AdButtonWrapperStyled>
            <button type="button" onClick={goToOrderPage}>
              ORDER NOW
            </button>
          </AdButtonWrapperStyled>
        </AdWrapperStyled>
      ))
    }
    </>
  );
};

export default Carousel;