import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
// @ts-ignore
import SimpleReactLightbox from 'simple-react-lightbox';

import { theme } from './theme';
import { SidePageNavbar, StickyNavbar } from './components/Navbar';
import Footer from './components/Footer';
import { ScrollToTop } from './utils/scroll';
import Routes from './components/Routes';

const AppWrapper = () => (
    <ThemeProvider theme={theme}>
        <SimpleReactLightbox>
            <Router>
                <ScrollToTop />
                <Wrapper>
                    <SidePageNavbar />
                    <StickyNavbar />
                    <Routes />
                    <Footer />
                </Wrapper>
            </Router>
        </SimpleReactLightbox>
    </ThemeProvider>
);

const Wrapper = styled.main`
    width: 100%;
    background-color: ${({ theme }) => theme.white};
`;

export default AppWrapper;
