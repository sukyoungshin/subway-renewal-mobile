import React, { useCallback } from "react";
import { MenuCategories } from "mock/tab-data";
import { BASEURL } from "config";
import { BsCart2 } from "react-icons/bs";
import {
  MainStyled,
  SectionStyled,
  OrderButtonStyled,
  CategoryButtonStyled,
  MenuListGrid,
  ArticleStyled,
  MenuNameSectionStyled,
  MenuImgSectionStyled,
} from "./Menu.style";
import { FloatButton, ImgSpinner } from "components";
import { useCTAButton, useSelectCategoryAndMenu } from "./hooks";

const Menu = () => {
  const {
    menuId,
    categoryId,
    currentMenu,
    currentSelectedMenuItems,
    handleOrderMenu,
    handleButtonActive,
  } = useSelectCategoryAndMenu();
  const { isBtnActivated, setIsBtnActivated, handleOrderProcess } =
    useCTAButton({ currentMenu });
  // eslint-disable-next-line
  const handleSelectMenuAndBtnActive = useCallback((id) => () => {
    handleOrderMenu(id);
    setIsBtnActivated(true);
  });

  return (
    <MainStyled>
      <SectionStyled style={{ marginTop: "32px" }}>
        <h2>카테고리</h2>
        <article>
          <ul>
            {MenuCategories.map((category) => (
              <li key={category.id}>
                <CategoryButtonStyled
                  type="button"
                  isBtnSelected={category.id === categoryId}
                  onClick={() =>
                    handleButtonActive(category.id, category.titleEng)
                  }
                >
                  <img
                    src={`${BASEURL}${category.imgSrc}`}
                    alt={category.title}
                  />
                  <span>{category.title}</span>
                </CategoryButtonStyled>
              </li>
            ))}
          </ul>
        </article>
      </SectionStyled>
      <SectionStyled style={{ marginTop: "16px" }}>
        <h2>메뉴선택</h2>
        <MenuListGrid>
          {currentSelectedMenuItems.map((menu) => (
            <ArticleStyled key={menu.id} isMenuSelected={menuId === menu.id}>
              <OrderButtonStyled
                isMenuSelected={menuId === menu.id}
                onClick={handleSelectMenuAndBtnActive(menu.id)}
              >
                <BsCart2 />
              </OrderButtonStyled>
              <MenuNameSectionStyled>
                <h3>{menu.nameKor}</h3>
                <p>{menu.nameEng}</p>
              </MenuNameSectionStyled>
              <MenuImgSectionStyled isMenuSelected={menuId === menu.id}>
                <ImgSpinner
                  src={`${BASEURL}${menu.imgSrc}`}
                  alt={menu.nameKor}
                />
                <span>{menu.description}</span>
              </MenuImgSectionStyled>
              <p className="menu-price">{menu.price} KRW</p>
            </ArticleStyled>
          ))}
        </MenuListGrid>
      </SectionStyled>

      <FloatButton
        isBtnActivated={isBtnActivated}
        handleOrderProcess={handleOrderProcess}
        label="메뉴 선택 (1 / 7)"
      />
    </MainStyled>
  );
};

export default Menu;
