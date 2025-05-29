import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

const UserPlaces = () => {
	const { userId } = useParams();
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
	console.log({ userId });
	return (
		<PlaceList
			items={DUMMY_PLACES.filter((place) => place.creator === userId)}
		/>
	);
};

export default UserPlaces;
