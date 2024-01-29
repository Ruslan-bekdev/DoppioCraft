import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import {media} from "./styles/styles";

const GlobalStyle = createGlobalStyle`
    ${media.mobile`
        body{
            font-size: 12px;
        }
    `}
    ${media.tablet`
        body{
            font-size: 16px;
        }
    `}
    ${media.laptop`
        body{
            font-size: 24px;
        }
    `}
    ${media.desktop`
        body{
            font-size: 32px;
        }
    `}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <GlobalStyle/>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);