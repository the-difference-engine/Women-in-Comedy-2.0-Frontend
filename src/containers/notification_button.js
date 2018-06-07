import React from "react";

export default props => {
  if (props.notifications === null || props.notifications === undefined) {
    return (
      <div>
        <a href={"/notifications"} className="icon">
          <i className="fa fa-bell-o">
            <p>ALERTS </p>
          </i>
        </a>
      </div>
    );
  }

  function findConnectionActions(props) {
    if (props.notifications !== null) {
      console.log("what im working with", props);
      const connectionAccepted = props.notifications.notifications
        .filter(
          notification =>
            notification.action === "connection_accepted" ||
            notification.action === "connection_request"
        )
        .filter(notification => notification.seen === null);

      if (connectionAccepted.length === 0) {
        return null;
      } else {
        return connectionAccepted.length;
      }
    }
  }

  return (
    <div>
      <a href={"/notifications"} className="icon">
        <i className="fa fa-bell-o" id="alert-button">
          <span className="badge">{findConnectionActions(props)}</span>
          <p>ALERTS </p>
        </i>
      </a>
    </div>
  );
};
