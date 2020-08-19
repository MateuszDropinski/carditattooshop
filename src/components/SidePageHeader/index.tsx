import React from 'react';
import styled from 'styled-components';

const SidePageHeader: React.FC = ({ children }) => (
    <Header>
        {children}
    </Header>
);

export const Header = styled.h2`
    text-align: center;
    background-image: url("./assets/texture.png");
    color: ${({ theme }) => theme.mainColor};
    margin: 0;
    padding: 35px;
    font-size: 60px;
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export default SidePageHeader;
