import React, { useState } from "react";
import Sample from "../assets/sample.png";
import OrderIcon from "../assets/icons/order.svg";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./Main.css";
import Footer from "../components/Footer";

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
  height: 232px;
  overflow: hidden;
  position: relative;
`;
const AdWrapper = styled(CarouselWrapper)`
  padding: 16px;
  background-color: var(--color-green);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;
  gap: 16px;
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

    font-size: 12px;
    transition: all 0.4s;
  }
`;
const Pagination = styled.ul`
  width: 100%;
  height: 32px;

  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
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
  background-color: ${(props) =>
    props.isSelected ? `var(--color-white)` : null};
  border: ${(props) =>
    props.isSelected ? null : `1px solid var(--color-white)`};
`;

const Main = () => {
  const [isNavOpened, setIsNavOpened] = useState(false); // navbar 클릭
  const handleNavbar = () => setIsNavOpened((prev) => !prev);

  // 🤔
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 선택한 페이지네이션의 index
  const [pageIndex, setPageIndex] = useState(null); // 페이지네이션#
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = (index) => () => {
    console.log(pageIndex);
    setCurrentIndex(index);
    setIsSelected((prev) => !prev);
  }; // 커링 : 함수를 실행해서 새로만든 함수를 리턴

  return (
    <div className="main-wrapper">
      {/* 메뉴바 */}
      {isNavOpened ? <Navbar handleNavbar={handleNavbar} /> : null}
      {/* 헤더 */}
      <Header handleNavbar={handleNavbar} />

      {/* 메인 */}
      <main>
        {/* 광고 캐러셀 WRAPPER */}
        <CarouselWrapper>
          {/* 캐러셀 페이지네이션 */}
          <Pagination className="ad_pagination">
            {AD_CONTENTS.map((content) => (
              <PaginationList
                key={content.id}
                isSelected={isSelected}
                pageIndex={content.id === currentIndex} // 안먹히는 것 같은데... 그리고 의미를 잘 모르겠음
                onClick={handleClick}
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
      {/* 추천메뉴 */}
      <section>
        <h2>추천메뉴</h2>
        <article className="imglist">
          {[1, 2, 3, 4].map((item) => (
            <div>
              <img
                src={Sample}
                alt="첫번째 샌드위치 이미지"
                style={{ width: "235px", height: "135px" }}
              />
              <h3>다이어터를 위한</h3>
              <p>245kcal</p>
              <button type="button">
                <img src={OrderIcon} alt="주문하기 버튼" />
              </button>
            </div>
          ))}
        </article>
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Main;

// styled-components
// https://styled-components.com/docs/basics#adapting-based-on-props
