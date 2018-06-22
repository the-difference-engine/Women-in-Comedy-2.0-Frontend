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
    {
      this.props.mailUsers(email);
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
