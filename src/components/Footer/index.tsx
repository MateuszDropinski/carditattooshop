import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram } from 'react-feather';

import { ADDRESS } from '../../content/address';
import { Logo, StyledExternalAnchor } from '../styledComponents';

const Footer = () => (
    <FooterContainer>
        <StyledLogo src='/assets/logo_1.png' alt='Cardi tattoo' />
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
`;

const StyledLogo = styled(Logo)`
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
