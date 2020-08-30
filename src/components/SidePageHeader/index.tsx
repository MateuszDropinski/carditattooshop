import React from 'react';
import styled from 'styled-components';

import { device } from '../../utils/device';

const SidePageHeader: React.FC = ({ children }) => (
    <Header>
        {children}
    </Header>
);

export const Header = styled.h2`
    text-align: center;
    background-image: url("/assets/texture.png");
    color: ${({ theme }) => theme.mainColor};
    margin: 0;
    font-size: 28px;
    padding: 15px;
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    
    @media ${device.mobileL} {
        padding: 20px;
        font-size: 36px;
    }
    
    @media ${device.tablet} {
        font-size: 42px;
    }
    
    @media ${device.laptop} {
        padding: 35px;
        font-size: 60px;
    }
`;

export default SidePageHeader;
