import React from 'react';
import styled from 'styled-components';

import Welcome from './Welcome';

const Main = () => (
    <Wrapper>
        <Welcome />
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
`;

export default Main;
