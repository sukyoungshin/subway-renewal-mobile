import { orderSelector } from '@/features/cart/model/selector';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import {
  useConditionAgreement,
  useCTAButtons,
  useCustomerRequest,
  useSelectDeliverOrPickUp,
} from './hooks';
import { Button, ButtonWrapper, Container, Section, TextArea, Title } from './OrderInfo.style';

const DELIVER = 'deliver';
const PICKUP = 'pickup';

const OrderInfo = () => {
  const order = useSelector(orderSelector); // 주문내역 전체
  const { isRadioChecked, handleRadioStatus } = useSelectDeliverOrPickUp();
  const { customerOrderRequest, handleOrderRequest } = useCustomerRequest();
  const { isCheckboxChecked, handleCheckboxStatus } = useConditionAgreement();
  const { isActive, setIsActive, goToPrevPage, goToPaymentPage } = useCTAButtons({
    isRadioChecked,
    isCheckboxChecked,
    customerOrderRequest,
  });

  const handleDeliverOrPickUp = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleRadioStatus(e.target.id);
  const handleAgreementAndBtnActivate = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCheckboxStatus(e);
    setIsActive((prev) => !prev);
  };

  return (
    <Container>
      <Section style={{ marginTop: '32px' }}>
        <Title>배송받으실 주소지</Title>
        <article>
          <ul className="addr-wrapper">
            <li>{order.generalInfo?.customerInfo}</li>
            <li>고객 이름, 연락처</li>
          </ul>
        </article>
      </Section>

      <Section>
        <Title>배송방법</Title>
        <article>
          <ul className="deliver-wrapper">
            <li>
              <input
                type="radio"
                id="deliver"
                value="deliver"
                name="del-or-pickup"
                checked={isRadioChecked === DELIVER}
                onChange={handleDeliverOrPickUp}
              />
              <label htmlFor="deliver">고객님의 주소지로 배달</label>
            </li>
            <li>
              <input
                type="radio"
                id="pickup"
                value="pickup"
                name="del-or-pickup"
                checked={isRadioChecked === PICKUP}
                onChange={handleDeliverOrPickUp}
              />
              <label htmlFor="pickup">매장에 직접 방문하여 수령</label>
            </li>
          </ul>
        </article>
      </Section>

      <Section>
        <Title>
          주문하신 매장
          <span>
            {order.generalInfo?.subwayInfo.name}{' '}
            <a
              href={order.generalInfo?.subwayInfo.url}
              title={order.generalInfo?.subwayInfo.name}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: '12px' }}
            >
              (🔗홈페이지)
            </a>
          </span>
        </Title>
      </Section>

      <Section>
        <Title>
          매장연락처
          <span className="subway-phone">
            <span>{order.generalInfo?.subwayInfo.phone}</span>
            <span>
              <BsFillTelephoneForwardFill />
            </span>
          </span>
        </Title>
      </Section>

      <Section>
        <Title>주문 요청사항</Title>
        <TextArea
          placeholder="매장에 요청사항이 있으시면 여기에 입력해주세요"
          value={customerOrderRequest}
          onChange={handleOrderRequest}
        />
      </Section>

      <Section>
        <Title style={{ display: 'none' }}>주문동의</Title>
        <p className="order-agreement">
          <input
            type="checkbox"
            id="agreement"
            value={isCheckboxChecked}
            onChange={handleAgreementAndBtnActivate}
          />
          <label htmlFor="agreement">주문 후 제조가 시작되면 주문을 취소할 수 없습니다.</label>
        </p>
      </Section>

      <FloatButton
        isActive={isActive}
        goToPrevPage={goToPrevPage}
        goToPaymentPage={goToPaymentPage}
      />
    </Container>
  );
};

interface IFloatButtonProps {
  isActive: boolean,
  goToPrevPage: () => void,
  goToPaymentPage: () => void,
}

const FloatButton = ({ isActive, goToPrevPage, goToPaymentPage }: IFloatButtonProps) => {
  return (
    <ButtonWrapper>
      <Button type="button" onClick={goToPrevPage}>
        이전페이지
      </Button>
      <Button type="button" isActive={isActive} onClick={goToPaymentPage}>
        결제하기
      </Button>
    </ButtonWrapper>
  );
};

export default OrderInfo;
