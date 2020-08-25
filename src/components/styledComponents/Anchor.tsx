import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../../utils/device';

export const anchorStyles = css`
    text-decoration: none;
    color: ${({ theme }) => theme.white};
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
    font-size: 16px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    
    @media ${device.tablet} {
        font-size: 20px;
    }
    
    &:hover {
        color: ${({ theme }) => theme.mainColor};    
    }
`;

const StyledAnchor = styled(Link)`
    ${anchorStyles}
`;

export default StyledAnchor;
