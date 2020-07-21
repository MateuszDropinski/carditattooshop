import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import Items from './Items';
import { Logo } from '../styledComponents';

import './stickyNavbar.css';

const StickyNavbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    const navbarClassname = classnames({
        'sticky-navbar': isSticky
    });

    const handleScrollEvent = () => {
        if (window.scrollY > window.innerHeight / 2 && !isSticky) {
            setIsSticky(true);
        } else if (window.scrollY <= window.innerHeight / 2 && isSticky) {
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
            <StickyLogo src='/assets/logo_2.png' alt='Cardi Tattoo Shop' />
            <Items />
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
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: ${({ theme }) => theme.transition};
    transform: translateY(-100%);
    
    ul {
        width: 600px;
        display: flex;
        justify-content: space-between;
        
        a {
            color: ${({ theme }) => theme.black};
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

const StickyLogo = styled(Logo)`
    top: 50%;
    transform: translate(0, -50%);
    width: 50px;
`;

export default StickyNavbar;
