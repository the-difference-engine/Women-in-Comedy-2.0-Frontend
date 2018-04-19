import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import AdminForm from './components/AdminForm';
import { bindActionCreators } from 'redux';
import { fetchAllUsers, fetchUserInfo, activeUser } from '../actions'; //action creators


//TODO
//Fix on click - how to grab a current users info and pass down to detail for display
//
//display details with onClick function on list item (similar to books)


//FORM STUFF:
//extract checkbox portion and form 
//display component only if admin edit is true //create 
class CreateAdmin extends Component {

  componentDidMount() {
    const { fetchAllUsers, fetchUserInfo, activeUser } = this.props;
    fetchAllUsers();
    // fetchUserInfo();
  };

  render(){

    return(
      <div>
        <UserList users={this.props.allUsersList} fetchUser={this.props.fetchUser} />
        <UserDetail  activeUser={this.props.activeUser} />
      </div>
    ); 
  }

}

function mapStateToProps(state) {
  return { allUsersList: state.allUsers }
  // adminEdit: state.adminEdit.isAdminEdit,
};

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all of the reducers
  return bindActionCreators({ fetchAllUsers: fetchAllUsers, fetchUser: fetchUserInfo, activeUser: activeUser }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdmin);