# Subway-renewal-mobile

포트폴리오용 써브웨이 웹앱 리뉴얼 프로젝트입니다.

- 인원: 개인프로젝트(1인)
- 역할: 기획·디자인·프론트엔드 개발 전반 담당

## 링크

[Figma 디자인](https://www.figma.com/design/5dXjJo6Bb9yCzm6oKcefEa/%EC%8D%A8%EB%B8%8C%EC%9B%A8%EC%9D%B4-%EA%B0%84%ED%8E%B8%EC%A3%BC%EB%AC%B8%EC%9B%B9--%EB%AA%A8%EB%B0%94%EC%9D%BC-?node-id=0-1&t=T4iO4obpLMsJXUsx-1) · [깃헙레포](https://github.com/sukyoungshin/subway-renewal-mobile/tree/master) · [배포 링크](http://portfolio-subway.shop/)

## 주요 기능

### 1.리팩터링 및 성능 최적화 (2025.08)

**[ 기술스택 ]** React, React-Router, Redux, TailwindCSS, TypeScript<br/>

**[ 주요작업 ]**

#### 기술스택 개선

- CRA -> Vite전환: CRA의 느린 빌드속도와 지원 중단 문제를 해결하기 위해 Vite로 마이그레이션, CRA 프로젝트 대비 빌드 속도 36.7% 단축(7.9s→5.0s). - 또한, 빠른 HMR 속도와 설정 단순화로 인해 개발자 경험이 개선됨
- TailwindCSS 도입: Styled-Components의 SSR 대응 이슈와 기능 한계를 해소하고, npm trends에 근거하여 활발한 생태계를 활용하기 위해 전환

#### 웹사이트 성능 측정 및 최적화

- Google Lighthouse와 Rollup-Plugin-Visualizer 분석을 통해, 퍼포먼스의 성능 저하 원인을 파악
- Terser 도입으로 데드 코드를 제거하고, Lazy Loading 적용으로 초기 로딩 속도개선을 진행
- 이 과정에서 SEO 점수가 떨어져 검색엔진 노출에 불리해져서 SSR(서버 사이드 렌더링) 방식을 도입 → 최종적으로 퍼포먼스 100점 및 SEO 92점 달성
- 이미지 리소스는 S3 + CloudFront로 제공하여 전송 속도를 최적화

#### 코드 품질 및 유지보수성 향상

- TypeScript 도입: Mock 데이터 타입 불일치 및 로직 오류를 조기에 발견 → 코드 품질 향상
- FSD 구조 적용: pages·features·shared 단위 관심사 분리하여, 기능 확장 및 유지보수 용이성 확보
- GitHub Actions 자동화: PR 병합 전 ESLint·Prettier 자동 검사 → 코드 스타일 일관성 및 품질 유지

#### 배포 및 운영 환경 개선

- 배포 환경 전환 (Vercel → AWS EC2): SSR 프로젝트를 Vercel에서 운영하다가, 실무 운영 환경과 유사한 경험을 쌓기 위해 EC2 기반 배포로 이전
- 도메인 구매, DNS 설정, SSL 인증 적용 등 배포 과정을 직접 경험하며 운영 환경에 가까운 배포 과정을 학습

### 2. 서비스 기획 및 초기 개발 (2021.11 ~ 2022.02)

**[ 기술스택 ]** React, React-Router, Redux, Styled-Components, JavaScript<br/>

**[ 링크 ]**

- 📄 [프로젝트 상세 소개 (1차구현)](https://www.notion.so/f87299ddf4fa471a9def39386c7492ea)
- 📝 [배운 내용 정리 (1차구현)](https://github.com/sukyoungshin/TIL/blob/main/Note/subway-renewal-mobile.md)

**[ 주요작업 ]**

### 주요 서비스 기능 구현

- 주문 페이지: 카카오맵 API를 사용하여 지도에 매장 찾기 및 정보 표시
- 회원가입 페이지: 이메일, 구글, 카카오 계정으로 OAuth 로그인 기능 구현
- 전역 상태 관리: Redux를 활용한 장바구니 및 로그인 상태 관리

#### 웹사이트 성능 측정 및 최적화 경험

- Google Lighthouse 분석을 통해 성능 저하 원인을 파악하여, 로딩 지연 시 사용자에게 대기 상황을 안내하기 위해 로딩 스피너를 도입
- 또한, png 이미지를 webp 형식으로 변환하여, 근본적인 이미지 로딩 속도 감소
- 결과적으로 퍼포먼스 점수 개선 (80점 → 90점)

#### 사용자 경험(UX) 개선

- 기획/디자인: Figma 기반으로 화면 기획 및 UI 디자인 진행
- 구매 플로우 단순화: 제품 옵션 선택 단계 축소 → 사용자 맞춤형 옵션 제공 (모든 옵션을 한 화면에서 선택 가능)
- 버튼 상태 가시화: 주문 페이지 하단 버튼을 색상으로 활성화/비활성화 상태 표시

## 설치 및 실행

```bash
yarn install
```

로컬 실행 시 `.env.local` 파일을 생성하여 카카오맵 자바스크립트 API Key를 추가해야 합니다. (**.env.sample** 참고)
