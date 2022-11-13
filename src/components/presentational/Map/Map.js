import {
  MapContainer,
  Paragraph,
  ResultInput,
  MapViewer,
  SubwaysList,
  Subway,
  Span
} from "./Map.style";

const Map = ({ addrValue, subwayPlaces, handleMarkerAndButton }) => {
  return (
    <MapContainer padding={addrValue.length === 0 ? true : false}>
      <MapViewer id="map" isHidden={addrValue.length === 0 ? true : false} />
      {addrValue.length === 0 ? (
        <Paragraph>주문 가능한 주변 매장을 알려드립니다.</Paragraph>
      ) : (
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
