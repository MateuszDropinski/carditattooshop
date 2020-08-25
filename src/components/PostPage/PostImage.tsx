import React from 'react';
import styled from 'styled-components';

import { StyledSection } from '../styledComponents';
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

const Section = styled(StyledSection)`
    margin-bottom: 40px;
    
    @media ${device.tablet} {
        margin-bottom: 80px;
    }
`;

const Image = styled.img<{ vertical: boolean }>`
    height: auto;
    box-shadow: 0 -3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);   
    width: ${({ vertical }) => vertical ? '66%' : '100%'}};
    
    @media ${device.tablet} {
        width: ${({ vertical }) => vertical ? '33%' : '66%'};
    }
`;

export default PostImage;
