import React from 'react';
import './css/page-content.css';
import { FeedPostBar } from './index'

const PageContent = (props) => {
  return (
    <div id="page-content">
      <div id="page-content-margin">
        <FeedPostBar pageTitle={props.pageTitle} />
        {props.children}
      </div>
    </div>
  );
};

export { PageContent };
