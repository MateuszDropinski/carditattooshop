import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ArrowDown } from 'react-feather';

import { StyledLogo, StyledLinkButton } from '../styledComponents';
import { StaticNavbar } from '../Navbar';
import { scrollWithOffset } from '../../utils/scroll';

const Welcome = () => (
    <Wrapper>
        <StyledLogo src='/assets/logo_1.png' alt='Cardi Tattoo Shop' />
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
    background-image: url('/assets/background_1.jpg');
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100vh;
    position: relative;
    min-height: 650px;
    padding-top: 50px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin-bottom: 100px;
`;

const Header = styled.h1`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);  
    font-size: 100px;
    color: ${({ theme }) => theme.white};
    text-align: center;
    margin: 0;
    border-bottom: 10px solid ${({ theme }) => theme.mainColor};
    border-radius: 5px;
    white-space: nowrap;
    letter-spacing: 3px;
    text-shadow: 1px 1px 2px ${({ theme }) => theme.black};
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    font-size: 20px;
    width: 550px;
    left: 50%;
    transform: translate(-50%, -200%);
    color: ${({ theme }) => theme.white};
`;

const bouncingArrow = keyframes`
    0% { padding-top: 2px; }
    50% { padding-top: 20px; }
    100% { padding-top: 2px; }
`;

const ArrowDownContainer = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -20px);  
    width: 30px;
    height: 50px;
    border-radius: 15px;
    border: 2px solid ${({ theme }) => theme.white};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    animation: ${bouncingArrow} 1s linear infinite;
    
    svg {
        stroke: ${({ theme }) => theme.white};
    }
`;

const Button = styled(StyledLinkButton)`
    width: 172px;
`;

export default Welcome;
