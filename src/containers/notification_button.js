import React from 'react';

export default (props) => {
    if (props.notifications === null) {
        return <div>
            <a href={'/notifications'} className="icon"><i className="fa fa-bell-o"><p>ALERTS </p></i></a>
        </div>
    }

    function findConnectionActions(props) {
        if (props.notifications !== null) {
            const connectionAccepted = props.notifications.notifications.filter(notification => notification.action === "connection_accepted")
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
            <a href={'/notifications'} className="icon"><i className="fa fa-bell-o" id="alert-button"><span
                className="badge">{findConnectionActions(props)}</span><p>ALERTS </p></i></a>
        </div>
    );
};

