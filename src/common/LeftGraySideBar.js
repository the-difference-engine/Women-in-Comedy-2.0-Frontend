import React from 'react';
import './css/left-side-bar.css';
export const LeftGraySideBar = (props) => {
  return (
    <div id="left-side-bar">
      <div id="left-side-bar-content">
        {props.children}
      </div>
    </div>
  )
};

// export { LeftGraySideBar };
