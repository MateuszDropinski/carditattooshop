import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import AppWrapper from './AppWrapper';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: Nunito, Arial, sans-serif;
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
