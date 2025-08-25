function loadKakaoMap() {
  if (window.kakao?.maps) {
    return new Promise((resolve) => window.kakao.maps.load(() => resolve(window.kakao)));
  }

  return new Promise((resolve, reject) => {
    const url =
      `https://dapi.kakao.com/v2/maps/sdk.js` +
      `?appkey=${import.meta.env.VITE_KAKAO_MAP_KEY}` +
      `&libraries=services` +
      `&autoload=false`;

    const s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onload = () => window.kakao.maps.load(() => resolve(window.kakao));
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export default loadKakaoMap;
