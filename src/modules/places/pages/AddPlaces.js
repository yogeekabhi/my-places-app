import React, { useCallback, useReducer } from 'react';
import './AddPlaces.css';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';

const AddPlaces = () => {
	const [formState, inputHandler] = useForm(
		{
			title: {
				value: '',
				isValid: false
			},
			description: {
				value: '',
				isValid: false
			},
			address: {
				value: '',
				isValid: false
			}
		},
		false
	);

	const addPlaceSubmit = (e) => {
		e.preventDefault();
		console.log(formState.inputs, '@@submit');
	};

	console.log({ formState });

	return (
		<form onSubmit={addPlaceSubmit} className='place-form'>
			<Input
				id='title'
				element='input'
				type='text'
				label='Title'
				errorText='Please enter a valid title.'
				validators={[VALIDATOR_REQUIRE()]}
				onInput={inputHandler}
			/>
			<Input
				id='description'
				element='input'
				type='textarea'
				label='Description'
				errorText='Please enter a valid description.'
				validators={[VALIDATOR_MINLENGTH(5)]}
				onInput={inputHandler}
			/>
			<Input
				id='address'
				element='input'
				type='textarea'
				label='Address'
				errorText='Please enter a valid address.'
				validators={[VALIDATOR_REQUIRE()]}
				onInput={inputHandler}
			/>
			<Button type='submit' disabled={!formState.isValid}>
				ADD PLACE
			</Button>
		</form>
	);
};

export default AddPlaces;
