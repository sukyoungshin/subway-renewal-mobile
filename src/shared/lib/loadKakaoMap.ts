/* global kakao */
const KAKAO_MAP_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
const KAKAO_MAP_SCRIPT_ID = 'kakao-map-script';

const loadKakaoMap = (): Promise<typeof kakao> => {
  return new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => resolve(window.kakao));
      return;
    }

    // 스크립트 태그가 이미 존재하면 재사용
    let script = document.getElementById(KAKAO_MAP_SCRIPT_ID) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = KAKAO_MAP_SCRIPT_ID;
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&libraries=services&autoload=false`;
      script.async = true;
      document.head.appendChild(script);
    }

    script.onload = () => {
      window.kakao.maps.load(() => {
        console.log('카카오맵 SDK 로드 완료');
        resolve(window.kakao);
      });
    };

    script.onerror = () => {
      console.log('kakao > ', script);
      reject(new Error('카카오맵 스크립트 로딩에 실패했습니다.'));
    };
  });
};

export default loadKakaoMap;
