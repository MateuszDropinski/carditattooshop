import React from 'react';
import styled from 'styled-components';

import Welcome from './Welcome';
import About from './About';
import Team from './Team';

const Main = () => (
    <Wrapper>
        <Welcome />
        <About />
        <Team />
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
`;

export default Main;
