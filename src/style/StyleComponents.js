import styled, { createGlobalStyle } from "styled-components";


//전역 스타일 정의
createGlobalStyle`
*{
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.025em;
}


html {
  height: 100%;
  font-size: 10px;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  word-break: keep-all;
}


`;
export const Wrapper = styled.div`

`;