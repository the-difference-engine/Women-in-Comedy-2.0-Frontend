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
  //USE NET WORK RESPONSE/PREVIEW IN CONSOLE TO TEST RESPONSES!!!
  handleSubmit(event, userId = this.props.userId) {
    event.preventDefault();
    // let answer;
    // response == "1" ? answer = "true" : answer == "false";
    this.props.updateSettings(userId);
    
    alert("Admin Privlages Updated" +  " " + this.state.value)
    this.setState({ value : '' }); //re-render and clear field 
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
          <input type="checkbox" name="MEEEE" value="1"/>
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