import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import EditForm from './components/EditForm';

class EditPage extends Component {

  submit = (values) => {
    console.log(values);
  }

  render() {
    const { userInfo } = this.props;
    console.log(this.props.adminEdit);
    if (this.props.adminEdit) {
      return <div>
        <h3>Admin Edit</h3>
        <EditForm initialValues={userInfo} onSubmit={this.submit}/>
      </div>
    }
    return <div>
      <h3>User Edit</h3>
      <EditForm initialValues={userInfo} onSubmit={this.submit}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    adminEdit: state.adminEdit.isAdminEdit
  }
}

export default connect(mapStateToProps)(EditPage);
