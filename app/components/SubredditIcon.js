import React from 'react';
import { Link } from 'react-router-dom';

function SubredditIcon({
  name,
  open,
  onSelected,
  selected,
  downloadSubreddit
}) {
  let subredditName = <span className="subreddit-name">{`r/${name}`}</span>;

  let downloadStatusDisplay = (
    <img
      onClick={() => downloadSubreddit(name)}
      alt="download status"
      src="../resources/check-circle.svg"
      height="20"
      className="nav-clickable download-status"
    />
  );
  if (!open) {
    subredditName = <span className="subreddit-name" style={{ visibility: 'hidden', opacity: '0' }}>{`r/${name}`}</span>;

    downloadStatusDisplay = (
      <img
        onClick={() => downloadSubreddit(name)}
        alt="download status"
        src="../resources/check-circle.svg"
        height="20"
        className="nav-clickable download-status"
        style={{ visibility: 'hidden', opacity: '0' }}
      />
    );
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
      <span className="nav-clickable flex" onClick={() => onSelected(name)}>
        <Link to={`/r/${name}`}>
          <img
            alt="logo for subreddit"
            className="nav-logo"
            src="https://styles.redditmedia.com/t5_2sdpm/styles/communityIcon_u6zl61vcy9511.png"
          />
        </Link>
        {subredditName}
      </span>
      {downloadStatusDisplay}
    </div>
  );
}

export default SubredditIcon;
