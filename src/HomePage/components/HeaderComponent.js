import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import '../css/header.css';
import '../css/images.css';

export default (props) => {
  

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a id="nav-header" className="navbar-brand" href="#">Women in Comedy</a>
        </div>


{/*         <ul className="nav navbar-nav navbar-right">
          <RegisterModal /> 
          <LoginNavbar history={ this.props } />
        </ul> */}
      </div>
    </nav>
  );
};

