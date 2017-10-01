import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions';
import './css/adminsearchbar.css';


class AdminSearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.updateSearch = this.updateSearch.bind(this);
	}
	componentWillMount() {
		const { fetchUsers } = this.props;
		this.props.fetchUsers();
	}

	updateSearch(event) {
		this.setState({ term: event.target.value.substr(0, 50) });
	}


	render() {
		const { fetchUsers } = this.props;
		console.log('users below here');
		console.log(fetchUsers);
		console.log('users below here');
		console.log(this.fetchUsers);
		const users = fetchUsers;

		let filteredUsers = users.filter((user) => {
			return user.name.indexOf(this.state.term) !== -1;
			}
		);
		console.log('filteredUsers');
		console.log(filteredUsers);
		return (
			<div id="left-side-bar-searchbar">
				<ul>
					{filteredUsers.map((user) => {
						return <div user={user} key={user.id} />
					})}
					<input type="text" value={this.state.term} onChange={this.updateSearch} placeholder="Search Users" />
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { fetchUsers } = state;
	return { fetchUsers };
}

export default connect(mapStateToProps, { fetchUsers })(AdminSearchBar);