import React from 'react';
import './PlaceList.css';
import Card from '../../shared/Card/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/FormElements/Button';

const PlaceList = (props) => {
	console.log(props.items.length, props, '&&&1');
	if (props.items.length === 0) {
		return (
			<div className='place-list center'>
				<Card>
					<h2>No places found, maybe create one?</h2>
					<Button to='/places/new'>Share Place</Button>
				</Card>
			</div>
		);
	}

	return (
		<ul className='place-list'>
			{props.items.map((place) => (
				<PlaceItem
					key={place.id}
					id={place.id}
					image={place.imageUrl}
					title={place.title}
					address={place.address}
					description={place.description}
					creatorId={place.creator}
					coordinates={place.location}
				/>
			))}
		</ul>
	);
};

export default PlaceList;
