import styled from 'styled-components';

const StyledAnchorButton = styled.a`
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.black};
    padding: 15px 25px;
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
    font-size: 20px;
    white-space: nowrap;
    border-radius: 5px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.mainColor};
    text-align: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    
    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.mainColor};
    }
`;

export default StyledAnchorButton;
