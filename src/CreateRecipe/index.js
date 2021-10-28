import './createRecipe.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

const defaultForm = {
	title: '',
	mealType: 'any',
	ingredients: [''],
	instructions: [''],
	difficultyLevel: 'easy',
};

const deleteButton = (onClickFn) => (
	<button type='button' className='delete-button' onClick={onClickFn}>
		Delete
	</button>
);

const CreateRecipe = ({ token }) => {
	const [form, setForm] = useState(defaultForm);

	const setValue = (key, value) => {
		const newForm = { ...form, [key]: value };
		setForm(newForm);
	};

	// updates value in array
	const handleListChange = (index, value, type) => {
		const newArr = form[type];
		newArr[index] = value;
		setValue(type, newArr);
	};

	// add new item to array
	const handleAdd = (type) => {
		const newArr = form[type];
		newArr.push('');
		setValue(type, newArr);
	};

	// deletes item in array
	const handleDeleteItem = (type, index) => {
		const newArr = form[type];
		newArr.splice(index, 1);
		setValue(type, newArr);
	};

	const ingredientsRender = () => {
		return form.ingredients.map((ingredient, index) => (
			<>
				{`${index + 1}. `}
				<input
					key={`ingredient-${index}`}
					type='text'
					name={`ingredient-${index}`}
					value={ingredient}
					onChange={({ target }) =>
						handleListChange(index, target.value, 'ingredients')
					}
				/>
				{index !== 0
					? deleteButton(() => handleDeleteItem('ingredients', index))
					: null}
				<br />
			</>
		));
	};

	const instructionsRender = () => {
		return form.instructions.map((instruction, index) => (
			<>
				{`${index + 1}. `}
				<input
					key={`instruction-${index}`}
					type='text'
					name={`instruction-${index}`}
					value={instruction}
					onChange={({ target }) =>
						handleListChange(index, target.value, 'instructions')
					}
					required={index === 0}
				/>
				{index !== 0
					? deleteButton(() => handleDeleteItem('instructions', index))
					: null}
				<br />
			</>
		));
	};
	console.log('form', form);

	const handleSubmit = async (event) => {};

	return (
		<>
			<h2>Create</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>Title:</label>
				<input
					type='text'
					name='title'
					id='create-title'
					required
					value={form.title}
					onChange={({ target }) => setValue('title', target.value)}
				/>
				<br />
				<label htmlFor='ingredient-1'>Ingredients:</label>
				<br />
				{ingredientsRender()}
				<button type='button' onClick={() => handleAdd('ingredients')}>
					Add Ingredient
				</button>
				<br />

				<label htmlFor='instruction-1'>Instructions:</label>
				<br />
				{instructionsRender()}
				<button type='button' onClick={() => handleAdd('instructions')}>
					Add Instructions
				</button>

				<br />
				<label htmlFor='mealType'>Meal Type:</label>
				<select
					name='mealType'
					onChange={({ target }) => setValue('mealType', target.value)}
				>
					<option value='any'>Any</option>
					<option value='breakfast'>Breakfast</option>
					<option value='lunch'>Lunch</option>
					<option value='dinner'>Dinner</option>
					<option value='snack'>Snack</option>
					<option value='dessert'>Dessert</option>
				</select>
				<br />
				<label htmlFor='difficultyLevel'>Difficulty Level:</label>
				<select
					name='difficultyLevel'
					onChange={({ target }) => setValue('difficultyLevel', target.value)}
				>
					<option value='easy'>Easy</option>
					<option value='medium'>Medium</option>
					<option value='hard'>Hard</option>
				</select>
				<br />
				<label htmlFor='notes'>Notes:</label>
				<textarea
					name='notes'
					id='create-notes'
					rows='2'
					cols='30'
					value={form.notes || ''}
					onChange={({ target }) => setValue('notes', target.value)}
				/>
				<br />
				<button type='submit'>Create</button>
			</form>
		</>
	);
};

CreateRecipe.propTypes = {
	token: PropTypes.string,
};

export default CreateRecipe;
