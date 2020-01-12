// @flow
import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import styles from '../App/App.css';
import ListGroup from "react-bootstrap/ListGroup";
import * as PostActions from "../../actions/posts";

type Props = {};

class SubredditsContainer extends Component<Props> {
  props: Props;

  render() {
    const listItems = posts.posts.map((post, id) => (
      <ListGroup.Item
        onClick={() => dispatch(PostActions.fetchPostById(id))}
        action
      >
        <p>{post.title}</p>
        <p>{post.karma}</p>
      </ListGroup.Item>
    ));

    return (
      <Col className={styles.col}>
        Subreddits lol

      </Col>
    );
  }
}


function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(SubredditsContainer);
