import styled from 'styled-components';

export const StyledSection = styled.section`
    max-width: 1160px;
    margin: 0 auto 100px auto;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    height: 100%;
`;

export const StyledSectionWithPadding = styled(StyledSection)`
    padding: 70px 0;
    margin-bottom: 0;
`;
