import React from 'react';
import styled from 'styled-components';

import { StyledSectionWithPadding } from '../styledComponents';
import { BLOG } from '../../content/blog';
import Post from '../Post';
import SidePageHeader from '../SidePageHeader';

const Blog = () => (
    <section>
        <SidePageHeader>
            Blog
        </SidePageHeader>
        <StyledSectionWithPadding>
            {BLOG.map((post) => (
                <Post key={post.title} {...post} />
            ))}
        </StyledSectionWithPadding>
    </section>
);

export default Blog;
