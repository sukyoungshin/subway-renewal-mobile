import React from "react";
import { orderSelector } from "reducers";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import {
  MainStyled,
  SectionStyled,
  FloatButtonWrapperStyled,
  HalfSizeCTAButtonStyled,
  TextAreaStyled
} from "./OrderDetail.style";
import { useSelector } from "react-redux";
import {
  useConditionAgreement,
  useCTAButtons,
  useCustomerRequest,
  useSelectDeliverOrPickUp
} from "./hooks";

const DELIVER = "deliver";
const PICKUP = "pickup";

const OrderDetail = () => {
  const order = useSelector(orderSelector); // 주문내역 전체
  const { isRadioChecked, handleRadioStatus } = useSelectDeliverOrPickUp();
  const { customerOrderRequest, handleOrderRequest } = useCustomerRequest();
  const { isCheckboxChecked, handleCheckboxStatus } = useConditionAgreement();
  const { isActive, setIsActive, goToPrevPage, goToPaymentPage } =
    useCTAButtons({ isRadioChecked, isCheckboxChecked, customerOrderRequest });

  const handleDelieverOrPickUp = (e) => handleRadioStatus(e.target.id);
  // eslint-disable-next-line
  const handleAgreementAndBtnActivate = (e) => {
    handleCheckboxStatus(e);
    setIsActive((prev) => !prev);
  };

  return (
    <MainStyled>
      <SectionStyled style={{ marginTop: "32px" }}>
        <h2>배송받으실 주소지</h2>
        <article>
          <ul className="addr-wrapper">
            <li>{order.generalInfo.customerInfo}</li>
            <li>고객 이름, 연락처</li>
          </ul>
        </article>
      </SectionStyled>

      <SectionStyled>
        <h2>배송방법</h2>
        <article>
          <ul className="deliver-wrapper">
            <li>
              <input
                type="radio"
                id="deliver"
                value="deliver"
                name="del-or-pickup"
                checked={isRadioChecked === DELIVER}
                onChange={handleDelieverOrPickUp}
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
                onChange={handleDelieverOrPickUp}
              />
              <label htmlFor="pickup">매장에 직접 방문하여 수령</label>
            </li>
          </ul>
        </article>
      </SectionStyled>

      <SectionStyled>
        <h2>
          주문하신 매장
          <span>
            {order.generalInfo.subwayInfo.name}{" "}
            <a
              href={order.generalInfo.subwayInfo.url}
              title={order.generalInfo.subwayInfo.name}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "12px" }}
            >
              (🔗홈페이지)
            </a>
          </span>
        </h2>
      </SectionStyled>

      <SectionStyled>
        <h2>
          매장연락처
          <span className="subway-phone">
            <span>{order.generalInfo.subwayInfo.phone}</span>
            <span>
              <BsFillTelephoneForwardFill />
            </span>
          </span>
        </h2>
      </SectionStyled>

      <SectionStyled>
        <h2>주문 요청사항</h2>
        <TextAreaStyled
          placeholder="매장에 요청사항이 있으시면 여기에 입력해주세요"
          value={customerOrderRequest}
          onChange={handleOrderRequest}
        />
      </SectionStyled>

      <SectionStyled>
        <h2 style={{ display: "none" }}>주문동의</h2>
        <p className="order-agreement">
          <input
            type="checkbox"
            id="agreement"
            value={isCheckboxChecked}
            onChange={handleAgreementAndBtnActivate}
          />
          <label htmlFor="agreement">
            주문 후 제조가 시작되면 주문을 취소할 수 없습니다.
          </label>
        </p>
      </SectionStyled>

      <FloatButton
        isActive={isActive}
        goToPrevPage={goToPrevPage}
        goToPaymentPage={goToPaymentPage}
      />
    </MainStyled>
  );
};

const FloatButton = ({ isActive, goToPrevPage, goToPaymentPage }) => {
  return (
    <FloatButtonWrapperStyled>
      <HalfSizeCTAButtonStyled type="button" onClick={goToPrevPage}>
        이전페이지
      </HalfSizeCTAButtonStyled>
      <HalfSizeCTAButtonStyled
        type="button"
        isActive={isActive}
        onClick={goToPaymentPage}
      >
        결제하기
      </HalfSizeCTAButtonStyled>
    </FloatButtonWrapperStyled>
  );
};

export default OrderDetail;
