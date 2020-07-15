import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { StyledSection, StyledAnchorButton } from '../styledComponents';
import { QUESTIONS } from '../../content/faq';

type QuestionType = {
    question: string,
    answer: string
};

const Faq = () => {
    const parallax = useRef<HTMLDivElement>(null);
    const [question, setQuestion] = useState<QuestionType>(QUESTIONS[0]);

    const handleParallaxScroll = () => {
        const scrollMax = document.body.scrollHeight - window.innerHeight;
        const percentage = (window.scrollY / scrollMax) * 100;

        if (parallax.current) {
            parallax.current.style.backgroundPositionY = `${percentage}%`;
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', handleParallaxScroll);
        setQuestion(QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]);

        return () => {
            document.removeEventListener('scroll', handleParallaxScroll);
        };
    }, []);

    return (
        <Parallax ref={parallax}>
            <Section>
                <QuestionContainer>
                    <Question>{question.question}</Question>
                    <Answer>{question.answer}</Answer>
                </QuestionContainer>
                <StyledAnchorButton>Zobacz inne często zadawane pytania!</StyledAnchorButton>
            </Section>
        </Parallax>
    );
};

const Parallax = styled.div`
    width: 100%;
    position: relative;
    height: 400px;
    margin-bottom: 400px;
    background-size: 100%;
    background-image: url("/assets/background_2.jpg");
`;

const Section = styled(StyledSection)`
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Question = styled.p`
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.mainColor}
`;

const Answer = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.white};
    margin-top: 40px;
`;

export default Faq;
