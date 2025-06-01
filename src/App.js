import React, { useCallback, useState } from 'react';
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
import AuthUser from './modules/users/pages/AuthUser';
import { AuthContext } from './modules/shared/context/auth-context';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    let routes;
    if (isLoggedIn) {
        routes = (
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
        );
    } else {
        routes = (
            <Switch>
                <Route path='/' exact>
                    <Users />
                </Route>
                <Route path='/:userId/places' exact>
                    <UserPlaces />
                </Route>
                <Route path='/auth' exact>
                    <AuthUser />
                </Route>
                <Redirect to='/auth' />
            </Switch>
        );
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            <Router>
                <MainNavigation />
                <main>{routes}</main>
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
