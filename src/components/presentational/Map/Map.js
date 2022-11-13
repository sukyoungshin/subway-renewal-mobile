import {
  MapContainer,
  ResultInput,
  MapViewer,
  SubwaysList,
  Subway
} from "./Map.style";

const Map = ({ addrValue, subwayPlaces, handleMarkerAndButton }) => {
  return (
    <MapContainer padding={addrValue.length === 0 ? true : false}>
      <MapViewer id="map" isHidden={addrValue.length === 0 ? true : false} />
      {addrValue.length === 0 ? (
        <p>주문 가능한 주변 매장을 알려드립니다.</p>
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
              <span>선택</span>
            </Subway>
          ))}
        </SubwaysList>
      )}
    </MapContainer>
  );
};

export default Map;
