import React, { Component } from "react";
import { Dialog, TextField } from "material-ui";
import { connect } from "react-redux";
import { mailUsers } from "../../actions/index";

class EmailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  grabText = () => {
    const email = document.getElementsByClassName("email-modal")[0].value;
    const subject = document.getElementsByClassName("email-subject")[0].value;
    console.log(subject);
    {
      this.props.mailUsers(email, subject);
    }
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <br />
        <button onClick={this.handleOpen}>Email Users</button>
        <Dialog
          autoScrollBodyContent={true}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Subject: <input className="email-subject" />
          <br />
          <br />
          <textarea className="email-modal" />
          <br />
          <button onClick={this.grabText}>Submit</button>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  null,
  { mailUsers }
)(EmailModal);
