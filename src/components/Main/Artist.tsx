import React from 'react';
import styled from 'styled-components';

import { StyledAnchor } from '../styledComponents';

type Artist = {
    name: string,
    alias: string,
    img: string,
    infoShortcut: string
}

const Artist: React.FC<Artist> = ({ name, alias, img, infoShortcut }) => (
    <Wrapper>
        <Image src={img} alt={alias} />
        <Caption>
            <Alias>{alias}</Alias>
            {name}
        </Caption>
        <Info>
            <Alias>{alias}</Alias>
            {infoShortcut}
            <Anchor>Zobacz moje prace!</Anchor>
        </Info>
    </Wrapper>
);

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
`;

const Info = styled.p`
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
`;

const Wrapper = styled.figure`
    width: 20%;
    margin: 0 2.5%;
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    overflow: hidden;
    
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    
    &:hover ${Caption} {
        transform: translateY(100%);
    }
    
    &:hover ${Info} {
        transform: translateY(0%);
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

export default Artist;
