import _ from 'lodash';
import React from 'react';
import '../css/profileconnections.css';
 
 const ProfileConnections = (props) => {
  // constructor(props) {
  //     super(props);

  //     this.state = { statusHolder: tenRandom }

  //     this.changeStatus = this.changeStatus.bind(this);
  // }

  // changeStatus(event) {
  //     if(this.state.statusHolder === tenRandom) {
  //         this.setState({ statusHolder: userConnections});
  //     } else if(this.state.statusHolder === userConnections) {
  //         this.setState({ statusHolder: tenRandom });
  //     }
  // }

  const { userConnections } = props;
  const users = userConnections;

  function getUsers(result, users, count) {
    if(users.length === 0 || count === 10) {
      return result;
    } else {
      var x = Math.floor(Math.random() * users.length);
      result.push(users.splice(x, 1)[0]);
      ++count;
      getUsers(result, users, count);
    }
    return result;
  }
  
  var displayAll = renderConnections(users);
  console.log("Display all below!")
  console.log(displayAll)

  function onClickContacts() {
    renderConnections(users);
  }

  return (
      <div id="boop">
          <div id="right-side-bar-content">
              <div className="container">
                  <h4>Connections({userConnections.length})</h4>
              </div>
              <div className="user-list">
                  <div className="container">
                      <div>{renderConnections(getUsers([], users, 0))}</div>
                  </div>
                </div>
        <div className="onclick" onClick={onClickContacts}><p className="red">See All Connections</p>
        </div>
          </div>
      </div>
  );
}
const renderConnections = (connections) => {
  return _.map(connections, connection => {
      return (
        <div key={connection.id}>
          <div id="user-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /><a href={"http://localhost:3000/profile/" + connection.id}>{connection.firstName} {connection.lastName}</a>
          </div>
        </div>
      );
  });
}
export default ProfileConnections;