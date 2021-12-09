/* global kakao */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { OrderFormWrapper, ContentWrapper, MapViewer, Map, ButtonWrapper, InputContainer, BtnContainer, Button, InputAddress } from '../common/Styled';

const ButtonOptions = [
  {
    id: 0,
    text: '배달'
  },
  {
    id: 1,
    text: '픽업'
  }
];

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
    kakaoMap.current.setDraggable(true); // 마우스 드래그 or 모바일 터치를 이용한 지도이동 가능
    kakaoMap.current.setZoomable(true); // 지도의 마우스 휠 or 모바일 터치를 이용한 확대/축소 기능하

    setMarker(markerPosition); // 마커 그려줌
    
  }, [position]);

  // Marker를 생성하고 지도에 표시하는 함수
  const setMarker = (LatLng) => {
    // 마커 생성
    const marker = new kakao.maps.Marker({
      position: LatLng
    });
    marker.setMap(kakaoMap.current); // 지도에 마커를 올린다.
    marker.setPosition(LatLng);// 마커를 결과값으로 받은 위치로 옮긴다. 
  };

  // 지도에 올릴 장소명 인포윈도우 생성 및 표시
  const setInfoWindow = (markerPosition, subwaylists, i) => {

    const infowindow = new kakao.maps.InfoWindow({
      map: kakaoMap.current, // 인포윈도우가 표시될 지도
      position: markerPosition, //인포윈도우 표시 위치
      content: subwaylists[i].name, // 인포윈도우 표시될 이름
      removable : true, // 인포윈도우를 닫을 수 있는 x버튼이 표시
    });
    
  };


  // Geocoder init
  const getGeocode = (addrValue) => {
    //주소-좌표 변환 객체를 생성
    const geocoder = new kakao.maps.services.Geocoder();
    // 입력받은 주소지를 토대로, x좌표 y좌표를 받아온다.
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

    // 장소 검색이 완료됐을 때 호출되는 콜백함수
    const callback = function(result, status) {

      let placeNamesArr = []; // 장소이름을 저장할 배열

      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면, 검색목록과 마커를 표시한다.
        for(let i = 0; i < result.length; i++) { // 받아온 주소지 근처의 모든 써브웨이 지점을 불러옴
          const markerPosition  = new kakao.maps.LatLng(result[i].y, result[i].x); 
          setSubwayPlaces( previous => ([
            ...previous, {
              id: i,
              name : result[i].place_name, // (조건에 맞는) 써브웨이 리스트를 저장함
              distance : result[i].distance, // (조건에 맞는) 써브웨이 거리를 저장함
            }]));
          placeNamesArr.push({
            id: i,
            name : result[i].place_name,
            y: result[i].y,
            x: result[i].x,
          });
          setMarker(markerPosition); // 마커를 생성하고 지도에 표시
          setInfoWindow(markerPosition, placeNamesArr, i); // 인포윈도우를 생성하고 지도에 표시
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
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488), // 지도의 중심좌표
      draggable: true, // 지도 이동 및 확대/축소 가능
      level: 3 // 지도의 확대레벨
    };
    // 지도 생성 및 상태관리
    const map = new kakao.maps.Map(container, options);
    kakaoMap.current = map;
  }, []);

  // 주문가능매장 Input

  // 버튼
  const [ selectedBtnId, setSelectedBtnId ] = useState(0); // 선택한 버튼 index#
  const [ isBtnSelected, setIsBtnSelected ] = useState(false); // 버튼 클릭 여부
  const handleBtnSelected = useCallback((id) => 
    () => {
      setSelectedBtnId(id); // 선택한 버튼의 인덱스 저장
      setIsBtnSelected((prev) => !prev); // 버튼 스위치
    }
  );

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
          {
            ButtonOptions.map((option) => (
              <BtnContainer key={option.id}>
                <Button 
                  type="button" 
                  id={option.id}
                  isBtnSelected={option.id === selectedBtnId} 
                  onClick={handleBtnSelected(option.id)} 
                >
                  {option.text}
                </Button>
              </BtnContainer>
            ))
          }
        </ButtonWrapper>
      </OrderFormWrapper>
    </>
  );
};

export default Order;
