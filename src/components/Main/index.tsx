import React from 'react';
import styled from 'styled-components';

import Welcome from './Welcome';
import About from './About';

const Main = () => (
    <Wrapper>
        <Welcome />
        <About />
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
`;

export default Main;
