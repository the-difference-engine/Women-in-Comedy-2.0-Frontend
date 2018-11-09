import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { Link } from 'react-router-dom';
import RegisterFrom from "../components/RegisterForm";
import Dialog from "material-ui/Dialog";
import RegisterForm from "./RegisterForm";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import '../css/register.css'

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <div>
          {" "}
        </div>
        <Link id="registerBtn" to='#' label="Scrollable Dialog" onClick={this.handleOpen}><h2>create new account</h2></Link>
        <Dialog
          autoScrollBodyContent={true}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <RegisterForm> </RegisterForm>
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default RegisterModal;