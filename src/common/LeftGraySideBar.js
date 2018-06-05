import React from 'react';
import './css/left-side-bar.css';

export  const LeftGraySideBar = ({children, ...props}) => {

  return (
    <div id="left-side-bar" {...props} >
      <div id="left-side-bar-content">
        {children}
      </div>
    </div>
  )
};
