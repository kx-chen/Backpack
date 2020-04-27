import { connect } from 'react-redux';
import SubredditHeader from '../components/SubredditHeader';

function mapStateToProps(state) {
  return {
    selectedSubreddit: state.subreddits.selected_subreddit
  };
}

export default connect(mapStateToProps)(SubredditHeader);
