import _ from "lodash";
import React, { Component } from "react";
import "../css/profileconnections.css";
import axios from "axios";

class ProfileConnections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "ten",
      connections_string: "See All Connections"
    };
  }
  componentWillMount() {
    const { connections } = this.props;
    const users = connections;
    const displayAll = renderConnections(connections);
    const displayTenNames = this.getUsers([], displayAll, 0);
  }
  onClickContacts() {
    if (this.state.term === "ten") {
      this.setState({ term: "all" });
      this.setState({ connections_string: "Close All Connections" });
      // variable = document.querySelector('.red');
      // variable.innerHTML = "Close All Connections";
    } else if (this.state.term === "all") {
      this.setState({ term: "ten" });
      this.setState({ connections_string: "See All Connections" });

      // variable = document.querySelector('.red');
      // variable.innerHTML = "See All Connections";
    }
  }
  getUsers(result, users, count) {
    if (users.length === 0 || count === 10) {
      return result;
    } else {
      var x = Math.floor(Math.random() * users.length);
      result.push(users.splice(x, 1)[0]);
      ++count;
      this.getUsers(result, users, count);
    }
    return result;
  }
  getAllUsers(result, users, count) {
    if (users.length === 0) {
      return result;
    } else {
      var x = Math.floor(Math.random() * users.length);
      result.push(users.splice(x, 1)[0]);
      ++count;
      this.getAllUsers(result, users, count);
    }
    return result;
  }

  render() {
    const { connections } = this.props;
    const users = connections;
    const displayNames = [];

    const displayAll = renderConnections(users);

    if (this.state.term === "ten") {
      displayNames.push(this.getUsers([], displayAll, 0));
    } else if (this.state.term === "all") {
      displayNames.push(this.getAllUsers([], displayAll, 0));
    }

    return (
      <div id="boop">
        <div id="right-side-bar-content">
          <div className="container">
            <h4>Connections({connections.length})</h4>
          </div>
          <div className="user-list">
            <div className="container">
              <div>{displayNames}</div>
            </div>
          </div>

          <div className="onclick" onClick={this.onClickContacts.bind(this)}>
            <p
              style={{ marginLeft: "-15px", fontSize: "15px" }}
              className="red"
            >
              {this.state.connections_string}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const renderConnections = connections => {
  return _.map(connections, connection => {
    return (
      <div key={connection.id}>
        <div id="user-pic">
          <img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
          <a href={"http://localhost:3000/profile/" + connection.id}>
            {connection.firstName} {connection.lastName}
          </a>
        </div>
      </div>
    );
  });
};

export default ProfileConnections;
