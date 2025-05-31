import React from 'react';
import Input from '../../shared/FormElements/Input';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MIN,
    VALIDATOR_REQUIRE
} from '../../utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/Card/Card';
import Button from '../../shared/FormElements/Button';
const AuthUser = () => {
    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );

    console.log({ formState }, '&&&&&&&auth');
    return (
        <Card className='authentication'>
            <h2>User Login</h2>
            <hr />
            <form onSubmit={(e) => e.preventDefault()}>
                <Input
                    id='email'
                    element='input'
                    type='email'
                    label='Email'
                    errorText='Please enter a valid email.'
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                    onInput={inputHandler}
                />
                <Input
                    id='password'
                    element='input'
                    type='password'
                    label='Password'
                    errorText='Please enter the mininum password(8 characters)'
                    validators={[VALIDATOR_MIN(8)]}
                    onInput={inputHandler}
                />

                <Button type='submit' disabled={!formState.isValid}>
                    LOGIN
                </Button>
            </form>
        </Card>
    );
};

export default AuthUser;
