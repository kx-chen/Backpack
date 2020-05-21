import React from 'react';
import PropTypes from 'prop-types';

import SubredditIcon from './SubredditIcon';
import cog from '../../resources/cog.svg';
import arrow from '../../resources/arrow-circle-left.svg';
import SubredditSearch from './SubredditSearch';
import styled from 'styled-components';

const SubredditsListContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

Nav.propTypes = {
  onMenuChange: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onSubredditSelect: PropTypes.func.isRequired,
  selectedSubreddit: PropTypes.string.isRequired,
  subreddits: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDownloadSubreddit: PropTypes.func.isRequired,
  onSaveNewSubreddit: PropTypes.func.isRequired
};

function Nav({
  onMenuChange,
  open,
  onSubredditSelect,
  selectedSubreddit,
  subreddits,
  onDownloadSubreddit,
  onSaveNewSubreddit
}) {
  let width = '78px';
  let left = '85px';
  let transform = 'rotate(180deg)';

  if (open) {
    left = '280px';
    transform = 'rotate(0deg)';
    width = '270px';
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
      key={subreddit}
      name={subreddit}
      open={open}
      onSelected={name => onSubredditSelect(name)}
      downloadSubreddit={name => onDownloadSubreddit(name)}
      selected={subreddit === selectedSubreddit}
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
        <SubredditSearch
          expanded={open}
          onSaveNewSubreddit={onSaveNewSubreddit}
        />
      </div>
      <SubredditsListContainer>{subredditsList}</SubredditsListContainer>
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
            id="open-close-menu"
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
