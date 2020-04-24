import React from 'react';
import { Link } from 'react-router-dom';

function SubredditIcon({
  name,
  open,
  onSelected,
  selected,
  downloadSubreddit
}) {
  let subredditName = <span className="subreddit-name">{name}</span>;

  let downloadStatusDisplay = (
    <img
      onClick={() => downloadSubreddit(name)}
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

  let style = {
    'background-color': 'white'
  };

  if (selected) {
    style = {
      'background-color': 'gray'
    };
  }
  return (
    <div className="nav-item" style={style}>
      <Link to={`/r/${name}`} onClick={() => onSelected(name)}>
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
