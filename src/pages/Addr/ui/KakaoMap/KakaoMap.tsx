import { isEmptyString } from '@/shared/utils/common-utils';
import {
  MapContainer,
  MapViewer,
  Paragraph,
  ResultInput,
  Span,
  Subway,
  SubwaysList,
} from './KakaoMap.style';
interface IKakaoMapProps {
  userAddress: string;
  nearbyPlaces: IPlaceReturnProps[];
  handleMarkerAndButton: () => void;
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
  const isHiddenKakaoMap = isAddressNotProvided || hasErrorMessage ? true : false;
  const wrapperPadding = !userAddress.length || hasErrorMessage ? true : false;

  return (
    <MapContainer>
      {/* 지도 */}
      <MapViewer id="map" isHidden={isHiddenKakaoMap} />

      {/* 주소 입력 안내 메시지 */}
      {isAddressNotProvided && (
        <Paragraph>주소를 입력하면 주변 써브웨이 매장을 찾을 수 있습니다.</Paragraph>
      )}

      {/* 에러 메시지 */}
      {hasErrorMessage && <Paragraph>{errorMessage}</Paragraph>}

      <MapContainer padding={wrapperPadding}>
        {/* 검색된 써브웨이 매장 목록 */}
        {userAddress.length > 0 && !hasErrorMessage && (
          <SubwaysList>
            {nearbyPlaces.map((place) => (
              <Subway key={place.id}>
                <ResultInput
                  type="text"
                  name="placelists"
                  value={place.name}
                  onClick={handleMarkerAndButton}
                  readOnly
                />
                <Span>선택</Span>
              </Subway>
            ))}
          </SubwaysList>
        )}
      </MapContainer>
    </MapContainer>
  );
};

export default KakaoMap;
