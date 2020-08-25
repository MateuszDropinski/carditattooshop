import React from 'react';
import styled from 'styled-components';

import { StyledSection } from '../styledComponents';
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
    align-self: flex-start;
    border-bottom: 2px solid ${({ theme }) => theme.mainColor};
    margin: 0 0 20px 0;
    color: ${({ theme }) => theme.black};
    
    @media ${device.tablet} {
        margin: 0 0 30px 0;
        font-size: 28px;
    }
`;

const Section = styled(StyledSection)`
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    margin-bottom: 40px;
    
    @media ${device.tablet} {
        margin-bottom: 80px;
        font-size: 18px;
    }
`;

export default PostText;
