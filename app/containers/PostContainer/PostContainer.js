// @flow
import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import styles from '../App/App.css';
import * as PostActions from '../../actions/posts';

type Props = {
  posts: [],
  dispatch: () => void
};

class PostContainer extends Component<Props> {
  props: Props;

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.dispatch(PostActions.fetchSubredditPosts());
  }

  render() {
    const { posts, dispatch } = this.props;
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
        <ListGroup>{listItems}</ListGroup>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postData
  };
}

export default connect(mapStateToProps)(PostContainer);
