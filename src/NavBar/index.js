import './navbar.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavBar = () => {
	const [location, setLocation] = useState(window.location.pathname);

	return (
		<Router>
			<div className='nav-bar'>
				<Link to='/recipes' onClick={() => setLocation('')}>
					<h1 className='main-heading'>What to Eat</h1>
				</Link>
				<Link
					className={`nav-link ${location === 'new' && 'hover-background'}`}
					to='/recipes/new'
					onClick={() => setLocation('new')}
				>
					Create Recipe
				</Link>
				<Link
					className={`nav-link ${location === 'random' && 'hover-background'}`}
					to='/random'
					onClick={() => setLocation('random')}
				>
					Random
				</Link>
				<Link className='nav-link' to='/logout' onClick={() => setLocation('')}>
					Logout
				</Link>
			</div>
		</Router>
	);
};

NavBar.propTypes = {
	location: PropTypes.object,
};

export default NavBar;
