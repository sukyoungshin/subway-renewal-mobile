/* global kakao */
import React, { useState, useEffect } from "react";
import Header, { BtnContainer, Button, InputContainer } from '../components/Header';
import styled from 'styled-components';
import './Order.css';
import Footer from '../components/Footer';

// STYLE
const OrderFormWrapper = styled.form`
  padding: 16px;
  width: 100vw;
  height: calc(100vh - 56px); 

  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 16px;
  gap: 16px;

  p,
  label {
    font-size: 14px;
    font-weight: bold;
    color: var(--color-black);
  }
`;
const MapViewer = styled.div`
  padding: ${(props) => props.padding? '12px' : '0px' };
  width: 100%;
  height: calc(100%);

  border-radius: 8px;
  background-color: var(--color-light-grey);

  position: relative;

  p {
    font-size: 12px;
    font-weight: normal;
    color: var(--color-grey);
  }
`;
const ContentWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;
`;
const Map = styled.div`
  height: 100%;
  /* display: ${(props) => props.hidden && 'hidden' }; */
`;
const ButtonWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  grid-gap: 16px;
  gap: 16px;
`;

// COMPONENT
const Order = () => {
  const [ addrValue, setAddrValue ] = useState(''); // 고객의 주소지
  const handleAddress = (e) => {
    setAddrValue(e.target.value); // 고객의 주소지 저장
    console.log(addrValue);
  }

  // KAKAO MAP
  useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    // 지도 생성
    const map = new kakao.maps.Map(container, options);

    // MARKER 셋팅
    const markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
    
  }, []);

  return (
    <>
      <Header />
      <OrderFormWrapper>

        {/* 배송지 및 주소검색 input */}
        <ContentWrapper>
          <label htmlFor="addrSearch">배송지</label>
          <InputContainer>
            <input 
              type="text" 
              id="addrSearch" 
              name="addrSearch" 
              placeholder="배달 받으실 주소를 입력해주세요" 
              value={addrValue} 
              onChange={handleAddress}
              // onChange 넣어줘야하고여
            />
          </InputContainer>
        </ContentWrapper>

        {/* 지도 출력하는 영역 */}
        <ContentWrapper style={{ flex: 1 }}>
          <p>주문가능매장</p>
          {/* 입력받은 주소값이 있으면 지도 보여주고, 없으면 글귀 보여줌 */}
          {
            addrValue === ''
            // addrValue.length !== 0
            ? (
              <MapViewer className="addr_wrapper">
                <Map id="map"></Map>
                <ul className="placesList">
                  <li>
                    <input type="text" name="placelists" value="써브웨이 문래점 (배달가능, 픽업가능)" className="placenames" readOnly />
                    <span>1.2km</span>
                  </li>
                  <li>
                    <input type="text" name="placelists" value="써브웨이 문래점 (배달가능, 픽업가능)" className="placenames" readOnly />
                    <span>1.2km</span>
                  </li>
                  <li>
                    <input type="text" name="placelists" value="써브웨이 문래점 (배달가능, 픽업가능)" className="placenames" readOnly />
                    <span>1.2km</span>
                  </li>
                  <li>
                    <input type="text" name="placelists" value="써브웨이 문래점 (배달가능, 픽업가능)" className="placenames" readOnly />
                    <span>1.2km</span>
                  </li>
                </ul>
              </MapViewer>
              )
            : (
              <MapViewer className="addr_wrapper" padding>
                {/* 높이값을 없애서 화면에서 없앰 */}
                <Map id="map" hidden></Map>
                <p>주문 가능한 주변 매장을 알려드립니다.</p>
              </MapViewer>
              )
          }
        </ContentWrapper>

        {/* 버튼 */}
        <ButtonWrapper>
          <BtnContainer>
            <Button type="button" bgColor={'green'} color={'white'}>배달</Button>
          </BtnContainer>
          <BtnContainer>
            <Button type="button" color={'green'}>픽업</Button>
          </BtnContainer>
        </ButtonWrapper>
      </OrderFormWrapper>
      <Footer />
    </>
  );
};

export default Order;
