import React from 'react';
import styled from 'styled-components';

import { StyledSection } from '../styledComponents';
import { BLOG } from '../../content/blog';
import Post from '../Post';
import SidePageHeader from '../SidePageHeader';

const Blog = () => (
    <section>
        <SidePageHeader>
            Blog
        </SidePageHeader>
        <Section>
            {BLOG.map((post) => (
                <Post key={post.title} {...post} />
            ))}
        </Section>
    </section>
);

const Section = styled(StyledSection)`
    padding: 30px 0;
    margin-bottom: 0;
`;

export default Blog;
