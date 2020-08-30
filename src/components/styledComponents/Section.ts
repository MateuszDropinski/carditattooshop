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
    
    @media ${device.mobileL} {
        width: 70%;
        margin: 0 15% 80px 15%;
    }
    
    @media ${device.tablet} {
        width: 60%;
        margin: 0 20% 80px 20%;
    }
    
    @media ${device.laptop} {
        width: 80%;
        margin: 0 10% 80px 10%;
    }
    
    @media ${device.desktop} {
        max-width: 1160px;
        margin: 0 auto 100px auto;
    }
`;

export const StyledSectionWithPadding = styled(StyledSection)`
    padding: 50px 0;
    margin-bottom: 0 !important;
    
    @media ${device.desktop} {
        padding: 70px 0;
    }
`;
