import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MenuCategories, TabContents, BASEURL } from '../common/Datas';
import { BsCart2 } from "react-icons/bs";
import { MenuWrapper, MenuSection, OrderIconButton, CategoryBtn, MenuListGrid, MenuArticle, FloatBtn } from '../common/Styled';

const Menu = () => {
  // 리덕스 : dispatch 를 함수에서 사용
  const dispatch = useDispatch(); 
  // 라우터
  const navigate = useNavigate();

  // 카테고리 선택 관련
  const [ categoryId, setCategoryId ] = useState(0); // 선택된 카테고리 인덱스#
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
  const [ isBtnActivated, setIsBtnActivated ] = useState(false); // 하단 메뉴선택버튼 활성화 여부
  const [ currentMenu, setCurrentMenu ] = useState(null); // 현재 선택완료된 메뉴를 저장한다

  // 최종적으로 선택한 메뉴
  useEffect(() => {
    setCurrentMenu(currentSelectedMenuItems[menuId]); // 고객이 최종적으로 선택한 메뉴
  }, [currentSelectedMenuItems, menuId]);

  // 아이템선택 완료버튼
  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    // 리덕스 store로 고객 주소지 전달
    dispatch({
      type : 'cart/category',
      payload : currentMenu,
    }); 
    navigate('/bread'); 
  });

  return (
    <MenuWrapper>
      <MenuSection style={{ marginTop: '32px' }}>
        <h2>카테고리</h2>
        <article>
          <ul>
            {
              MenuCategories
                .map((category) => (
                  <li key={category.id}>
                    <CategoryBtn 
                      type="button"
                      isBtnSelected={category.id === categoryId}
                      onClick={handleButtonActive(category.id, category.titleEng)}
                    >
                      <img src={`${BASEURL}${category.imgSrc}`} alt={category.title} />
                      <span>{category.title}</span>
                    </CategoryBtn>
                  </li>
              ))
            }
          </ul>
        </article>
      </MenuSection>
      <MenuSection style={{ marginTop: '16px' }}>
        <h2>메뉴선택</h2>
        <MenuListGrid>
          {
            currentSelectedMenuItems
            .map((menu) => (
              <MenuArticle 
                key={menu.id}
                isMenuSelected={menuId === menu.id} 
              >
                <OrderIconButton 
                  isMenuSelected={menuId === menu.id} 
                  onClick={handleOrderMenu(menu.id)}
                >
                  <BsCart2 />
                </OrderIconButton>
                <div className="menu-name-wrapper">
                  <h3 className="menu-name-kor">{menu.nameKor}</h3>
                  <p className='menu-name-eng'>{menu.nameEng}</p>
                </div>
                <div className="menu-img-wrapper">
                  <img src={`${BASEURL}${menu.imgSrc}`} alt={`${menu.nameKor}`} className="menu-img" />
                  <span className="menu-description">{menu.description}</span>
                </div>
                <p className="menu-price">{menu.price} KRW</p>
              </MenuArticle>
            ))
          }
        </MenuListGrid>
      </MenuSection>

      <FloatBtn 
        type="button" 
        isBtnActivated={isBtnActivated}
        disabled={isBtnActivated ? false : true}
        onClick={handleOrderProcess}
      >
        메뉴 선택 (1 / 7)
      </FloatBtn>
    </MenuWrapper>
  );
};

export default Menu;