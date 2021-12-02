import React from "react";
import { useNavigate } from "react-router-dom";
import OrderIcon from "../assets/icons/order.svg";
// ICONS
import Sample from "../assets/sample.png";
// COMPONENTS
import Carousel from '../components/Carousel';
// STYLE
import { MainArticle, MainSection, MainWrapper } from '../common/Styled';
// DATA
import { MenuRecommended } from '../common/Datas';


const Main = () => {
  const navigate = useNavigate();

  return (
      <MainWrapper>
        {/* Main : 광고 캐러셀 WRAPPER */}
        <Carousel />
        {/* MainSection : 추천메뉴 */}
        <MainSection>
          <h2>추천메뉴</h2>
          <MainArticle className="imglist">
            {MenuRecommended.map((item) => (
              <div key={item.id}>
                <img src={Sample} alt="첫번째 샌드위치 이미지" />
                <h3>{item.menuName}</h3>
                <p>{item.kcal}kcal</p>
                <button type="button" onClick={() => navigate('/order')}>
                  <img src={OrderIcon} alt="주문하기 버튼" />
                </button>
              </div>
            ))}
          </MainArticle>
        </MainSection>
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
