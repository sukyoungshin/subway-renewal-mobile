import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { itemAmountSelector, orderSelector, itemCountSelector } from '../reducers';
import { BASEURL } from '../common/Datas';
import { RiDeleteBinLine } from "react-icons/ri";
import { MenuWrapper, MenuSection, MenuCard, OrderButtonWrapper, FloatBtnWrapper, HalfSizeBtn } from '../common/Styled';
import LINK from '../constants/link';

const OrderMenu = () => {
  /* 리덕스 */
  const order = useSelector(orderSelector); // 주문내역 전체
  const itemCount = useSelector(itemCountSelector); // 장바구니 주문갯수
  const itemAmount = useSelector(itemAmountSelector); // 수량
  const dispatch = useDispatch(); 
  /* 라우터 */
  const navigate = useNavigate(); // 라우터

  /* 수량조절 버튼 */
  const handleIncrement = () => {
    dispatch({
      type : 'cart/increment',
      payload : itemAmount,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type : 'cart/decrement',
      payload : itemAmount,
    });
  };


  /* CTA 버튼 */
  // eslint-disable-next-line
  const goToCartPage = () => {
    dispatch({
      type : 'cart/itemCount',
      payload : itemCount + 1,
    });
  };
  // eslint-disable-next-line
  const goToOrderPage = () => {
    navigate(`${LINK.INFO}`);
  };

  return (
    <MenuWrapper>

      <MenuSection style={{ marginTop: '32px' }}>
        <h2>주문메뉴</h2>

        <MenuCard>
          <article className="card-img">
            <img 
              src={`${BASEURL}${order.category.imgSrc}`} 
              alt={order.category.nameKor}
            />
          </article>
          <article className="card-content">
            <h2>
              {order.category.nameKor}
              <span>{order.category.price} krw</span>
            </h2>
            <p>
              {/* 빵 이름 */}
              {order.bread.currentMenu.nameKor}, 
              {/* 빵 사이즈 */}
              {
                order.bread.breadOptions.map((opt) => (
                  opt.nameKor + (opt.bool)
                ))
              }
              {/* 치즈 */}
              {order.cheese.nameKor}
              {/* 소스 */}
              {order.sauce.nameKor}
            </p>

            <OrderButtonWrapper>
              <div className="button-wrapper">
              
                <button 
                  type="button"
                  onClick={handleDecrement}
                >
                  -
                </button>
              
                <span>
                  {itemAmount}
                </span>  
              
                <button 
                  type="button"
                  onClick={handleIncrement}
                >
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

      <MenuSection style={{ marginTop: '24px'}}>
        <h2>결제정보</h2>
        <p>
          할인쿠폰
        </p>
        <p>
          결제수단

        </p>
        <p>
          총 금액
          <span>{order.category.price} krw</span>
        </p>
        <p>
          할인금액

        </p>
        <p className="total-price">
          총 주문 금액
          <span>{order.category.price} krw</span>
        </p>
      </MenuSection>

      <FloatBtnWrapper>
        <HalfSizeBtn 
          type="button"
          onClick={goToCartPage}          
        >
          장바구니 담기
        </HalfSizeBtn>
        <HalfSizeBtn 
          type="button"
          onClick={goToOrderPage}          
        >
          주문정보 (1 / 2)
        </HalfSizeBtn>
      </FloatBtnWrapper>

    </MenuWrapper>
  );
};

export default OrderMenu;