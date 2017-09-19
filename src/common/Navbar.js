import React from 'react';
import { Link } from 'react-router-dom'
import './css/navbar.css';

const userId = sessionStorage.getItem('userId');
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link id="nav-header" className="navbar-brand" to="/feed">Women in Comedy</Link>
        </div>


        <ul className="nav navbar-nav navbar-right">
          <li>

              <form className="navbar-form">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                  <i className="glyphicon glyphicon-search"></i>
                </div>
              </form>

          </li>
          <li><Link to="/feed"><i className="fa fa-home"><p>HOME</p></i></Link></li>
          <li><Link to="/events"><i className="fa fa-calendar-o"><p>EVENTS</p></i></Link></li>
          <li><a href="#" className="icon"><i className="fa fa-bell-o"><p>ALERTS</p></i></a></li>
          <li><Link to={`/profile/${userId}`}><img className="img-responsive" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
