
import React, { useState, useEffect, useCallback } from "react";
import { FloatButton } from 'components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LINK from 'constants/link';
import { FormStyled, FieldsetStyled, MapWrapperStyled, AddressInputStyled, ResultInputStyled, MapViewerStyled, MainStyled } from './Addr.style';
import useKakaoMap from './hooks';

const Addr = () => {

  /* 리덕스 및 라우터 셋팅 */
  const dispatch = useDispatch(); // 리덕스
  const navigate = useNavigate(); // 라우터

  /* 커스텀 훅 */
  // 카카오맵
  const [ addrValue, subwayPlaces, getGeocode, setSubwayPlaces, setAddrValue ] = useKakaoMap();
  // 지도 팝업창 관련

  // postMessage 
  const HandlePopUp = () => {
    window.open('search', 'addressSearch', "width=380 height=500 left=726 top=306").postMessage('message');
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
    // eslint-disable-next-line
  }, []);

  /* 써브웨이 리스트 관련 */
  const [ isSelectedSubway, setIsSelectedSubway ] = useState(null);// 주문을 위해 선택된 써브웨이 매장정보
  const setMarkerLocation = useCallback((currentPlace) => 
  // 선택된 써브웨이 매장 정보를 저장 및 업데이트
    () => {
      setIsSelectedSubway(currentPlace); // 선택된 써브웨이매장 정보를 저장
      setIsBtnActivated(true); // CTA버튼 활성화
    }, []
  );

  /* CTA 버튼 관련 */
  const [ isBtnActivated, setIsBtnActivated ] = useState(false); // CTA버튼 활성화여부
  const HandleOrderStart = useCallback((e) => {
    e.preventDefault();
    if (!isBtnActivated) return window.alert('배달받으실 주소를 입력하세요.');
    dispatch({
      type : 'cart/generalInfo',
      payload : {
        customerInfo : addrValue,
        subwayInfo : isSelectedSubway
      },
    }); 
    navigate(LINK.MENU); 
    // eslint-disable-next-line
  }, [isBtnActivated, addrValue, isSelectedSubway]); 

  return (
    <MainStyled>
      <FormStyled id="addrsearch-form" onSubmit={HandleOrderStart} >
        <FieldsetStyled>
          <label htmlFor="addrSearch">배송지</label>
          <AddressInputStyled
            type="text" 
            id="addrSearch" 
            name="addrSearch" 
            placeholder="배달 받으실 주소를 입력해주세요" 
            value={addrValue} 
            onClick={HandlePopUp}
            readOnly
          />
        </FieldsetStyled>

        <FieldsetStyled flex>
          <p>주문가능매장</p>
          <MapViewer 
            addrValue={addrValue} 
            subwayPlaces={subwayPlaces} 
            setMarkerLocation={setMarkerLocation} 
          />
        </FieldsetStyled>

        <FloatButton
          type="submit" 
          form="addrsearch-form"
          isBtnActivated={isBtnActivated} 
        >
          주문하기
        </FloatButton>

      </FormStyled>
    </MainStyled>
  );
};

const MapViewer = ({ addrValue, subwayPlaces, setMarkerLocation }) => {
  return (
    <MapWrapperStyled padding={addrValue.length === 0 ? true : false}>
      <MapViewerStyled 
        id="map" 
        isHidden={addrValue.length === 0 ? true : false}
      ></MapViewerStyled>
      {
        addrValue.length === 0
        ? <p>주문 가능한 주변 매장을 알려드립니다.</p>
        : (
          <ul className="placesList">
          {
            subwayPlaces.map((place) => (
              <li key={place.id}>
                <ResultInputStyled
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
        )
      }
    </MapWrapperStyled>
  );
};

export default Addr;
