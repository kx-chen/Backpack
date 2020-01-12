// @flow
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SubredditsContainer from '../SubredditsContainer/SubredditsContainer';
import PostContainer from '../PostContainer/PostContainer';
import Post from '../../components/Post/Post';
import styles from './App.css';

type Props = {};

export default class App extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <Container fluid>
          <Row className={styles.row}>
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
