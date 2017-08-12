// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Form from '../LoginPage/Form';
// import Feed from '../FeedPage/FeedPage';
//
// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { loggedIn: false };
//   }
//   renderForm(props) {
//     console.log('renderForm');
//     return (
//       <div>
//         <Form renderOn={props}/>
//       </div>
//     );
//   }
//
//   renderFeeds() {
//     console.log('renderfeed');
//     return (
//       <div>
//         <Feed />
//       </div>
//     );
//   }
//
//   renderOn() {
//     console.log('renderOn');
//     this.setState({loggedIn: true })
//   }
//
//   render () {
//     console.log('render');
//     console.log('Session state', this.props.confirmed_at);
//     const valid = sessionStorage.getItem('confirmed');
//     console.log(valid);
//     return valid ? this.renderFeeds() : this.renderForm(this.renderOn.bind(this));
//     // // return this.props.confirmed_at ? this.renderFeeds() : this.renderForm();
//   }
// }
//
//   const mapStateToProps = (state) => {
//     const { confirmed_at } = state.session;
//     console.log(confirmed_at);
//     return { confirmed_at };
//   }
//
// export default connect(mapStateToProps)(Home);
