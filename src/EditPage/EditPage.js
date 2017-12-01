import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import EditForm from './components/EditForm';
import axios from 'axios';

class EditPage extends Component {

  submit = (values) => {
    let id = this.props.userInfo.id;
    axios({
      method: 'patch',
      url: 'http://localhost:9000/api/v1/users/' + id,
      data: values
    }).then(function(response){
      console.log(response.data);
    });
  }

  render() {
    const {userInfo} = this.props;
    var id = userInfo.id;
    console.log(userInfo.id);
    if (this.props.adminEdit) {
      return <div>
        <h3>Admin Edit</h3>
        <EditForm enableReinitialize={true} initialValues={userInfo} onSubmit={this.submit}/>
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
