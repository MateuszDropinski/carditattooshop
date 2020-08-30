import React from 'react';
import styled from 'styled-components';

import { Header } from '../SidePageHeader';
import { device } from '../../utils/device';

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
    font-size: 28px;
    padding: 15px;
    color: ${({ theme }) => theme.white};
    
    @media ${device.mobileL} {
        font-size: 36px;
        padding: 20px;
    }
    
    @media ${device.tablet} {
        font-size: 42px;
    }
    
    @media ${device.laptop} {
        font-size: 48px;
    }
`;

const DateAndAuthor = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
    color ${({ theme }) => theme.white}
    
    @media ${device.tablet} {
        font-size: 16px;
    };
    
    @media ${device.laptop} {
        font-size: 18px;
        margin-top: 15px;
    }
`;

export default PostHeader;
