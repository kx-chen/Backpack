// @flow
import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import styles from '../App/App.css';
import * as PostActions from '../../actions/posts';

type Props = {
  posts: [],
  dispatch: () => void,
  loading: boolean
};

class PostContainer extends Component<Props> {
  props: Props;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(PostActions.fetchSubredditPosts());
  }

  generatePostList() {
    const { posts, dispatch } = this.props;

    const listItems = posts.posts.map((post, id) => (
      <ListGroup.Item
        onClick={() => dispatch(PostActions.fetchPostById(id))}
        action
        key={`post-${id}`}
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

function mapStateToProps(state) {
  return {
    posts: state.postData,
    loading: state.postData.loading
  };
}

export default connect(mapStateToProps)(PostContainer);
