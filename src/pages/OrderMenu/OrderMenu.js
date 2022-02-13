import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { itemAmountSelector, orderSelector, itemCountSelector } from 'reducers';
import { BASEURL } from 'mock/Datas';
import LINK from 'constants/link';
import { RiDeleteBinLine } from "react-icons/ri";
import { MainStyled, SectionStyled, MenuCardStyled, AmountButtonWrapperStyled, FloatButtonWrapperStyled, HalfSizeCTAButtonStyled, ButtonStyled, DeleteButtonStyled } from './OrderMenu.style';
import { ImgSpinner } from 'components';

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
  const goToOrderPage = () => navigate(LINK.INFO);

  return (
    <MainStyled>
      <SectionStyled style={{ marginTop: '32px' }}>
        <h2>주문메뉴</h2>

        <MenuCardStyled>
          <article className="card-img">
            <ImgSpinner 
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
              {order.bread.currentMenu.nameKor}, {' '}
              {
                order.bread.breadOptions.map((opt) => (
                  opt.nameKor + (opt.bool)
                ))
              }, {' '}
              {order.cheese.nameKor}, {' '}
              {order.sauce.nameKor}
            </p>

            <AmountButtonWrapperStyled>
              <div className="button-wrapper">
              
                <ButtonStyled 
                  type="button"
                  onClick={handleDecrement}
                >
                  -
                </ButtonStyled>
                <span>{itemAmount}</span>  
                <ButtonStyled 
                  type="button"
                  onClick={handleIncrement}
                >
                  +
                </ButtonStyled>
              </div>

              <DeleteButtonStyled 
                type="button"

              >
                <RiDeleteBinLine />
              </DeleteButtonStyled>

            </AmountButtonWrapperStyled>
          </article>
        </MenuCardStyled>
      </SectionStyled>

      <SectionStyled style={{ marginTop: '24px'}}>
        <h2>결제정보</h2>
        <p>할인쿠폰</p>
        <p>결제수단</p>
        <p>
          총 금액
          <span>{order.category.price} krw</span>
        </p>
        <p>할인금액</p>
        <p className="total-price">
          총 주문 금액
          <span>{order.category.price} krw</span>
        </p>
      </SectionStyled>

      <CTAButtons
        goToCartPage={goToCartPage} 
        goToOrderPage={goToOrderPage} 
      />
    </MainStyled>
  );
};

const CTAButtons = ({ goToCartPage, goToOrderPage }) => {
  return (
    <FloatButtonWrapperStyled>
      <HalfSizeCTAButtonStyled 
        type="button"
        onClick={goToCartPage}          
      >
        장바구니 담기
      </HalfSizeCTAButtonStyled>
      <HalfSizeCTAButtonStyled 
        type="button"
        onClick={goToOrderPage}          
      >
        주문정보 (1 / 2)
      </HalfSizeCTAButtonStyled>
    </FloatButtonWrapperStyled>
  );
};

export default OrderMenu;