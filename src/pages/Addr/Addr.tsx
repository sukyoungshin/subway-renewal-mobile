import { CtaButton } from '@/shared/ui';
import { useCallback, useEffect } from 'react';
import { AddressInput, Container, Fieldset, Form, Label, Title } from './Addr.style';
import { useCTAButton, useKakaoMap, useMarkerLocation } from './hooks';
import Map from './ui/Map/Map';

const Addr = () => {
  const { addrValue, subwayPlaces, getGeocode, setSubwayPlaces, setAddrValue, errorMessage } =
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
    const width = 400;
    const height = 600;
    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;

    // openSearchWindow();
    window.open(
      '/search.html',
      'addressSearch',
      `width=${width},height=${height},left=${left},top=${top}` // 화면정중앙에 위치
    );
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

    window.addEventListener('message', receiveMessage, false);

    return () => window.removeEventListener('message', receiveMessage, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            userAddress={addrValue}
            subwayPlaces={subwayPlaces}
            handleMarkerAndButton={handleMarkerAndButton}
            errorMessage={errorMessage}
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
