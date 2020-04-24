import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import NavContainer from './NavContainer';
import { fetchSubreddits } from '../actions/subreddits';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadSubreddits: () => dispatch(fetchSubreddits())
  };
}

function mapStateToProps(state, ownProps) {
  return {};
}

function App({ loadSubreddits }) {
  useEffect(() => {
    loadSubreddits();
  }, []);

  return (
    <div className="app-container">
      <NavContainer />
      <Switch>
        <Route path="/" exact component={() => <h1> First</h1>} />
        <Route path="/home" component={() => <h1> Second</h1>} />
        <Route path="/devices" component={() => <h1> Third </h1>} />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
