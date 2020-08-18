import React from 'react';
import styled from 'styled-components';

import SidePageHeader from '../SidePageHeader';
import { StyledSectionWithPadding } from '../styledComponents';
import { REGULATIONS } from '../../content/regulations';

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
    font-size: 18px;
    margin: 10px 0;
`;

const Title = styled.h5`
    border-bottom: 2px solid ${({ theme }) => theme.mainColor};    
    font-size: 24px;
`;

const RegulationSection = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
`;

export default Regulations;
