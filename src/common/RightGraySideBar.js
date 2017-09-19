import React from 'react';
import './css/right-side-bar.css';
const RightGraySideBar = (props) => {
  return (
    <div id="right-side">
      <div id="right-side-bar-content">
        {props.children}
      </div>
    </div>
  )
}
export { RightGraySideBar };
