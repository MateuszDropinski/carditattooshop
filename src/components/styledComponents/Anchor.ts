import styled from 'styled-components';

const StyledAnchor = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.white};
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        color: ${({ theme }) => theme.mainColor};    
    }
`;

export default StyledAnchor;
