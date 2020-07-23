import styled, { css } from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

export const anchorStyles = css`
    text-decoration: none;
    color: ${({ theme }) => theme.white};
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
    font-size: 20px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    
    &:hover {
        color: ${({ theme }) => theme.mainColor};    
    }
`;

const StyledAnchor = styled(Link)`
    ${anchorStyles}
`;

export default StyledAnchor;