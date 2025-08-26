# Subway-renewal-mobile

포트폴리오용 써브웨이 웹앱 리뉴얼 프로젝트입니다.

- 인원: 개인프로젝트(1인)
- 역할: 기획·디자인·프론트엔드 개발 전반 담당

## 링크

[Figma 디자인](https://www.figma.com/design/5dXjJo6Bb9yCzm6oKcefEa/%EC%8D%A8%EB%B8%8C%EC%9B%A8%EC%9D%B4-%EA%B0%84%ED%8E%B8%EC%A3%BC%EB%AC%B8%EC%9B%B9--%EB%AA%A8%EB%B0%94%EC%9D%BC-?node-id=0-1&t=T4iO4obpLMsJXUsx-1) · [깃헙레포](https://github.com/sukyoungshin/subway-renewal-mobile/tree/master) · [배포 링크](https://subway-renewal-mobile.netlify.app/)

## 주요 기능

### 2차 리뉴얼 (2025.08 ~ )

**[ 기술스택 ]** React, React-Router, Redux, TailwindCSS, TypeScript<br/>

**[ 주요작업 ]**

- React 17 → 19 업그레이드
- CRA → Vite 전환 (CRA 지원 종료 대응, 빌드 속도 개선)
- Styled-Components → Tailwind CSS 전환
- TypeScript 도입: 타입 안정성 확보 및 유지보수성 강화
- FSD 구조 도입: 도메인 단위로 구조화 → 확장성·유지보수성 강화
- GitHub Actions 활용하여 CI 단계에서 코드품질 관리 자동화 (ESLint, Prettier 검사)
- UX 개선: 메인 캐러셀 스타일 변경

### 1차 개발 (2021.11 ~ 2022.02)

**[ 기술스택 ]** React, React-Router, Redux, Styled-Components, JavaScript<br/>

**[ 주요작업 ]**

- OAuth 로그인(이메일·구글·카카오) 구현
- 카카오맵 API를 활용한 매장찾기 구현
- React-Redux 기반 장바구니/로그인 상태 관리
- Google Lighthouse 점수 **80점** → **90점** 개선
- UX 개선: 모든 옵션을 한 화면에서 선택 가능하도록 프로세스 단순화, CTA 버튼 상태 시각화 (활성화/비활성 색상 구분)
  <br/>

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
