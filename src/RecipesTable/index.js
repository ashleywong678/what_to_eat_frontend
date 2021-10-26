import './recipesTable.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import NoData from '../images/sad-plate.jpg';

const RecipesTable = ({ user }) => {
	const [recipes, setRecipes] = useState([]);

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
	user: PropTypes.object,
};

export default RecipesTable;
