import { connect } from 'react-redux';
import PostsList from '../components/PostsList';
import { postSelected } from '../actions/posts';

function mapStateToProps(state) {
  return {
    selectedSubreddit: state.subreddits.selected_subreddit,
    downloadedPosts: state.subreddits.downloaded_posts,
    loading: state.subreddits.loading_subreddits
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPostSelected: id => dispatch(postSelected(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
