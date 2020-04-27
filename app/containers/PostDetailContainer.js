import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import { closePostOverlay, fetchPostById } from '../actions/posts';

function mapStateToProps(state) {
  return {
    selectedSubreddit: state.subreddits.selected_subreddit,
    downloadedPosts: state.subreddits.downloaded_posts,
    loading: state.subreddits.loading_subreddits,
    selectedPostId: state.posts.id,
    postOverlayOpen: state.posts.postOverlayOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClosePostOverlay: () => dispatch(closePostOverlay()),
    fetchPostById: (id, selectedSubreddit) =>
      dispatch(fetchPostById(id, selectedSubreddit))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
