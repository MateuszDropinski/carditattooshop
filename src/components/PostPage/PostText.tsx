import React from 'react';
import styled from 'styled-components';

import { device } from '../../utils/device';

type Props = {
    title: string,
    text: string
}

const PostText: React.FC<Props> = ({ text, title }) => (
    <Section>
        {title && <Header>{title}</Header>}
        {text}
    </Section>
);

const Header = styled.h4`
    font-size: 24px;
    border-bottom: 2px solid ${({ theme }) => theme.mainColor};
    margin: 0 0 20px 0;
    color: ${({ theme }) => theme.black};
    
    @media ${device.mobileL} {
        font-size: 26px;
    }
    
    @media ${device.desktop} {
        margin: 0 0 30px 0;
        font-size: 28px;
    }
`;

const Section = styled.section`
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    
    @media ${device.desktop} {
        margin-bottom: 80px;
        font-size: 18px;
    }
`;

export default PostText;
