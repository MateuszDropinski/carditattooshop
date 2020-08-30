import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../../utils/device';

export const anchorStyles = css`
    color: ${({ theme }) => theme.white};
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
    font-size: 16px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    
    @media ${device.mobileL} {
        font-size: 18px;
    }
    
    @media ${device.laptop} {
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
