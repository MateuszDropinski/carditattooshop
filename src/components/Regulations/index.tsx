import React from 'react';
import styled from 'styled-components';

import SidePageHeader from '../SidePageHeader';
import { StyledSectionWithPadding } from '../styledComponents';
import { REGULATIONS } from '../../content/regulations';
import { device } from '../../utils/device';

const Regulations = () => (
    <>
        <SidePageHeader>Regulamin</SidePageHeader>
        <StyledSectionWithPadding>
            {
                REGULATIONS.map(({ title, content }) => (
                    <RegulationSection key={title}>
                        <Title>{title}</Title>
                        {
                            content.map((point, idx) => (
                                <SingleRegulation key={idx}>
                                    {idx + 1}. {point}
                                </SingleRegulation>
                            ))
                        }
                    </RegulationSection>
                ))
            }
        </StyledSectionWithPadding>
    </>
);

const SingleRegulation = styled.p`
    font-size: 14px;
    margin: 10px 0;
    
    @media ${device.tablet} {
        margin: 5px 0;
        font-size: 18px;        
    }
`;

const Title = styled.h5`
    border-bottom: 2px solid ${({ theme }) => theme.mainColor};    
    font-size: 20px;
    margin: 0 0 15px 0;
    
    @media ${device.tablet} {
        font-size: 24px;    
        margin-bottom: 0 0 30px 0;
    }
`;

const RegulationSection = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

export default Regulations;
