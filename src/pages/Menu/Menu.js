import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MenuCategories, TabContents, BASEURL } from 'mock/Datas';
import { BsCart2 } from "react-icons/bs";
import { MainStyled, SectionStyled, OrderButtonStyled, CategoryButtonStyled, MenuListGrid, ArticleStyled, MenuNameSectionStyled, MenuImgSectionStyled } from './Menu.style';
import { FloatButton } from 'components';
import LINK from 'constants/link';

const Menu = () => {
  /* 리덕스 및 라우터 셋팅 */
  const dispatch = useDispatch(); // 리덕스 
  const navigate = useNavigate(); // 라우터 

  /* 카테고리 선택 관련 */
  const [ categoryId, setCategoryId ] = useState(0); // 선택된 카테고리 인덱스#
  // 카테고리 클릭 버튼
  // eslint-disable-next-line
  const handleButtonActive = useCallback((id, category) => (
    () => {
      setCategoryId(id); // 선택된 버튼의 인덱싱값 저장
      setCategoryTitle(category); // 선택된 카테고리 저장
    }
  ), []);

  // 선택된 카테고리 저장
  const [ CategoryTitle, setCategoryTitle ] = useState(MenuCategories[0].titleEng); // 'Default'
  const currentSelectedMenuItems = TabContents[CategoryTitle]; // 리액트에서는 Object를 child를 사용할 수 없기 때문에, Array로 만들어주었다.

  // 아이템선택 관련
  const [ menuId, setMenuId ] = useState(0); //선택된 메뉴 버튼의 인덱싱#
  const handleOrderMenu = useCallback((id) => (
    () => {
      setMenuId(id);
      setIsBtnActivated(true); // 하나라도 클릭되면 변화가 있으면 하단 메뉴버튼 활성화
    }
  ), []);
  const [ currentMenu, setCurrentMenu ] = useState(null); // 현재 선택완료된 메뉴를 저장한다
  
  // 최종적으로 선택한 메뉴저장
  useEffect(() => {
    setCurrentMenu(currentSelectedMenuItems[menuId]); 
  }, [currentSelectedMenuItems, menuId]);
  
  /* CTA 버튼 관련 */
  const [ isBtnActivated, setIsBtnActivated ] = useState(false); // 하단 메뉴선택버튼 활성화 여부
  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type : 'cart/category',
      payload : currentMenu,
    }); 
    navigate(LINK.BREAD); 
  });

  return (
    <MainStyled>
      <SectionStyled style={{ marginTop: '32px' }}>
        <h2>카테고리</h2>
        <article>
          <ul>
            {
              MenuCategories
              .map((category) => (
                <li key={category.id}>
                  <CategoryButtonStyled 
                    type="button"
                    isBtnSelected={category.id === categoryId}
                    onClick={handleButtonActive(category.id, category.titleEng)}
                  >
                    <img 
                      src={`${BASEURL}${category.imgSrc}`} 
                      alt={category.title}
                    />
                    <span>{category.title}</span>
                  </CategoryButtonStyled>
                </li>
              ))
            }
          </ul>
        </article>
      </SectionStyled>
      <SectionStyled style={{ marginTop: '16px' }}>
        <h2>메뉴선택</h2>
        <MenuListGrid>
          {
            currentSelectedMenuItems
            .map((menu) => (
              <ArticleStyled 
                key={menu.id}
                isMenuSelected={menuId === menu.id} 
              >
                <OrderButtonStyled 
                  isMenuSelected={menuId === menu.id} 
                  onClick={handleOrderMenu(menu.id)}
                >
                  <BsCart2 />
                </OrderButtonStyled>
                <MenuNameSectionStyled>
                  <h3>{menu.nameKor}</h3>
                  <p>{menu.nameEng}</p>
                </MenuNameSectionStyled>
                <MenuImgSectionStyled 
                  isMenuSelected={menuId === menu.id}
                >
                  <img 
                    src={`${BASEURL}${menu.imgSrc}`} 
                    alt={menu.nameKor} 
                  />
                  <span>{menu.description}</span>
                </MenuImgSectionStyled>
                <p className="menu-price">{menu.price} KRW</p>
              </ArticleStyled>
            ))
          }
        </MenuListGrid>
      </SectionStyled>

      <FloatButton
        isBtnActivated={isBtnActivated}
        handleOrderProcess={handleOrderProcess}
      >
        메뉴 선택 (1 / 7)
      </FloatButton>

    </MainStyled>
  );
};

export default Menu;