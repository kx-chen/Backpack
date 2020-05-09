import React from 'react';
import PropTypes from 'prop-types';
import SubredditIcon from './SubredditIcon';
import cog from '../../resources/cog.svg';
import arrow from '../../resources/arrow-circle-left.svg';
import SubredditSearch from './SubredditSearch';

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
    width = '270px';
  }

  let left = '85px';
  let transform = 'rotate(180deg)';
  if (open) {
    left = '280px';
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
      key={subreddit.name}
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
      <img alt="settings" src={cog} height="30" className="nav-clickable" />
    );
  }

  return (
    <nav className="sidebar" style={sidebarStyle}>
      <div className="search">
        <SubredditSearch expanded={open} />
      </div>
      <div>{subredditsList}</div>
      <div className="nav-item--bottom">
        {settingsButton}
        <div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */}
          <img
            alt="open and close menu"
            src={arrow}
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
