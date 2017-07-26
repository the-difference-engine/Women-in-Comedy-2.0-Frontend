import React from 'react';
import { Feed } from '../../common';
import '../css/new-feeds.css';

const NewFeeds = (props) => {
  return (
    <div id="new-feeds-container">
      <Feed />
      <Feed />
      <Feed />

        <Feed />
          <Feed />
    </div>
  );
};

export default NewFeeds;
