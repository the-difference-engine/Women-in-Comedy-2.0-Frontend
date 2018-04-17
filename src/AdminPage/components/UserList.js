import React, {Component} from 'react';
// import fetchAllUsers from '../actions/users_actions';




export default class UserList extends Component {

  renderList(){
    const users = this.props.users.userList;
      return  users.map(user => {
        return (
          <li key={user.id}>{user.firstName}</li>
        );
      });
  }

    render(){

      if(this.props.users.userList.length == 0){
        return <div>Lets Make some Admins!</div>
      }
  
      return (
        <ul>
          {this.renderList()}
        </ul>
        
      );
    }
};

//TODO
//Display admin status next to each name in list 
//Render out each user individually to update status? 
//Check the status of checkbox on edit form (previous feature?)
//create component for new USerList page( or add more markup on render of UserList)
