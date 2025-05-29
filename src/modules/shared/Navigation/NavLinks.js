import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
	return (
		<ul className='nav-links'>
			<li>
				<NavLink to='/' exact>
					ALL USERS
				</NavLink>
			</li>
			<li>
				<NavLink to='u1/places'>ALL PLACES</NavLink>
			</li>
			<li>
				<NavLink to='/places/new'>ADD PLACES</NavLink>
			</li>
			<li>
				<NavLink to='/auth'>Authentication</NavLink>
			</li>
		</ul>
	);
};

export default NavLinks;
