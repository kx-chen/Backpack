import { Link } from 'react-router-dom';
import React from 'react';

function Nav({ onMenuChange, open}) {
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
    transition: '2s'
  };

  const sidebarStyle = {
    width: width
  };
  const subreddits = ["1", "2", "3", "4"];
  const subredditsList = subreddits.map((subreddit) =>
    <div className="nav-item">
      <Link to="/">
        <img
          alt="logo for subreddit"
          className="nav-logo"
          src="https://styles.redditmedia.com/t5_2sdpm/styles/communityIcon_u6zl61vcy9511.png"
        />
      </Link>
    </div>
  );
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
