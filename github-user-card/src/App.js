import React from 'react';
import axios from 'axios';

import './App.css';

import GitHubUsers from './components/GitHubUsers.js';

class App extends React.Component {
	state = {
		users: []
	}

	componentDidMount() {
		this.getUser('jslohner');
		this.getUserFollowers('jslohner');
	}

	getUser = user => {
		axios.get(`https://api.github.com/users/${user}`)
			.then(res => {
				this.setState({
					users: [...this.state.users, res.data]
				});
			})
			.catch(err => {
				console.log(err);
			})
	}

	getUserFollowers = user => {
		axios.get(`https://api.github.com/users/${user}/followers`)
			.then(res => {
				res.data.forEach(user => {
					this.getUser(user.login);
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		return (
			<div className='App'>
				<h1>GitHub User Cards</h1>
				<GitHubUsers users={this.state.users}/>
			</div>
		);
	}
}

export default App;
