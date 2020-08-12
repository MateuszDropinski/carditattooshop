import React from 'react';
import styled from 'styled-components';

import { StyledSection } from '../styledComponents';

type Props = {
    src: string,
    alt: string,
    vertical?: boolean
}

const PostImage: React.FC<Props> = ({ src, alt, vertical }) => (
    <StyledSection>
        <Image style={{ width: `${vertical ? 50 : 75}%` }} src={src} alt={alt} />
    </StyledSection>
);

const Image = styled.img`
    height: auto;
    box-shadow: 0 -3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);   
`;

export default PostImage;
