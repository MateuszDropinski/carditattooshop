import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import styled, { useTheme } from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import Items from './Items';
import { StyledLogo } from '../styledComponents';

import './stickyNavbar.css';

const StickyNavbar = () => {
    const { pathname } = useLocation();
    const activeRoute = pathname.split('/')[1];
    const [isSticky, setIsSticky] = useState(false);
    const theme: any = useTheme();

    const navbarClassname = classnames({
        'sticky-navbar': isSticky
    });

    const handleScrollEvent = () => {
        const stickyEnter = activeRoute ? theme.sidePageNavbarHeight : window.innerHeight / 2;

        if (window.scrollY > stickyEnter && !isSticky) {
            setIsSticky(true);
        } else if (window.scrollY <= stickyEnter && isSticky) {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScrollEvent);

        return () => {
            document.removeEventListener('scroll', handleScrollEvent);
        };
    });

    return (
        <Navbar className={navbarClassname}>
            <Link to='/'>
                <Logo src='/assets/logo_1.png' alt='Cardi Tattoo Shop' />
            </Link>
            <Items activeTab={activeRoute} />
        </Navbar>
    );
};

const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 0;
    background-color: ${({ theme }) => theme.black};
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: ${({ theme }) => theme.transition};
    transform: translateY(-120%);
    
    ul {
        width: 650px;
        display: flex;
        justify-content: space-between;
        
        li.active-tab {
            a {
                color: ${({ theme }) => theme.mainColor}; 
            }
        }
        
        a {
            color: ${({ theme }) => theme.white};
            font-size: 20px;
            
            &:hover {
                color: ${({ theme }) => theme.mainColor};            
            }
        }
        
        svg {
            width: 22px;
        }
    }
`;

const Logo = styled(StyledLogo)`
    top: 50%;
    transform: translate(0, -50%);
    width: 50px;
`;

export default StickyNavbar;
