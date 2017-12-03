import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import EditForm from './components/EditForm';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

class EditPage extends Component {


  submit = (values) => {
    //Show confirmation box before information is updated
    if (window.confirm("Information will be updated. Continue?") == true) {
      {
        let id = this.props.userInfo.id;
        let history = this.props.history;
        axios({
          method: 'patch',
          url: 'http://localhost:9000/api/v1/users/' + id,
          data: values
        }).then(function(response) {
          // history.push('/profile/' + id);
        });
        // this.props.editUserEnable = false;
      }
    } else {
      return null;
    }
  }

  render() {
    console.log(this.props.history);
    const {userInfo} = this.props;
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
  return {adminEdit: state.adminEdit.isAdminEdit}
}

export default connect(mapStateToProps)(EditPage);
