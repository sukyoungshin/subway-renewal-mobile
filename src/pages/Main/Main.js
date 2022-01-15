import React from "react";
import { useNavigate } from "react-router-dom";
import OrderIcon from "assets/icons/order.svg";
import Sample from "assets/sample.png";
import { Carousel, SplashScreen } from 'components';
import { MainStyled, SectionStyled, ArticleStyled } from './Main.style';
import { MenuRecommended } from 'common/Datas';
import LINK from 'constants/link';
import { useSplashScreen } from './hooks';

const Main = () => {
  /* 라우터 */
  const navigate = useNavigate(); 
  const handleNavAddr = () => {
    navigate(`${LINK.ADDR}`);
  };

  /* 스플래쉬스크린 커스텀훅 */
  const isLoading = useSplashScreen();

  return (
    <>
      {   
        isLoading 
        ? <SplashScreen />
        : <MainScreen handleNavAddr={handleNavAddr} />
      }  
    </>
  );
};

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

export default Main;
