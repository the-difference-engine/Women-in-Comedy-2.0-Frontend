import React, { Component } from "react";
import { Dialog, TextField } from "material-ui";
import { connect } from "react-redux";
import { mailUsers } from "../../actions/index";
import "../css/modal.css";

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
    const subject = document.getElementsByClassName("email-subject")[0].value;
    const email = document.getElementsByClassName("email-modal")[0].value;
    
    console.log(subject);
    console.log(email);
    
    {
      this.props.mailUsers(email, subject);
    }
    this.setState({ open: false });
  };
  
  render() {
    return (
      <div className="modal-style">
        <br />
        <button className="btn emailButtonStyle" onClick={this.handleOpen}>
          Email Users
        </button>
        <Dialog
          autoScrollBodyContent={true}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <strong>
            <p>Subject: </p>
          </strong>
          <input className="email-subject" />

          <br />
          <br />
          <strong>
            <p>Enter Your Message Below: </p>
          </strong>
          <textarea className="email-modal" />
          <br />
          <a className="buttonStyle" onClick={this.grabText}>
            Submit
          </a>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  null,
  { mailUsers }
)(EmailModal);
