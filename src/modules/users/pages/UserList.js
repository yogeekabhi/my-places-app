import React from "react";
import UserItem from "./UserItem";
import "../css/UserList.css";
import Card from "../../shared/Card/Card";
const UserList = ({ item }) => {
	if (item.length === 0) {
		return (
			<Card>
				<h2>No Records Found!</h2>
			</Card>
		);
	}
	return (
		<ul>
			{item.map((user) => (
				<UserItem
					key={user.id}
					id={user.id}
					name={user.name}
					image={user.image}
					placeCount={user.places}
				/>
			))}
		</ul>
	);
};

export default UserList;
