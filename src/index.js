//index.js : connect application to the DOM
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from "./style/GlobalStyles";

// react 18version 이상
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <StrictMode>
        <BrowserRouter>
            <GlobalStyle/>
            <App/>
        </BrowserRouter>
    </StrictMode>
)