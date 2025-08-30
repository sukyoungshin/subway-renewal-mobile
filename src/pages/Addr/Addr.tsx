import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { CTAButton } from '@/shared/ui';
import Title from '@/shared/ui/Title';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useKakaoMap } from './hooks';
import KakaoMap from './ui/KakaoMap';

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
    <main className="h-full max-h-[calc(100%-136px)] flex-1 overflow-auto">
      <form id="address-search-form" className="flex h-full flex-col justify-center gap-4 p-4">
        <fieldset className="inline-flex flex-col gap-2 border-[none]">
          <Title>배송지</Title>
          <input
            type="text"
            name="address-search"
            placeholder="배달 받으실 주소를 입력해주세요"
            value={userAddress}
            onClick={handleAddressPopUp}
            className="relative box-border h-12 w-full rounded-lg border border-solid border-grey-light p-3 text-xs text-grey placeholder-grey"
            readOnly
          />
        </fieldset>

        <fieldset className="inline-flex flex-1 flex-col gap-2 border-[none]">
          <Title>주문가능매장</Title>
          <KakaoMap
            userAddress={userAddress}
            nearbyPlaces={nearbySubway}
            handleMarkerAndButton={handleMarkerAndButton}
            errorMessage={errorMessage}
          />
        </fieldset>

        <CTAButton
          formId="addrsearch-form"
          label="주문하기"
          disabled={buttonDisabled}
          handleNextOrder={(e) => {
            saveGeneralInfo();
            handleNextOrder(e);
          }}
        />
      </form>
    </main>
  );
};

export default Addr;
