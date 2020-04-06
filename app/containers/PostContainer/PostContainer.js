// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from '../../components/Posts/Posts';
import * as PostActions from '../../actions/posts';

type Props = {
  posts: [],
  dispatch: () => void,
  loading: boolean,
  name: string
};

function mapStateToProps(state) {
  return {
    posts: state.postData.posts,
    loading: state.postData.loading,
    name: state.postData.name
  };
}

class PostContainer extends Component<Props> {
  props: Props;

  componentDidMount() {
    const { dispatch, name } = this.props;
    console.log('dispatching fetch', name);
    dispatch(PostActions.fetchSubredditPosts(name));
  }

  render() {
    const { posts, dispatch, loading } = this.props;

    // TODO: check if this is the correct of passing
    return <Posts posts={posts} dispatch={dispatch} loading={loading} />;
  }
}

export default connect(mapStateToProps)(PostContainer);
