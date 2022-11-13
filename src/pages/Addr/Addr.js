import React, { useEffect, useCallback } from "react";
import { FloatButton } from "components";
import {
  FormStyled,
  FieldsetStyled,
  MapWrapperStyled,
  AddressInputStyled,
  ResultInputStyled,
  MapViewerStyled,
  MainStyled,
} from "./Addr.style";
import { useMarkerLocation, useCTAButton, useKakaoMap } from "./hooks";

const Addr = () => {
  const { addrValue, subwayPlaces, getGeocode, setSubwayPlaces, setAddrValue } =
    useKakaoMap();
  const { isSelectedSubway, setMarkerLocation } = useMarkerLocation();
  const { isBtnActivated, setIsBtnActivated, HandleOrderStart } = useCTAButton({
    addrValue,
    isSelectedSubway,
  });
  // eslint-disable-next-line
  const handleMarkerAndButton = useCallback((place) => () => {
    setMarkerLocation(place);
    setIsBtnActivated(true);
  });

  /* 지도 팝업창 관련 */
  // postMessage
  const HandlePopUp = () => {
    window
      .open("search", "addressSearch", "width=380 height=500 left=726 top=306")
      .postMessage("message");
  };

  // Dispatch Event
  useEffect(() => {
    const receiveMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.source.name !== "addressSearch") return;

      setAddrValue(event.data); // 고객의 주소지 저장
      getGeocode(event.data); // x좌표 y좌표 셋팅
      setSubwayPlaces([]); // 기존값 삭제
    };

    window.addEventListener("message", receiveMessage, false);
    // eslint-disable-next-line
  }, []);

  return (
    <MainStyled>
      <FormStyled id="addrsearch-form" onSubmit={HandleOrderStart}>
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
            handleMarkerAndButton={handleMarkerAndButton}
          />
        </FieldsetStyled>

        <FloatButton
          type="submit"
          form="addrsearch-form"
          isBtnActivated={isBtnActivated}
          label="주문하기"
        />
      </FormStyled>
    </MainStyled>
  );
};

const MapViewer = ({ addrValue, subwayPlaces, handleMarkerAndButton }) => {
  return (
    <MapWrapperStyled padding={addrValue.length === 0 ? true : false}>
      <MapViewerStyled
        id="map"
        isHidden={addrValue.length === 0 ? true : false}
      ></MapViewerStyled>
      {addrValue.length === 0 ? (
        <p>주문 가능한 주변 매장을 알려드립니다.</p>
      ) : (
        <ul className="placesList">
          {subwayPlaces.map((place) => (
            <li key={place.id}>
              <ResultInputStyled
                type="text"
                name="placelists"
                value={place.name}
                onClick={handleMarkerAndButton(place)}
                readOnly
              />
              <span>선택</span>
            </li>
          ))}
        </ul>
      )}
    </MapWrapperStyled>
  );
};

export default Addr;
