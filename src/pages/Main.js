import React, { useState, useRef } from "react";
import Logo from "../assets/splash-logo.png";
import Cart from "../assets/icons/order.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import styled from "styled-components";
import "./Main.css";

const AD_CONTENTS = [
  {
    id: 1,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "나만의 메뉴 첫 주문시, 20% 할인 EVENT",
    eventDate: "2021.08.21~2021.09.01",
  },
  {
    id: 2,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "나만의 메뉴 첫 주문시, 20% 할인 EVENT2",
    eventDate: "2021.08.21~2021.09.01",
  },
  {
    id: 3,
    eventTitle: "신선하고 건강한",
    eventTitle2: "글로벌 NO.1 샌드위치 브랜드",
    eventName: "나만의 메뉴 첫 주문시, 20% 할인 EVENT3",
    eventDate: "2021.08.21~2021.09.01",
  },
];
const CarouselWrapper = styled.div`
  width: 100vw;
  height: 200px;
  position: relative;
  overflow: hidden;
`;
const AdWrapper = styled(CarouselWrapper)`
  padding: 16px;
  background-color: var(--color-green);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;
`;
const TitleWrapper = styled.div`
  h2:first-child {
    color: var(--color-yellow);
  }
  h2:last-child {
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

    font-size: 12px;
    transition: all 0.4s;
  }
`;
const Pagination = styled.ul`
  width: 100%;
  height: 32px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 8px; /* cross-browsing */
  gap: 8px;

  list-style: none;

  position: absolute;
  left: 50%;
  bottom: 0.8rem;
  transform: translateX(-50%);
  z-index: 50;
`;

const PaginationList = styled.li`
  display: block;
  font-size: 1.6rem;
  
  &::before{
    content: '\25CF'; /* filled circle */
    color: var(--color-white);
  };
`;

const Main = () => {
  const [index, setIndex] = useState(0);
  const pageRef = useRef(); // 현재 선택한 캐러셀 페이지네이션
  const HandleCarouselIndex = (e) => {
    const { target } = e;

    console.log(target);
  };

  return (
    <div className="main-wrapper">
      <header>
        <nav>
          <ul className="header-nav-wrapper">
            <li>
              <a href="#" title="">
                <HiMenuAlt1 style={{ width: "32px", height: "32px" }} />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <img
                  src={Logo}
                  alt="logo"
                  style={{ width: "calc(50%)", height: "calc(50%)" }}
                />
              </a>
            </li>
            <li>
              <a href="#" title="" className="cart-btn">
                <img src={Cart} alt="장바구니 아이콘" />
                <span>0</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* 광고 캐러셀 WRAPPER */}
        <CarouselWrapper>
          {/* 캐러셀 페이지네이션 */}
          <Pagination className="ad_pagination">
            {AD_CONTENTS.map((content) => (
              <PaginationList
                key={content.id}
                ref={pageRef}
                onClick={HandleCarouselIndex}
              ></PaginationList>
            ))}
          </Pagination>

          {/* 광고 영역 */}
          {AD_CONTENTS.map((content) => (
            <AdWrapper key={content.id}>
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
    </div>
  );
};

export default Main;
