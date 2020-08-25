import React from 'react';
import styled from 'styled-components';

import { StyledSection, StyledAnchor, SectionHeader } from '../styledComponents';
import { device } from '../../utils/device';

type Props = {
    id: string,
    img: string,
    imgAlt: string,
    header: string,
    text: string,
    link: string,
    reverse: boolean
}

const ImageTextSection: React.FC<Props> = ({ id, img, imgAlt, header, text, reverse, link }) => (
    <Section id={id} style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
        <ImageRow src={img} alt={imgAlt} />
        <TextContainer>
            <SectionHeader>{header}</SectionHeader>
            <ImageColumn src={img} alt={imgAlt} />
            <Text>{text}</Text>
            <Link to={link}>Dowiedz się więcej!</Link>
        </TextContainer>
    </Section>
);

const Section = styled(StyledSection)`
    justify-content: space-between;
    flex-direction: column; 
    align-items: center;
    
    @media ${device.tablet} {
        flex-direction: row;
    }
`;

const ImageRow = styled.img`
    display: none;
    width: 33%;
    height: auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    
    @media ${device.tablet} {
        display: block;
    }
`;

const ImageColumn = styled.img`
    display: block;
    width: 100%;
    height: auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin-bottom: 20px;
    
    @media ${device.tablet} {
        display: none;
    }
`;

const Text = styled.p`
    text-align: left;
    font-size: 16px;
    color: ${({ theme }) => theme.text};
`;

const Link = styled(StyledAnchor)`
    color: ${({ theme }) => theme.black};
    text-align: left;
    margin-top: 20px;
    font-size: 20px;
    
    &:hover {
        color: ${({ theme }) => theme.mainColor};
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    
    @media ${device.tablet} {
        width: 50%;
        padding: 20px 0;
    }
`;

export default ImageTextSection;
