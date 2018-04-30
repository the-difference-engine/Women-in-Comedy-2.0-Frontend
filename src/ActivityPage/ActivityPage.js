import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUserInfo, fetchUsers} from '../actions';
import Header from '../EventsPage/components/HeaderComponent';
import Bio from './components/Bio';
import Users from './components/Users';

class ActivityPage extends Component {
	componentWillMount() {
		const userId = sessionStorage.getItem('userId');
		const { fetchUserInfo, fetchUsers } = this.props;
		if (userId !== null) {
			fetchUserInfo(userId);
		}

		fetchUsers();
		if(userId === null) {
			var x = Math.floor(Math.random() * 9);


			fetchUserInfo(x + 1);
		}
	}

	render () {
		const { userInfo, usersInfo } = this.props;
		return (
			<div>
				<Header />
				<Bio userInfo={userInfo} />
				<Users usersInfo={usersInfo} />
			</div>
		);
	};
}

const mapStateToProps = (state) => {

	const { userInfo, usersInfo } = state;
	return { userInfo, usersInfo };
}
export default connect(mapStateToProps, { fetchUserInfo, fetchUsers })(ActivityPage);
