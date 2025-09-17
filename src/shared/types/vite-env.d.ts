// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CDN_URL?: string;
  readonly VITE_KAKAO_MAP_KEY?: string;
  // 필요한 VITE_ 변수들 여기에 추가
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
