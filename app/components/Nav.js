import React from 'react';
import PropTypes from 'prop-types';
import SubredditIcon from './SubredditIcon';

Nav.propTypes = {
  onMenuChange: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onSubredditSelect: PropTypes.func.isRequired,
  selectedSubreddit: PropTypes.string.isRequired,
  subreddits: PropTypes.arrayOf(PropTypes.object).isRequired,
  downloadSubreddit: PropTypes.func.isRequired
};

function Nav({
  onMenuChange,
  open,
  onSubredditSelect,
  selectedSubreddit,
  subreddits,
  downloadSubreddit
}) {
  let width = '78px';
  if (open) {
    width = '200px';
  }

  let left = '85px';
  let transform = 'rotate(180deg)';
  if (open) {
    left = '210px';
    transform = 'rotate(0deg)';
  }

  const arrowStyle = {
    left,
    transform
  };

  const sidebarStyle = {
    minWidth: width
  };

  const subredditsList = subreddits.map(subreddit => (
    <SubredditIcon
      name={subreddit.name}
      open={open}
      onSelected={name => onSubredditSelect(name)}
      downloadSubreddit={name => downloadSubreddit(name)}
      selected={subreddit.name === selectedSubreddit}
    />
  ));

  let settingsButton;

  if (open) {
    settingsButton = <span>Settings</span>;
  } else {
    settingsButton = (
      <img
        alt="settings"
        src="../resources/cog.svg"
        height="30"
        className="nav-clickable"
      />
    );
  }

  return (
    <nav className="sidebar" style={sidebarStyle}>
      <div className="nav-item search">
        <img
          alt="search"
          src="../resources/search.svg"
          height="27"
          className="nav-clickable"
        />
      </div>
      <div>{subredditsList}</div>
      <div className="nav-item--bottom">
        {settingsButton}
        <div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */}
          <img
            alt="open and close menu"
            src="../resources/arrow-circle-left.svg"
            height="30"
            className="nav-clickable sidenav-arrow"
            style={arrowStyle}
            onClick={() => onMenuChange(open)}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
