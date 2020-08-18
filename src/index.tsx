import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
// @ts-ignore
import smoothscroll from 'smoothscroll-polyfill';

import AppWrapper from './AppWrapper';

smoothscroll.polyfill();

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        font-family: Lato, Arial, sans-serif;
        margin: 0;
        overflow-x: hidden;
        scroll-behavior: smooth;
        background-color: #0a0114;
    }
    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    p {
        margin: 0;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <AppWrapper />
    </React.StrictMode>,
    document.getElementById('root')
);
