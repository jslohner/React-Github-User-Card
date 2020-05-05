import React from 'react';

import UserCard from './UserCard.js';

class GitHubUsers extends React.Component {
	render() {
		return (
			<div>
				<h2>Users</h2>
				<UserCard />
			</div>
		);
	}
}

export default GitHubUsers;
