import React from 'react';
import '../css/header.css';

export default (props) => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a id="nav-header" className="navbar-brand" href="#">Women in Comedy</a>
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
                    <li><a href="#" className="icon"><i className="fa fa-home"><p>HOME</p></i></a></li>
                    <li><a href="#" className="icon"><i className="fa fa-calendar-o"><p>EVENTS</p></i></a></li>
                    <li><a href="#" className="icon"><i className="fa fa-bell-o"><p>ALERTS</p></i>
                        <span className="badge">123</span>
                    </a></li>
                    <li><a><img className="img-responsive" src="https://u.o0bc.com/avatars/no-user-image.gif"
                                alt=""/></a></li>
                </ul>
            </div>


        </nav>
    );
};