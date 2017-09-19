import React from 'react';
import './css/page-content.css';


const PageContent = (props) => {
  return (
    <div id="page-content">
      <div id="page-content-margin">
        {props.children}
      </div>
    </div>
  );
};

export { PageContent };
