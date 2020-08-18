import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ArrowDown } from 'react-feather';

type Props = {
    question: string,
    answer: string
};

const Question: React.FC<Props> = ({ question, answer }) => {
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState<number>(0);

    const answerRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setActive(!active);
        setHeight(active || !answerRef.current ? 0 : answerRef.current.scrollHeight);
    };

    return (
        <QuestionContainer onClick={toggleAccordion}>
            <StyledQuestion className={active ? 'open' : ''} >
                <ArrowDown />{question}
            </StyledQuestion>
            <StyledAnswer
                style={{ maxHeight: `${height}px` }}
                ref={answerRef}>
                {answer}
            </StyledAnswer>
        </QuestionContainer>
    );
};

const QuestionContainer = styled.div`
    margin: 10px;
    border: 1px dashed ${({ theme }) => theme.mainColor};
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    
    &:hover p {
        color: ${({ theme }) => theme.black};
    }
`;

const StyledQuestion = styled.p`
    color: ${({ theme }) => theme.mainColor};
    transition: ${({ theme }) => theme.transition};
    font-size: 22px;
    display: flex;
    align-items: center;
    padding: 20px 10px 10px;
    
    svg {
        transition: transform ${({ theme }) => theme.transition};
        margin-right: 10px;
    }
    
    &.open {
        svg {
            transform: rotate(-180deg);
        }
    }
`;

const StyledAnswer = styled.p`
    padding: 0 45px;
    margin-bottom: 10px;
    font-size: 18px;
    overflow: hidden;
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.text};
    text-align: left;
`;

export default Question;
