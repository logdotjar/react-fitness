import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import {createTheme,ThemeProvider} from "@mui/material";

import GlobalStyle from "./style/GlobalStyles";

const theme = createTheme({
    typography:{
        fontFamily:"'NotoSansKr',sans-serif"
    }
});


//index.js : connect application to the DOM
// react 18version 이상
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle/>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
)