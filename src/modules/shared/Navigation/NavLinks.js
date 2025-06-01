import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import { AuthContext } from '../context/auth-context';

const NavLinks = () => {
    const authDetails = useContext(AuthContext);

    const { isLoggedIn, logout } = authDetails;

    return (
        <ul className='nav-links'>
            <li>
                <NavLink to='/' exact>
                    ALL USERS
                </NavLink>
            </li>
            {isLoggedIn && (
                <>
                    <li>
                        <NavLink to='u1/places'>ALL PLACES</NavLink>
                    </li>
                    <li>
                        <NavLink to='/places/new'>ADD PLACES</NavLink>
                    </li>
                </>
            )}
            {!isLoggedIn && (
                <li>
                    <NavLink to='/auth'>Authentication</NavLink>
                </li>
            )}
            {isLoggedIn && (
                <li>
                    <button type='button' onClick={logout}>
                        LOGOUT
                    </button>
                </li>
            )}
        </ul>
    );
};

export default NavLinks;
