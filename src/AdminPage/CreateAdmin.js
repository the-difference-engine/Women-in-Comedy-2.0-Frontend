import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  fetchAllUsers,
  fetchUserInfo,
  fetchUserFeeds,
  fetchConnectionStatus,
  fetchUserConnections,
  filterUsers
} from '../actions'


//create component 
//extract checkbox portion and form 
//display component only if admin edit is true 
//create 
class CreateAdmin extends Component {

  // componentDidMount() {
  //   const {fetchAllUsers} = this.props;
  //   fetchAllUsers();
  // }

  render(){
    return <div>Hi</div>
  }

}


function mapStateToProps(state) {
  return { allUsersList: state.allUsers }
}

// function mapStateToProps(state) {
//   return {adminEdit: state.adminEdit.isAdminEdit, allUsersList: state.allUsers }
// }


export default connect(mapStateToProps)(CreateAdmin);