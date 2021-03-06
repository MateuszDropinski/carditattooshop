import React from 'react';
import styled from 'styled-components';

import { StyledSection, SectionHeader, StyledLinkButton } from '../styledComponents';
import Post from '../Post';
import { BLOG } from '../../content/blog';
import { device } from '../../utils/device';

const Blog = () => (
    <StyledSection>
        <SectionHeader>
            Blog
        </SectionHeader>
        <Posts>
            <Post {...BLOG[0]} />
            <Post {...BLOG[1]} />
        </Posts>
        <StyledLinkButton to='/blog'>
            Zobacz wszystkie posty!
        </StyledLinkButton>
    </StyledSection>
);

const Posts = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    
    @media ${device.laptop} {
        margin: 0;
        flex-direction: row;
    }
`;

export default Blog;
