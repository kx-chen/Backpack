import { connect } from 'react-redux';
import PostsList from '../components/PostsList';

function mapStateToProps(state) {
  return {
    selectedSubreddit: state.subreddits.selected_subreddit,
    downloadedPosts: state.subreddits.downloaded_posts,
    loading: state.subreddits.loading_subreddits
  };
}

export default connect(mapStateToProps)(PostsList);
