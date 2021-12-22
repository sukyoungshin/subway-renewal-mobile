import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BASEURL, Breads, breadOptionLists } from '../common/Datas';
import { AiOutlinePlus } from "react-icons/ai";
import { MenuWrapper, MenuSection, MenuListGrid, MenuArticle, OptionLists, OptionList, RadioButton, RadioButtonLabel, OrderIconButton, FloatBtn } from '../common/Styled';

// 빵메뉴 리스트
const Bread = () => {
  // 리덕스 : dispatch 를 함수에서 사용
  const dispatch = useDispatch(); 
  // 라우터
  const navigate = useNavigate();
  // 아이템선택 관련
  const [ menuId, setMenuId ] = useState(0); //선택된 메뉴 버튼의 인덱싱#
  const handleOrderMenu = useCallback((id) => (
    () => {
      setMenuId(id);
      setIsBtnActivated(true); // 하나라도 클릭되면 변화가 있으면 하단 메뉴버튼 활성화
    }
  ), []);
  const [ isBtnActivated, setIsBtnActivated ] = useState(false); // 하단 메뉴선택버튼 활성화 여부
  const [ currentMenu, setCurrentMenu ] = useState(null); // 현재 선택완료된 메뉴를 저장

  const [ breadOptions, setBreadOptions ] = useState([]); // 빵 옵션

  // 아이템선택 완료버튼
  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'cart/bread',
      payload : currentMenu,
    }); // 선택한 빵 스토어에 전달
    // navigate('/',  { state: currentMenu }); // 고객이 최종적으로 선택한 메뉴 정보를 다음페이지로 전달
  });

  // 최종적으로 선택한 메뉴
  useEffect(() => {
    setCurrentMenu(Breads[menuId]); // 고객이 최종적으로 선택한 메뉴
  }, [menuId]);

  // todo : 선택된 빵 옵션 저장
  const selectedInput = useCallback(({name, bool, price}) => (
    () => {
      setBreadOptions({
        name, 
        bool, 
        price
      }); // 선택한 옵션이름 + 선택
    }
  ), []);

  useEffect(() => {
    console.log(breadOptions);
  }, [breadOptions]);

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
                      onChange={selectedInput({
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
                      onChange={selectedInput({
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
            Breads.map((bread) => (
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
                  {bread.price} 
                  KRW
                </p>
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
        빵 선택 (2 / 7)
      </FloatBtn>

    </MenuWrapper>
  );
};

export default Bread;