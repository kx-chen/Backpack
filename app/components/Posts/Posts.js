import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
// import * as PostActions from '../../actions/posts';
import styles from '../../containers/App/App.css';

type Props = {
  posts: {},
  loading: boolean
};

class Posts extends Component<Props> {
  props: Props;

  generatePostList() {
    const { posts } = this.props;

    // eslint-disable-next-line react/prop-types
    const listItems = posts.data.children.map(post => (
      <ListGroup.Item
        // onClick={() => dispatch(PostActions.fetchPostById(id))}
        action
      >
        {post.data.title} <br />
        {post.data.score}
      </ListGroup.Item>
    ));
    return listItems;
  }

  render() {
    const { loading, posts } = this.props;
    console.log('posts loaded', posts);
    console.log('loading', loading);

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
