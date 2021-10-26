import './navbar.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';

const NavBar = () => {
	const location = window.location.pathname;
	console.log('location', location);

	return (
		<Router>
			<div className='nav-bar'>
				<Link to='/recipes'>
					<h1 className='main-heading'>What to Eat</h1>
				</Link>
				<Link className='nav-link' to='/recipes/new'>
					Create Recipe
				</Link>
				<Link className='nav-link' to='/random'>
					Random
				</Link>
				<Link className='nav-link' to='/logout'>
					Logout
				</Link>
			</div>
		</Router>
	);
};

NavBar.propTypes = {
	history: PropTypes.object,
};

export default NavBar;
