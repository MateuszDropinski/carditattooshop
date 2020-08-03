import React from 'react';
import styled from 'styled-components';

import { StyledSection } from '../styledComponents';

type Props = {
    content: {
        title: string,
        imgAlt: string,
        text: string,
        images: string []
    }
}

const SidePage: React.FC<Props> = ({ content: { title, imgAlt, text, images } }) => (
    <section>
        <Header>{title}</Header>
        <Section>
            <Image src={images[0]} alt={imgAlt} />
            {text}
            <Gallery>
                <span>Galeria</span>
                <Images>
                    {
                        images.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`${title}-${idx}`} />
                        ))
                    }
                </Images>
            </Gallery>
        </Section>
    </section>
);

const Header = styled.h2`
    text-align: center;
    background-image: url("/assets/texture.png");
    color: ${({ theme }) => theme.mainColor};
    margin: 0;
    padding: 25px;
    font-size: 60px;
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const Section = styled(StyledSection)`
    display: block;   
    padding: 70px 0;
    text-align: left; 
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    margin-bottom: 70px;
`;

const Image = styled.img`
    width: 400px; 
    height: auto;
    float: left;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 0 45px 40px 0;
`;

const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: ${({ theme }) => theme.black};
       
    span {
        font-size: 28px;
        margin: 70px 0 50px 0;
        border-bottom: 2px solid ${({ theme }) => theme.mainColor};
    }
`;

const Images = styled.div`
    display: grid;
    grid-template-columns: 16% 16% 16% 16% 16%;
    grid-gap: 20% 5%;
   
    img {
        width: 100%;
        height: auto;
        cursor: pointer;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition: ${({ theme }) => theme.transition};
        
        &:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    }
`;

export default SidePage;
