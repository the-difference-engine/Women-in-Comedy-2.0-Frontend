import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserList from './components/UserList';
import { bindActionCreators } from 'redux';
import { fetchAllUsers, fetchUserInfo } from '../actions';


//create component 
//extract checkbox portion and form 
//display component only if admin edit is true 
//create 
class CreateAdmin extends Component {

  componentDidMount() {
    const {fetchAllUsers} = this.props;
    const feed = fetchAllUsers()

  }

  render(){

    return(
      <div>
        <UserList users={this.props.allUsersList} />
        This is the Admin Page. User-Detail and User List will be rendered components here.
      </div>
    ); 
  }

}


function mapStateToProps(state) {
  return { allUsersList: state.allUsers }
}

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all of the reducers
  return bindActionCreators({ fetchAllUsers: fetchAllUsers }, dispatch)
}


// function mapStateToProps(state) {
//   return {adminEdit: state.adminEdit.isAdminEdit, allUsersList: state.allUsers }
// }


export default connect(mapStateToProps, mapDispatchToProps)(CreateAdmin);