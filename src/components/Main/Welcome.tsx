import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ArrowDown } from 'react-feather';

import { StyledLogo, StyledLinkButton } from '../styledComponents';
import { StaticNavbar } from '../Navbar';
import { scrollWithOffset } from '../../utils/scroll';
import { device } from '../../utils/device';

const Welcome = () => (
    <Wrapper>
        <StyledLogo src='./assets/logo_1.png' alt='Cardi Tattoo Shop' />
        <StaticNavbar />
        <Header>Cardi Tattoo Shop</Header>
        <ButtonsContainer>
            <Button scroll={scrollWithOffset} to='#o-nas'>
                Poznaj nas
            </Button>
            <span>lub</span>
            <Button scroll={scrollWithOffset} to='#kontakt'>
                Zapisz się
            </Button>
        </ButtonsContainer>
        <ArrowDownContainer>
            <ArrowDown />
        </ArrowDownContainer>
    </Wrapper>
);

const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.black};
    background-image: url('./assets/background_1.jpg');
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100vh;
    min-height: 270px;
    position: relative;
    padding-top: 50px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin-bottom: 30px;
    
    @media ${device.tablet} {
        margin-bottom: 50px;
    }
`;

const Header = styled.h1`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);  
    color: ${({ theme }) => theme.white};
    font-size: 32px;
    text-align: center;
    margin: 0;
    border-bottom: 3px solid ${({ theme }) => theme.mainColor};
    border-radius: 5px;
    white-space: nowrap;
    text-shadow: 1px 1px 2px ${({ theme }) => theme.black};
    
    @media ${device.tablet} {
        font-size: 100px;
        border-bottom-width: 10px;
        letter-spacing: 3px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0;
    font-size: 16px;
    width: 100%;
    left: 50%;
    transform: translate(-50%, -200%);
    color: ${({ theme }) => theme.white};
    
    @media ${device.tablet} {
        justify-content: space-between;
        width: 550px;
        font-size: 20px;
    }
`;

const bouncingArrow = (start: number, end: number) => keyframes`
    0% { padding-top: ${start}px; }
    50% { padding-top: ${end}px; }
    100% { padding-top: ${start}px; }
`;

const ArrowDownContainer = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -20px);  
    width: 15px;
    height: 25px;
    border-radius: 15px;
    border: 2px solid ${({ theme }) => theme.white};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    animation: ${bouncingArrow(2, 10)} 1s linear infinite;
    
    @media ${device.tablet} {
        width: 30px;
        height: 50px;
        animation: ${bouncingArrow(2, 20)} 1s linear infinite;
        border-width: 2px;
    }
    
    svg {
        width: 10px;
        height: 10px;
        stroke: ${({ theme }) => theme.white};
        
        @media ${device.tablet} {
            width: 24px;
            height: 24px;
        }
    }
`;

const Button = styled(StyledLinkButton)`
    width: 100px;
    
    @media ${device.tablet} {
        width: 172px;
    }
`;

export default Welcome;
