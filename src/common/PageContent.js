import React from 'react';
import './css/page-content.css';


const PageContent = ({children, ...props}) => {
  return (
    <div id="page-content" {...props}>
      <div id="page-content-margin">
        {children}
      </div>
    </div>
  );
};

export { PageContent };
