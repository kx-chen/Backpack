import { connect } from 'react-redux';
import SubredditHeader from '../components/SubredditHeader';
import { postSelected } from '../actions/posts';

function mapDispatchToProps(dispatch) {
  return {
    onPostSelected: id => dispatch(postSelected(id))
  };
}

function mapStateToProps(state) {
  return {
    selectedSubreddit: state.subreddits.selected_subreddit
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditHeader);
