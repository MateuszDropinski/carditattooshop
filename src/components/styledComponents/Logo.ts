import styled from 'styled-components';

import { device } from '../../utils/device';

const StyledLogo = styled.img`
    position: absolute;
    top: 30px;
    left: 30px;
    width: 50px;
    height: auto;
    
    @media ${device.mobileL} {
        width: 60px;    
    }
`;

export default StyledLogo;
