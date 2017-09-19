import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/profileconnections.css';

 const ProfileConnections = (props) => {
   console.log(props.connections);
   console.log(window.location);
   if(props.connections) {
     return(
       <div>
         <span id="connection-title">Connections ({props.connections.length})</span>
         {renderConnections(props.connections)}
       </div>
     );
   }
   return <div></div>
 };

 const renderConnections = (connections) => {
   return connections.map(connection => {
     return (
      <div key={connection.id} id="connection-item">
        <span>
          <img id="connection-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
          <a href={`/profile/${connection.id}`}>{connection.firstName} {connection.lastName}</a>
        </span>
      </div>
     );
   });
 };

export default ProfileConnections;
