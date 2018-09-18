import React from 'react';
import './css/page-content.css';


const PageContent = ({children, ...props}) => {
  return (
    <div className="page-content" {...props}>
      <div className="page-content-main">
        {children}
      </div>
    </div>
  );
};

export { PageContent };
