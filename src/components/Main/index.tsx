import React from 'react';
import styled from 'styled-components';

import Welcome from './Welcome';
import About from './About';
import Team from './Team';
import Faq from './Faq';
import Laser from './Laser';
import Blog from './Blog';
import Form from './Form';

const Main = () => (
    <Wrapper>
        <Welcome />
        <About />
        <Team />
        <Faq />
        <Laser />
        <Blog />
        <Form />
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
`;

export default Main;
