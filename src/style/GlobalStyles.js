import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import NotoSansRegularWoff from "../assets/fonts/NotoSansKR-Regular.woff";
import NotoSansRegularWoff2 from "../assets/fonts/NotoSansKR-Regular.woff2";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
  
  img {
    border-style: none;
    vertical-align: middle;
    max-width: 100%;
  }
  @font-face {
    font-family: "NotoSansKr";
    src: url(${NotoSansRegularWoff}) format("woff"),
    url(${NotoSansRegularWoff2}) format("woff2");
  }


  body {
    font-family: 'NotoSansKr', sans-serif;
    background-color: #FFFAFB;
  }
`;
export default GlobalStyles;
