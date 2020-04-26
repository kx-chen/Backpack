import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

SubredditIcon.propTypes = {
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onSelected: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  downloadSubreddit: PropTypes.func.isRequired
};

function SubredditIcon({
  name,
  open,
  onSelected,
  selected,
  downloadSubreddit
}) {
  let subredditName = <span className="subreddit-name">{`r/${name}`}</span>;

  let downloadStatusDisplay = (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <img
      onClick={() => downloadSubreddit(name)}
      alt="download status"
      src="../resources/check-circle.svg"
      height="20"
      className="nav-clickable download-status"
    />
  );
  if (!open) {
    subredditName = (
      <span
        className="subreddit-name"
        style={{ visibility: 'hidden', opacity: '0' }}
      >{`r/${name}`}</span>
    );

    downloadStatusDisplay = (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
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
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */}
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
