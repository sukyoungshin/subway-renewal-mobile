import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderSelector } from '../reducers';
import { MenuWrapper, OrderMenuSection, FloatBtnWrapper, HalfSizeBtn } from '../common/Styled';
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const OrderInfo = () => {
  /* 리덕스 */
  const order = useSelector(orderSelector); // 주문내역 전체
  const dispatch = useDispatch(); 

  /* 라우터 */
  const navigate = useNavigate();

  /* 라디오 버튼 관련 */
  const [ isRadioChecked, setIsRadioChecked ] = useState('deliver');

  const handleRadioStatus = (id) => {
    setIsRadioChecked(id);
  };

  /* 고객 요청사항 (textarea) 관련 */
  const [ customerOrderRequest, setCustomerOrderRequest ] = useState('');
  const handleOrderRequest = (e) => {
    setCustomerOrderRequest(e.target.value);
  };
  
  /* 체크박스 관련 */
  const [ isCheckboxChecked, setIsCheckboxChecked ] = useState(false);
  const handleCheckboxStatus = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  /* CTA 버튼 관련 */
  const goToPrevPage = () => {
    console.log('이전페이지로'); // currentMenu가 없어서 에러남
  };
  const goToPaymentPage = () => {
    console.log('결제페이지로', isCheckboxChecked);
    dispatch({
      type: 'cart/additionalRequest',
      payload : {
        customerRequest : customerOrderRequest,
      },
    });

    if (!isCheckboxChecked) return;
    navigate('/confirm', { state : isRadioChecked });
  };

  return (
    <MenuWrapper>
      <OrderMenuSection style={{ marginTop: '32px' }}>
        <h2>배송받으실 주소지</h2>
        <article>
          <ul className="addr-wrapper">
            <li>
              {order.generalInfo.customerInfo}
            </li>
            <li>
              고객 이름, 연락처
            </li>
          </ul>
        </article>
      </OrderMenuSection>

      <OrderMenuSection style={{ marginTop: '16px' }}>
        <h2>배송방법</h2>
        <article>
          <ul className="deliver-wrapper">
            <li>
              <input 
                type="radio" 
                id="deliver" 
                value="deliver" 
                name="del-or-pickup"
                checked={isRadioChecked === 'deliver'}
                onChange={(e) => handleRadioStatus(e.target.id)}
              />
              <label htmlFor="deliver">
                고객님의 주소지로 배달
              </label>
            </li>
            <li>
              <input 
                type="radio" 
                id="pickup" 
                value="pickup" 
                name="del-or-pickup" 
                checked={isRadioChecked === 'pickup'}
                onChange={(e) => handleRadioStatus(e.target.id)}
              />
              <label htmlFor="pickup">
                매장에 직접 방문하여 수령
              </label>
            </li>
          </ul>
        </article>
      </OrderMenuSection>

      <OrderMenuSection>
        <h2>
          주문하신 매장
            <span>
              {order.generalInfo.subwayInfo.name}
              {' '}
              <a 
                href={order.generalInfo.subwayInfo.url} 
                title={order.generalInfo.subwayInfo.name}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize : '12px'}}
              >
                (🔗홈페이지)
              </a>
            </span>
        </h2>
      </OrderMenuSection>

      <OrderMenuSection>
        <h2>
          매장연락처
          <span className='subway-phone'>
            <span>
              {order.generalInfo.subwayInfo.phone}
            </span>
            <span>
              <BsFillTelephoneForwardFill />
            </span>
          </span>
        </h2>
      </OrderMenuSection>

      <OrderMenuSection>
        <h2>주문 요청사항</h2>
        <textarea 
          placeholder="매장에 요청사항이 있으시면 여기에 입력해주세요"
          value={customerOrderRequest}
          onChange={handleOrderRequest}
        />
      </OrderMenuSection>

      <OrderMenuSection style={{ marginTop: '16px' }}>
        <h2 style={{ display: 'none' }}>
          주문동의
        </h2>
        <p className="order-agreement">
          <input 
            type="checkbox" 
            value={isCheckboxChecked}
            onChange={handleCheckboxStatus}
          />
          주문 후 제조가 시작되면 주문을 취소할 수 없습니다.
        </p>
      </OrderMenuSection>

      <FloatBtnWrapper>
        <HalfSizeBtn 
          type="button"
          onClick={goToPrevPage}          
        >
          이전페이지
        </HalfSizeBtn>
        <HalfSizeBtn 
          type="button"
          onClick={goToPaymentPage}          
        >
          결제하기
        </HalfSizeBtn>
      </FloatBtnWrapper>

    </MenuWrapper>
  );
};

export default OrderInfo;