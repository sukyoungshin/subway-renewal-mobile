import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuWrapper, OrderMenuSection, FloatBtnWrapper, HalfSizeBtn } from '../common/Styled';

const OrderInfo = () => {
  /* 리덕스 및 라우터 */
  
  const navigate = useNavigate();

  /* CTA 버튼 */
  const goToPrevPage = () => {
    console.log('이전페이지로'); // currentMenu가 없어서 에러남
  };
  const goToPaymentPage = () => {
    console.log('결제페이지로')
  };

  return (
    <MenuWrapper>
      <OrderMenuSection style={{ marginTop: '32px' }}>
        <h2>배송받으실 주소지</h2>
        <article>
          <ul className="addr-wrapper">
            <li>어디어디</li>
            <li>이름, 연락처</li>
          </ul>
        </article>
      </OrderMenuSection>

      <OrderMenuSection style={{ marginTop: '32px' }}>
        <h2>배송방법</h2>
        <article>
          <ul className="deliver-wrapper">
            <li>
              <span></span>
              위 주소지로 배달
            </li>
            <li>
              <span></span>
              매장에 직접 방문하여 수령
            </li>
          </ul>
        </article>
      </OrderMenuSection>

      <OrderMenuSection>
        <h2>
          주문하신 매장
          <span>써브웨이 ㅇㅇ점</span>
        </h2>
      </OrderMenuSection>

      <OrderMenuSection>
        <h2>
          매장연락처
          <span> 000-000-0000 </span>
        </h2>
      </OrderMenuSection>

      <OrderMenuSection>
        <h2>주문 요청사항</h2>
        <textarea 
          value="매장에 요청사항이 있으시면 여기에 입력해주세요." 
        />
      </OrderMenuSection>

      <OrderMenuSection style={{ marginTop: '32px' }}>
        <h2 style={{ display: 'none' }}>
          주문동의
        </h2>
        <p>
          <span>
            z
          </span>
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