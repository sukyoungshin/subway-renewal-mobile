import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { CTAButton } from '@/shared/ui';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddressInput, Container, Fieldset, Form, Label, Title } from './Addr.style';
import { useKakaoMap } from './hooks';
import KakaoMap from './ui/KakaoMap/KakaoMap';

const Addr = () => {
  const dispatch = useDispatch();
  const { addrValue, subwayPlaces, getGeocode, setSubwayPlaces, setAddrValue, errorMessage } =
    useKakaoMap();
  const { buttonDisabled, setButtonDisabled, handleNextOrder } = useCTAButton(LINK.MENU);
  const handleMarkerAndButton = () => {
    setButtonDisabled(false);
  };

  const saveGeneralInfo = () => {
    dispatch({
      type: CART_ACTION_TYPE.GENERAL_INFO,
      payload: {
        customerInfo: addrValue,
        subwayInfo: subwayPlaces[0],
      },
    });
  };

  /* 지도 팝업창 관련 */
  // postMessage
  const handleAddressPopUp = () => {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const receiveMessage = (event: any) => {
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
      <Form id="addrsearch-form">
        <Fieldset>
          <Label htmlFor="addrSearch">배송지</Label>
          <AddressInput
            type="text"
            id="addrSearch"
            name="addrSearch"
            placeholder="배달 받으실 주소를 입력해주세요"
            value={addrValue}
            onClick={handleAddressPopUp}
            readOnly
          />
        </Fieldset>

        <Fieldset flex>
          <Title>주문가능매장</Title>
          <KakaoMap
            userAddress={addrValue}
            nearbyPlaces={subwayPlaces}
            handleMarkerAndButton={handleMarkerAndButton}
            errorMessage={errorMessage}
          />
        </Fieldset>

        <CTAButton
          formId="addrsearch-form"
          label="주문하기"
          disabled={buttonDisabled}
          handleNextOrder={(e) => {
            saveGeneralInfo();
            handleNextOrder(e);
          }}
        />
      </Form>
    </Container>
  );
};

export default Addr;
