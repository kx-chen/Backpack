import React from 'react';
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import NavContainer from "./NavContainer";

export default () => (
  <div className="app-container">
  <NavContainer/>
    <Switch>
      <Route path="/" exact component={props => <h1> First</h1>} />
      <Route path="/home" component={props => <h1> Second</h1>} />
      <Route path="/devices" component={props => <h1> Third </h1>} />
    </Switch>
  </div>
);
