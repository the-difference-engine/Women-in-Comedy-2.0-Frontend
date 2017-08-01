import React from 'react';
<<<<<<< HEAD
import FacebookLogin from 'react-facebook-login';
import '../css/header.css';
import '../css/images.css';



import '../css/header.css';

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

 



          <li>

              <form className="navbar-form">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                  <i className="glyphicon glyphicon-search"></i>
                </div>
              </form>

          </li>
          <li><a href="#" className="icon"><i className="fa fa-home"><p>HOME</p></i></a></li>
          <li><a href="#" className="icon"><i className="fa fa-calendar-o"><p>EVENTS</p></i></a></li>
          <li><a href="#" className="icon"><i className="fa fa-bell-o"><p>ALERTS</p></i></a></li>
          <li><a><img className="img-responsive" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /></a></li>
        </ul>
      </div>


    </nav>
  );
};
