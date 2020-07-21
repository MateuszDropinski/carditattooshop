import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { anchorButtonStyles } from '../styledComponents/AnchorButton';
import { StyledSection, SectionHeader } from '../styledComponents';

type Inputs = {
    name: string,
    email: string,
    message: string,
    phone: string
};

const Form = () => {
    const { handleSubmit, register, errors } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        console.log(data);
    };

    return (
        <Section>
            <SectionHeader>
                Zapisz się na termin już dziś!
            </SectionHeader>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Imię...*" name="name" ref={register({ required: true })} />
                { errors.name && <Error>Potrzebujemy abyś podał nam swoje imię!</Error>}
                <Input placeholder="E-mail...*" type="email" name="email" ref={register({ required: true })} />
                { errors.email && <Error>Potrzebujemy abyś podał nam swój e-mail!</Error>}
                <Textarea placeholder="Wiadomość...*" name="message" ref={register({ required: true })} />
                { errors.message && <Error>Potrzebujemy abyś podał nam więcej informacji!</Error>}
                <Input placeholder="Telefon...*" type="tel" name="phone" ref={register({ required: true })} />
                { errors.phone && <Error>Potrzebujemy abyś podał nam swój telefon!</Error>}
                <SubmitInput value="Wyślij!" type="submit" />
            </FormContainer>
        </Section>
    );
};

const Section = styled(StyledSection)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-top: 20px;
`;

const Input = styled.input`
    margin-top: 20px;
    padding: 10px;
    border-radius: 2px;
    font-size: 16px;
    border: 1px solid black;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    
    &:first-child {
        margin-top: 0;
    }
`;

const SubmitInput = styled(Input)`
    ${anchorButtonStyles};
    outline: none;
    align-self: center;
`;

const Textarea = styled.textarea`
    font-family: inherit;
    margin-top: 20px;
    padding: 10px;
    border-radius: 2px;
    border: 1px solid black;
    font-size: 16px;
    resize: none;
    height: 150px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const Error = styled.span`
    color: red;
    margin-top: 5px;
`;

export default Form;
