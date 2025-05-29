import React, { Fragment, useState } from 'react';
import Card from '../../shared/Card/Card';
import Button from '../../shared/FormElements/Button';
import Modal from '../../shared/Modal/Modal';
import Map from '../../shared/Map/Map';

const PlaceItem = (props) => {
	const [showMap, setShowMap] = useState(false);

	const onModalClose = () => setShowMap(false);

	return (
		<Fragment>
			{showMap && (
				<Modal
					show={showMap}
					onClose={onModalClose}
					header={props.address}
					contentClass='place-item__modal-content'
					footerClass='place-item__modal-actions'
					footer={<Button onClick={onModalClose}>CLOSE</Button>}
				>
					<div className='map-container'>
						{console.log({ props })}
						<Map center={props.coordinates} zoom={16} />
					</div>
				</Modal>
			)}
			<li className='place-item'>
				<Card className='place-item__content'>
					<div className='place-item__image'>
						<img src={props.image} alt={props.title} />
					</div>
					<div className='place-item__info'>
						<h2>{props.title}</h2>
						<h3>{props.address}</h3>
						<p>{props.description}</p>
					</div>
					<div className='place-item__actions'>
						<Button inverse onClick={() => setShowMap(true)}>
							VIEW ON MAP
						</Button>
						<Button to={`/places/${props.id}`}>EDIT</Button>
						<Button danger>DELETE</Button>
					</div>
				</Card>
			</li>
		</Fragment>
	);
};

export default PlaceItem;
