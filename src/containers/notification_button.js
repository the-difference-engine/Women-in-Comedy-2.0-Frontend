import React from "react";

export default (props) => {
  const findConnectionActions = (props) => {
    const connectionAccepted = props.notifications.notifications.filter(notification => notification.action === "connection_accepted"
      || notification.action === "connection_request").filter(notification => notification.seen === null);

    if (connectionAccepted.length === 0) {
      return false;
    } else {
      return connectionAccepted.length;
    }
  }
  if (props.notifications === undefined || props.notifications === null) {
    return (
      <div>
        <a href={'/notifications'} className="icon"><i className="fa fa-bell-o"><p>ALERTS </p></i></a>
      </div>
    )
  } else {
    return (
      <div>
        <a href={'/notifications'} className="icon">
          <i className="fa fa-bell-o" id="alert-button">
            <span className="badge">{findConnectionActions(props)}</span>
            <p>Alerts</p>
          </i>
        </a>
      </div>
    );
  }
};
