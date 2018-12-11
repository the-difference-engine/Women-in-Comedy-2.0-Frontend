import React from 'react';
import './css/right-side-bar.css';
const RightGraySideBar = ({children, ...props}) => {
  return (

    <div className="container">
      <div className="row ">
        <div className="col">
          
          <div id="right-side" {...props}>
            <div id="right-side-bar-content">
              {children}
            </div>
          </div>
        </div>

      </div>
    </div>




  )
}
export { RightGraySideBar };
