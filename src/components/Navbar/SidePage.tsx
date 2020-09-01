import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { StyledLogo } from '../styledComponents';
import MobileNavbar from './Mobile';
import Items from './Items';
import { device } from '../../utils/device';

const SidePageNavbar = () => {
    const { pathname } = useLocation();
    const activeRoute = pathname.split('/')[1];

    return !activeRoute
        ? null
        : (
            <>
                <Navbar>
                    <LogoContainer to='/'>
                        <Logo src='/assets/logo_1.png' alt='Cardi tattoo' />
                    </LogoContainer>
                    <Items activeTab={activeRoute} />
                </Navbar>
                <Mobile>
                    <LogoContainer to='/'>
                        <Logo src='/assets/logo_1.png' alt='Cardi tattoo' />
                    </LogoContainer>
                    <MobileNavbar />
                </Mobile>
            </>
        );
};

const Mobile = styled.div`
    background-color: ${({ theme }) => theme.black};
    width: 100%;
    margin: auto;
    justify-content: center;
    height: ${({ theme }) => theme.sidePageNavbarHeight}px;
    position: relative;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    
    @media ${device.laptop} {
        display: none;
    }
    
    button {        
        top: 18px;
        
        @media ${device.tablet} {
            top: 12px;
        }
    }
    
    &>a {
        top: 38px;
        
        @media ${device.mobileL} {
            top: 40px;
        }
    }
`;

const Navbar = styled.nav`
    background-color: ${({ theme }) => theme.black};
    width: 100%;
    margin: auto;
    justify-content: center;
    height: ${({ theme }) => theme.sidePageNavbarHeight}px;
    position: relative;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    display: none;
    
    @media ${device.laptop} {
        display: flex;
    }
    
    ul {
        width: 700px;
        display: flex;
        justify-content: space-between;
        
        li {
            align-items: center;
            
            a {
                text-decoration: none;
            }
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
    left: 30px;
    transform: translateY(-50%);
    position: absolute;
    
    @media ${device.desktop} {
        left: 50px;
    }
`;

const Logo = styled(StyledLogo)`
    width: 100%;
    height: auto;
    position: static;
`;

export default SidePageNavbar;
