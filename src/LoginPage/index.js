import './login.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { validTypes } from './constants';
const defaultForm = { username: '', password: '' };

const LoginPage = ({ setCredentials, status }) => {
	const [type, setType] = useState('login');
	const [form, setForm] = useState(defaultForm);
	const [error, setError] = useState('');

	const setValue = (key, value) => {
		const newForm = { ...form, [key]: value };
		setForm(newForm);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		if (type === 'login') {
			await axios
				.post(`http://localhost:3001/api/log_in`, form)
				.then((res) => res.data)
				.then((res) => {
					setCredentials(res);
					setError('');
				})
				.catch((err) => {
					if (err.response && err.response.data) setError(err.response.data);
				});
		} else {
			await axios
				.post(`http://localhost:3001/api/sign_up`, form)
				.then((res) => res.data)
				.then((res) => setCredentials(res))
				.catch((err) => {
					if (err.response && err.response.data) setError(err.response.data);
				});
		}
	};

	return (
		<>
			<h1 className='login-title'>{validTypes[type]}</h1>
			<form onSubmit={handleFormSubmit}>
				<label htmlFor='username'>Username:</label>
				<input
					style={{ margin: '5px' }}
					type='username'
					name='username'
					id='username'
					required
					value={form.username}
					onChange={({ target }) => setValue('username', target.value)}
				/>
				<label htmlFor='password'>Password:</label>
				<input
					style={{ margin: '5px' }}
					type='password'
					name='password'
					id='password'
					required
					value={form.password}
					onChange={({ target }) => setValue('password', target.value)}
				/>
				<button type='submit'>{validTypes[type]}</button>
				{error ? <p id='login-error'>{error}</p> : null}
			</form>
			<button
				type='button'
				onClick={() => {
					setType(type === 'login' ? 'signup' : 'login');
					setError('');
				}}
			>
				{type === 'login' ? 'Sign-up' : 'Login'}
			</button>
		</>
	);
};

LoginPage.propTypes = {
	setCredentials: PropTypes.func,
	status: PropTypes.string,
};

export default LoginPage;
