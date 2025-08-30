import { isEmptyString } from '@/shared/utils/common-utils';

interface IKakaoMapProps {
  userAddress: string;
  nearbyPlaces: IPlaceReturnProps[];
  handleMarkerAndButton: (i: number) => void;
  errorMessage?: string;
}
interface IPlaceReturnProps {
  id: number;
  name: string; // 써브웨이 지점명
  distance: string; // 입력받은 주소지부터 근처 써브웨이까지의 거리 (m)
  address: string; // 써브웨이 지점 도로명주소
  phone: string; // 써브웨이 지점 전화번호
  url: string; // 써브웨이 지점 링크
}

const KakaoMap = ({
  userAddress,
  nearbyPlaces,
  handleMarkerAndButton,
  errorMessage,
}: IKakaoMapProps) => {
  // 지도 클래스 및 주소와 관련된 메시지 처리
  const isAddressNotProvided = userAddress.length === 0;
  const hasErrorMessage = !isEmptyString(errorMessage);

  // 지도와 메시지 스타일 분리
  const kakaoMapHidden = isAddressNotProvided || hasErrorMessage ? 'hidden' : 'block';
  const wrapperPadding = !userAddress.length || hasErrorMessage ? 'p-3' : 'p-0';

  return (
    <div
      className={`relative min-h-[500px] w-full rounded-lg border border-solid border-grey-light ${wrapperPadding}`}
    >
      {/* 지도 */}
      <div id="map" className={`min-h-[500px] w-[400px] ${kakaoMapHidden}`} />

      {/* 주소 입력 안내 메시지 */}
      {isAddressNotProvided && (
        <p className="text-grey text-xs font-light">
          주소를 입력하면 주변 써브웨이 매장을 찾을 수 있습니다.
        </p>
      )}

      {/* 에러 메시지 */}
      {hasErrorMessage && <p className="text-grey text-xs font-light">{errorMessage}</p>}

      {/* 검색된 써브웨이 매장 목록 */}
      {userAddress.length > 0 && !hasErrorMessage && (
        <ul className="absolute right-0 top-0 z-10 inline-flex w-full flex-col gap-2 bg-transparent">
          {nearbyPlaces.map((place, i) => (
            <li key={place.id} className="relative w-full">
              <input
                type="text"
                id={`place-${place.id}`}
                value={place.name}
                onClick={() => handleMarkerAndButton(i)}
                className="peer box-border h-10 w-full rounded-lg border border-solid border-grey-light bg-[rgba(255,255,255,0.5)] pl-[22px] text-xs text-black focus:bg-green focus:text-white active:bg-green active:text-white"
                style={{ paddingLeft: '8px'}}
                readOnly
              />
              <label
                htmlFor={`place-${place.id}`}
                className="absolute right-[5%] top-2/4 inline-block -translate-y-2/4 text-xs text-black peer-focus:bg-green peer-focus:text-white"
              >
                선택
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default KakaoMap;
