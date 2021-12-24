import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BASEURL, breads, breadOptionLists, breadOptionsDefault } from '../common/Datas';
import { AiOutlinePlus } from "react-icons/ai";
import { MenuWrapper, MenuSection, MenuListGrid, MenuArticle, OptionLists, OptionList, RadioButton, RadioButtonLabel, OrderIconButton } from '../common/Styled';
import FloatButton from '../components/FloatButton';

const Bread = () => {
  /* 리덕스 및 라우터 셋팅 */
  const dispatch = useDispatch(); // 리덕스 
  const navigate = useNavigate(); // 라우터

  /* 아이템선택 관련 */
  const [ menuId, setMenuId ] = useState(0); // 선택된 메뉴 버튼의 인덱싱#
  const [ isBtnActivated, setIsBtnActivated ] = useState(false); // CTA버튼 활성화 여부
  const handleOrderMenu = useCallback((id) => (
    () => {
      setMenuId(id);
      setIsBtnActivated(true); // 하나라도 클릭되면 변화가 있으면 하단 메뉴버튼 활성화
    }
  ), []);

  /* CTA버튼 관련 */
  // 선택한 빵 및 빵옵션 저장
  const [ currentMenu, setCurrentMenu ] = useState(null); // 선택한 빵을 저장
  const [ breadOptions, setBreadOptions ] = useState(breadOptionsDefault); // 선택한 빵 옵션을 저장

  // 최종적으로 선택한 메뉴
  useEffect(() => {
    setCurrentMenu(breads[menuId]);
  }, [menuId]);

  // 선택된 빵 옵션 저장
  const selectedRadio = useCallback(({ id, name, bool, price }) => (
    () => {
      const newBreadOptions = { id, name,  bool, price }; // 새로 선택된 빵 옵션
      setBreadOptions(breadOptions, newBreadOptions); // 선택한 빵 옵션 저장 
    }
  ), [breadOptions]);

  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'cart/bread',
      payload : {
        currentMenu, // 선택한 빵
        breadOptions, // 선택한 빵옵션
      },
    }); 
    navigate('/cheese');
  });

  return (
    <MenuWrapper>
      <MenuSection style={{ marginTop: '32px' }}>
        <h2>옵션선택</h2>
        <article>
          <ul className="option-wrapper">
          {
            breadOptionLists.map((list) => (
              <OptionLists key={list.id} >
                <span>
                  {list.name}
                </span>
                <ul className="option">
                  <OptionList>
                    <RadioButton 
                      type="radio" 
                      id={list.option['option1'].text} 
                      name={list.nameEng} 
                      defaultChecked={list.option['option1'].default}
                      onChange={selectedRadio({
                        id : list.id,
                        name : list.nameEng, 
                        bool : list.option['option1'].default,
                        price : list.option['option1'].price,
                      })}
                    />
                    <RadioButtonLabel 
                      htmlFor={list.option['option1'].text}
                    >
                      {list.option['option1'].text}
                    </RadioButtonLabel>
                  </OptionList>
                  <OptionList>
                    <RadioButton 
                      type="radio" 
                      id={list.option['option2'].text} 
                      name={list.nameEng}
                      defaultChecked={list.option['option2'].default}
                      onChange={selectedRadio({
                        id : list.id,
                        name : list.nameEng, 
                        bool : list.option['option2'].default,
                        price : list.option['option2'].price,
                      })}
                    />
                    <RadioButtonLabel 
                      htmlFor={list.option['option2'].text}
                    >
                      {list.option['option2'].text}
                      {' '}
                      {list.option['option2'].price ? `(${list.option['option2'].price})` : null}
                    </RadioButtonLabel>
                  </OptionList>
                </ul>
              </OptionLists>
            ))
          }
          </ul>
        </article>
      </MenuSection>
      <MenuSection style={{ marginTop: '16px' }}>
        <h2>빵선택</h2>
        <MenuListGrid>
          {
            breads.map((bread) => (
              <MenuArticle 
                key={bread.id}
                isMenuSelected={menuId === bread.id} 
              >
                <OrderIconButton
                  isMenuSelected={menuId === bread.id} 
                  onClick={handleOrderMenu(bread.id)}
                >
                  <AiOutlinePlus />
                </OrderIconButton>
                <div className="menu-name-wrapper">
                  <h3 className="menu-name-kor">
                    {bread.nameKor}
                  </h3>
                  <p className='menu-name-eng'>
                    {bread.nameEng}
                  </p>
                </div>
                <div className="menu-img-wrapper">
                  <img 
                    src={`${BASEURL}${bread.imgSrc}`} 
                    alt={bread.nameKor} 
                    className="menu-img" 
                  />
                  <span className="menu-description">
                    {bread.description}
                  </span>
                </div>
                <p className="menu-price">
                  {bread.price ? `${bread.price}KRW` : null} 
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
        빵 선택 (2 / 7)
      </FloatButton>

    </MenuWrapper>
  );
};

export default Bread;