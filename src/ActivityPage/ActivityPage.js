import React, { Component } from 'react';
import Header from '../EventsPage/components/HeaderComponent';
import Bio from '../ActivityPage/components/Bio';
import Users from './components/Users';
import YourActivity from './ActivityPage';
import feedSeaech from './ActivityPage';

class ActivityPage extends Component {
  constructor(props) {
		super(props);
		this.state = {
	    	events: [
		        {
		      		name:"Dawn French",
		      		photo:"my pix"
		        },
		        {
		        	name:"Chelsea Handler",
		        	photo:"pic"

		        },
		        {
		        	name:"Catharine Tate",
		        	photo:"mypiccc"
		        },
		        {
		        	name:"Grace Jones",
		        	photo:"picture"
		        },
		       	{
		        	name:"Brianna Parkes",
		        	photo:"meepic"
		        },
		        {
		        	name:"Jennifer Saunders",
		        	photo:"mine"
		        },
		        {
		        	name:"Sarah Silverman",
		        	photo:"McPic"
		        },
		        {
		       		name:"Vera Smith",
		        	photo:"mypicturealbum"
		        },
		        {
		        	name:"Maria Totti",
		        	photo:"mypicturebook"
		        },
		        {
		        	name:"Gretchen Williams",
		        	photo:"mypicture"
		        }],
	    };
	}

	render () {
		return (
			<div>
				< Header />
				< Bio />
				< Users events={this.state.events} />

			</div>
		);
	}
}

export default ActivityPage;