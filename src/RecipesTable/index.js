import './recipesTable.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import NoData from '../images/sad-plate.jpg';

const RecipesTable = ({ token }) => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API}/recipes`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => res.data)
			.then((res) => setRecipes(res))
			.catch((err) => console.log('error', err));
	}, [token]);

	const toRender = () =>
		!recipes.length ? (
			<img className='no-data' src={NoData} alt='sad-plate' />
		) : (
			recipes.map((recipe) => <p>{recipe.title}</p>)
		);

	return (
		<>
			<h2 className='recipe-table header'>My Recipes</h2>
			{toRender()}
		</>
	);
};

RecipesTable.propTypes = {
	token: PropTypes.string,
};

export default RecipesTable;
