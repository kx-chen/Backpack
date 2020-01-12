// @flow
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SubredditsContainer from '../SubredditsContainer/SubredditsContainer';
import PostContainer from '../PostContainer/PostContainer';
import Post from '../../components/Post/Post';

type Props = {};

export default class App extends Component<Props> {
  props: Props;

  render() {
    console.log(this.props);
    return (
      <div>
        <Container fluid>
          <Row>
            {/* TODO: DRY */}
            {/* TODO: Rename to *Column? */}
            <SubredditsContainer />
            <PostContainer />
            <Post />
          </Row>
        </Container>
      </div>
    );
  }
}
