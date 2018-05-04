import React, {Component} from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';


class UserList extends Component {

  renderList(){
    const users = this.props.users.userList;
      return  users.map(user => {
        return (
          <li 
            key={user.id}>      
            {user.firstName} {user.lastName}
            <AdminForm isSuperUser={user.superuser} adminStatus={user.admin} userId={user.id} fetchUser={this.props.fetchUser} updateSettings={this.props.updateSettings} />
          </li>
        );
      });
  }

    render(){

      if(this.props.users.userList.length == 0){
        return <strong>Loading....</strong>
      }
  
      return (
        <ol className="list-group col-sm-4">
          <p>{this.renderList()}</p>
        </ol>
        
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