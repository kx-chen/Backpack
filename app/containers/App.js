import React from 'react';
import { Route, Switch } from 'react-router';
import NavContainer from './NavContainer';

export default () => (
  <div className="app-container">
    <NavContainer />
    <Switch>
      <Route path="/" exact component={() => <h1> First</h1>} />
      <Route path="/home" component={() => <h1> Second</h1>} />
      <Route path="/devices" component={() => <h1> Third </h1>} />
    </Switch>
  </div>
);
