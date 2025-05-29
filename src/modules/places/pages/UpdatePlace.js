import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/Card/Card';

const DUMMY_PLACES = [
	{
		id: 'p1',
		title: 'Empire State Building',
		description: 'One of the most famous sky scrapers in the world!',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
		address: '20 W 34th St, New York, NY 10001',
		location: {
			lat: 40.7484405,
			lng: -73.9878584
		},
		creator: 'u1'
	},
	{
		id: 'p2',
		title: 'Time Square',
		description: 'One of the most famous place in the world!',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
		address: '20 W 34th St, New York, NY 10001',
		location: {
			lat: 40.7484405,
			lng: -73.9878584
		},
		creator: 'u2'
	}
];

const UpdatePlace = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { placeId } = useParams();

	const handleUpdateSubmit = (e) => {
		e.preventDefault();
		console.log({ formState });
	};

	const [formState, inputHandler, setFormData] = useForm(
		{
			title: {
				value: '',
				isValid: false
			},
			description: {
				value: '',
				isValid: false
			}
		},
		false
	);

	const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

	useEffect(() => {
		console.log({ identifiedPlace });
		if (identifiedPlace) {
			setFormData(
				{
					title: {
						value: identifiedPlace.title,
						isValid: true
					},
					description: {
						value: identifiedPlace.description,
						isValid: true
					}
				},
				true
			);
		}
		setIsLoading(false);
	}, [identifiedPlace]);

	if (!identifiedPlace) {
		return (
			<Card>
				<h2>Could not find place!</h2>
			</Card>
		);
	}

	if (isLoading) {
		return <h2>Loading...</h2>;
	} else {
		return (
			<form className='place-form' onSubmit={handleUpdateSubmit}>
				<Input
					id='title'
					element='input'
					type='text'
					label='Title'
					errorText='Please enter a title.'
					validators={[VALIDATOR_REQUIRE()]}
					onInput={inputHandler}
					value={formState.inputs.title.value}
					valid={formState.inputs.title.isValid}
				/>
				<Input
					id='description'
					element='input'
					type='textarea'
					label='Description'
					errorText='Please enter a valid description (min 5 characters).'
					validators={[VALIDATOR_MINLENGTH(5)]}
					onInput={inputHandler}
					value={formState.inputs.description.value}
					valid={formState.inputs.description.isValid}
				/>

				<Button type='submit' disabled={!formState.isValid}>
					UPDATE PLACE
				</Button>
			</form>
		);
	}
};

export default UpdatePlace;
