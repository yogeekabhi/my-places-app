import React, { useEffect, useReducer } from 'react';
import './Input.css';
import { validate } from '../../utils/validators';

const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return {
				...state,
				isValid: validate(action.payload, action.validators),
				value: action.payload
			};

		case 'TOUCH':
			return {
				...state,
				isTouched: true
			};

		default:
			return state;
	}
};

const Input = (props) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: props.value || '',
		isValid: props.valid || false,
		isTouched: false
	});

	const onInputChange = (e) => {
		dispatch({
			type: 'CHANGE',
			payload: e.target.value,
			validators: props.validators
		});
	};

	const onTouchChange = () => {
		dispatch({ type: 'TOUCH' });
	};

	useEffect(() => {
		props.onInput(props.id, inputState.value, inputState.isValid);
	}, [props.id, inputState.value, inputState.isValid]);

	console.log(inputState, '********11******');

	return (
		<div
			className={`form-control ${
				!inputState.isValid && inputState.isTouched
					? 'form-control--invalid'
					: ''
			}`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			{props.element === 'input' ? (
				<input
					id={props.id}
					type={props.type}
					placeholder={props.placeholder}
					onChange={onInputChange}
					onBlur={onTouchChange}
					value={inputState.value}
				/>
			) : (
				<textarea id={props.id} rows={props.rows || 3} onBlur={onTouchChange} />
			)}
			{!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
		</div>
	);
};

export default Input;
