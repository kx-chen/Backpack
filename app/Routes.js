import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App/App';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Link} from "react-router-dom";
import PostPage from "./containers/PostPage";

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
    <main>
      <Route path="/" exact component={props => <PostPage props={props}/>} />
      <Route path="/home" component={props => <h1> Home </h1>} />
      <Route path="/devices" component={props => <h1> Devices </h1>} />
    </main>
  </div>
);
