import React from 'react';
import styled from 'styled-components';

import Items from './Items';
import { device } from '../../utils/device';

const StaticNavbar = () => (
    <Navbar>
        <Items />
    </Navbar>
);

const Navbar = styled.nav`
    width: 700px;
    margin: auto;
    display: none;
    
    @media ${device.laptop} {
        display: block;
    }
    
    ul {
        display: flex;
        justify-content: space-between;
    }
    
    li {
        text-shadow: 1px 1px 2px ${({ theme }) => theme.black};
        
        a {
            text-decoration: none;
        }
    }
`;

export default StaticNavbar;
