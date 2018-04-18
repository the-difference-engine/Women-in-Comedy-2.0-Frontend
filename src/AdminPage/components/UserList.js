import React, {Component} from 'react';
import { connect } from 'react-redux';


//Try fetchUser or activeUser to grab user. Add activeUser back to reducers if needed
//Is fetch user a promise? How to grab data 
//Explore mapStateToDispatch options on detail and list components
class UserList extends Component {

  renderList(){
    const users = this.props.users.userList;
      return  users.map(user => {
        return (
          <li 
            className="list-group-item" 
            key={user.id}
            onClick={() => this.props.fetchUser(user.id)}>        
            {user.firstName} {user.lastName}
          </li>
        );
      });
  }

    render(){

      
      if(this.props.users.userList.length == 0){
        return <strong>Loading....</strong>
      }
  
      return (
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
        
      );
    }
};


//return value will be props into userlist
function mapStateToProps(state){
  return {
    allUsersList: state.allUsers
  };
}

export default connect(mapStateToProps)(UserList);