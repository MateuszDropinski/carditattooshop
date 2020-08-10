import React from 'react';
import styled from 'styled-components';

import { StyledLink } from '../styledComponents';

type PostType = {
    title: string,
    textShortcut: string,
    date: string,
    img: string,
    imgAlt: string
}

const Post: React.FC<PostType> = ({ title, textShortcut, date, img, imgAlt }) => (
    <Wrapper>
        <Image src={img} alt={imgAlt} />
        <Caption>
            <Header>{title}</Header>
            <Text>{textShortcut}</Text>
            <Date>{date}</Date>
            <Anchor to='/blog'>Czytaj dalej!</Anchor>
        </Caption>
    </Wrapper>
);

const Wrapper = styled.figure`
    width: 40%;
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 3%
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
    padding: 20px;
`;

const Header = styled.h3`
    font-size: 26px;
    font-weight: 700;
    border-bottom: 2px solid ${({ theme }) => theme.mainColor};
    margin-top: 0;
`;

const Text = styled.p`
    color: ${({ theme }) => theme.text};
    margin-bottom: 15px;
    text-align: left;
    font-size: 16px;
`;

const Date = styled.p`
    color: ${({ theme }) => theme.text};    
    margin-bottom: 25px;
    font-size: 14px;
`;

const Anchor = styled(StyledLink)`
    color: ${({ theme }) => theme.black};
    align-self: flex-end;
    
    &:hover {
        color: ${({ theme }) => theme.mainColor};        
    }
`;

export default Post;
