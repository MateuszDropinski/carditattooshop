import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram } from 'react-feather';
import { HashLink as Link } from 'react-router-hash-link';

import { ADDRESS } from '../../content/address';
import { StyledLogo, StyledExternalAnchor } from '../styledComponents';
import { device } from '../../utils/device';

const Footer = () => (
    <FooterContainer>
        <Link to='/'>
            <Logo src='https://mateuszdropinski.github.io/carditattooshop/build/assets/logo_1.png' alt='Cardi tattoo' />
        </Link>
        <Info>Studio tatuażu Wrocław <br /> Cardi Tattoo Shop</Info>
        <Info>Adres: <br /> {ADDRESS[0]} <br /> {ADDRESS[1]}</Info>
        <Info>Kontakt: <br /> tel: +48 796 787 653 <br /> email: carditattooshop@gmail.com</Info>
        <SocialContainer>
            <StyledExternalAnchor target='_blank' href='https://www.facebook.com/CardiTattooShop'>
                <Facebook />
            </StyledExternalAnchor>
            <StyledExternalAnchor target='_blank' href='https://www.instagram.com/carditattooshop'>
                <Instagram />
            </StyledExternalAnchor>
        </SocialContainer>
    </FooterContainer>
);

const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.mainColor};
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    position: relative;
    height: ${({ theme }) => theme.mobileFooterHeight}px;
    flex-direction: column;
    font-size: 14px;
    
    @media ${device.tablet} {
        height: ${({ theme }) => theme.footerHeight}px;
        flex-direction: row;
        font-size: 16px;
    }
`;

const Logo = styled(StyledLogo)`
    position: static;
`;

const Info = styled.span`
    text-align: center;
`;

const SocialContainer = styled.div`
    a {
        color: ${({ theme }) => theme.mainColor};
        font-size: 20px;
        
        &:hover {
            color: ${({ theme }) => theme.white};            
        }
        
        &:first-child {
            margin-right: 10px;
        }
    }
`;

export default Footer;
