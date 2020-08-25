import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { StyledLink } from '../styledComponents';
import { PostType } from '../../content/types';
import { device } from '../../utils/device';

const Post: React.FC<PostType> = ({ title, textShortcut, date, image }) => {
    const history = useHistory();
    const postSlug = title.split(' ').join('_');

    const onClick = () => {
        history.push(`/blog/${postSlug}`);
    };

    return (
        <Wrapper id={title.split(' ').join('_')}>
            <Image onClick={onClick} src={image.src} alt={image.alt} />
            <Caption>
                <Header>{title}</Header>
                <Text>{textShortcut}</Text>
                <Date>{date}</Date>
                <Anchor to={`/blog/${postSlug}`}>Czytaj dalej!</Anchor>
            </Caption>
        </Wrapper>
    );
};

const Wrapper = styled.figure`
    width: 100%;
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 0 0 30px 0;
    
    @media ${device.tablet} {
        width: 40%;
        margin: 3%;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    image-orientation: from-image;
    display: block;
    cursor: pointer;
`;

const Caption = styled.figcaption`
    width: 100%;
    display: flex;
    flex-direction: column;    
    justify-content: space-around;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    border: 1px solid ${({ theme }) => theme.mainColor};
    padding: 15px;
    
    @media ${device.tablet} {
        padding: 20px;
    }
`;

const Header = styled.h3`
    font-size: 22px;
    font-weight: 700;
    border-bottom: 2px solid ${({ theme }) => theme.mainColor};
    margin-top: 0;
    
    @media ${device.tablet} {
        font-size: 26px;
    }
`;

const Text = styled.p`
    color: ${({ theme }) => theme.text};
    margin-bottom: 10px;
    text-align: left;
    font-size: 14px;
    
    @media ${device.tablet} {
        margin-bottom: 15px;
        font-size: 16px;
    }
`;

const Date = styled.p`
    color: ${({ theme }) => theme.text};    
    margin-bottom: 15px;
    font-size: 14px;
    
    @media ${device.tablet} {
        margin-bottom: 25px;
    }
`;

const Anchor = styled(StyledLink)`
    color: ${({ theme }) => theme.black};
    align-self: flex-end;
    
    &:hover {
        color: ${({ theme }) => theme.mainColor};        
    }
`;

export default Post;
