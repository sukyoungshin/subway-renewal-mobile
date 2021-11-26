import React, { useState, useCallback } from 'react';
import styled from "styled-components";

// SAMPLE DATA
const DataContents = [
  {
    id: 0,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "나만의 메뉴 첫 주문시, 20% 할인 EVENT",
    eventDate: "2021.08.21~2021.09.01",
  },
  {
    id: 1,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "나만의 메뉴 첫 주문시, 20% 할인 EVENT2",
    eventDate: "2021.08.21~2021.09.01",
  },
  {
    id: 2,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "나만의 메뉴 첫 주문시, 20% 할인 EVENT3",
    eventDate: "2021.08.21~2021.09.01",
  },
];

// STYLE
const CarouselWrapper = styled.div`
  width: 100vw;
  height: 232px;
  overflow: hidden;
  position: relative;
`;
const Pagination = styled.ul`
  width: 100%;
  height: 32px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 16px; /* cross-browsing */
  gap: 16px;

  list-style: none;

  position: absolute;
  left: 50%;
  bottom: 0.4rem;
  transform: translateX(-50%);
  z-index: 50;
`;
const PaginationList = styled.li`
  width: 12px;
  height: 12px;
  font-size: 1.6rem;
  border-radius: 12px;
  background-color: ${(props) => props.isSelected ? `var(--color-white)` : null};
  border: ${(props) => props.isSelected ? null : `1px solid var(--color-white)`};
`;
const AdWrapper = styled(CarouselWrapper)`
  padding: 16px;
  background-color: var(--color-green);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => props.isSelected ? 5 : null};
`;
const TitleWrapper = styled.div`
  h2:first-child {
    font-size: 20px;
    color: var(--color-yellow);
  }
  h2:last-child {
    font-size: 18px;
    color: var(--color-white);
  }
`;
const EventWrapper = styled.div`
  color: var(--color-white);
  font-size: 14px;
`;
const ButtonWrapper = styled.div`
  button[type="button"] {
    border: none;
    outline: none;

    padding: 8px 16px;
    color: var(--color-white);
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid var(--color-white);

    font-size: 10px;
    transition: all 0.4s;
  }
`;

// COMPONENT
const Carousel = () => {

  const [selectedId, setSelectedId] = useState(0); // 선택한 페이지네이션 및 캐러셀 index#
  const [isSelected, setIsSelected] = useState(false); // 페이지네이션 및 캐러셀 스위치
  const handleClick = useCallback((id) => 
  // 커링 : 함수를 실행해서 새로만든 함수를 리턴
    () => {
      console.log(id);
      setSelectedId(id); // 페이지네이션 인덱스 설정
      setIsSelected((prev) => !prev); // 페이지네이션 스위치
    }, []); 

  return (
    <main>
    <CarouselWrapper>
      {/* 캐러셀 페이지네이션 */}
      <Pagination className="ad_pagination">
        {DataContents.map((content) => (
          <PaginationList
            key={content.id}
            isSelected={content.id === selectedId}// isSelected의 값이랑 내 값이랑 같은 것만 선택
            onClick={handleClick(content.id)}
          ></PaginationList>
        ))}
      </Pagination>

      {/* 광고 영역 */}
      {DataContents.map((content) => (
        <AdWrapper 
          key={content.id}
          isSelected={content.id === selectedId} // isSelected의 값이랑 내 값이랑 같은 것만 선택
          onClick={handleClick(content.id)}
        >
          <TitleWrapper>
            <h2>{content.eventTitle}</h2>
            <h2>{content.eventTitle2}</h2>
          </TitleWrapper>
          <EventWrapper>
            <p>{content.eventName}</p>
            <p>{content.eventDate}</p>
          </EventWrapper>
          <ButtonWrapper>
            <button type="button">ORDER NOW</button>
          </ButtonWrapper>
        </AdWrapper>
      ))}
    </CarouselWrapper>
    </main>
  );
};

export default Carousel;