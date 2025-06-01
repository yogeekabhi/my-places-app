import React, { useContext, useState } from 'react';
import Input from '../../shared/FormElements/Input';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MIN,
    VALIDATOR_REQUIRE
} from '../../utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/Card/Card';
import Button from '../../shared/FormElements/Button';
import { AuthContext } from '../../shared/context/auth-context';
const AuthUser = () => {
    const { login } = useContext(AuthContext);
    const [showSignup, setShowSignup] = useState(false);
    const [formState, inputHandler, setFormData] = useForm(
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

    const onSwitchHandler = () => {
        if (!showSignup) {
            setFormData(
                {
                    ...formState.inputs,
                    user_name: { value: '', isValid: false }
                },
                false
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    user_name: undefined
                },
                formState.inputs.email.isValid &&
                    formState.inputs.password.isValid
            );
        }

        setShowSignup((prevState) => !prevState);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(formState.inputs, '&&&&&formStateeeee');
        if (!showSignup) {
            login();
        }
    };

    return (
        <Card className='authentication'>
            <h2>User Login</h2>
            <hr />
            <form onSubmit={onFormSubmit}>
                {showSignup && (
                    <Input
                        id='user_name'
                        element='input'
                        type='text'
                        label='Name'
                        errorText='Please enter a minimum 3 characters name'
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />
                )}
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
                    {!showSignup ? 'LOGIN' : 'SIGN UP'}
                </Button>
                <Button type='button' onClick={onSwitchHandler}>
                    {`SWITCH TO ${showSignup ? 'LOGIN' : 'SIGN UP'}`}
                </Button>
            </form>
        </Card>
    );
};

export default AuthUser;
