import React from "react";
import { useNavigate } from "react-router-dom";
import OrderIcon from "../assets/icons/order.svg";
import Sample from "../assets/sample.png";
import Carousel from '../components/Carousel';
import { MainArticle, MainSection, MainWrapper } from '../common/Styled';
import { MenuRecommended } from '../common/Datas';
import LINK from '../constants/link';

const Main = () => {
  const navigate = useNavigate(); // 라우터
  const handleNavAddr = () => {
    navigate(`${LINK.ADDR}`);
  };

  return (
      <MainWrapper>
        {/* Main : 광고 캐러셀 WRAPPER */}
        <Carousel />
        {/* MainSection : 추천메뉴 */}
        <MainSection>
          <h2>추천메뉴</h2>
          <MainArticle className="imglist">
            {
              MenuRecommended.map((item) => (
                <div key={item.id}>
                  <img src={Sample} alt="첫번째 샌드위치 이미지" />
                  <h3>{item.menuName}</h3>
                  <p>{item.kcal}kcal</p>
                  <button type="button" onClick={handleNavAddr}>
                    <img src={OrderIcon} alt="주문하기 버튼" />
                  </button>
                </div>
              ))
            }
          </MainArticle>
        </MainSection>
      </MainWrapper>
    );
};

export default Main;
