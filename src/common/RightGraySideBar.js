import React from 'react';
import './css/right-side-bar.css';
const RightGraySideBar = ({children, ...props}) => {
  return (
    <div id="right-side" {...props}>
      <div id="right-side-bar-content">
          {children}
      </div>
    </div>
      
  )
}
export { RightGraySideBar };
