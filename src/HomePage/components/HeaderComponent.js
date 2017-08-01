import React from 'react';
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


        <ul className="nav navbar-nav navbar-right">
          
          <li><a href="http://localhost:8080/users/sign_up" className="icon"><i className="fa fa-user-plus"><p>SignUp</p></i></a></li>
          <li><a href="http://localhost:8080/users/sign_in" className="icon"><i className="fa fa-sign-in"><p>SignIn</p></i></a></li>
          <li><a href="http://localhost:8080/users/auth/facebook" className="icon"><i className="fa fa-facebook-square" ><p>Facebook Login</p></i></a></li>
        </ul>
      </div>
    </nav>
      
      
    
  );
};

 
