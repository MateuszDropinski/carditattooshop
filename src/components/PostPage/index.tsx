import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { BLOG } from '../../content/blog';
import PostHeader from './PostHeader';
import { PostContent, PostContentType, PostType } from '../../content/types';
import PostImage from './PostImage';
import PostText from './PostText';
import { StyledSectionWithPadding } from '../styledComponents';

const getPostSection = ({ type, payload }: PostContent, idx: number) => {
    switch (type) {
    case PostContentType.Image:
        return <PostImage key={idx} {...payload} />;
    case PostContentType.Text:
        return <PostText key={idx} {...payload} />;
    default:
        return null;
    }
};

const PostPage = () => {
    const { slug } = useParams();
    const postTitle = slug.split('_').join(' ');
    const post: PostType | undefined = BLOG.find(({ title }) => postTitle === title);

    if (!post) {
        return <div>No post</div>;
    }

    return (
        <Wrapper>
            <PostHeader date={post.date} author={post.author.title}>
                {post.title}
            </PostHeader>
            <StyledSectionWithPadding>
                {post.content.map(getPostSection)}
            </StyledSectionWithPadding>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    section:last-child {
        margin-bottom: 0;
    }
`;

export default PostPage;
