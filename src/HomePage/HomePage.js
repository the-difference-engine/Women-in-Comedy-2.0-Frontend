import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FBLogin from '../Facebook/components/FacebookLoginComponent';
import logo from '../images/women_curl.jpg'




  





class HomePage extends Component {
  
  

	render () {
		return (
			<div id="events-page">
				<HeaderComponent />
        <div> <img src={logo}className="splash" alt="splash" /><FBLogin /></div>
        


			</div>

      
		);
	}
}



export default HomePage;
