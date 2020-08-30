import React from 'react';
import styled from 'styled-components';

import { device } from '../../utils/device';

type Props = {
    src: string,
    alt: string,
    vertical?: boolean
}

const PostImage: React.FC<Props> = ({ src, alt, vertical = false }) => (
    <Section>
        <Image vertical={vertical} src={src} alt={alt} />
    </Section>
);

const Section = styled.section`
    margin-bottom: 40px;
    
    @media ${device.laptop} {
        margin-bottom: 80px;
    }
`;

const Image = styled.img<{ vertical: boolean }>`
    height: auto;
    box-shadow: 0 -3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);   
    width: ${({ vertical }) => vertical ? '66%' : '100%'}};
    
    @media ${device.laptop} {
        width: ${({ vertical }) => vertical ? '33%' : '66%'};
    }
`;

export default PostImage;
