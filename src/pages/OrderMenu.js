import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BASEURL } from '../common/Datas';
import { MenuWrapper, MenuSection, MenuCard, OrderButtonWrapper } from '../common/Styled';
import { RiDeleteBinLine } from "react-icons/ri";

const OrderMenu = () => {
  /* 리덕스 및 라우터 */
  const state = useSelector(state => state.cart);
  console.log('???', state);
 

  return (
    <MenuWrapper>
      <MenuSection style={{ marginTop: '32px' }}>
        <h2>주문메뉴</h2>

        <MenuCard>
          <article className="card-img">
            <img 
              src={`${BASEURL}${state.category.imgSrc}`} 
              alt={state.category.nameKor}
            />
          </article>
          <article className="card-content">
            <h2>
              {state.category.nameKor}
              <span>{state.category.price} krw</span>
            </h2>
            <p>
              {/* 빵 이름 */}
              {state.bread.currentMenu.nameKor}, 
              {/* 빵 사이즈 */}
              {
                state.bread.breadOptions.map((opt) => (
                  opt.nameKor + (opt.bool)
                ))
              }
              {/* 치즈 */}
              {state.cheese.nameKor}
              {/* 소스 */}
              {state.sauce.nameKor}
            </p>
            <OrderButtonWrapper>
              <div className="button-wrapper">
                <button type="button">
                  -
                </button>
                <span>
                  1
                </span>  
                <button type="button">
                  +
                </button>
              </div>
              <button 
                type="button"
                className='menu-delete'
              >
                <RiDeleteBinLine />
              </button>
            </OrderButtonWrapper>
          </article>
        </MenuCard>

      </MenuSection>

    </MenuWrapper>
  );
};

export default OrderMenu;