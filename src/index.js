//index.js : connect application to the DOM
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./assets/style/GlobalSTyles";

// react 18version 이상
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <StrictMode>
        <GlobalStyle/>
        <App/>
    </StrictMode>
)