import React, { Component } from 'react';
import Header from '../EventsPage/components/HeaderComponent';
import Bio from '../ActivityPage/components/Bio';
import Users from './components/Users';


class ActivityPage extends Component {
  constructor(props) {
		super(props);
		this.state = {
	    	events: [
		        {
		      		name:"Mary Swanson",
		      		photo:"my pix"
		        },
		        {
		        	name:"Jane Simton",
		        	photo:"pic"

		        },
		        {
		        	name:"Jack Terrier",
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