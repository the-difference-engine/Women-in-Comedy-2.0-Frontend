import React from 'react';
import './css/left-side-bar.css';

export  const LeftGraySideBar = ({children, ...props}) => {

  return (
    <div className="left-side-bar" {...props} >
      <div className="left-side-bar-content">
        {children}
      </div>
    </div>
  )
};
