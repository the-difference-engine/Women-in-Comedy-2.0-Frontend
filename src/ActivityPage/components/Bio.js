import React from 'react';
import '../css/bio.css';


const Bio = (props) => {
  const { usersInfo } = props;
  console.log('usersInfo belowbruno');
  console.log({usersInfo});
  const list = renderUsers(usersInfo);
  const connections = list.length;


  function getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len;
    }
    return result;
  }
  const randUser = getRandom(list, 1);




  return (
    <div id="activity-bio">
      <div className="activity-bio-content">
        <div id="bio-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /></div>
        <div className="bio-name"><p></p></div>
        <div className="bio-title"><p></p></div>
        <div className="bio-desc"><p>{randUser}</p></div>
      </div>
    </div>
  );
}

const renderUsers = (users) => {
  return users.map(user => {
    return (
      <div key={user.id}>
        <p>{user.firstName} {user.lastName} </p>
        <p>About: {user.about} </p>
        <p>City: {user.city} </p>
      </div>
    );
  });
}

export default Bio;



