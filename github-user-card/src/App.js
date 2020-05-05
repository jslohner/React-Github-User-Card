import React from 'react';
import axios from 'axios';

import './App.css';

import GitHubUsers from './components/GitHubUsers.js';

class App extends React.Component {
	state = {
		users: []
	}

	// componentDidMount() {
	// 	axios.get('https://api.github.com/users/jslohner')
	// 		.then(res => {
	// 			this.setState({
	// 				users: [...this.state.users, res.data]
	// 			});
	// 			// console.log(this.state.users);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		})
	//
	// 	axios.get('https://api.github.com/users/jslohner/followers')
	// 		.then(res => {
	// 			res.data.forEach(user => {
	// 				this.setState({
	// 					users: [...this.state.users, user]
	// 				});
	// 			})
	// 			// console.log(this.state.users);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		})
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
