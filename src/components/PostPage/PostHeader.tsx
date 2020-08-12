import React from 'react';
import styled from 'styled-components';

import { Header } from '../SidePageHeader';

type Props = {
    date: string,
    author: string
}

const PostHeader: React.FC<Props> = ({ children, date, author }) => (
    <StyledHeader>
        {children}
        <DateAndAuthor>
            {date} / {author}
        </DateAndAuthor>
    </StyledHeader>
);

const StyledHeader = styled(Header)`
    font-size: 48px;
    padding: 25px;
    color: ${({ theme }) => theme.white};
`;

const DateAndAuthor = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-top: 15px;
    color ${({ theme }) => theme.white}
`;

export default PostHeader;
