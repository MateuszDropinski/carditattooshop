import styled from 'styled-components';

import { device } from '../../utils/device';

const SectionHeader = styled.h2`
    font-size: 28px;
    margin: 0 0 15px 0;
    padding-bottom: 5px;
    border-bottom: 3px solid ${({ theme }) => theme.mainColor};
    
    @media ${device.desktop} {
        margin: 0 0 40px 0;
        font-size: 32px;
    }
`;

export default SectionHeader;
