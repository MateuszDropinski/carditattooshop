import styled from 'styled-components';

import { device } from '../../utils/device';

export const StyledSection = styled.section`
    width: 80%;
    margin: 0 10% 60px 10%;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    height: 100%;
    
    @media ${device.tablet} {
        flex-direction: row;
        max-width: 1160px;
        margin: 0 auto 100px auto;
    }
`;

export const StyledSectionWithPadding = styled(StyledSection)`
    padding: 50px 0;
    margin-bottom: 0;
    
    @media ${device.tablet} {
        padding: 70px 0;
    }
`;
