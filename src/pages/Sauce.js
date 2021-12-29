import React, { useCallback, useState, useEffect } from 'react';
import { MenuWrapper, MenuSection, MenuListGrid, MenuArticle, OrderIconButton, OptionLists, RadioButton, RadioButtonLabel } from '../common/Styled';
import { AiOutlinePlus } from "react-icons/ai";
import FloatButton from '../components/FloatButton';
import { BASEURL, sauces, sauceOptionLists } from '../common/Datas';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sauce = () => {
  /* 리덕스 및 라우터 셋팅 */
  const dispatch = useDispatch(); // 리덕스 
  const navigate = useNavigate(); // 라우터 

  /* 아이템선택 관련 */
  // 옵션선택 radio버튼 체크상태 flag (Array)
  const [ isChecked, setIsChecked ] = useState(false);
  // 메뉴 선택관련
  const [ menuId, setMenuId ] = useState(0); //선택된 메뉴 버튼의 인덱싱#
  const [ currentMenu, setCurrentMenu ] = useState(null); // 현재 선택완료된 메뉴를 저장
  const [ isBtnActivated, setIsBtnActivated ] = useState(false); // CTA버튼 활성화여부
  const handleOrderMenu = useCallback(({ id, nameKor, description, imgSrc, defaultChecked }) => (
    () => {
      const currentOrderMenuObj = { id, nameKor, description, imgSrc, defaultChecked };
      
      setMenuId(currentOrderMenuObj.id); // 선택한 리스트 indexing 저장
      setIsBtnActivated(true); // 하나라도 선택된 항목이 있으면 하단 CTA버튼 활성화
    }
  ), []);

  useEffect(() => {
    console.log('isChecked', toString.call(isChecked));
  }, [isChecked]);

  // ????
  // 옵션선택 버튼에 따라, 선택한 아이템 수정
  const selectedRadio = useCallback((id) => 
  (e) => {
    const currentTargetRadio = e.target.checked;
    console.log(currentTargetRadio);    
    
  }, []);

  // 클릭한 index에 맞추어 radio flag 변경
  useEffect(() => {
    setCurrentMenu(sauces[menuId]); // 최종적으로 선택한 메뉴 저장
  }, [menuId]);

  /* CTA 버튼 관련 */
  // eslint-disable-next-line
  const handleOrderProcess = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'cart/sauce',
      payload : currentMenu,
    }); 
    // navigate('/extra'); 
  });


  return (
    <MenuWrapper>
      <MenuSection style={{ marginTop: '32px' }}>
        <h2>옵션선택 (다중선택)</h2>
        <article>
          <ul className="option-wrapper">
              {
                sauceOptionLists.map((list) => (
                  <OptionLists 
                    key={list.id} 
                    style={{ 
                      marginLeft : '8px',
                      justifyContent: 'flex-start', 
                      alignItems: 'center',
                      gridGap : '8px',
                      gap: '8px',
                    }}
                  >
                    <RadioButton 
                      type="radio" 
                      id={list.id} 
                      name={list.radioGroup} 
                      defaultChecked={isChecked}
                      onChange={selectedRadio(list.id)} 
                    />
                    <RadioButtonLabel 
                      htmlFor={list.radioGroup}
                    >
                      {list.name}
                    </RadioButtonLabel>
                  </OptionLists>
                ))
              }
          </ul>
        </article>
      </MenuSection>

      <MenuSection style={{ marginTop: '16px' }}>
        <h2>소즈/시즈닝 선택</h2>
        <MenuListGrid>
          {
            sauces.map((sauce) => (
              <MenuArticle 
                key={sauce.id}
                isMenuSelected={menuId === sauce.id} 
              >
                <OrderIconButton
                  isMenuSelected={menuId === sauce.id} 
                  onClick={handleOrderMenu({
                    id : sauce.id,
                    nameKor: sauce.nameKor,
                    description : sauce.description,
                    imgSrc: sauce.imgSrc,
                    defaultChecked : sauce.defaultChecked,
                  })}
                >
                  <AiOutlinePlus />
                </OrderIconButton>
                <div className="menu-name-wrapper">
                  <h3 className="menu-name-kor">
                    {sauce.nameKor}
                  </h3>
                  <p className='menu-name-eng'>
                    {sauce.nameEng}
                  </p>
                </div>
                <div className="menu-img-wrapper">
                  <img 
                    src={`${BASEURL}${sauce.imgSrc}`} 
                    alt={sauce.nameKor} 
                    className="menu-img" 
                  />
                  <span className="menu-description">
                    {sauce.description}
                  </span>
                </div>
                <p className="menu-price">
                  {sauce.price ? `${sauce.price}KRW` : null} 
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
        소스 선택 (5 / 7)
      </FloatButton>

    </MenuWrapper>
  );
};

export default Sauce;