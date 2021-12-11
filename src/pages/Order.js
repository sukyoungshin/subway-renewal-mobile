/* global kakao */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { OrderFormWrapper, ContentWrapper, MapViewer, Map, ButtonWrapper, InputContainer, BtnContainer, DeliveryButton, InputAddress } from '../common/Styled';

const Order = () => {
  const [ addrValue, setAddrValue ] = useState(''); // 고객의 주소지
  const [ position, setPosition ] = useState(''); // 고객의 위치 좌표
  const kakaoMap = useRef(); // KakaoMap 상태관리
  const [ subwayPlaces, setSubwayPlaces ] = useState([]); // 써브웨이 리스트 및 거리를 저장할 배열
  const [ isSelectedSubway, setIsSelectedSubway ] = useState(null);// 주문을 위해 선택된 써브웨이 매장정보

  // 버튼
  const navigate = useNavigate();
  const [ isBtnSelected, setIsBtnSelected ] = useState(false); // 주문하기버튼 활성화 여부
  const HandleOrderStart = useCallback(() => {
    navigate('/menu',  { state: isSelectedSubway })
  }); // 선택된 써브웨이 매장정보를 다음페이지(/menu)로 전달

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
  const repaintMap = (markerPosition) => {
    kakaoMap.current.relayout(); 
    kakaoMap.current.setCenter(markerPosition); // 지도 중심을 변경 (고객이 요청한 위치로 좌표값 셋팅)
    kakaoMap.current.setDraggable(true); // 마우스 드래그 or 모바일 터치를 이용한 지도이동 가능
    kakaoMap.current.setZoomable(true); // 지도의 마우스 휠 or 모바일 터치를 이용한 확대/축소 기능
  };

  useEffect(() => {
    if (kakaoMap.current === undefined) return;
    // 마커위치 지정
    const markerPosition  = new kakao.maps.LatLng(position.y, position.x); 
    
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
              name : result[i].place_name, // 써브웨이 지점명
              distance : result[i].distance, // 입력받은 주소지부터 근처 써브웨이까지의 거리 (m)
              address : result[i].road_address_name, // 써브웨이 지점 도로명주소
              phone : result[i].phone, // 써브웨이 지점 전화번호
              url : result[i].place_url, // 써브웨이 지점 링크
            }]));
          placeNamesArr.push({
            id: i,
            name : result[i].place_name,
            distance : result[i].distance,
            address : result[i].road_address_name, 
            phone : result[i].phone, 
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

    keywordSearch(); // 키워드검색
    repaintMap(markerPosition); // 지도 그려줌
    setMarker(markerPosition); // 마커 그려줌

  }, [position]);

  // Marker를 생성하고 지도에 표시하는 함수
  const setMarker = (LatLng) => {
    // 마커 생성
    const marker = new kakao.maps.Marker({ 
      position: LatLng,
      clickable: true, // 클릭 가능한 마커
    }); 
    marker.setMap(kakaoMap.current); // 지도에 마커를 올림
    marker.setPosition(LatLng);// 마커를 결과값으로 받은 위치로 옮김
  };

  // 지도에 올릴 장소명 인포윈도우 생성 및 표시
  const setInfoWindow = (markerPosition, subwaylists, i) => {
    // 인포윈도우 생성
    new kakao.maps.InfoWindow({
      map: kakaoMap.current, // 인포윈도우가 표시될 지도
      position: markerPosition, //인포윈도우 표시 위치
      content: `
        <p><strong>${subwaylists[i].name}</strong></p>
        <p>${subwaylists[i].address}</p>
        <p>연락처 : ${subwaylists[i].phone}</p>
        <p>영업시간 : 매장문의</p>
        <p>거리 : ${subwaylists[i].distance}m</p>
      `, // 인포윈도우에 나타낼 정보
    });
  };

  // 써브웨이 리스트를 클릭하면 선택된 매장 정보를 저장 및 업데이트
  const setMarkerLocation = useCallback((currentPlace) => 
    () => {
      setIsSelectedSubway(currentPlace); // 선택된 써브웨이매장 정보를 저장
      setIsBtnSelected(true); // 주문하기버튼 활성화
    }
  );

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

  // KakaoMap 생성
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488), // 지도의 중심좌표
      draggable: true, // 지도 이동 및 확대/축소 가능
      level: 5 // 지도의 확대레벨
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
                    subwayPlaces.map((place) => (
                      <li key={place.id}>
                        <InputAddress
                          type="text" 
                          name="placelists" 
                          value={place.name} 
                          onClick={setMarkerLocation(place)}
                          readOnly 
                        />
                        <span>선택</span>
                      </li>
                    ))
                  }
                </ul>
              </MapViewer>
              )
            : (
              <MapViewer padding>
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
            <DeliveryButton 
              type="button" 
              isBtnSelected={isBtnSelected}
              onClick={HandleOrderStart} 
            >
              주문시작하기
            </DeliveryButton>
          </BtnContainer>
        </ButtonWrapper>
      </OrderFormWrapper>
    </>
  );
};

export default Order;
