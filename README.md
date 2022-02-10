# Subway-renewal-mobile

프토폴리오 용도로 작업한 써브웨이 웹앱 리뉴얼 프로젝트입니다.<br/>

### Summary
- 인원 : 개인프로젝트 (1인)
- 기여 : 기획, 디자인, 프론트앤드
- 작업기간 : 2021.11. ~ (진행중)
- 배포 : [써브웨이 리뉴얼 앱웹](https://subway-renewal-mobile.netlify.app/)

### Features
- 기존 써브웨이 앱웹의 UI 및 UX 개선작업
- 이메일 로그인과 구글 및 카카오 계정을 활용한 OAuth 로그인 기능을 구현하였습니다.
- 지도API를 활용하여, 입력받은 주소지 좌표값에 마커와 인포윈도우 기능구현
- React-redux를 활용한 전역상태관리 (장바구니 및 로그인 상태관리)
- 적응형 웹앱 (현재 모바일앱 페이지만 작업 진행중)

### Doc
- yarn install <br/>
- node -v : 17.1.0
- tool : `react` `react-redux` `react-router` `react-daum-postcode` `styled-components` `react-icons`<br/>
```
"dependencies": {
  "@testing-library/jest-dom": "^5.11.4",
  "@testing-library/react": "^11.1.0",
  "@testing-library/user-event": "^12.1.10",
  "react": "^17.0.2",
  "react-daum-postcode": "^3.0.1",
  "react-dom": "^17.0.2",
  "react-icons": "^4.3.1",
  "react-redux": "^7.2.6",
  "react-router-dom": "^6.0.2",
  "react-scripts": "4.0.3",
  "styled-components": "^5.3.3",
  "web-vitals": "^1.0.1"
},
```
<br/>

## 프로젝트 관련 링크
- [개선내용 및 프로젝트에 관련한 더 자세한 소개](https://www.notion.so/f87299ddf4fa471a9def39386c7492ea)
- [프로젝트 코드](https://github.com/sukyoungshin/subway-renewal-mobile) (깃허브)
- [프로젝트 작업 시, 겪었던 이슈 및 배운 내용 정리](https://github.com/sukyoungshin/TIL/blob/main/Note/subway-renewal-mobile.md)
