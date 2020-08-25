import styled from 'styled-components';

import { device } from '../../utils/device';

const StyledLogo = styled.img`
    position: absolute;
    top: 30px;
    left: 30px;
    width: 50px;
    height: auto;
    
    @media ${device.tablet} {
        top: 30px;
        left: 50px;
        width: 100px;    
    }
`;

export default StyledLogo;
