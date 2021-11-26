import React from "react";
import { useNavigate } from "react-router-dom";
// ICONS
import Sample from "../assets/sample.png";
import OrderIcon from "../assets/icons/order.svg";
// COMPONENTS
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
// STYLE
import styled from 'styled-components';

// STYLE
const MainWrapper = styled.div`
  width: 100vw;
`;
const Section = styled.section`
  margin-bottom: 56px;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  h2{
  margin: 32px 0 24px 0;
  text-align: center;
  color: var(--color-black);
  font-size: 20px;
  }
`;
const Article = styled.article`
  width: 270px;
  height: fit-content;

  display:flex;
  flex-direction: column;
  text-align: center;
  grid-gap: 32px;
  gap: 32px;

  div{
    padding: 16px;
    width: 270px;
    height: 240px; 

    display:inline-block;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.1);
    position: relative;
    box-sizing: border-box;
  }
  div > img {
    width: 235px;
    height: 135px;
  }
  h3{
    margin-top: 10px;
    margin-bottom: 11px;
    color: var(--color-black);
    font-size: 14px;
  }
  p{
    font-size: 14px;
    color: var(--color-grey);
  }
  button[type="button"] {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 0;

    width: fit-content;
    height: 48px;

    position: absolute; 
    left: 50%; 
    bottom: 0; 
    transform: translate(-50%, 50%); 
  }
`;

// COMPONENT
const Main = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      {/* Header : 모달팝업, 로그인팝업, 헤더 */}
      <Header />

      {/* Main : 광고 캐러셀 WRAPPER */}
      <Carousel />

      {/* Section : 추천메뉴 */}
      <Section>
        <h2>추천메뉴</h2>
        <Article className="imglist">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index}>
              <img src={Sample} alt="첫번째 샌드위치 이미지" />
              <h3>다이어터를 위한</h3>
              <p>245kcal</p>
              <button type="button" onClick={() => navigate('/order')}>
                <img src={OrderIcon} alt="주문하기 버튼" />
              </button>
            </div>
          ))}
        </Article>
      </Section>

      {/* Footer : 푸터 */}
      <Footer />

    </MainWrapper>
  );
};

export default Main;

// styled-components
// https://styled-components.com/docs/basics#adapting-based-on-props


// 커링 currying
// 커링은 f(a, b, c)처럼 단일 호출로 처리하는 함수를 f(a)(b)(c)와 같이 각각의 인수가 호출 가능한 프로세스로 호출된 후 병합되도록 변환하는 것입니다.
// 📌 Hof커링, 고차함수 (Higher-Order Functions)
// https://eloquentjavascript.net/05_higher_order.html
// https://joeun.dev/functional-js-study-1
// https://velog.io/@kwonh/ES6-%EA%B3%A0%EC%B0%A8%ED%95%A8%EC%88%98-%EC%BB%A4%EB%A7%81-%EB%B6%80%EB%B6%84%EC%A0%81%EC%9A%A9%ED%95%A8%EC%88%98
