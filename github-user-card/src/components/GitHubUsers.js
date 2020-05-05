import React from 'react';

import UserCard from './UserCard.js';

class GitHubUsers extends React.Component {
	render() {
		return (
			<div>
				<h2>Users</h2>
				{
					this.props.users.map(userData => {
						return <UserCard key={userData.id} userData={userData}/>
					})
				}
			</div>
		);
	}
}

export default GitHubUsers;
