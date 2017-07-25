import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


export default class FBLogin extends Component {

  responseFacebook(response){
    console.log(response);
  }

  componentClicked(){
    console.log('clicked!');
  }

  render(){
    return (
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={false}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
      />
    )
  }
}