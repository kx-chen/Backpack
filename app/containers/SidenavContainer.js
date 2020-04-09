import { bindActionCreators } from "redux";
import * as PostActions from "../actions/posts";
import {connect} from "react-redux";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';

function SidenavContainer() {
  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle/>
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
          </NavIcon>
          <NavText>
            Home
          </NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <i className="fa fa-fw fa-line-chart" style={{fontSize: '1.75em'}}/>
          </NavIcon>
          <NavText>
            Charts
          </NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>
              Line Chart
            </NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>
              Bar Chart
            </NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SidenavContainer);
