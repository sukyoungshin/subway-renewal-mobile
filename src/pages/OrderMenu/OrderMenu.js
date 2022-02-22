import React from 'react';
import { useSelector } from 'react-redux';
import { itemAmountSelector, orderSelector } from 'reducers';
import { BASEURL } from 'mock/Datas';
import { RiDeleteBinLine } from "react-icons/ri";
import { MainStyled, SectionStyled, MenuCardStyled, AmountButtonWrapperStyled, FloatButtonWrapperStyled, HalfSizeCTAButtonStyled, ButtonStyled, DeleteButtonStyled } from './OrderMenu.style';
import { ImgSpinner } from 'components';
import { useCountAmountOfItems, useCTAButtons } from './hooks';

const OrderMenu = () => {  
  /* 리덕스 */
  const order = useSelector(orderSelector); // 주문내역 전체
  const itemAmount = useSelector(itemAmountSelector); // 수량

  /* 비즈니스 로직 */
  const { handleIncrement, handleDecrement } = useCountAmountOfItems();
  const { goToCartPage, goToOrderPage } = useCTAButtons();

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
          <span>
            {order.category.price} krw
          </span>
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