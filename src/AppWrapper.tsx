import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import Main from './components/Main';
import { StickyNavbar } from './components/Navbar';
import Footer from './components/Footer';

const AppWrapper = () => (
    <ThemeProvider theme={theme}>
        <Wrapper>
            <StickyNavbar />
            <Main />
            <Footer />
        </Wrapper>
    </ThemeProvider>
);

const Wrapper = styled.main`
    width: 100%;
`;

export default AppWrapper;
