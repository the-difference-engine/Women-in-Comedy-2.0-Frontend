import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import EditForm from './components/EditForm';


class EditPage extends Component {

  submit(values) {
    //Show confirmation box before information is updated
    if (window.confirm("Information will be updated. Continue?") == true) {
      {
        let id = this.props.userInfo.id;
        console.log(values)

        axios({
          method: 'put',
          url: process.env.REACT_APP_API_ENDPOINT + `users/${id}`,
          data: values
        }).then(function(response) {
          window.location.reload();
          //After confirmation, set editable boolean value to false
          //to go back to Feed event page
          this.props.editable(false);
        });
      }
      //If user decides not to change, go back to Event page as well
    } else {
      this.props.editable(false);
    }
  }

  render() {
    const {userInfo, adminEdit} = this.props;
    userInfo.first_name = userInfo.firstName
    userInfo.last_name = userInfo.lastName
    userInfo.about = userInfo.bio
    userInfo.video_link = userInfo.video
    console.log(userInfo)

    return (
      <div>
        <div>
          <EditForm adminEdit={adminEdit} initialValues={userInfo} onSubmit={this.submit.bind(this)}/>
        </div>
      </div>
    );
  }

}


function mapStateToProps(state) {
  return {adminEdit: state.adminEdit.isAdminEdit, allUsersList: state.allUsers }
}

export default connect(mapStateToProps)(EditPage);
