import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// @ts-ignore
import SimpleReactLightbox from 'simple-react-lightbox';

import { theme } from './theme';
import Main from './components/Main';
import { SidePageNavbar, StickyNavbar } from './components/Navbar';
import Footer from './components/Footer';
import SidePage from './components/SidePage';
import { ABOUT } from './content/about';
import { ARTISTS } from './content/artists';

const AppWrapper = () => (
    <ThemeProvider theme={theme}>
        <SimpleReactLightbox>
            <Router>
                <Wrapper>
                    <SidePageNavbar />
                    <StickyNavbar />
                    <Switch>
                        <Route exact path="/o-nas">
                            <SidePage content={ABOUT} />
                        </Route>
                        <Route exact path="/">
                            <Main />
                        </Route>
                    </Switch>
                    <Footer />
                </Wrapper>
            </Router>
        </SimpleReactLightbox>
    </ThemeProvider>
);

const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;
`;

export default AppWrapper;
