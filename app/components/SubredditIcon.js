import { Link } from 'react-router-dom';
import React from 'react';

function SubredditIcon({ logo, name, open, downloadStatus }) {
  let subredditName = <span className="subreddit-name">{name}</span>;

  let downloadStatusDisplay = (
    <img
      alt="download status"
      src="../resources/check-circle.svg"
      height="30"
      className="nav-clickable download-status"
    />
  );
  if (!open) {
    subredditName = null;
    downloadStatusDisplay = null;
  }
  return (
    <div className="nav-item">
      <Link to="/">
        <img
          alt="logo for subreddit"
          className="nav-logo"
          src="https://styles.redditmedia.com/t5_2sdpm/styles/communityIcon_u6zl61vcy9511.png"
        />
        {subredditName}
      </Link>
      {downloadStatusDisplay}
    </div>
  );
}

export default SubredditIcon;
