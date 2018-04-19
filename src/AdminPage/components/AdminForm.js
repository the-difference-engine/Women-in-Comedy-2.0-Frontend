import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';

 
class AdminForm extends Component {

  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }

  renderCheckbox(field) {
    return (<div>
      <label className="checkbox-inline"><input type="checkbox" {...field.input}/>{field.label}</label>
    </div>)
  }

 
  render() {
    return (
      <div>
        <form model="user" onSubmit={(val) => this.handleSubmit(val)}>
          <label>Switch User to Admin?</label><br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
 
// No need to connect()!
export default AdminForm;