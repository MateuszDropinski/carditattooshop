import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { StyledSection, StyledLinkButton } from '../styledComponents';
import { QUESTIONS } from '../../content/faq';
import { device } from '../../utils/device';

type QuestionType = {
    question: string,
    answer: string
};

const Faq = () => {
    const parallax = useRef<HTMLDivElement>(null);
    const [question, setQuestion] = useState<QuestionType>(QUESTIONS[0]);

    const handleParallaxScroll = () => {
        if (parallax.current) {
            const parallaxTop = parallax.current.offsetTop;
            const parallaxBottom = parallax.current.offsetHeight + parallaxTop;
            const percentage = ((window.scrollY - parallaxTop + window.innerHeight)
                / (parallaxBottom - (parallaxTop - window.innerHeight))) * 100;
            parallax.current.style.backgroundPositionY = `${Math.min(Math.max(percentage, 0), 100)}%`;
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', handleParallaxScroll);
        document.addEventListener('resize', handleParallaxScroll);
        setQuestion(QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]);

        return () => {
            document.removeEventListener('scroll', handleParallaxScroll);
            document.removeEventListener('resize', handleParallaxScroll);
        };
    }, []);

    return (
        <Parallax ref={parallax}>
            <Section>
                <QuestionContainer>
                    <Question>{question.question}</Question>
                    <Answer>{question.answer}</Answer>
                </QuestionContainer>
                <StyledLinkButton to='/faq'>Sprawdź inne pytania!</StyledLinkButton>
            </Section>
        </Parallax>
    );
};

const Parallax = styled.div`
    width: 100%;
    position: relative;
    height: 200px;
    margin-bottom: 50px;
    background-size: cover;
    background-image: url("/assets/background_2.jpg");
    
    @media ${device.tablet} {
        height: 400px;     
        margin-bottom: 100px;   
    }
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
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.mainColor};
    
    @media ${device.tablet} {
        font-size: 32px;
    }
`;

const Answer = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.white};
    margin-top: 20px;
    
    @media ${device.tablet} {
        font-size: 20px;
        margin-top: 40px;
    }
`;

export default Faq;
