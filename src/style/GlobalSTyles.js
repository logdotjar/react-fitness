import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    ol, ul,li {list-style: none;}
    a, a:hover {text-decoration:none;}
    html,body,h1,h2,h3,h4,h5,h6,ul,li,ol,dl,dd,dt,p,div,header,section,footer,img,article,form,fieldset,select,a{ margin:0; padding:0;}
    img {border-style: none;vertical-align:middle; max-width: 100%;}
`;
;
export default GlobalStyles;
