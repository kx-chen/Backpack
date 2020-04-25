import React from 'react';
import SubredditIcon from './SubredditIcon';

function Nav({
  onMenuChange,
  open,
  onSubredditSelect,
  selected_subreddit,
  subreddits,
  downloadSubreddit
}) {
  let width = '78px';
  if (open) {
    width = '200px';
  }

  let left = '85px';
  if (open) {
    left = '210px';
  }

  const arrowStyle = {
    left,
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
      selected={subreddit.name === selected_subreddit}
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
      <div>
      {subredditsList}
      </div>
      <div className="nav-item--bottom">
        {settingsButton}
        <div>
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
