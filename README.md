# fitness 홈페이지
React.js.와 API를 사용한 fitness 홈페이지 <br/>
![react-fitness](https://user-images.githubusercontent.com/32288848/232669202-906d5ec5-5691-498e-bdce-3a85aa931963.png)

## [fitness 홈페이지 링크](https://643e290f4fe3657135832855--darling-florentine-d2535f.netlify.app/)


### 사용한 기술
1. Next.js
2. Styled-components
3. Exercise DB : Rapid API에서 제공하는 무료 API

### 작성과정
1. React : 여러개의 컴포넌트로 구성한 레이아웃 생성
2. Styled-components <br/>
  2-1. CSS-in-JS 컴포넌트 단위로 스타일링<br/>
  2-2. props나 상태에 따른 동적 스타일링 적용으로 재사용성과 유지보수를 위해 사용
3. Exercise DB : API를 사용하여 동적으로 많은 페이지의 정보제공<br/>
  3-1. 부위별 운동리스트 <br/>
  3-2. 각 운동 별 상세내용<br/>
  3-3. 각 운동 별 추천 운동 및 연관 운동

#### Commit 규약
- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 관련
- style : 스타일 변경 (포매팅 수정, 들여쓰기 추가)
- refactor : 코드 리팩토링
- build : 빌드 관련 파일 수정
- ci : CI 설정 파일 수정
- perf : 성능 개선
- chore : 그 외 자잘한 수정
