import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import NavContainer from './NavContainer';
import { fetchSubreddits } from '../actions/subreddits';
import SubredditContainer from './SubredditContainer';

function mapDispatchToProps(dispatch) {
  return {
    loadSubreddits: () => dispatch(fetchSubreddits())
  };
}

// eslint-disable-next-line react/prop-types
function App({ loadSubreddits }) {
  useEffect(() => {
    loadSubreddits();
  }, []);

  return (
    <div className="app-container">
      <NavContainer />
      <Switch>
        <Route path="/" exact>
          <h1>Select a subreddit from the side.</h1>
        </Route>
        <Route path="/r/:subreddit">
          <SubredditContainer />
        </Route>
        <Route path="/r/:subreddit/:post">
          <h1>r/subreddit/post</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(App);
