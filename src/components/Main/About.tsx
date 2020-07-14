import React from 'react';
import styled from 'styled-components';

import { StyledSection, StyledAnchor, SectionHeader } from '../styledComponents';
import { ABOUT } from '../../content/about';

const About = () => (
    <Section id='o-nas'>
        <Image src={ABOUT.img} alt={ABOUT.imgAlt} />
        <TextContainer>
            <SectionHeader>O nas</SectionHeader>
            <Text>{ABOUT.textShortcut}</Text>
            <Link>Dowiedz się więcej!</Link>
        </TextContainer>
    </Section>
);

const Section = styled(StyledSection)`
    justify-content: space-between;
`;

const Image = styled.img`
    width: 33%;
    height: auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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
    width: 50%;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px 0;
`;

export default About;
