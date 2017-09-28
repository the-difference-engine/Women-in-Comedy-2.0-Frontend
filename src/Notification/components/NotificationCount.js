import React, { Component } from 'react';

var Counter = React.createClass({
	getInitialState: function () {
		return {count = 0};
	},

	handleClick: function (){
		this.setState({
			count: this.state.count + 1,
		})
	},

	render: function (){
		return(
			<div>
				<button onClick={this.handleClick}>
				{this.state.count}
				</button>
			</div>
			);
	}

});


ReactDOM.render(<count/>,document.getElementById('app'));
