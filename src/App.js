import { useState } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import LoginPage from './LoginPage/index';
import RecipesTable from './RecipesTable/index';

function App() {
	const [token, setToken] = useState('');
	const [user, setUser] = useState({});

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>What to Eat</h1>
			</header>
			<Router>
				<Switch>
					<Route exact path='/recipes'>
						{() => {
							if (token.length) return <RecipesTable user={user} />;
						}}
					</Route>
					<Route path='/'>
						{token ? (
							<Redirect to='/recipes' />
						) : (
							<LoginPage
								setCredentials={(value) => {
									setToken(value.token);
									setUser(value.user);
									return <Redirect to='/main' />;
								}}
							/>
						)}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
