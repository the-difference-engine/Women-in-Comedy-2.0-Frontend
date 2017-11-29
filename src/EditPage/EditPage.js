import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import EditForm from './components/EditForm';

class EditPage extends Component {

  submit = (values) => {
    console.log(values);
  }

  render() {
    console.log(this.props.userInfo);
    const { userInfo } = this.props;
    if (this.props.adminEdit) {
      return <div>
        You are in admin edit page.
        <EditForm initialValues={userInfo} onSubmit={this.submit}/>
      </div>
    }
    return (<div>
      <p>
        This is user edit page.
      </p>
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    adminEdit: state.adminEdit
  }
}

export default connect(mapStateToProps)(EditPage);
