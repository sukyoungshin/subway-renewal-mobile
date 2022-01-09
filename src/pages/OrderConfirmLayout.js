import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { MenuWrapper, OrderSection } from '../common/Styled';
import { orderSelector } from '../reducers';

// Container Component
const OrderConfirmLayout = () => {

  /* 리덕스 */  
  const order = useSelector(orderSelector);
  const orderDetail = {
    orderMenu : order.category.nameKor,
    customerAddr : order.generalInfo.customerInfo,
    subwayName : order.generalInfo.subwayInfo.name,
    subwayAddr : order.generalInfo.subwayInfo.address,
    subwayPhone : order.generalInfo.subwayInfo.phone,
  };

  /* 라우터 */
  const location = useLocation(); 
  const locationState = location.state; 

  // 라우터 상태값에 따라 맞는 component 렌더링
  if (locationState === 'deliver') {
    return <OrderDeliver orderDetail={orderDetail} />
  } else {
    return <OrderPickUp orderDetail={orderDetail} />
  }
};

// Presentational Components
const OrderDeliver = ({ orderDetail }) => {
  const { orderMenu, customerAddr, subwayName, subwayPhone } = orderDetail;

  return(
    <MenuWrapper>
      <OrderSection>
        <h2>주문이 완료되었습니다!</h2>
        <p>
          주문하신 음식이 약 40분 내에 도착할 예정입니다.
        </p>
      </OrderSection>
      <OrderSection>
        <ul>
          <li>
            주문일시 : 00월00일 오후 00시 00분
          </li>
          <li>
            주문번호 : B0XK01HG6R
          </li>
          <li>
            주문하신 메뉴 : {orderMenu}
          </li>
          <li>
            배달받으실 주소 : {customerAddr}
          </li>
          <li>
            배달 매장명 : {subwayName}
          </li>
          <li>
            배달 매장 연락처: {subwayPhone}
          </li>
        </ul>
      </OrderSection>
    </MenuWrapper>
  )
};

const OrderPickUp = ({ orderDetail }) => {
  const { orderMenu, subwayName, subwayPhone, subwayAddr } = orderDetail;

  return(
    <MenuWrapper>
      <OrderSection>
        <h2>주문이 완료되었습니다!</h2>
        <p>
          픽업을 위해 40분 뒤 매장으로 방문해주세요.
        </p>
      </OrderSection>
      <OrderSection>
        <ul>
          <li>
            주문일시 : 00월00일 오후 00시 00분
          </li>
          <li>
            주문번호 : B0XK01HG6R
          </li>
          <li>
            주문하신 메뉴 : {orderMenu}
          </li>
          <li>
            방문하실 매장명 : {subwayName} 
          </li>
          <li>
            방문하실 매장 연락처: {subwayPhone}
          </li>
          <li>
            방문하실 매장 주소 : {subwayAddr}
          </li>
        </ul>
      </OrderSection>
    </MenuWrapper>
  )
};

export default OrderConfirmLayout;