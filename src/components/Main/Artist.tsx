import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { StyledAnchor } from '../styledComponents';
import { ArtistContentType } from '../../content/types';
import { device } from '../../utils/device';

const Artist: React.FC<ArtistContentType> = ({ title, alias, images, textShortcut }) => {
    const history = useHistory();

    const onClick = () => {
        history.push(`/${alias}`);
    };

    return (
        <Wrapper onClick={onClick}>
            <Image src={images[0].src} alt={images[0].alt} />
            <Caption>
                <Alias>{alias}</Alias>
                {title}
                <AnchorMobile onClick={(e) => e.stopPropagation()} to={`/${alias}`}>Zobacz moje prace!</AnchorMobile>
            </Caption>
            <Info>
                <Alias>{alias}</Alias>
                {textShortcut}
                <Anchor onClick={(e) => e.stopPropagation()} to={`/${alias}`}>Zobacz moje prace!</Anchor>
            </Info>
        </Wrapper>
    );
};

const Caption = styled.figcaption`
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    color: ${({ theme }) => theme.mainColor};
    padding: 10px;
    font-size: 18px;
    border: 1px solid ${({ theme }) => theme.mainColor};
    transition: ${({ theme }) => theme.transition};
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Info = styled.p`
    display: none;
    background-color: rgba(0, 0, 0, .8);
    color: ${({ theme }) => theme.mainColor};
    font-size: 16px;
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    transition: ${({ theme }) => theme.transition};
    padding: 15px;
    text-align: left;
    border: 1px solid ${({ theme }) => theme.mainColor};
    
    @media ${device.tablet} {
        display: block;  
    }
`;

const Wrapper = styled.figure`
    width: 80%;
    margin: 0 10% 30px 10%;
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    overflow: hidden;
    
    @media ${device.tablet} {
        width: 20%;   
        margin: 0 2.5%;    
    }
    
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    
    @media ${device.tablet} {
        &:hover ${Caption} {
            transform: translateY(100%);
        }
        
        &:hover ${Info} {
            transform: translateY(0%);
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    image-orientation: from-image;
    display: block;
`;

const Alias = styled.span`
    font-size: 24px;
    display: block;
    margin-bottom: 5px;
`;

const Anchor = styled(StyledAnchor)`
    font-size: 16px;
    margin-top: 10px;
`;

const AnchorMobile = styled(StyledAnchor)`
    font-size: 14px;
    margin-top: 5px;
    
    @media ${device.tablet} {
        display: none; 
    }    
`;

export default Artist;
