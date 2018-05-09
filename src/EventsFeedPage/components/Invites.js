import React, { Component } from 'react';
import {AutoComplete} from 'material-ui';
import {
  fetchAllUsers,
  fetchUserInfo,
  fetchUserFeeds,
  fetchConnectionStatus,
  fetchUserConnections,
  filterUsers
} from '../../actions'
import {connect} from 'react-redux';

class Invites extends Component {
/*
  componentDidMount() {
    const {fetchAllUsers} = this.props;
    fetchAllUsers();
  }*/
  onItemClicked(item) {
      //const {fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchConnectionStatus} = this.props;
  
      const sender_id = sessionStorage.getItem('userId');
      const receiver_id = item.value
      //fetchUserInfo(item.value);
      //fetchUserFeeds(item.value);
      //fetchUserConnections(item.value);
      //fetchConnectionStatus({sender_id, receiver_id});
      alert(receiver_id);
      //this.props.history.push(`/profile/${item.value}`);
  }

  render() {
      return (
          <div>
              Test for invite component
              <div className="input-group">
              <AutoComplete filter={AutoComplete.fuzzyFilter} dataSource={this.props.users} maxSearchResults={10} hintText="Search" underlineShow={false} hintStyle={styles.hint} inputStyle={styles.input} textareaStyle={styles.text} onNewRequest={(item) => this.onItemClicked(item)}/>
              <i className="glyphicon glyphicon-search"></i>
            </div> 
           </div>
      );
  }
}
const styles = {
    container: {
      verticalAlign: 'top',
      height: '30px'
    },
    filter: {
      height: '30px',
      textTransform: 'none',
      backgroundColor: 'white',
      borderRadius: '20px'
    },
    input: {
      height: '30px',
      backgroundColor: 'white',
      borderRadius: '20px'
  
    },
    hint: {
      zIndex: 1,
      marginBottom: '7px',
      marginLeft: '10px'
    },
    text: {
      marginLeft: '10px'
    }
}

function mapStateToProps({allUsers}) {
    const {filterUserList} = allUsers;
    const users = filterUserList.map(user => {
      return {text: `${user.firstName} ${user.lastName}`, value: user.id}
    });
  
    return {users};
  }

export default connect(mapStateToProps, {
  fetchAllUsers,
  fetchUserInfo,
  fetchUserFeeds,
  fetchConnectionStatus,
  fetchUserConnections,
  filterUsers
}) (Invites);