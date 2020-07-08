import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from './theme';

const AppWrapper = () => (
    <ThemeProvider theme={theme}>
        <Container>
            App
        </Container>
    </ThemeProvider>
);

const Container = styled.main`
    background-color: ${({ theme }) => theme.mainColor};
`;

export default AppWrapper;
