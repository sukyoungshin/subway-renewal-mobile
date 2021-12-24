import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASEURL, cheeses } from '../common/Datas';
import { AiOutlinePlus } from "react-icons/ai";
import { MenuWrapper, MenuSection, MenuListGrid, MenuArticle, OrderIconButton } from '../common/Styled';
import FloatButton from '../components/FloatButton';

const Cheese = () => {
  /* 리덕스 및 라우터 셋팅 */
  const dispatch = useDispatch(); // 리덕스 
  const navigate = useNavigate(); // 라우터 

  /* 아이템선택 관련 */
  const [ menuId, setMenuId ] = useState(0); //선택된 메뉴 버튼의 인덱싱#
  const [ isBtnActivated, setIsBtnActivated ] = useState(false); // CTA버튼 활성화여부
  const [ currentMenu, setCurrentMenu ] = useState(null); // 현재 선택완료된 메뉴를 저장
  const handleOrderMenu = useCallback((id) => (
    () => {
      setMenuId(id);
      setIsBtnActivated(true); // 하나라도 선택된 항목이 있으면 하단 CTA버튼 활성화
    }
  ), []);
  
  // 최종적으로 선택한 메뉴 저장
  useEffect(() => {
    setCurrentMenu(cheeses[menuId]); 
  }, [menuId]);

  /* CTA 버튼 관련 */
  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'cart/cheese',
      payload : currentMenu,
    }); 
    navigate('/veggie'); 
  });

  return (
    <MenuWrapper>
      <MenuSection style={{ marginTop: '32px' }}>
      <h2>옵션선택</h2>
        <article>
          <ul className="option-wrapper">
            {/* 빈 공간 */}
          </ul>
        </article>
      </MenuSection>
      <MenuSection style={{ marginTop: '16px' }}>
        <h2>치즈선택</h2>
        <MenuListGrid>
          {
            cheeses.map((cheese) => (
              <MenuArticle 
                key={cheese.id}
                isMenuSelected={menuId === cheese.id} 
              >
                <OrderIconButton
                  isMenuSelected={menuId === cheese.id} 
                  onClick={handleOrderMenu(cheese.id)}
                >
                  <AiOutlinePlus />
                </OrderIconButton>
                <div className="menu-name-wrapper">
                  <h3 className="menu-name-kor">
                    {cheese.nameKor}
                  </h3>
                  <p className='menu-name-eng'>
                    {cheese.nameEng}
                  </p>
                </div>
                <div className="menu-img-wrapper">
                  <img 
                    src={`${BASEURL}${cheese.imgSrc}`} 
                    alt={cheese.nameKor} 
                    className="menu-img" 
                  />
                  <span className="menu-description">
                    {cheese.description}
                  </span>
                </div>
                <p className="menu-price">
                  {cheese.price ? `${cheese.price}KRW` : null} 
                </p>
            </MenuArticle>
            ))
          }
        </MenuListGrid>
      </MenuSection>

      <FloatButton
        isBtnActivated={isBtnActivated}
        handleOrderProcess={handleOrderProcess}
      >
        치즈 선택 (3 / 7)
      </FloatButton>

    </MenuWrapper>
  );
};

export default Cheese;