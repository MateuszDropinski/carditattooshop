import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { anchorButtonStyles } from '../styledComponents/AnchorButton';
import { StyledSection, SectionHeader } from '../styledComponents';
import { device } from '../../utils/device';

const showSendingResult = (result: boolean | null) => {
    if (result !== null) {
        return result
            ? <Success>Mail został wysłany!</Success>
            : (
                <Error>
                    Niestety nie udało się wysłać maila, spróbuj przez własną skrzynke pocztową.
                    Nasz adres e-mail: carditattooshop@gmail.com.
                </Error>
            );
    }
};

type Inputs = {
    name: string,
    email: string,
    message: string,
    phone: string
};

const Form = () => {
    const [emailSent, setEmailSent] = useState<boolean | null>(null);
    const { handleSubmit, register, errors, reset } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        fetch('./php/contact.php', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then()
            .then(() => {
                setEmailSent(true);
                reset();
            })
            .catch((err) => {
                setEmailSent(false);
            });
    };

    return (
        <Section id='kontakt'>
            <SectionHeader>
                Zapisz się na termin!
            </SectionHeader>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Imię...*" name="name" ref={register({ required: true })} />
                { errors.name && <Error>Potrzebujemy abyś podał nam swoje imię!</Error>}
                <Input
                    placeholder="E-mail...*"
                    type="email"
                    name="email"
                    ref={register({
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Niepoprawny e-mail'
                        }
                    })} />
                { errors.email && (
                    errors.email.type === 'pattern'
                        ? (<Error>{errors.email.message}</Error>)
                        : (<Error>Potrzebujemy abyś podał nam swój e-mail!</Error>)
                )}
                <Textarea placeholder="Wiadomość...*" name="message" ref={register({ required: true })} />
                { errors.message && <Error>Potrzebujemy abyś podał nam więcej informacji!</Error>}
                <Input placeholder="Telefon...*" type="tel" name="phone" ref={register({ required: true })} />
                { errors.phone && <Error>Potrzebujemy abyś podał nam swój telefon!</Error>}
                <SubmitInput value="Wyślij!" type="submit" />
                {showSendingResult(emailSent)}
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
    width: 100%;
    margin-top: 20px;
    
    @media ${device.desktop} {
        width: 600px;
    }
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
    color: #cb5555;
    margin-top: 5px;
`;

const Success = styled.span`
    color: #6bcb55;
    margin-top: 5px;
`;

export default Form;
