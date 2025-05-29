import React from "react";
import UserList from "./UserList";
const Users = () => {
	const USERS = [
		{
			id: "u1",
			name: "John Doe",
			image: "https://i.imgur.com/snWlOrf.jpeg",
			places: "5"
		}
	];
	return <UserList item={USERS} />;
};

export default Users;
