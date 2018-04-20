import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios';
import UserList from './UserList';


 
class AdminForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      value: '',
      userMade: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  //create get function to pull userInfo 
 //call function 
//delete axios if needed. That is experienmental

  handleSubmit(event, userId = this.props.userId) {
    console.log(event)
    const updateAdmin = this.props.updateSettings(userId, "true")
    
    alert("Admin Privlages Updated" +  " " + this.state.value)
    event.preventDefault()
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        Create Admin?
          <input type="text" name="admin" onChange={this.handleChange} value={this.state.value} />
          <input type="checkbox" name="admin" value="1"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    adminEdit: state.adminEdit 
  }
};

export default connect(mapStateToProps)(AdminForm);
 
// export default reduxForm({form: 'userEdit'})(AdminForm)




//Register

// onSubmit(values) {
//   axios.post(process.env.REACT_APP_API_URL_DEV + 'users', values).then(payload => {
//     this.setState({userMade: true});
//   }).catch(err => {
//     alert(err)
//   });

    // console.log(userId)
    // const request = axios({
    //   method: "patch",
    //   url: process.env.REACT_APP_API_URL_DEV + `/users/${userId}`,
    //   headers: {"id": userId},
    // }).then(data => console.log(data.data))