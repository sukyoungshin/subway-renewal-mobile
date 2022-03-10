import React from 'react';
import { CarouselWrapperStyled, AdPaginationStyled, AdPaginationListStyled, AdWrapperStyled, AdTitleWrapperStyled, AdEventWrapperStyled, ButtonStyled } from './Carousel.style';
import { AdContents } from 'mock/Datas';
import { useCarouselIndex, usePageMove } from './hooks';

const Carousel = () => {
  const { selectedId, handleClick } = useCarouselIndex();
  const goToOrderPage = usePageMove();

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
          <article>
            <ButtonStyled 
              type="button" 
              onClick={goToOrderPage}
            >
              ORDER NOW
            </ButtonStyled>
          </article>
        </AdWrapperStyled>
      ))
    }
    </>
  );
};

export default Carousel;