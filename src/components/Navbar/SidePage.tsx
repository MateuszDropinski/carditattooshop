import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { StyledLogo } from '../styledComponents';
import Items from './Items';

const SidePageNavbar = () => {
    const { pathname } = useLocation();
    const activeRoute = pathname.split('/')[1];

    return !activeRoute
        ? null
        : (
            <Navbar>
                <LogoContainer to='/'>
                    <Logo src='./assets/logo_1.png' alt='Cardi tattoo' />
                </LogoContainer>
                <Items activeTab={activeRoute} />
            </Navbar>
        );
};

const Navbar = styled.nav`
    background-color: ${({ theme }) => theme.black};
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    height: ${({ theme }) => theme.sidePageNavbarHeight}px;
    position: relative;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    
    ul {
        width: 700px;
        display: flex;
        justify-content: space-between;
        
        li {
            align-items: center;
        }
               
        li.active-tab {
            a {
                color: ${({ theme }) => theme.mainColor}; 
            }
        }
    }
`;

const LogoContainer = styled(Link)`
    width: 50px;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    position: absolute;
`;

const Logo = styled(StyledLogo)`
    width: 100%;
    height: auto;
    position: static;
`;

export default SidePageNavbar;
