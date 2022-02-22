import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { MainStyled, SectionStyled } from './OrderConfirm.style';
import { orderSelector } from 'reducers';

const DELIVER = 'deliver';
// Container Component
const OrderConfirm = () => {

  /* 리덕스 */  
  const order = useSelector(orderSelector);
  const orderDetail = {
    orderMenu : order.category.nameKor,
    customerAddr : order.generalInfo.customerInfo,
    subwayName : order.generalInfo.subwayInfo.name,
    subwayAddr : order.generalInfo.subwayInfo.address,
    subwayPhone : order.generalInfo.subwayInfo.phone,
    customerRequest : order.request.customerRequest,
  };

  /* 라우터 */
  const location = useLocation(); 
  const locationState = location.state; 
  
  /* 시간 */
  const today = new Date(); // 오늘 날짜
  const timeString = today.toLocaleString('ko-KR', {
    timeZome : 'Asia/Seoul'
  });

  // 라우터 상태값에 따라 맞는 component 렌더링
  if (locationState === DELIVER) {
    return <OrderDeliver orderDetail={orderDetail} timeString={timeString} />
  } else {
    return <OrderPickUp orderDetail={orderDetail} timeString={timeString} />
  }
};

// Presentational Components
const OrderDeliver = ({ orderDetail, timeString }) => {
  const { orderMenu, customerAddr, subwayName, subwayPhone, customerRequest } = orderDetail;

  return(
    <MainStyled>
      <SectionStyled>
        <h2>주문이 완료되었습니다!</h2>
        <p>
          주문하신 음식이 약 40분 내에 도착할 예정입니다.
        </p>
      </SectionStyled>
      <SectionStyled>
        <ul>
          <li>
            주문일시 : {timeString}
          </li>
          <li>
            주문번호 : B0XK01HG6R
          </li>
          <li>
            주문하신 메뉴 : {orderMenu}
          </li>
          <li>
            추가 요청사항 : {customerRequest}
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
      </SectionStyled>
    </MainStyled>
  )
};

const OrderPickUp = ({ orderDetail, timeString }) => {
  const { orderMenu, subwayName, subwayPhone, subwayAddr, customerRequest } = orderDetail;

  return(
    <MainStyled>
      <SectionStyled>
        <h2>주문이 완료되었습니다!</h2>
        <p>
          픽업을 위해 40분 뒤 매장으로 방문해주세요.
        </p>
      </SectionStyled>
      <SectionStyled>
        <ul>
          <li>
            주문일시 : {timeString}
          </li>
          <li>
            주문번호 : B0XK01HG6R
          </li>
          <li>
            주문하신 메뉴 : {orderMenu}
          </li>
          <li>
            추가 요청사항 : {customerRequest}
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
      </SectionStyled>
    </MainStyled>
  )
};

export default OrderConfirm;