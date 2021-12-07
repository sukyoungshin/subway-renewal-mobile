/* global kakao */
import React, { useState, useEffect, useRef } from "react";
import { OrderFormWrapper, ContentWrapper, MapViewer, Map, ButtonWrapper, InputContainer, BtnContainer, Button, InputAddress } from '../common/Styled';

const Order = () => {
  const [ addrValue, setAddrValue ] = useState(''); // 고객의 주소지
  const [ position, setPosition ] = useState(''); // 고객의 위치 좌표
  const kakaoMap = useRef(); // KakaoMap 상태관리
  const [ subwayPlaces, setSubwayPlaces ] = useState([]); // 써브웨이 리스트 및 거리를 저장할 배열

  // postMessage
  const HandlePopUp = () => {
    window.open('search', 'addressSearch', "width=380 height=580 left=726 top=306").postMessage('message');
  };

  // Dispatch Event
  useEffect(() => {
    const receiveMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.source.name !== 'addressSearch') return;
      setAddrValue(event.data); // 고객의 주소지 저장
      getGeocode(event.data); // x좌표 y좌표 셋팅
      setSubwayPlaces([]); // 기존값 삭제
    };

    window.addEventListener("message", receiveMessage, false);
  }, []);

  // RepaintMap
  useEffect(() => {
    if (kakaoMap.current === undefined) return;

    const markerPosition  = new kakao.maps.LatLng(position.y, position.x); 
    keywordSearch(); // 키워드검색

    kakaoMap.current.relayout(); 
    kakaoMap.current.setCenter(markerPosition); // 지도 중심을 변경 (고객이 요청한 위치로 좌표값 셋팅)

    setMarker(markerPosition); // 마커 그려줌
  }, [position]);

  // Marker 셋팅
  const setMarker = (LatLng) => {
    const marker = new kakao.maps.Marker({
      position: LatLng
    });
    marker.setMap(kakaoMap.current); // 지도에 마커를 올린다.
    marker.setPosition(LatLng);// 마커를 결과값으로 받은 위치로 옮긴다. 
  };

  // Geocoder init
  const getGeocode = (addrValue) => {
    //주소-좌표 변환 객체를 생성
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(addrValue, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setPosition({
          y : result[0].y, 
          x : result[0].x
        });
      };
    });
  };

  // Keyword Search
  const keywordSearch = () => {
    // 장소 검색 서비스 객체를 생성
    const places = new kakao.maps.services.Places();

    const callback = function(result, status) {

      if (status === kakao.maps.services.Status.OK) {
        for(let i = 0; i < result.length; i++) { // 받아온 주소지 근처의 모든 써브웨이 지점을 불러옴
          const markerPosition  = new kakao.maps.LatLng(result[i].y, result[i].x); 
          setSubwayPlaces( previous => ([
            ...previous, {
            name : result[i].place_name, // (조건에 맞는) 써브웨이 리스트를 저장함
            distance : result[i].distance, // (조건에 맞는) 써브웨이 거리를 저장함
            }]));
          setMarker(markerPosition); 
        };
      };
    };

    // 고객이 입력한 좌표 근처의 '써브웨이' 키워드를 callback 함수를 이용하여 검색한다.
    places.keywordSearch('써브웨이', callback, {
      location: new kakao.maps.LatLng(position.y, position.x),
      radius : 1500,
    });
  };


  // KakaoMap 생성
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    // 지도 생성 및 상태관리
    const map = new kakao.maps.Map(container, options);
    kakaoMap.current = map;
    
  }, []);

  return (
    <>
    
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
              onClick={HandlePopUp}
              readOnly
            />
          </InputContainer>
        </ContentWrapper>

        {/* 지도 출력하는 영역 */}
        <ContentWrapper style={{ flex: 1 }}>
          <p>주문가능매장</p>
          {/* 입력받은 주소값이 있으면 지도 보여주고, 없으면 글귀 보여줌 */}
          {
            addrValue.length !== 0
            ? (
              <MapViewer>
                <Map id="map"></Map>
                <ul className="placesList">
                  {
                    subwayPlaces.map((place, index) => (
                      <li key={index}>
                        <InputAddress
                          type="text" 
                          name="placelists" 
                          value={place.name} 
                          readOnly 
                        />
                        <span>{place.distance}km</span>
                      </li>
                    ))
                  }
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
    </>
  );
};

export default Order;
