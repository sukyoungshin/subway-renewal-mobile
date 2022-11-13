import React, { useEffect, useCallback } from "react";
import { Map, CtaButton } from "components";
import {
  Form,
  Fieldset,
  Title,
  AddressInput,
  Label,
  Container,
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
    <Container>
      <Form id="addrsearch-form" onSubmit={HandleOrderStart}>
        <Fieldset>
          <Label htmlFor="addrSearch">배송지</Label>
          <AddressInput
            type="text"
            id="addrSearch"
            name="addrSearch"
            placeholder="배달 받으실 주소를 입력해주세요"
            value={addrValue}
            onClick={HandlePopUp}
            readOnly
          />
        </Fieldset>

        <Fieldset flex>
          <Title>주문가능매장</Title>
          <Map
            addrValue={addrValue}
            subwayPlaces={subwayPlaces}
            handleMarkerAndButton={handleMarkerAndButton}
          />
        </Fieldset>

        <CtaButton
          type="submit"
          form="addrsearch-form"
          isBtnActivated={isBtnActivated}
          label="주문하기"
        />
      </Form>
    </Container>
  );
};

export default Addr;
