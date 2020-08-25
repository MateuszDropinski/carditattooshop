import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../../utils/device';

export const anchorButtonStyles = css`
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.black};
    padding: 5px 10px;
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
    font-size: 16px;
    white-space: nowrap;
    border-radius: 5px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.mainColor};
    text-align: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    
    @media ${device.tablet} {
        padding: 15px 25px;
        font-size: 20px;
    }
    
    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.mainColor};
    }
`;

const StyledAnchorButton = styled(Link)`
    ${anchorButtonStyles}
`;

export default StyledAnchorButton;
