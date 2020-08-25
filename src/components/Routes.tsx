import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import SidePage from './SidePage';
import { ABOUT } from '../content/about';
import { LASER } from '../content/laser';
import Main from './Main';
import { ARTISTS } from '../content/artists';
import Blog from './Blog';
import PostPage from './PostPage';
import Regulations from './Regulations';
import Faq from './Faq';
import { device } from '../utils/device';

const Routes = () => (
    <AppContent>
        <Switch>
            <Route exact path="/o-nas">
                <SidePage content={ABOUT} />
            </Route>
            <Route exact path="/laser">
                <SidePage content={LASER} />
            </Route>
            {
                ARTISTS.map(({ alias, ...artist }) => (
                    <Route key={alias} exact path={`/${alias}`}>
                        <SidePage withoutFirstImage content={artist} />
                    </Route>
                ))
            }
            <Route exact path="/faq">
                <Faq />
            </Route>
            <Route exact path="/regulamin">
                <Regulations />
            </Route>
            <Route exact path="/blog">
                <Blog />
            </Route>
            <Route exact path="/blog/:slug">
                <PostPage />
            </Route>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    </AppContent>
);

const AppContent = styled.div`
    min-height: ${({ theme }) => {
        const heightToRemove = theme.mobileFooterHeight + theme.sidePageNavbarHeight;
        return `calc(100vh - ${heightToRemove}px)`;
    }};
    
    @media ${device.tablet} {
        min-height: ${({ theme }) => {
        const heightToRemove = theme.footerHeight + theme.sidePageNavbarHeight;
        return `calc(100vh - ${heightToRemove}px)`;
    }};
    }
`;

export default Routes;
