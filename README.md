# Subway-renewal-mobile

포트폴리오용 써브웨이 웹앱 리뉴얼 프로젝트입니다.

- 인원: 개인프로젝트(1인)
- 역할: 기획·디자인·프론트엔드 개발 전반 담당

## 링크

[Figma 디자인](https://www.figma.com/design/5dXjJo6Bb9yCzm6oKcefEa/%EC%8D%A8%EB%B8%8C%EC%9B%A8%EC%9D%B4-%EA%B0%84%ED%8E%B8%EC%A3%BC%EB%AC%B8%EC%9B%B9--%EB%AA%A8%EB%B0%94%EC%9D%BC-?node-id=0-1&t=T4iO4obpLMsJXUsx-1) · [깃헙레포](https://github.com/sukyoungshin/subway-renewal-mobile/tree/master) · [배포 링크](https://subway-renewal-mobile.netlify.app/)

## 주요 기능

### 최근 작업 (2025.08, 2차 유지보수 및 리펙터링)

**[ 기술스택 ]** React, React-Router, Redux, TailwindCSS, TypeScript<br/>

**[ 주요작업 ]**

- CRA → Vite 마이그레이션: 빌드 속도 7.9s → 1.4s 단축 (약 82%)
- CSS 프레임워크 전환: 유지보수 모드인 Styled-Components → 생태계 활발한 TailwindCSS (npm trends 기반)
- TypeScript 도입: Mock 데이터 타입 불일치 및 로직 오류를 조기에 발견 → 코드 품질 향상
- FSD 구조 적용: pages·features·shared 단위 관심사 분리 → 기능 확장 및 유지보수 용이성 확보
- GitHub Actions 적용: PR 병합 전 ESLint·Prettier 자동 검사 → 코드 스타일 일관성 및 품질 유지

### 초기 작업 (2021.11 ~ 2022.02, 1차 개발)

**[ 기술스택 ]** React, React-Router, Redux, Styled-Components, JavaScript<br/>

**[ 주요작업 ]**

- 회원가입 페이지: OAuth 로그인(구글·카카오) 구현
- 주문 페이지: 카카오맵 API를 사용하여 지도에 매장 찾기 및 정보 표시
- 전역 상태 관리: Redux를 활용한 장바구니 및 로그인 상태 관리
- 퍼포먼스 개선: 성능 저하 원인 분석 후 Google Lighthouse 성능 점수 개선 (**80점** → **90점**)
- UX 개선
  - 제품 옵션 선택 단계 축소 → 사용자 맞춤형 옵션 제공 (모든 옵션을 한 화면에서 선택 가능)
  - CTA버튼 상태 가시화: 주문 페이지 하단 버튼을 색상으로 활성화/비활성화 상태 표시

## 설치 및 실행

```bash
yarn install
```

로컬 실행 시 `.env.local` 파일을 생성하여 카카오맵 자바스크립트 API Key를 추가해야 합니다. (**.env.sample** 참고)

<br/>

## 프로젝트 히스토리

본 프로젝트는 2021~2022년에 1차 구현을 거쳐, 2025년에 리뉴얼을 진행했습니다. <br/>
1차 구현 관련 문서:

- 📄 [프로젝트 상세 소개 (1차구현)](https://www.notion.so/f87299ddf4fa471a9def39386c7492ea)
- 📝 [배운 내용 정리 (1차구현)](https://github.com/sukyoungshin/TIL/blob/main/Note/subway-renewal-mobile.md)
