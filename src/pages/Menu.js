import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuWrapper, MenuSection, OrderIconButton, CategoryBtn, MenuListGrid, MenuArticle, FloatBtn } from '../common/Styled';
import { BsCart2 } from "react-icons/bs";
import { MenuCategories, TabContents, BASEURL } from '../common/Datas';

const Menu = () => {

  // 리디렉션 (커스텀 훅으로 만들어서 전체 컴포넌트에 적용해야할 듯)
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state === null) return navigate(-1); // 이전페이지에서 써브웨이 매장 정보가 넘어오지 않았으면 이전 페이지로 강제이동
    console.log('@@order페이지에서 받아온 정보', location.state);
  }, [location.state, navigate]);

  // 카테고리 선택 관련
  const [ categoryId, setCategoryId ] = useState(0); // 선택된 카테고리 인덱스#
  const [ isBtnSelected, setIsSelected ] = useState(false); // 선택된 버튼
  const handleButtonActive = useCallback((id, category) => (
    () => {
      setCategoryId(id); // 선택된 버튼의 인덱싱값 저장
      setIsSelected(prev => !prev); // 선택된 버튼 css변경
      setCategoryTitle(category); // 선택된 카테고리 저장
    }
  ), []);

  // 선택된 카테고리 저장
  const [ CategoryTitle, setCategoryTitle ] = useState(MenuCategories[0].titleEng); // 'Default'
  const currentSelectedMenuItems = TabContents[CategoryTitle];

  // 메뉴선택 관련
  const [ menuId, setMenuId ] = useState(0); //선택된 메뉴 버튼의 인덱싱#
  const [ isMenuSelected, setIsMenuSelected ] = useState(false); // 선택된 버튼 및 wrapper의 색상변경
  const handleOrderMenu = useCallback((id) => (
    () => {
      setMenuId(id);
      setIsMenuSelected(prev => !prev);
      setIsBtnActivated(true); // 하나라도 클릭되면 변화가 있으면 하단 메뉴버튼 활성화
    }
  ), []);
  const [ isBtnActivated, setIsBtnActivated ] = useState(false); // 하단 메뉴선택버튼 활성화 여부

  // 메뉴선택 완료버튼
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    //navigate('/bread',  { state: '선택한 메뉴정보 넘기셈' });
  });

  const [] = useState(); // 선택한 메뉴정보 저장

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
                <img src={`${BASEURL}${menu.imgSrc}`} alt={`${menu.nameKor}`} className="menu-img" />
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