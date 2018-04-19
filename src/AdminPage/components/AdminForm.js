import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios';

 
class AdminForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      value: "False"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

//delete axios if needed. That is experienmental
//check post route - is this right? 
  handleSubmit(event, userId = this.props.userId) {
    console.log(userId)
    const request = axios({
      method: "post",
      url: process.env.REACT_APP_API_URL_DEV + '/users/info',
      headers: {"id": userId},
    })
    request.then(data => console.log(data))

    
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
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
 
export default reduxForm({form: 'userEdit'})(AdminForm)
