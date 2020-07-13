import React, { useEffect } from 'react';
import styled from 'styled-components';

import Items from './Items';

const StaticNavbar = () => (
    <Navbar>
        <Items />
    </Navbar>
);

const Navbar = styled.nav`
    width: 700px;
    margin: auto;
    
    ul {
        display: flex;
        justify-content: space-between;
    }
    
    li {
        text-shadow: 1px 1px 2px ${({ theme }) => theme.black};
    }
`;

export default StaticNavbar;
