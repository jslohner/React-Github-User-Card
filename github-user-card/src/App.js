import React from 'react';
import './App.css';

import GitHubUsers from './components/GitHubUsers.js';

class App extends React.Component {
	this.state = {
		mainUser: {},
		users: []
	}

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
