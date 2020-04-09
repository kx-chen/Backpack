import { Link } from 'react-router-dom';
import React from 'react';

function Nav() {
  return (
    <nav className="sidebar">
      <div className="nav-item">
        <img
          alt="logo for subreddit"
          src="../resources/search.svg"
          height="27"
          className="nav-clickable"
        />
      </div>
      <div className="nav-item">
        <Link to="/">
          <img
            alt="logo for subreddit"
            className="nav-logo"
            src="https://styles.redditmedia.com/t5_2sdpm/styles/communityIcon_u6zl61vcy9511.png"
          />
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/home">
          <img
            alt="logo for subreddit"
            className="nav-logo"
            src="https://styles.redditmedia.com/t5_2sdpm/styles/communityIcon_u6zl61vcy9511.png"
          />
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/devices">
          <img
            alt="logo for subreddit"
            className="nav-logo"
            src="https://styles.redditmedia.com/t5_2sdpm/styles/communityIcon_u6zl61vcy9511.png"
          />
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/devices">
          <img
            alt="logo for subreddit"
            className="nav-logo"
            src="https://styles.redditmedia.com/t5_2sdpm/styles/communityIcon_u6zl61vcy9511.png"
          />
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/devices">
          <img
            className="nav-logo"
            src="https://styles.redditmedia.com/t5_2sdpm/styles/communityIcon_u6zl61vcy9511.png"
          />
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/devices">
          <img
            alt="logo for subreddit"
            className="nav-logo"
            src="https://styles.redditmedia.com/t5_2sdpm/styles/communityIcon_u6zl61vcy9511.png"
          />
        </Link>
      </div>
      <div className="nav-item--bottom">
        <img
          alt="logo for subreddit"
          src="../resources/cog.svg"
          height="30"
          className="nav-clickable"
        />
      </div>
    </nav>
  );
}

export default Nav;
