import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router";

export default () => (
  <div>
    <SideNav
      onSelect={(selected) => {

      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            <Link to="/home">Home</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="devices">
          <NavIcon>
            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            <Link to="/">Index</Link>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
    <Switch>
      <Route path="/" exact component={props => <h1> /HomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHome </h1>} />
      <Route path="/home" component={props => <h1> routerrouterrouterrouterrouterrouterrouterrouterrouterrouterrouter </h1>} />
      <Route path="/devices" component={props => <h1> SwitchSwitchSwitchSwitchSwitchSwitchSwitchSwitchSwitchSwitchSwitchSwitchSwitch </h1>} />
    </Switch>
  </div>
);
