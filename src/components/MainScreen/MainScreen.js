import React from 'react';
import { Carousel, ImgSpinner } from 'components';
import { MenuRecommended } from 'mock/Datas';
import OrderIcon from "assets/icons/order.svg";
import Sample from "assets/sample.webp";
import { MainStyled, SectionStyled, ArticleStyled } from './MainScreen.style';

const MainScreen = ({ handleNavAddr }) => {

  return (
    <MainStyled>
      <Carousel />
      <SectionStyled>
        <h2>추천메뉴</h2>
        <ArticleStyled>
          {
            MenuRecommended.map((item) => (
              <div key={item.id}>
                <ImgSpinner src={Sample} alt="첫번째 샌드위치 이미지" />
                <h3>{item.menuName}</h3>
                <p>{item.kcal}kcal</p>
                <button type="button" onClick={handleNavAddr}>
                  <img src={OrderIcon} alt="주문하기 버튼" />
                </button>
              </div>
            ))
          }
        </ArticleStyled>
      </SectionStyled>
    </MainStyled>
  );
};

export default MainScreen;