import { getTodayTime } from '@/shared/utils/common-utils';
import { Container, OrderDetail, Section, Text } from './OrderPickUp.style';

const OrderPickUp = ({ orderDetail }) => {
  const { orderMenu, subwayName, subwayPhone, subwayAddr, customerRequest } = orderDetail;

  return (
    <Container>
      <Text>
        <h2>주문이 완료되었습니다!</h2>
        <p>픽업을 위해 40분 뒤 매장으로 방문해주세요.</p>
      </Text>
      <Section>
        <OrderDetail>
          <li>주문일시 : {getTodayTime()}</li>
          <li>주문번호 : B0XK01HG6R</li>
          <li>주문하신 메뉴 : {orderMenu}</li>
          <li>추가 요청사항 : {customerRequest}</li>
          <li>방문하실 매장명 : {subwayName}</li>
          <li>방문하실 매장 연락처: {subwayPhone}</li>
          <li>방문하실 매장 주소 : {subwayAddr}</li>
        </OrderDetail>
      </Section>
    </Container>
  );
};

export default OrderPickUp;
