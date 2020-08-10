import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SidePage from './SidePage';
import { ABOUT } from '../content/about';
import { LASER } from '../content/laser';
import Main from './Main';
import { ARTISTS } from '../content/artists';
import Blog from './Blog';

const Routes = () => (
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
        <Route exact path="/blog">
            <Blog />
        </Route>
        <Route exact path="/">
            <Main />
        </Route>
    </Switch>
);

export default Routes;
