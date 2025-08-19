import { isEmptyString } from '@/utils/common-utils';
import {
  MapContainer,
  MapViewer,
  Paragraph,
  ResultInput,
  Span,
  Subway,
  SubwaysList,
} from './Map.style';

const Map = ({ userAddress, subwayPlaces, handleMarkerAndButton, errorMessage }) => {
  // 지도 클래스 및 주소와 관련된 메시지 처리
  const isAddressNotProvided = userAddress.length === 0;
  const hasErrorMessage = !isEmptyString(errorMessage);

  // 지도와 메시지 스타일 분리
  const isHiddenKakaoMap = isAddressNotProvided || hasErrorMessage ? true : false;
  const wrapperPadding = !userAddress.length || hasErrorMessage ? true : false;

  return (
    <MapContainer padding={wrapperPadding}>
      {/* 지도 */}
      <MapViewer id="map" isHidden={isHiddenKakaoMap} />

      {/* 주소 입력 안내 메시지 */}
      {isAddressNotProvided && (
        <Paragraph>주소를 입력하면 주변 써브웨이 매장을 찾을 수 있습니다.</Paragraph>
      )}

      {/* 에러 메시지 */}
      {hasErrorMessage && <Paragraph>{errorMessage}</Paragraph>}

      {/* 검색된 써브웨이 매장 목록 */}
      {userAddress.length > 0 && !hasErrorMessage && (
        <SubwaysList>
          {subwayPlaces.map((place) => (
            <Subway key={place.id}>
              <ResultInput
                type="text"
                name="placelists"
                value={place.name}
                onClick={handleMarkerAndButton(place)}
                readOnly
              />
              <Span>선택</Span>
            </Subway>
          ))}
        </SubwaysList>
      )}
    </MapContainer>
  );
};

export default Map;
