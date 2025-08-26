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
  const {
    userAddress,
    nearbySubway,
    getGeocoder,
    setNearbySubway,
    setUserAddress,
    errorMessage,
    switchMapCenterToAddress,
  } = useKakaoMap();
  const { buttonDisabled, setButtonDisabled, handleNextOrder } = useCTAButton(LINK.MENU);
  const handleMarkerAndButton = (index: number) => {
    const selected = nearbySubway[index];

    // 선택한 매장 주소로 지도 이동
    switchMapCenterToAddress(selected.address);
    setButtonDisabled(false);
  };

  const saveGeneralInfo = () => {
    dispatch({
      type: CART_ACTION_TYPE.GENERAL_INFO,
      payload: {
        customerInfo: userAddress,
        subwayInfo: nearbySubway[0],
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

    window.open(
      '/search.html',
      'addressSearch',
      `width=${width},height=${height},left=${left},top=${top}` // 화면정중앙에 위치
    );
  };

  // Dispatch Event
  useEffect(() => {
    const receiveMessage = (event: MessageEvent<string>) => {
      if (event.origin !== window.location.origin) return;
      if ((event.source as Window)?.name !== 'addressSearch') return;

      setUserAddress(event.data); // 고객의 주소지 저장
      getGeocoder(event.data); // x좌표 y좌표 셋팅
      setNearbySubway([]); // 기존값 삭제
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
            value={userAddress}
            onClick={handleAddressPopUp}
            readOnly
          />
        </Fieldset>

        <Fieldset flex>
          <Title>주문가능매장</Title>
          <KakaoMap
            userAddress={userAddress}
            nearbyPlaces={nearbySubway}
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
