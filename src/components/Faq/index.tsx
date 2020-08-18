import React from 'react';
import styled from 'styled-components';

import { QUESTIONS } from '../../content/faq';
import Question from './Question';
import SidePageHeader from '../SidePageHeader';
import { StyledSectionWithPadding } from '../styledComponents';

const Faq = () => (
    <>
        <SidePageHeader>Faq</SidePageHeader>
        <Section>
            {
                QUESTIONS.map(({ question, answer }) => (
                    <Question key={question} question={question} answer={answer} />
                ))
            }
        </Section>
    </>
);

const Section = styled(StyledSectionWithPadding)`
    flex-direction: column;
`;

export default Faq;
