import { Container, Text, Section, OrderDetail } from "./OrderDeliver.style";

const OrderDeliver = ({ orderDetail, timeString }) => {
  const { orderMenu, customerAddr, subwayName, subwayPhone, customerRequest } =
    orderDetail;

  return (
    <Container>
      <Text>
        <h2>주문이 완료되었습니다!</h2>
        <p>주문하신 음식이 약 40분 내에 도착할 예정입니다.</p>
      </Text>
      <Section>
        <OrderDetail>
          <li>주문일시 : {timeString}</li>
          <li>주문번호 : B0XK01HG6R</li>
          <li>주문하신 메뉴 : {orderMenu}</li>
          <li>추가 요청사항 : {customerRequest}</li>
          <li>배달받으실 주소 : {customerAddr}</li>
          <li>배달 매장명 : {subwayName}</li>
          <li>배달 매장 연락처: {subwayPhone}</li>
        </OrderDetail>
      </Section>
    </Container>
  );
};

export default OrderDeliver;
