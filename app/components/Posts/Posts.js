import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import * as PostActions from '../../actions/posts';
import styles from '../../containers/App/App.css';

type Props = {
  posts: [],
  dispatch: () => void,
  loading: boolean
};

class Posts extends Component<Props> {
  props: Props;

  generatePostList() {
    const { posts, dispatch } = this.props;

    const listItems = posts.posts.map((post, id) => (
      <ListGroup.Item
        onClick={() => dispatch(PostActions.fetchPostById(id))}
        action
      >
        {post.title} <br />
        {post.karma}
      </ListGroup.Item>
    ));
    return listItems;
  }

  render() {
    const { loading } = this.props;

    if (loading) {
      return (
        <Col className={styles.col}>
          <p>Loading...</p>
        </Col>
      );
    }
    const postElements = this.generatePostList();

    return (
      <Col className={styles.col}>
        <ListGroup>{postElements}</ListGroup>
      </Col>
    );
  }
}

export default Posts;
