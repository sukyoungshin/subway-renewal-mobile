import React from 'react';
import { MenuWrapper, MenuSection, MenuListGrid, MenuArticle, OrderIconButton, FloatBtn } from '../common/Styled';
import { AiOutlinePlus } from "react-icons/ai";

const Bread = () => {
  return (
    <MenuWrapper>
      <MenuSection style={{ marginTop: '32px' }}>
        <h2>옵션선택</h2>
        <article>
          <ul>
            <li>빵 길이</li>
            <li>빵 길이</li>
            <li>빵 길이</li>
            <li>빵 길이</li>
          </ul>
        </article>
      </MenuSection>
      <MenuSection style={{ marginTop: '16px' }}>
        <h2>빵선택</h2>
        <MenuListGrid>


          <MenuArticle>
            <OrderIconButton>
              <AiOutlinePlus />
            </OrderIconButton>
            <div className="menu-name-wrapper">
              <h3 className="menu-name-kor">ㅋ</h3>
              <p className='menu-name-eng'>ㅎ</p>
            </div>
            <div className="menu-img-wrapper">
              <img src="" alt="" className="menu-img" />
              <span className="menu-description">ㅋㅋ</span>
            </div>
            <p className="menu-price">ㅋㅋ KRW</p>
          </MenuArticle>


        </MenuListGrid>
      </MenuSection>

      <FloatBtn 
        type="button" 
      >
        빵 선택 (2 / 7)
      </FloatBtn>

    </MenuWrapper>
  );
};

export default Bread;