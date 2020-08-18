import React from 'react';
import styled from 'styled-components';

import { StyledSection } from '../styledComponents';

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
    font-size: 28px;
    align-self: flex-start;
    border-bottom: 2px solid ${({ theme }) => theme.mainColor};
    margin: 0 0 30px 0;
    color: ${({ theme }) => theme.black};
`;

const Section = styled(StyledSection)`
    color: ${({ theme }) => theme.text};
    font-size: 18px;
`;

export default PostText;
