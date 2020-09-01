import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Items from './Items';
import { device } from '../../utils/device';
import { StyledLogo } from '../styledComponents';

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);
    const { listen } = useHistory();

    useEffect(() => {
        const unlisten = listen(() => {
            setOpen(false);
        });

        return () => {
            unlisten();
        };
    }, [listen]);

    return (
        <>
            <Burger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </Burger>
            <Navbar open={open}>
                <Link to='/'>
                    <StyledLogo src='/assets/logo_1.png' alt='Cardi Tattoo Shop' />
                </Link>
                <Items />
            </Navbar>
        </>
    );
};

const Navbar = styled.nav<{ open: boolean }>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.black};
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    padding-top: 50px;
    overflow: hidden;
    
    @media ${device.laptop} {
        display: none;
    }
    
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    
    li {
        text-shadow: 1px 1px 2px ${({ theme }) => theme.black};
        padding-bottom: 15px;
        
        a {
            text-decoration: none;
        }
    }
`;

const Burger = styled.button<{ open: boolean }>`
    position: ${({ open }) => open ? 'fixed' : 'absolute'};
    top: 34px;
    right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 35px;
    height: 35px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    
    @media ${device.mobileL} {
        height: 50px;
        width: 50px;
    }
    
    @media ${device.laptop} {
        display: none;
    }
    
    &:focus {
        outline: none;
    }
    
    div {
        width: 35px;
        height: 4px;
        background: ${({ theme }) => theme.black};
        border-radius: 10px;
        border: 1px solid ${({ theme }) => theme.mainColor};
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        
        @media ${device.mobileL} {
            height: 6px;
            width: 50px;
        }

        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
    
        :nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }
    
        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export default MobileNavbar;
