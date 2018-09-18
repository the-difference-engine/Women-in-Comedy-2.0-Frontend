import React from 'react';
import './css/right-side-bar.css';
const RightGraySideBar = (props) => {
  return (
    <div className="right-side">
      <div className="right-side-bar-content">
        {props.children}
      </div>
    </div>
  )
}
export { RightGraySideBar };
