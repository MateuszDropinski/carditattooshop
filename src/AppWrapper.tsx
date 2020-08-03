import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import { theme } from './theme';
import Main from './components/Main';
import { SidePageNavbar, StickyNavbar } from './components/Navbar';
import Footer from './components/Footer';
import SidePage from './components/SidePage';
import { ABOUT } from './content/about';

const AppWrapper = () => (
    <ThemeProvider theme={theme}>
        <Router>
            <Wrapper>
                <SidePageNavbar />
                <StickyNavbar />
                <Switch>
                    <Route path="/o-nas">
                        <SidePage content={ABOUT} />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
                <Footer />
            </Wrapper>
        </Router>
    </ThemeProvider>
);

const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;
`;

export default AppWrapper;
