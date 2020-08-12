import styled from 'styled-components';

const SectionHeader = styled.h2`
    font-size: 32px;
    margin: 0 0 20px 0;
    padding-bottom: 5px;
    border-bottom: 3px solid ${({ theme }) => theme.mainColor};
`;

export default SectionHeader;
