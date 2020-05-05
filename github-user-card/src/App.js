import React from 'react';
import axios from 'axios';

import './App.css';

import GitHubUsers from './components/GitHubUsers.js';

class App extends React.Component {
	state = {
		mainUser: {},
		users: []
	}

	// componentDidMount() {
	// 	axios.get()
	// }

	render() {
		return (
			<div className='App'>
				<h1>GitHub User Cards</h1>
				<GitHubUsers />
			</div>
		);
	}
}

export default App;
