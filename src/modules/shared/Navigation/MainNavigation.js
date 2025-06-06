import React from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
	return (
		<MainHeader>
			<button className='main-navigation__menu-btn'>
				<span />
				<span />
				<span />
			</button>
			<h1 className='main-navigation__title'>
				<Link to='/'>Your Places</Link>
			</h1>
			<nav>
				<NavLinks />
			</nav>
		</MainHeader>
	);
};

export default MainNavigation;
