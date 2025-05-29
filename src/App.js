import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import Users from './modules/users/pages/Users';
import AddPlaces from './modules/places/pages/AddPlaces';
import MainNavigation from './modules/shared/Navigation/MainNavigation';
import UserPlaces from './modules/places/pages/UserPlaces';
import UpdatePlace from './modules/places/pages/UpdatePlace';

const App = () => {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Switch>
					<Route path='/' exact>
						<Users />
					</Route>
					<Route path='/:userId/places' exact>
						<UserPlaces />
					</Route>
					<Route path='/places/new' exact>
						<AddPlaces />
					</Route>
					<Route path='/places/:placeId' exact>
						<UpdatePlace />
					</Route>
					<Redirect to='/' />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
