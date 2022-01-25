import React from 'react';
import { Carousel } from 'components';
import { MenuRecommended } from 'common/Datas';
import OrderIcon from "assets/icons/order.svg";
import Sample from "assets/sample.png";
import { MainStyled, SectionStyled, ArticleStyled } from './MainScreen.style';

const MainScreen = ({ handleNavAddr }) => {

  return (
    <MainStyled>
      <Carousel />
      <SectionStyled>
        <h2>추천메뉴</h2>
        <ArticleStyled className="imglist">
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
        </ArticleStyled>
      </SectionStyled>
    </MainStyled>
  );
};

export default MainScreen;