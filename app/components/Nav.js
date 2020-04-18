import React from 'react';
import SubredditIcon from './SubredditIcon';

function Nav({ onMenuChange, open, onSubredditSelect, selected_subreddit, subreddits }) {
  let width = '78px';
  if (open) {
    width = '200px';
  }

  let left = '85px';
  if (open) {
    left = '220px';
  }

  const arrowStyle = {
    left: left,
    position: 'absolute',
    transition: '0.3s'
  };

  const sidebarStyle = {
    width: width
  };

  const subredditsList = subreddits.map(subreddit => (
    <SubredditIcon name={subreddit.name}
                   open={open}
                   onSelected={ () => onSubredditSelect(subreddit)}
                   selected={subreddit.name === selected_subreddit}/>
  ));

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
      {subredditsList}
      <div className="nav-item--bottom">
        <img
          alt="settings"
          src="../resources/cog.svg"
          height="30"
          className="nav-clickable"
        />
        <img
          alt="open and close menu"
          src="../resources/arrow-circle-left.svg"
          height="30"
          className="nav-clickable"
          style={arrowStyle}
          onClick={() => onMenuChange(open)}
        />
      </div>
    </nav>
  );
}

export default Nav;
