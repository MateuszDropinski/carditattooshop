import React from 'react';
import styled from 'styled-components';
import _ from 'lodash/fp';
// @ts-ignore
import { SRLWrapper } from 'simple-react-lightbox';

import { StyledSectionWithPadding } from '../styledComponents';
import { SidePageContentType } from '../../content/types';
import SidePageHeader from '../SidePageHeader';

type Props = {
    content: SidePageContentType,
    withoutFirstImage?: boolean
}

const SidePage: React.FC<Props> = ({ content: { title, text, images }, withoutFirstImage }) => {
    const galleryImages = withoutFirstImage ? _.tail(images) : images;

    return (
        <section>
            <SidePageHeader>{title}</SidePageHeader>
            <Section>
                <Content>
                    <Image
                        style={{ width: `${images[0].vertical ? 300 : 400}px` }}
                        src={images[0].src}
                        alt={images[0].alt} />
                    {text}
                </Content>
                <Gallery>
                    <span>Galeria</span>
                    <SRLWrapper>
                        <Images>
                            {
                                galleryImages.map(({ src, alt }, idx) => (
                                    <img
                                        key={idx}
                                        src={src}
                                        alt={alt} />
                                ))
                            }
                        </Images>
                    </SRLWrapper>
                </Gallery>
            </Section>
        </section>
    );
};

const Section = styled(StyledSectionWithPadding)`
    display: block;   
    text-align: left; 
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0;
`;

const Content = styled.div`
    overflow: auto;
`;

const Image = styled.img`
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
    grid-gap: 0 5%;
    align-items: center;
   
    img {
        width: 100%;
        height: auto;
        cursor: pointer;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition: ${({ theme }) => theme.transition};
        margin-bottom: 30%;
        
        &:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    }
`;

export default SidePage;
