import React, { useCallback } from "react";
import { BASEURL } from "config";
import { cheeses } from "mock/food-data";
import { AiOutlinePlus } from "react-icons/ai";
import {
  MainStyled,
  SectionStyled,
  MenuGridStyled,
  ArticleStyled,
  OrderButtonStyled,
  MenuImgSectionStyled,
  MenuNameSectionStyled,
} from "./Cheese.style";
import { FloatButton, ImgSpinner } from "components";
import { useSelectCheese, useCTAbutton } from "./hooks";

const Cheese = () => {
  const { menuId, currentMenu, handleOrderMenu } = useSelectCheese({ cheeses });
  const { isBtnActivated, setIsBtnActivated, handleOrderProcess } =
    useCTAbutton({ currentMenu });
  // eslint-disable-next-line
  const handleOrderSelect = useCallback((id) => () => {
    handleOrderMenu(id);
    setIsBtnActivated(true);
  });

  return (
    <MainStyled>
      <SectionStyled style={{ marginTop: "32px" }}>
        <h2>옵션선택</h2>
        <article>
          <ul className="option-wrapper">{/* 빈 공간 */}</ul>
        </article>
      </SectionStyled>
      <SectionStyled>
        <h2>치즈선택</h2>
        <MenuGridStyled>
          {cheeses.map((cheese) => (
            <ArticleStyled
              key={cheese.id}
              isMenuSelected={menuId === cheese.id}
            >
              <OrderButtonStyled
                isMenuSelected={menuId === cheese.id}
                onClick={handleOrderSelect(cheese.id)}
              >
                <AiOutlinePlus />
              </OrderButtonStyled>
              <MenuNameSectionStyled>
                <h3>{cheese.nameKor}</h3>
                <p>{cheese.nameEng}</p>
              </MenuNameSectionStyled>
              <MenuImgSectionStyled isMenuSelected={menuId === cheese.id}>
                <ImgSpinner
                  src={`${BASEURL}${cheese.imgSrc}`}
                  alt={cheese.nameKor}
                />
                <span>{cheese.description}</span>
              </MenuImgSectionStyled>
              <p className="menu-price">
                {cheese.price ? `${cheese.price}KRW` : null}
              </p>
            </ArticleStyled>
          ))}
        </MenuGridStyled>
      </SectionStyled>

      <FloatButton
        isBtnActivated={isBtnActivated}
        handleOrderProcess={handleOrderProcess}
        label="치즈 선택 (3 / 7)"
      />
    </MainStyled>
  );
};

export default Cheese;
