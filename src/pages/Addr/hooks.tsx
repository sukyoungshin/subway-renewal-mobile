/* global kakao */
import loadKakaoMap from '@/shared/lib/loadKakaoMap';
import { useCallback, useEffect, useRef, useState } from 'react';

interface IPlaceReturnProps {
  id: number;
  name: string; // 써브웨이 지점명
  distance: string; // 입력받은 주소지부터 근처 써브웨이까지의 거리 (m)
  address: string; // 써브웨이 지점 도로명주소
  phone: string; // 써브웨이 지점 전화번호
  url: string; // 써브웨이 지점 링크
}
interface IPositionProps {
  x: string;
  y: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IGeocoderResultProps extends IPositionProps {}
interface IKeywordSearchProps extends IPositionProps {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
}
interface IMarkerPositionProps {
  La: number;
  Ma: number;
}
type StatusReturnType = 'OK' | 'ZERO_RESULT' | 'ERROR';

export const useKakaoMap = () => {
  /* 카카오맵, 유저 및 써브웨이 매장정보 관리 */
  const kakaoMap = useRef<kakao.maps.Map | null>(null);
  const [userAddress, setUserAddress] = useState<string>('');
  const [userPosition, setUserPosition] = useState<IPositionProps>({
    y: '',
    x: '',
  });
  const [nearbySubway, setNearbySubway] = useState<IPlaceReturnProps[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // 주소 → 좌표 변환
  const getGeocoder = async (address: string) => {
    const kakao = await loadKakaoMap();
    const geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체를 생성

    const callback = (result: IGeocoderResultProps[], status: StatusReturnType) => {
      if (status === kakao.maps.services.Status.OK) {
        setUserPosition({
          y: result[0].y,
          x: result[0].x,
        });
        setErrorMessage('');
      } else {
        setErrorMessage('주소를 찾을 수 없습니다. 다시 입력해주세요.');
      }
    };

    // 입력받은 주소 정보에 해당하는 좌표값을 요청한다.
    geocoder.addressSearch(address, callback);
  };

  // 지도 중심 이동
  const repaintMap = (markerPosition: IMarkerPositionProps) => {
    if (kakaoMap.current) {
      kakaoMap.current.relayout();
      kakaoMap.current.setCenter(markerPosition); // 지도 중심을 변경
      kakaoMap.current.setDraggable(true); // 마우스 드래그 or 모바일 터치를 이용한 지도이동 가능
      kakaoMap.current.setZoomable(true); // 지도의 마우스 휠 or 모바일 터치를 이용한 확대/축소 기능
    }
  };

  // 마커 생성 (공통)
  const createMarker = (pos: kakao.maps.LatLng) => {
    const marker = new kakao.maps.Marker({ position: pos });
    marker.setMap(kakaoMap.current);
    marker.setPosition(pos);

    return marker;
  };

  // 인포윈도우 생성 (공통)
  const createInfoWindow = (pos: kakao.maps.LatLng, content: string, marker: kakao.maps.Marker) => {
    const infoWindow = new kakao.maps.InfoWindow({
      position: pos,
      content,
    });
    infoWindow.open(kakaoMap.current, marker);
  };

  // 사용자 위치 마커 & 인포윈도우
  const showUserLocation = useCallback(
    (pos: kakao.maps.LatLng) => {
      const marker = createMarker(pos);
      const content = `<div style="text-align:center; white-space:nowrap;">
      <p><strong>내 위치</strong></p>
      <p>${userAddress}</p>
    </div>`;
      createInfoWindow(pos, content, marker);
    },
    [userAddress]
  );

  // 써브웨이 매장 마커
  const showSubwayMarker = useCallback((pos: kakao.maps.LatLng, place: IPlaceReturnProps) => {
    const marker = createMarker(pos);
    const content = `<p><strong>${place.name}</strong></p><p>${place.address}</p>`;
    createInfoWindow(pos, content, marker);
  }, []);

  // 주소로 지도 중심 이동
  const switchMapCenterToAddress = async (address: string) => {
    const kakao = await loadKakaoMap();
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = (result: IGeocoderResultProps[], status: StatusReturnType) => {
      if (status === kakao.maps.services.Status.OK) {
        const pos = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 지도 중심 이동
        kakaoMap.current?.setCenter(pos);

        // 선택된 위치에 마커 추가
        const marker = new kakao.maps.Marker({ position: pos });
        marker.setMap(kakaoMap.current);
      }
    };

    geocoder.addressSearch(address, callback);
  };

  // userPosition 변경될 때마다, 주변 Subway 검색 + 마커 표시
  useEffect(() => {
    const searchNearby = async () => {
      const kakao = await loadKakaoMap();
      if (!kakaoMap.current || !userPosition.x || !userPosition.y) return;

      const center = new kakao.maps.LatLng(userPosition.y, userPosition.x);
      repaintMap(center);

      // 사용자 위치 마커 + InfoWindow
      showUserLocation(center);

      const places = new kakao.maps.services.Places();
      places.keywordSearch(
        '써브웨이',
        (result: IKeywordSearchProps[], status: StatusReturnType) => {
          if (status !== kakao.maps.services.Status.OK) return;

          const transformed = result.map((place) => ({
            id: parseInt(place.id),
            name: place.place_name,
            distance: place.distance,
            address: place.road_address_name,
            phone: place.phone,
            url: place.place_url,
          }));

          setNearbySubway(transformed);

          // Subway 마커
          result.forEach((place, i) => {
            const pos = new kakao.maps.LatLng(place.y, place.x);
            showSubwayMarker(pos, transformed[i]);
          });
        },
        { location: center, radius: 1500 }
      );
    };

    searchNearby();
  }, [showSubwayMarker, showUserLocation, userPosition]);

  // KakaoMap 초기화 (최초 1회)
  useEffect(() => {
    const initMap = async () => {
      try {
        const kakao = await loadKakaoMap();
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;

        const mapOptions = {
          center: new kakao.maps.LatLng(37.3652645, 127.1067686), // 지도의 중심좌표
          draggable: true, // 지도 이동 및 확대/축소 가능
          level: 5, // 지도의 확대레벨
        };

        const map = new kakao.maps.Map(mapContainer, mapOptions);
        kakaoMap.current = map; // 카카오맵을 ref로 지정
      } catch (error) {
        console.error('카카오맵 스크립트 로딩 실패:', error);
      }
    };

    initMap();
  }, []);

  return {
    userAddress,
    nearbySubway,
    getGeocoder,
    setNearbySubway,
    setUserAddress,
    errorMessage,
    switchMapCenterToAddress,
  };
};
